import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,

} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { useBorrowRequestPostMutation } from "@/redux/features/BorrowApi";
import { useGetBooksByIDQuery } from "@/redux/features/BookApi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import Loader from "@/components/shared/Loader";
import SectionTitle from "@/components/shared/SectionTitle";

type BorrowFormData = {
  quantity: number;
  dueDate: string; // input[type="date"] gives a string like "2025-08-10"
};


const BorrowRequest = () => {
  const { bookId } = useParams()
  const navigate = useNavigate();
  const form = useForm<BorrowFormData>()
  const [borrowRequestPost] = useBorrowRequestPostMutation()
  const { data: selectedBook, isLoading } = useGetBooksByIDQuery(bookId)

  const onSubmit = async (data: BorrowFormData) => {
    const createdAt = (new Date()).toISOString();
    const borrowRequest = { ...data, book: bookId, createdAt }

    if (selectedBook.data[0].copies < data.quantity) {
      return (toast.error("Less copies available than you requested"))
    }

    if (data?.dueDate && new Date(data.dueDate) <= new Date()) {
      return (toast.error("Please enter a valid return date"))

    }
    await borrowRequestPost(borrowRequest);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `borrow request of ${data.quantity} copies accepted`,
      showConfirmButton: false,
      timer: 1500
    });
    navigate("/borrow-summary")
  }

  if (isLoading) {
    return (<Loader />)
  }
  return (
    <div>
 <SectionTitle 
            heading={"Borrow Request Form"} 
            subHeading={"Easily request to borrow books from our library collection. Just select the book, choose your desired return date and submit your request. Check confirmation once request submitted."} />


      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-8">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Requested Quantity</FormLabel>
                <FormControl>
                  <Input placeholder="Number of copies" {...field} type="number" required />
                </FormControl>
                <FormDescription>
                  if your requested copies are in stock then Borrow request will be accepted
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Due Date</FormLabel>
                <FormControl>
                  <Input placeholder="return date" type="date" {...field} />
                </FormControl>
                <FormDescription>
                  pls mention a reasonable return date
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit" variant={"secondary"} className="w-full">Submit Request</Button>
        </form>
      </Form>
    </div>
  );
};

export default BorrowRequest;