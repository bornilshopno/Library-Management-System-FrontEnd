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

// bookSchema
// author// :// "Stephen Hawking"
// available// :// false
// copies// :// 0
// createdAt// :// "2025-06-22T18:57:34.756Z"
// description// :// "An overview of cosmology and black holes."
// genre// :// "SCIENCE"
// isbn// :// "9780553380163"
// title// :// "The Theory of Everything"
// updatedAt// :// "2025-06-23T22:25:50.147Z"
// _id// :// "6858521e8ee8f7e4224cd2db"