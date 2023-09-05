import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function BookCard({ bookDetails }) {

  const { dispatch } = useContext(BookContext);

  const deleteHandler = () => {
    dispatch({ type: 'DELETE_BOOK', id: bookDetails.id })
  }

  return (
    <>
      <p>{bookDetails.title}</p>
      <p>{bookDetails.author}</p>
      <button onClick={deleteHandler}>Delete</button>
    </>
  );
}