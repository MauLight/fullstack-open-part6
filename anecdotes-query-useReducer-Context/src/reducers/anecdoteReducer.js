export const anecdoteReducer = (state, action) => {
  switch (action.type) {
  case 'MESSAGE':
    return { ...state, message: action.payload }
  case 'TYPE':
    return { ...state, type: action.payload }
  }
}