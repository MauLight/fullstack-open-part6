

export const blogReducer = (state = [], action) => {
  if (action.type === 'NEW_BLOG') {
    state.push(action.payload)
    return state
  }

  return state
}