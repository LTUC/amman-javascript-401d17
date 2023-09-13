import React from 'react'
import { connect } from 'react-redux';
import { increment, reset } from '../store/votes';

function VoteCounter(props) {
  // console.log(props)
  return (
    <div>
      <ul>
        {
          props.counter.candidates.map(item => (
            <li onClick={() => props.increment(item.name)}>{item.name}: {item.vote}</li>
          ))
        }
        {/* <li>Bashar: 0</li>
        <li>Rama: 0</li>
        <li>Hamza: 0</li>
        <li>Mohammed: 0</li> */}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchTpProps = { increment, reset }

export default connect(mapStateToProps, mapDispatchTpProps)(VoteCounter)