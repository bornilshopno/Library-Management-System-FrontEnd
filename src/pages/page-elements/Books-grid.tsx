import useAxiosPublic from "@/hooks/useAxios";
import { useEffect, useState } from "react";


const BooksTable = () => {

    const [books, setBooks] = useState([])
    const axiosFetch = useAxiosPublic()
    useEffect(() => {
        const data = async () => {
            const res = await axiosFetch.get("/books")
            setBooks(res.data.data)
        }
        data()
    }
, [axiosFetch])

console.log(books)

return (
    <div className="gird md:grid-cols-2 lg:grid-cols-3">
        {books?.map((book,idx)=> 
        <div key={idx}>
            Hello
        </div>)
        
        
        }

    </div>
);
};

export default BooksTable;