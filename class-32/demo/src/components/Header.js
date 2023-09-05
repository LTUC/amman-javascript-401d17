import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

export default function Header() {
  const {book} = useContext(BookContext);

  return (
    <div>
      <h1>Book List</h1>
      <p>Currently on the list you have {book.length} books</p>
    </div>
  )
}
