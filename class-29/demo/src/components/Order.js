import React, { useReducer, useRef } from 'react'
import { initialState, orderReducer } from '../reducers/OrderReducer'
import { actionType } from '../reducers/actions';

export default function Order() {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  const tagRef = useRef();

  const handleChange = e => {
    // console.log(e.target)
    dispatch({
      type: actionType.CHANGE_INPUT,
      payload: { name: e.target.name, value: e.target.value }
    })
  }

  const handleTags = () => {
    console.log(document.getElementById('textArea').value)
    const tags = tagRef.current.value.split(',');
    tags.forEach(tag => {
      dispatch({
        type: actionType.ADD_TAG,
        payload: tag
      })
    });
  }

  console.log(state)

  return (
    <>
      <input name='title' placeholder='Product Title ....' onChange={handleChange} />
      <input name='desc' placeholder='Product description ....' onChange={handleChange} />
      <input name='price' placeholder='Product price ....' onChange={handleChange} />
      <select name='category' onChange={handleChange}>
        <option value='phone'>Phone</option>
        <option value='car'>Car</option>
        <option value='tshirts'>TShirts</option>
      </select>
      <div>
        <textarea id='textArea' ref={tagRef} placeholder='Seperates by a comma....' />
        <button onClick={handleTags}>Add</button>

        <div>
          {
            state.tags.map(tag => (
              <button
                onClick={() => dispatch({type: actionType.REMOVE_TAG, payload: tag})}>
                {tag}
              </button>
            ))
          }
        </div>
      </div>
      <div>
        <p>Quantity: {state.quantity}</p>
        <button onClick={() => dispatch({type: actionType.DECREMENT})}>-</button>
        <button onClick={() => dispatch({type: actionType.INCREMENT})}>+</button>
      </div>
    </>
  )
}
