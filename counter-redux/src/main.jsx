import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import './index.css'

import { legacy_createStore as createStore } from 'redux'
import { blogReducer } from './reducers/blogReducer'

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

store.dispatch({
  type: 'NEW_BLOG',
  payload: {
    title: 'The akwardness of having these drops in mood',
    author: 'Mau_Light',
    url: 'www.behealthy.com',
    likes: 14,
    id: 'b2'
  }
})

function AppRedux() {

  return (
    <div className="App">
      <ul>
        {store.getState().map(blog => (
          <li className='text-3xl ml-5' key={blog.id}>
            <p>{`${blog.title} by ${blog.author}`}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))


const renderApp = () => {
  root.render(<AppRedux />)
}

renderApp()
store.subscribe(renderApp)