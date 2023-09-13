import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counter from "./votes";

const reducers = combineReducers({ counter })

const store = () => {
  return createStore(reducers, composeWithDevTools())
}

export default store();