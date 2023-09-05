import React, { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {

  const [book, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  })

  // const state = {
  //   title: 'React js',
  //   author: 'Mohammed'
  // };

  // console.log(book)

  useEffect(() => {
    // console.log(book)
    localStorage.setItem('books', JSON.stringify(book))
  }, [book])

  const checkForName = () => {
    console.log('test')
  }

  const state = {
    book,
    dispatch,
    checkForName
  }

  return (
    <BookContext.Provider value={state}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;