import React, { useContext } from 'react'
import BookCard from './BookCard'
import { BookContext } from '../context/BookContext'

export default function BookList() {

  const {book} = useContext(BookContext);

  return book.length ? (
    <div className='book-list'>
      {
        book.map(item => 
          <BookCard bookDetails={item} key={item.id}/>
        )
      }
    </div>
  ) :
  <div>There is no data!!</div>
}
