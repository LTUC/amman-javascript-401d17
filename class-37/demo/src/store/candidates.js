const initialState = [
  { name: 'Mohammed', vote: 0 },
  { name: 'Ayah', vote: 0 },
  { name: 'Bashar', vote: 0 },
  { name: 'Farah', vote: 0 },
  { name: 'Anas', vote: 0 }
];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'INCREMENT':
      return state.map(candidate => {
        if(candidate.name === payload.name) {
          return { name: candidate.name, vote: candidate.vote + 1 }
        }
        return candidate;
      });
    case 'DISABLE':
      // , vote: candidate.vote - 1
      return state.map(candidate => candidate.name === payload.name ? {...candidate, disabled: true} : candidate)
    case 'RESET': 
      return initialState;
    default:
      return state;
  }
}