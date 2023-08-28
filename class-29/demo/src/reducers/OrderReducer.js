import { actionType } from "./actions"

export const initialState = {
  title: '',
  desc: '',
  price: 0,
  quantity: 0,
  tags: [],
  category: ''
}

export const orderReducer = (state, action) => {
  switch (action.type) {
    case actionType.CHANGE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    case actionType.ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, action.payload]
      }
    case actionType.REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter(tag => tag !== action.payload)
      }
    case actionType.INCREMENT:
      return {
        ...state,
        quantity: state.quantity + 1
      }
    case actionType.DECREMENT:
      return {
        ...state,
        quantity: state.quantity - 1
      }
    default:
      return state;
  }
}