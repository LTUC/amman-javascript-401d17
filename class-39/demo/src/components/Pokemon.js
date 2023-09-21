import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, get, remove } from '../store/pokemon.store';

function Pokemon() {

  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon)
  // console.log(pokemon)

  const [name, setName] = useState('');

  // useEffect(() => {
  //   dispatch(get());
  // }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(add(name))
  }

  const changeHandler = (e) => {
    setName(e.target.value)
  }

  return (
    <>
    <button onClick={() => dispatch(get())}>fetchData</button>
    <form onSubmit={submitHandler}>
      <input onChange={changeHandler} />
    </form>
    {
      pokemon.map(item => <div onClick={() => dispatch(remove(item.name))}>{item.name}</div>)
    }
      {/* <div>{pokemon[0].name}</div> */}

    </>
  )
}

export default Pokemon