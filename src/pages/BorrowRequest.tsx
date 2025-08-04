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



const BorrowRequest = () => {
  const {bookId}=useParams()
  console.log(bookId, 'id')
  const navigate = useNavigate();
  const form = useForm()
  const [borrowRequestPost] = useBorrowRequestPostMutation()
const {data:selectedBook, isLoading}=useGetBooksByIDQuery(bookId)
console.log(selectedBook, 'seletedbook')
  const onSubmit = async (data) => {

    // const book = id;
    const createdAt = (new Date()).toISOString();
    const borrowRequest = { ...data, book:bookId, createdAt }
    console.log(borrowRequest)
    if(selectedBook.data[0].copies<data.quantity){
     return alert('less copies available')
    }

    if(data.dueDate<= new Date()){
      return alert ("reenter correct due data")
    }
    const res=await borrowRequestPost(borrowRequest);
    console.log(res)
    navigate('/books')
  }
  return (
    <div>
      Borrow Req

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-8">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Requested Quantity</FormLabel>
                <FormControl>
                  <Input placeholder="Number of copies" {...field} />
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