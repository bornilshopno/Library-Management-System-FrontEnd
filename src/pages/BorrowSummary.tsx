import { useBorrowSummaryQuery } from "@/redux/features/BorrowApi";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import SectionTitle from "@/components/shared/SectionTitle";
import Loader from "@/components/shared/Loader";

//type delcaration for the borrowed book data
type Rbooks={
    book: {title:string, author:string, genre:string, isbn:string},
    totalQuantity:number,
}

const BorrowSummary = () => {
    const { data: summary, isLoading } = useBorrowSummaryQuery(undefined)
  

  if(isLoading){
    return (<Loader />)
  }

    return (
        <div className="px-2 md:px-10 min-h-[calc(100vh-150px)]">

            <SectionTitle heading={"Borrow Summary"} subHeading={"The Borrow Summary shows a quick overview of all borrowed books, including titles, borrower names, borrow and due dates, and return status. It helps users and librarians track borrowing activity and manage returns easily."} />
            <div>
                <Table className="text-center">
                    <TableCaption>A list of Borrow Summary</TableCaption>
                    <TableHeader >
                        <TableRow >
                            <TableHead className="text-center">Title</TableHead>
                            <TableHead className="text-center">Author</TableHead>
                            <TableHead className="text-center">Genre</TableHead>
                            <TableHead className="text-center">ISBN</TableHead>
                            <TableHead className="text-center">Copiess Borrowed</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {summary.data.map((book:Rbooks, idx:number) =>
                            <TableRow key={idx}>
                                <TableCell>{book.book.title}</TableCell>
                                <TableCell>{book.book.author}</TableCell>
                                <TableCell>{book.book.genre}</TableCell>
                                <TableCell>{book.book.isbn}</TableCell>
                                <TableCell className="">{book.totalQuantity}</TableCell>
                            </TableRow>)}

                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default BorrowSummary;