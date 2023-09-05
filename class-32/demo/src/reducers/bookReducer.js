import {v4 as uuid} from 'uuid';

export const initialState = [];

export const bookReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BOOK':
      console.log(action, state);
      const newState = [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid()
        }
      ]
      localStorage.setItem('books', newState)
      return newState;
      
    case 'DELETE_BOOK':
      console.log(action)
      return state.filter(book => book.id !== action.id)
    default:
      return state;
  }
}