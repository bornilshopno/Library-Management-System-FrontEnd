import MakeToolTip from "@/components/shared/MakeToolTip";
import { useDeleteBookMutation } from "@/redux/features/BookApi";
import { Blend, SquarePen, Trash, View } from "lucide-react";
import { useNavigate } from "react-router";


const BookActions = ({bookId}:{bookId:{id:string}}) => {

        const navigate = useNavigate()
        const [deleteBook]= useDeleteBookMutation()
    return (
        <div className="flex gap-2 items-center justify-end">
                          <MakeToolTip clues={{
                            onHover: <p>Click for DETAILS</p>,
                            title: <View onClick={() => navigate(`/books/${bookId.id}`)} />
                        }}
                        />
                        <MakeToolTip clues={{
                            onHover: <p>Click for EDIT</p>,
                            title: <SquarePen onClick={()=>navigate(`/edit-book/${bookId.id}`)} />
                        }} />
                        <MakeToolTip clues={{
                            onHover: <p>Click to DELETE</p>,
                            title: <Trash onClick={async()=>await deleteBook(`${bookId.id}`)}/>
                        }} />
                        <MakeToolTip clues={{
                            onHover: <p>Click to BORROW</p>,
                            title: <Blend onClick={()=>navigate(`/borrow/${bookId.id}`)}/>
                        }} />
                      </div>
    );
};

export default BookActions;