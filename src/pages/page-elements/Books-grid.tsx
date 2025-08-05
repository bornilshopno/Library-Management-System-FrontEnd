import useAxiosPublic from "@/hooks/useAxios";
import { useGetBooksQuery } from "@/redux/features/BookApi";
import { useEffect, useState } from "react";


const BooksTable = () => {

    const [books, setBooks] = useState([])
    const axiosFetch = useAxiosPublic()
    const {data: existedBooks, isLoading, isError}= useGetBooksQuery(undefined)



if(isLoading){return <div>Data is loading/../..</div>}

return (
    <div className="gird md:grid-cols-2 lg:grid-cols-3">
        {existedBooks?.map((book,idx)=> 
        <div key={idx}>
            Hello Noted this might not be used 
        </div>)
        
        
        }

    </div>
);
};

export default BooksTable;