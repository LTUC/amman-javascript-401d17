import React from 'react'
import { connect } from 'react-redux'
import { reset } from '../store/actions'

function Status({votes, reset}) {
  return (
    <div>
      Total Votes: {votes.totalVotes}
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

const mapStateToProps = state => ({
  votes: state.votes
})

const mapDispatchToProps = {reset};

export default connect(mapStateToProps, mapDispatchToProps)(Status)