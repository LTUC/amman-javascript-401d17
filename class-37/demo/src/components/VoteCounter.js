import React from 'react'
import { connect } from 'react-redux';
import candidates from '../store/candidates';
import { increment, disable } from '../store/actions';

function VoteCounter({ candidates, increment, votes, disable }) {
  console.log(candidates, disable)
  return (
    <ul>
      {
        candidates.map(item =>
          <li
            key={item.name}
            onDoubleClick={() => disable(item)}
            onClick={() => item.disabled ? {} : increment(item)}
          >
            {item.name}: {item.vote} -
            {item.vote ? Math.floor((item.vote / votes.totalVotes) * 100) : 0}%
          </li>
        )
      }
    </ul>
  )
}

const mapStateToProps = state => ({
  candidates: state.candidates,
  votes: state.votes
});

const mapDispatchToProps = { increment, disable }

export default connect(mapStateToProps, mapDispatchToProps)(VoteCounter)