import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { CircleChevronDown } from "lucide-react";
import { Link } from "react-router";

const MobileMenu = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <CircleChevronDown className="text-xl" />
                        <span className="sr-only">Toggle Routes</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem >
                        <Link to={'/'}>Home</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                        <Link to={'/books'}>All Books</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                        <Link to={'/create-book'}>Add Book</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                        <Link to={'/borrow-summary'}>Borrow Summary</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};


//                 <Link to={'/'}>Home</Link>
//                 <Link to={'/books'}>All Books</Link>
//                 <Link to={'/create-book'}>Add Book</Link>
//                 <Link to={'/borrow-summary'}>Borrow Summary</Link>
export default MobileMenu;