import { GrTasks } from "react-icons/gr";
import { Link } from "react-router";
import { ModeToggle } from "./Mood-Toggler";
import MobileMenu from "./MobileMenu";



const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3 px-5 fixed top-0 w-full z-40 backdrop-filter backdrop-blur-lg">
            <div className="flex items-center">
                <GrTasks /> <span className="font-bold mx-1">Reader's </span>Heaven
            </div>

            <div className=" gap-10 hidden lg:flex">
                <Link to={'/'}>Home</Link>
                <Link to={'/books'}>All Books</Link>
                <Link to={'/create-book'}>Add Book</Link>
                <Link to={'/borrow-summary'}>Borrow Summary</Link>
            </div>

            <div className="flex items-center gap-2">
                <ModeToggle />
                <div className="lg:hidden"><MobileMenu/></div>
            </div>

            

        </nav>
    );
};

export default Navbar;

//  - **Navbar**: Simple navigation bar with links to:
//     - All Books
//     - Add Book
//     - Borrow Summary