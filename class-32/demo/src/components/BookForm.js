import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext';

export default function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const { dispatch } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { title, author } })
  }

  // console.log(title, author)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Book Title'
        onChange={e => setTitle(e.target.value)} />

      <input
        type='text'
        placeholder='Author Name'
        onChange={e => setAuthor(e.target.value)} />
      <button type='submit'>Add</button>
    </form>
  )
}
