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
        <div>
            Borrow Summary Here

            <div>
                <Table>
                    <TableCaption>A list of Borrow Summary</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>ISBN</TableHead>
                            <TableHead className="text-right">Copiess Borrowed</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {summary.data.map((book, idx) =>
                            <TableRow key={idx}>
                                <TableCell>{book.book.title}</TableCell>
                                <TableCell>{book.book.isbn}</TableCell>
                                <TableCell className="text-right">{book.totalQuantity}</TableCell>
                            </TableRow>)}

                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default BorrowSummary;