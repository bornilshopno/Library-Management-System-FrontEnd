import useAxiosPublic from "@/hooks/useAxios";
import { useGetBooksQuery } from "@/redux/features/BookApi";
import { useEffect, useState } from "react";


const BooksTable = () => {

    const [books, setBooks] = useState([])
    const axiosFetch = useAxiosPublic()
    const {data: existedBooks, isLoading, isError}= useGetBooksQuery(undefined)
    console.log(existedBooks, "existedBooks")
    // const allBooks=existedBooks.data
    
//     useEffect(() => {
//         const data = async () => {
//             const res = await getBooks()
//             setBooks(res.data.data)
//         }
//         data()
//     }
// , [axiosFetch])

// console.log(books)

if(isLoading){return <div>Data is loading/../..</div>}

return (
    <div className="gird md:grid-cols-2 lg:grid-cols-3">
        {existedBooks.data?.map((book,idx)=> 
        <div key={idx}>
            Hello
        </div>)
        
        
        }

    </div>
);
};

export default BooksTable;