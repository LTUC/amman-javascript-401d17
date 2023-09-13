const initialState = {
  candidates: [
    { name: 'Bashar', vote: 0 },
    { name: 'Rama', vote: 0 },
    { name: 'Hamza', vote: 0 },
    { name: 'Mohammed', vote: 0 },
  ],
  totalVotes: 0
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      const totalVotes = state.totalVotes + 1
      const candidates = state.candidates.map(candidate => {
        if (candidate.name === payload) {
          return { name: candidate.name, vote: candidate.vote + 1 }
        }
        return candidate;
      })

      console.log(state)

    return {totalVotes, candidates}
    default:
      return state;
  }
}

export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

// [
//   { name: 'Bashar', vote: 1 },
//   { name: 'Rama', vote: 2 },
//   { name: 'Hamza', vote: 0 },
//   { name: 'Mohammed', vote: 0 },
// ]

// totalVotes = 3