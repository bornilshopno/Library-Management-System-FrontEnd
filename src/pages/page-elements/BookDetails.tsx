import { useGetBooksByIDQuery } from "@/redux/features/BookApi";
import { useParams } from "react-router";
import BookCard from "./BookCard";

const BookDetails = () => {
    const {id}=useParams()
    const {data:book, isLoading}=useGetBooksByIDQuery(id)
    if(isLoading) {return (<div>Book Data is Loading </div>)}
    return (
        <div>
            <BookCard book={book.data[0]}/>
        </div>
    );
};

export default BookDetails;