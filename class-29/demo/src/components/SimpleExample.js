import React, { useReducer, useState } from 'react';


const mohammdReducer = (state, action) => {
  console.log('Initial State:', state, action);
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state;
  }
}


function SimpleExample() {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count => count+1)
  // }

  // const decrement = () => {
  //   setCount(count => count-1)
  // }

  const initialState = {
    count: 0,
    loading: true
  }
  const [state, dispatch] = useReducer(mohammdReducer, initialState);

  return (
    <div>
      <p>Counter: {state.count}</p>

      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  )
}

export default SimpleExample