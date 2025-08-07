import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import type { Ibooks } from "@/types";
import BookActions from "./BookActions";


const BookCard = ({ book }: { book: Ibooks }) => {
//destructuring the received props
    const { author, available, copies, createdAt, description, genre, isbn, title,  _id } = book
//to pass the book data for book action button
    const bookId = { id: _id, available: available }
    return (
        <div className="">
            <Card className="px-3 py-3 bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-600 dark:to-gray-800">
                <CardHeader className=" rounded-lg">
                    <CardTitle className="">{title}</CardTitle>
                    <CardDescription className="h-10"><p>{description}</p></CardDescription>
                </CardHeader>
                <CardContent className=" ">
                    <p>Genre : {genre}</p>
                    <p>ISBN : {isbn}</p>
                    <p>Added On : {createdAt?.split("T")[0]}</p>
                    <p>Available Copies : {copies}</p>
                </CardContent>
                <CardFooter className="flex justify-between  rounded-b-lg py-2">
                    <p>{author}</p>
                    <CardAction >
                        <BookActions bookId={bookId} />
                    </CardAction>
                </CardFooter>
            </Card>
        </div>
    );
};

export default BookCard;