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
const BookCard = ({ book }: { book: Ibooks }) => {

    const { author, available, copies, createdAt, description, genre, isbn, title, updatedAt, _id } = book
    const bookId = { id: _id }
    return (
        <div className="">
            <Card className="px-3 py-3">

                <CardHeader className="bg-blue-800 rounded-lg">

                    <CardTitle className="">{title}</CardTitle>
                    <CardDescription className="h-10"><p>{description}</p></CardDescription>

                </CardHeader>
                <CardContent className="bg-blue-400 ">
                    <p>Genre : {genre}</p>
                    <p>ISBN : {isbn}</p>
                    <p>Added On : {createdAt?.split("T")[0]}</p>
                    <p>Available Copies : {copies}</p>
                </CardContent>
                <CardFooter className="flex justify-between bg-blue-800 rounded-b-lg py-2">
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