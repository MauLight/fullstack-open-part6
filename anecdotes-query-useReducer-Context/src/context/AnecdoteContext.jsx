import React from 'react'
import { createContext, useContext, useReducer } from 'react'
import { anecdoteReducer } from '../reducers/anecdoteReducer'

const AnecdoteContext = createContext()

const initialState = {
  type: 'add',
  message: null
}

export const useAnecdoteValue = () => {
  const counterAndDispatch = useContext(AnecdoteContext)
  return counterAndDispatch[0]
}

export const useAnecdoteDispatch = () => {
  const counterAndDispatch = useContext(AnecdoteContext)
  return counterAndDispatch[1]
}

export const AnecdoteContextProvider = (props) => {
  const [anecdote, anecdoteDispatch] = useReducer(anecdoteReducer, initialState)

  return (
    <AnecdoteContext.Provider value={[anecdote, anecdoteDispatch] }>
      {props.children}
    </AnecdoteContext.Provider>
  )
}

export default AnecdoteContext