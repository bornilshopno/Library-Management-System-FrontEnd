import MakeToolTip from "@/components/shared/MakeToolTip";
import { Blend, SquarePen, Trash, View } from "lucide-react";
import { useNavigate } from "react-router";


const BookActions = () => {
        const navigate = useNavigate()
    return (
        <div className="flex gap-2">
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
                      </div>
    );
};

export default BookActions;