import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";


const Layout = () => {
    return (
        <div>
            <div className="h-16 bg-gray-300 dark:bg-black"></div>
            <Navbar/>
            <Outlet/>
            <Footer />
        </div>
    );
};

export default Layout;