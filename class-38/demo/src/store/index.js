import { createStore, combineReducers, applyMiddleware } from "redux";
import list from './reducers/listReducer';
import thunk from "redux-thunk";
// import thunk from "./middleware/thunk";

const reducers = combineReducers({
  list
})

const store = () => (
  createStore(reducers, applyMiddleware(thunk))
)

export default store();