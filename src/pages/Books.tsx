
import { useGetBooksQuery } from "@/redux/features/BookApi";
import BookCard from "./page-elements/BookCard";
import type { Ibooks } from "@/types";
import SectionTitle from "@/components/shared/SectionTitle";
import Loader from "@/components/shared/Loader";


const Books = () => {

    const { isLoading, data: books } = useGetBooksQuery(undefined)
    if (isLoading) { return (<div><Loader /></div>) }
    return (
        <div className="px-2 md:px-10 min-h-[calc(100vh-150px)">
            <SectionTitle heading={"Bookshelf of Reader's Heaven"} subHeading={"The All Books page displays the complete list of books available in the library. Users can view book titles, authors, categories, and availability status to easily browse or search for books they want to read or borrow."}/>
            <div className="grid md-grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl">
                {books.map((book: Ibooks) => <BookCard key={book._id} book={book}></BookCard>)}
            </div>
        </div>
    );
};

export default Books;