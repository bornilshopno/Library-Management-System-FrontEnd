
import { useGetBooksQuery } from "@/redux/features/BookApi";
import BookCard from "./page-elements/BookCard";
import type { Ibooks } from "@/types";


const Books = () => {

    const { isLoading, data: books } = useGetBooksQuery(undefined)
    if (isLoading) { return (<div>Data is Loading</div>) }
    return (
        <div className="px-2 md:px-10 min-h-[calc(100vh-150px)">
            <div className="grid md-grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl">
                {books.map((book: Ibooks) => <BookCard key={book._id} book={book}></BookCard>)}
            </div>
        </div>
    );
};

export default Books;