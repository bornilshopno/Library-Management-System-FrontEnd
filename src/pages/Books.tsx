import { useGetBooksQuery } from "@/redux/features/BookApi";


const Books = () => {

    const {isLoading,data: books} = useGetBooksQuery(undefined)
    console.log(books, "from Books Route")

    return (
        <div>
            Books
        </div>
    );
};

export default Books;