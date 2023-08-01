import { useEffect } from 'react'
import { AddAnecdote } from './components/AddAnecdote'
import { Anecdotes } from './components/Anecdotes'
import Notification from './components/Notification'

import { initializeQuotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeQuotes())
  }, [])

  return (
    <div className="anecdotes mb-10">
      <h1 className="feed-text text-8xl my-10 hover:text-neutral-900 transition-all duration-150 ease-in-out">Anecdotes!</h1>
      <Notification />
      <div className="flex">
        <Anecdotes />
        <AddAnecdote />
      </div>
    </div>
  )
}

export default App