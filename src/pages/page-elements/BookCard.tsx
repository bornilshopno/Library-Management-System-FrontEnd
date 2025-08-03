import MakeToolTip from "@/components/shared/MakeToolTip";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Blend, SquarePen, Trash, View } from "lucide-react";
import { useNavigate } from "react-router";
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
const BookCard = ({ book }) => {
console.log(book)
    const { author, available, copies, createdAt, description, genre, isbn, title, updatedAt, _id } = book
    const navigate = useNavigate()
    return (
        <div className="bg-red-400">
            <Card className="bg-blue-400">

                <CardHeader>

                    <CardTitle className="">{title}</CardTitle>
                    <CardDescription className="h-10"><p>{description}</p></CardDescription>

                </CardHeader>
                <CardContent>
                    <p>Genre : {genre}</p>
                    <p>ISBN : {isbn}</p>
                    <p>Added On : {createdAt?.split("T")[0]}</p>
                    <p>Available Copies : {copies}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <p>{author}</p>
                    <CardAction className="flex gap-2">
                        <MakeToolTip clues={{
                            onHover: <p>Click for DETAILS</p>,
                            title: <View onClick={() => navigate(`/books/${_id}`)} />
                        }}
                        />
                        <MakeToolTip clues={{
                            onHover: <p>Click for EDIT</p>,
                            title: <SquarePen />
                        }} />
                        <MakeToolTip clues={{
                            onHover: <p>Click to DELETE</p>,
                            title: <Trash />
                        }} />
                        <MakeToolTip clues={{
                            onHover: <p>Click to BORROW</p>,
                            title: <Blend />
                        }} />



                    </CardAction>
                </CardFooter>
            </Card>
        </div>
    );
};

export default BookCard;