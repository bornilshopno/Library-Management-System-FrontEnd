import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetBooksQuery } from "@/redux/features/BookApi";
import BookCard from "./page-elements/BookCard";


const Books = () => {

    const { isLoading, data: books } = useGetBooksQuery(undefined)
    console.log(books, "from Books Route")

    if (isLoading) { return (<div>Data is Loading</div>) }
    return (
        <div className="px-5 ">
            <div className="grid md-grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl bg-green-600">
                {books.map((book) => <BookCard key={book._id} book={book}></BookCard>)}
            </div>
        </div>
    );
};

export default Books;