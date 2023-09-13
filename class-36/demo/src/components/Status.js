import React from 'react'
import { connect } from 'react-redux'

function Status({ totalVotes }) {
  return (
    <div>
      Total votes: {totalVotes}
    </div>
  )
}

const mapStateToProps = state => ({
  totalVotes: state.counter.totalVotes
})

export default connect(mapStateToProps)(Status)