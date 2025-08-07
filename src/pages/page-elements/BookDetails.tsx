import { useGetBooksByIDQuery } from "@/redux/features/BookApi";
import { useParams } from "react-router";

import Loader from "@/components/shared/Loader";
import DetailCard from "./DetailCard";

const BookDetails = () => {
    const {id}=useParams()
    const {data:book, isLoading}=useGetBooksByIDQuery(id)
 if(isLoading){
    return (<Loader />)
  }
    return (
        <div>
            <DetailCard book={book.data[0]}/>
        </div>
    );
};

export default BookDetails;