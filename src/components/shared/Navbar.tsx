import { GrTasks } from "react-icons/gr";
import { Link } from "react-router";
import { ModeToggle } from "./Mood-Toggler";



const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3 px-5 ">
            <div className="flex items-center">
                <GrTasks /> <span className="font-bold ml-2">Reader's</span>Heaven
            </div>

            <div className="flex gap-10">
                <Link to={'/'}>Home</Link>
                <Link to={'/books'}>All Books</Link>
                <Link to={'/create-book'}>Add Book</Link>
                <Link to={'/borrow-summary'}>Borrow Summary</Link>
            </div>

            <div>
                <ModeToggle />
            </div>

        </nav>
    );
};

export default Navbar;

//  - **Navbar**: Simple navigation bar with links to:
//     - All Books
//     - Add Book
//     - Borrow Summary