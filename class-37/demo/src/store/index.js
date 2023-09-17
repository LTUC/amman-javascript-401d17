import { createStore, combineReducers } from "redux";

import candidates from "./candidates";
import votes from "./votes";

const reducers = combineReducers({candidates, votes});

const store = () => {
  return createStore(reducers);
}

export default store();
