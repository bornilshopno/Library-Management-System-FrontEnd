import { useGetBooksQuery } from "@/redux/features/BookApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { BookOpenCheck, BookX } from "lucide-react";
import BookActions from "./BookActions";

const BooksTable = () => {

    const {data: existedBooks, isLoading, isError}= useGetBooksQuery(undefined)

// bookSchema
// author// :// "Stephen Hawking"
// available// :// false
// copies// :// 0
// createdAt// :// "2025-06-22T18:57:34.756Z"
// description// :// "An overview of cosmology and black holes."
// genre// :// "SCIENCE"
// isbn// :// "9780553380163"
// title// :// "The Theory of Everything"
// updatedAt// :// "2025-06-23T22:25:50.147Z"
// _id// :// "6858521e8ee8f7e4224cd2db"
if(isLoading){return <div>Data is loading/../..</div>}
// Columns: Title, Author, Genre, ISBN, Copies, Availability, and Actions.
return (
    <div className="gird md:grid-cols-2 lg:grid-cols-3">

<Table>
  <TableCaption>All the books listed in library</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Title</TableHead>
      <TableHead>Author</TableHead>
      <TableHead>Genre</TableHead>
      <TableHead>ISBN</TableHead>
      <TableHead>Copies</TableHead>
      <TableHead className="text-center">Availability</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
     {existedBooks?.map((book,idx)=> 
  
 <TableRow key={idx}>
      <TableCell className="font-medium">{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.genre}</TableCell>
      <TableCell>{book.isbn}</TableCell>
      <TableCell>{book.copies}</TableCell>
      <TableCell className="">{book.copies ? <BookOpenCheck className="text-green-500 mx-auto" /> : <BookX className="text-red-500 mx-auto" />}</TableCell>
      <TableCell className="text-right"><BookActions bookId={book._id} /></TableCell>
    </TableRow>
)       
        }
   
  </TableBody>
</Table>

       

    </div>
);
};

export default BooksTable;