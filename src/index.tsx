import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";

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
                path:"/create-book", Component: Home ,
            },
              {
                path:"/books/:id", Component: Home ,
            },
              {
                path:"/edit-book/:id", Component: Home ,
            },
              {
                path:"/borrow/:bookId", Component: Home ,
            },
             {
                path:"/borrow-summary", Component: Home ,
            },
        ]
    }
])

export default router

