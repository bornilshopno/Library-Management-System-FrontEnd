import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/page-elements/BookDetails";
import AddBook from "./pages/AddBook";
import EditBooks from "./pages/EditBooks";
import BorrowSummary from "./pages/BorrowSummary";
import BorrowRequest from "./pages/BorrowRequest";

const router = createBrowserRouter([
    {
        path: "/", Component: Layout ,
        children:[
            {
                path:"/", Component: Home ,
            },
              {
                path:"/books", Component: Books ,
            },
              {
                path:"/create-book", Component: AddBook ,
            },
              {
                path:"/books/:id", Component: BookDetails ,
            },
              {
                path:"/edit-book/:id", Component: EditBooks ,
            },
              {
                path:"/borrow/:bookId", Component: BorrowRequest ,
            },
             {
                path:"/borrow-summary", Component: BorrowSummary ,
            },
        ]
    }
])

export default router

