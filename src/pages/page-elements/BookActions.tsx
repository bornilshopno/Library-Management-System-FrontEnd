import MakeToolTip from "@/components/shared/MakeToolTip";
import { useDeleteBookMutation } from "@/redux/features/BookApi";
import { Blend, SquarePen, Trash, View } from "lucide-react";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'


const BookActions = ({ bookId }: { bookId: { id: string } }) => {

    const navigate = useNavigate()
    const [deleteBook] = useDeleteBookMutation()

    const deleteHandler =  (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then (async(result) => {
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
                onHover: <p>Click for EDIT</p>,
                title: <SquarePen className="text-blue-500" onClick={() => navigate(`/edit-book/${bookId.id}`)} />
            }} />
            <MakeToolTip clues={{
                onHover: <p>Click to DELETE</p>,
                title: <Trash className="text-red-500" onClick={()=>deleteHandler(`${bookId.id}`)} />
                //  title: <Trash onClick={async () => await deleteBook(`${bookId.id}`)} />
            }} />
            <MakeToolTip clues={{
                onHover: <p>Click to BORROW</p>,
                title: <Blend className="text-green-500" onClick={() => navigate(`/borrow/${bookId.id}`)} />
            }} />
        </div>
    );
};

export default BookActions;