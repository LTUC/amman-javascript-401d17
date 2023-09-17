export const increment = (person) => {
  return {
    type: 'INCREMENT',
    payload: person
  }
}

export const disable = (person) => {
  return {
    type: 'DISABLE',
    payload: person
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}