import { useParams } from "react-router";
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

const BorrowRequest = () => {
    const {id}=useParams()
    const form=useForm()

    const onSubmit=()=>{

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