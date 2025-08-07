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
import SectionTitle from "@/components/shared/SectionTitle";
import { Link } from "react-router";
import Loader from "@/components/shared/Loader";
import type { Ibooks } from "@/types";
import { toast } from "react-toastify";


const BooksTable = () => {

  const { data: existedBooks, isLoading, isError } = useGetBooksQuery(undefined)

  if (isLoading) {
    return (<Loader />)
  }

  if (isError) {
    toast.error("An error Occured while fetching")
  }

  return (
    <div className="gird md:grid-cols-2 lg:grid-cols-3 px-2 md:px-10">

      <SectionTitle 
      heading={"Bookshelf OverView"} 
      subHeading={"This table contains the details of the books listed in our library. It helps to get a overview of collections"} />

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
          {existedBooks?.map((book: Ibooks, idx: number) =>
            <TableRow key={idx}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell className="">{book.copies ? <BookOpenCheck className="text-green-300 mx-auto" /> : <BookX className="text-red-300 mx-auto" />}</TableCell>
              <TableCell className="text-right"><BookActions bookId={{ id: book._id, available: book.available }} /></TableCell>
            </TableRow>
          )
          }
        </TableBody>
      </Table>


      <div className="text-center font-semibold text-sm py-5">[ Visit <Link className="bg-blue-200 text-white px-2 py-1 rounded-md" to={'/books'}>All Books</Link> page to get further details of click on action buttons of specific books ]</div>
    </div>
  );
};

export default BooksTable;