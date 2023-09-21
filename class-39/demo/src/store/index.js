import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import pokemonStore from "./pokemon.store";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

// const reducers = combineReducers({ pokemon: pokemonStore });

export const store = configureStore({
  reducer: { pokemon: pokemonStore },
  // devTools: composeWithDevTools()
})