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
import { useUpdateBookMutation } from "@/redux/features/BookApi";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const UpdateBook = ({ book }) => {

    const [updateBook] = useUpdateBookMutation()
const navigate=useNavigate()
    const form = useForm({
        defaultValues: book,
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const updatedBook = { ...book, ...data, updatedAt: (new Date).toISOString() }
        console.log(data, 'from on Submit',updatedBook)
        await updateBook({ id: book._id, updatedBook });
       navigate(`/books/${book._id}`)
    }
    return (
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
                                        <SelectValue placeholder="" />
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
                    <Button variant="secondary" type="submit" className="my-5 w-full">Confirm and Update</Button>
                  
                </form>
            </Form>
        </div>
    );
};

export default UpdateBook;