import { Fragment } from "react";
import useBookStore from "./BookStore";

function BookList() {
  const { books, noOfAvailable, noOfIssued, issueBook, returnBook } =
    useBookStore((state) => ({
      books: state.books,
      noOfAvailable: state.noOfAvailable,
      noOfIssued: state.noOfIssued,
      issueBook: state.issueBook, 
      returnBook: state.returnBook,
    }));

  return (
    <ul className="book-list">
      {!!books?.length && (
        <span className="books-count">
          <h4>Available: {noOfAvailable}</h4>
          <h4>Issued: {noOfIssued}</h4>
        </span>
      )}
      {books?.map((book) => {
        return (
          <Fragment key={book.id}>
            <li className="">
              <span className="underline">
                <span className="font-bold">{book.id} </span>
                <span>{book.name} </span>
                <span>{book.author}</span>
              </span>
              <div className="my-2">
                <button
                  onClick={() => issueBook(book.id)}
                  className={`mr-2 p-2 bg-slate-300 rounded-xl hover:scale-110 duration-110 cursor-pointer ${
                    book.status === "issued" ? "disabled" : ""
                  }`}
                  disabled={book.status === "issued"}>Issue</button>
                <button
                  onClick={() => returnBook(book.id)}
                  className={`mr-2 p-2 bg-slate-300 rounded-xl hover:scale-110 duration-110 cursor-pointer ${
                    book.status === "available" ? "disabled" : ""
                  }`}
                  disabled={book.status === "available"}>Return</button>
              </div>
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
}

export default BookList;