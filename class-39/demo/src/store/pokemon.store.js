import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const pokemonSlicer = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(current(state), action)
      state.push({name: action.payload})
    },
    remove: (state, action) => {
      return state.filter(item => item.name !== action.payload)
    }
  }
})

export const { add, remove } = pokemonSlicer.actions;


export const get = () => async dispatch => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  // console.log(await res.json())
  const pokemon = await res.json();
  pokemon.results.forEach(element => {
    dispatch(add(element.name))
  });
}


export default pokemonSlicer.reducer;