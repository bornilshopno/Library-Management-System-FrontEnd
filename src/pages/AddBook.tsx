import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useCreateBookMutation } from "@/redux/features/BookApi";
import { useAppDispatch } from "@/hooks/reduxHooks";

const AddBook = () => {

    const [ createBook ]=useCreateBookMutation()

    const dispatch=useAppDispatch()

    const form = useForm({
  defaultValues: {
    title: "",
    copies: "",
    description: "",
    isbn: "TBC",
    author: "",
    genre: "NON_FICTION",
  },
})

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const newBook={...data, available: true , createdAt: (new Date).toISOString()}
        console.log(newBook)
        await createBook(newBook);
        form.reset()
        
        // available// :// false
        // createdAt// :// "2025-06-22T18:57:34.756Z"



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
                        <FormField
                            control={form.control}
                            name="copies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Copies</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="number" placeholder="Number of Book" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Book Description" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ISBN</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="number" placeholder="ISBN NUMBER" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Author Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Author Name" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Genre</FormLabel>
                                    <Select defaultValue={field.value} onValueChange={field.onChange} >
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>
                                        <SelectContent >
                                            <SelectItem value="FICTION">FICTION</SelectItem>
                                            <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                            <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                            <SelectItem value="HISTORY">HISTORY</SelectItem>
                                            <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                            <SelectItem value="FANTASY">FANTASY</SelectItem>
                                        </SelectContent>
                                    </Select>
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
// bookSchema
// author// :// "Stephen Hawking"
// available// :// false
// copies// :// 0
// createdAt// :// "2025-06-22T18:57:34.756Z"
// description// :// "An overview of cosmology and black holes."
// genre// :// "SCIENCE"
// isbn// :// "9780553380163"
// title// :// "The Theory of Everything"
// updatedAt// :// "2025-06-23T22:25:50.147Z"
// _id// :// "6858521e8ee8f7e4224cd2db"
//"FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY"