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

const BorrowSummary = () => {
    const { data: summary, isLoading } = useBorrowSummaryQuery(undefined)
    if (isLoading) { return (<div>Sumamry is loading, please wait</div>) }

    return (
    <div className="px-2 md:px-10 min-h-[calc(100vh-150px)]">


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

                        {summary.data.map((book, idx) =>
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