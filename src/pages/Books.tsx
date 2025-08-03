
import { useGetBooksQuery } from "@/redux/features/BookApi";
import BookCard from "./page-elements/BookCard";
import type { Ibooks } from "@/types";


const Books = () => {

    const { isLoading, data: books } = useGetBooksQuery(undefined)
    if (isLoading) { return (<div>Data is Loading</div>) }
    return (
        <div className="px-5 ">
            <div className="grid md-grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl bg-green-600">
                {books.map((book: Ibooks) => <BookCard key={book._id} book={book}></BookCard>)}
            </div>
        </div>
    );
};

export default Books;