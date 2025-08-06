import Banner from "./page-elements/Banner";
import BooksTable from "./page-elements/Books-grid";



const Home = () => {
    return (
        <div>
            <Banner />
            <h1 className="bg-green-500"> Home </h1>
            <BooksTable />
        </div>
    );
};

export default Home;

