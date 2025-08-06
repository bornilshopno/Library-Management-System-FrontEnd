import { useGetBooksByIDQuery } from "@/redux/features/BookApi";
import { useParams } from "react-router";
import BookCard from "./BookCard";
import Loader from "@/components/shared/Loader";

const BookDetails = () => {
    const {id}=useParams()
    const {data:book, isLoading}=useGetBooksByIDQuery(id)
 if(isLoading){
    return (<Loader />)
  }
    return (
        <div>
            <BookCard book={book.data[0]}/>
        </div>
    );
};

export default BookDetails;