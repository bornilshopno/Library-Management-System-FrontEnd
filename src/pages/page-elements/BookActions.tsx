// import Loader from "@/components/shared/Loader";
import MakeToolTip from "@/components/shared/MakeToolTip";
import { cn } from "@/lib/utils";
import { useDeleteBookMutation } from "@/redux/features/BookApi";
import { Blend, SquarePen, Trash, View } from "lucide-react";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'


const BookActions = ({ bookId }: { bookId: { id: string, available: boolean } }) => {

    const navigate = useNavigate()
    const [deleteBook] = useDeleteBookMutation()
    // const { data: selectedBook, isLoading } = useGetBooksByIDQuery(bookId?.id)

    // if (isLoading) { return (<Loader />) }
    // console.log(selectedBook, "from BookAction")
    const deleteHandler = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteBook(id)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div className="flex gap-2 items-center justify-end">
            <MakeToolTip clues={{
                onHover: <p>DETAILS</p>,
                title: <View className="text-blue-500" onClick={() => navigate(`/books/${bookId.id}`)} />
            }}
            />
            <MakeToolTip clues={{
                onHover: <p>EDIT</p>,
                title: <SquarePen className="text-blue-500" onClick={() => navigate(`/edit-book/${bookId.id}`)} />
            }} />
            <MakeToolTip clues={{
                onHover: <p>DELETE</p>,
                title: <Trash className="text-red-500" onClick={() => deleteHandler(`${bookId.id}`)} />
                //  title: <Trash onClick={async () => await deleteBook(`${bookId.id}`)} />
            }} />
            {/* <MakeToolTip clues={{
                onHover: <p>BORROW</p>,
                title: <Blend className="text-green-500" onClick={() => navigate(`/borrow/${bookId.id}`)} />
            }} /> */}
            <MakeToolTip
                clues={{
                    onHover: <p>BORROW</p>,
                    title: (
                        <Blend
                            onClick={
                                bookId.available === false
                                    ? undefined
                                    : () => navigate(`/borrow/${bookId.id}`)
                            }
                            className={cn(
                                "text-green-500",
                                !bookId.available && "opacity-50 cursor-not-allowed text-gray-500"
                            )}
                        />
                    ),
                }}
            />

        </div>
    );
};

export default BookActions;