import { useState } from "react";
import useBookStore from "./BookStore";

function BookForm() {
  const addBook = useBookStore((state) => state.addBook);
  const [bookDetails, setBookDetails] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleAddBook = () => {
    if (!Object.keys(bookDetails).length)
      return alert("Please enter book details!");
    addBook(bookDetails);
  };

  return (
    <div className="input-div">
      <div className="input-grp">
        <label>Book ID</label>
        <input type="text" name="id" className="w-72 m-2 border-2 p-1" onChange={handleOnChange} />
      </div>
      <div className="input-grp">
        <label>Book Name</label>
        <input type="text" name="name" className="w-72 m-2 border-2 p-1" onChange={handleOnChange} />
      </div>
      <div className="input-grp">
        <label>Writer</label>
        <input type="text" name="author" className="w-72 m-2 border-2 p-1" onChange={handleOnChange} />
      </div>
      <button onClick={handleAddBook} className="p-2 my-4 px-6 bg-yellow-600 hover:scale-110 duration-300 rounded-xl">
        Add
      </button>
    </div>
  );
}

export default BookForm;