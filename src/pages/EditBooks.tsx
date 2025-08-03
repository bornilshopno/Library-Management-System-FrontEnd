
import { useGetBooksByIDQuery } from "@/redux/features/BookApi";
import { useParams } from "react-router";
import UpdateBook from "./page-elements/UpdateBook";


const EditBooks = () => {
    const {id}=useParams();
    const {data:selectedBook, isLoading} = useGetBooksByIDQuery(id);
 
    if(isLoading){return (<div> BookData is Loading </div>)}
 

    return (
        <div>
            <h3>Update Book Details of : {selectedBook.data[0].title}</h3>
            <UpdateBook book={selectedBook.data[0]}/>
        </div>
    );
};

export default EditBooks;