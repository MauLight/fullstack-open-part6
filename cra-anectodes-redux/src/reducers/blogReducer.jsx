

export const blogReducer = (state = [], action) => {
  switch (action.type) {
  case 'NEW_BLOG': {
    return [...state, action.payload]
  }
  case 'ADD_LIKES': {
    const id = action.payload.id
    const blogToChange = state.find(b => b.id === id)
    const changedBlog = {
      ...blogToChange,
      likes: blogToChange.likes + 1
    }
    return state.map(blog =>
      blog.id !== id ? blog : changedBlog
    )
  }
  }

  return state
}