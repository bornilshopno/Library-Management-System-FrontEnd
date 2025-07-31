import useAxiosPublic from "@/hooks/useAxios";
import { useGetBooksQuery } from "@/redux/features/BookApi";
import { useEffect, useState } from "react";


const BooksTable = () => {

    const [books, setBooks] = useState([])
    const axiosFetch = useAxiosPublic()
    const {data: existedBooks, isLoading, isError}= useGetBooksQuery()
    console.log(existedBooks, "existedBooks")
    
    useEffect(() => {
        const data = async () => {
            const res = await getBooks()
            setBooks(res.data.data)
        }
        data()
    }
, [axiosFetch])

console.log(books)

return (
    <div className="gird md:grid-cols-2 lg:grid-cols-3">
        {existedBooks?.map((book,idx)=> 
        <div key={idx}>
            Hello
        </div>)
        
        
        }

    </div>
);
};

export default BooksTable;