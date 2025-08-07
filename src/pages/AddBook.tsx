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
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import SectionTitle from "@/components/shared/SectionTitle";

const AddBook = () => {

    const [createBook] = useCreateBookMutation()
//default values for form added
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
        const newBook = { ...data, available: true, createdAt: (new Date).toISOString() }
        await createBook(newBook);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Added book "${data.title}" successfully`,
            showConfirmButton: false,
            timer: 2000
        });
        form.reset()
    }

    return (
        <div className="px-2 md:px-10 min-h-[calc(100vh-150px)">
            <SectionTitle 
            heading={"New Book Listing"} 
            subHeading={"Easily add a new book to the library by filling out the book details like title, author, genre, ISBN number and copies being added. This helps keep the library collection up-to-date and organized for all users to explore and borrow."} />

            <div>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                                <FormItem >
                                    <FormLabel>Genre</FormLabel>
                                    <Select defaultValue={field.value} onValueChange={field.onChange}  >
                                        <FormControl>
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Select the GENRE of the book" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="w-full">
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
                        <Button variant="secondary" type="submit" className="my-5 w-full">Confirm and Add</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default AddBook;