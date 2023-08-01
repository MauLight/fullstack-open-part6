import { legacy_createStore as createStore } from 'redux'

const blogReducer = (state = [], action) => {
  if (action.type === 'NEW_BLOG') {
    state.push(action.payload)
    return state
  }

  return state
}

const store = createStore(blogReducer)

store.dispatch({
  type: 'NEW_BLOG',
  payload: {
    title: 'The risks of not being able to control your brain chemicals',
    author: 'Mau_Light',
    url: 'www.behealthy.com',
    likes: 12,
    id: 'a1'
  }
})

function App() {

  return (
    <div className="App">
      <ul>
        {store.getState().map(blog => (
          <li key={blog.id}>
            <p>{`${blog.title} by ${blog.author}`}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
