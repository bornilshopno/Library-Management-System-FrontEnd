import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm,  type FieldValues, type SubmitHandler } from "react-hook-form";

const AddBook = () => {

    const form = useForm()

    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        console.log(data)
    }

    return (
        <div>
            Add a Book

            <div>
                <Form {...form} >
               <form onSubmit={form.handleSubmit(onSubmit)}>
                     <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Book Title</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Name of Book" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <button type="submit">Submit</button>
               </form>
                </Form>
            </div>
        </div>
    );
};

export default AddBook;