import { useState } from "react";
import { useGetPagedBooksQuery } from "@/redux/features/BookApi";
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
import { Button } from "@/components/ui/button";

const PaginatedTable = () => {
    const [page, setPage] = useState(1);
  const limit = 5;

  const { data, isLoading, isError } = useGetPagedBooksQuery({ page, limit });

  if (isLoading) return <Loader />;
  if (isError) {
    toast.error("An error occurred while fetching");
    return null;
  }

  const { data: books, totalPages } = data || {};

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));
    return (
   <div className="px-2 md:px-10">
      <SectionTitle 
        heading="Bookshelf Overview"
        subHeading="This table contains the details of the books listed in our library. It helps to get an overview of collections"
      />

      <Table>
        <TableCaption>All the books listed in the library</TableCaption>
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
          {books?.map((book: Ibooks, idx: number) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell>
                {book.copies ? (
                  <BookOpenCheck className="text-green-300 mx-auto" />
                ) : (
                  <BookX className="text-red-300 mx-auto" />
                )}
              </TableCell>
              <TableCell className="text-right">
                <BookActions bookId={{ id: book._id, available: book.available }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="col-span-full flex justify-center items-center gap-4 py-5">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={handlePrev}
        >
          Previous
        </Button>
        <span className="font-semibold text-sm">Page {page} of {totalPages}</span>
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>

      <div className="text-center font-semibold text-sm py-5 col-span-full text-shadow-gray-500">
        [ Visit{" "}
        <Link className="bg-blue-200 text-white px-2 py-1 rounded-md" to={"/books"}>
          All Books
        </Link>{" "}
        page to get further details or click on action buttons of specific books ]
      </div>
    </div>
  );
};

export default PaginatedTable;