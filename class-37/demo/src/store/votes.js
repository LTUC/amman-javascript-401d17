const initialState = {
  totalVotes: 0
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return { ...state, totalVotes: state.totalVotes + 1 }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}