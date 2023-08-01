import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { addQuote, getQuotes, updateQuote } from './requests/requests'
import './App.css'
import { useAnecdoteDispatch } from './context/AnecdoteContext'
import Notification from './components/Notification'

function App() {
  const dispatch = useAnecdoteDispatch()
  const queryClient = useQueryClient()

  const newQuoteMutation = useMutation(addQuote, {
    onSuccess: (newQuote) => {
      dispatch({ type: 'MESSAGE', payload: `${newQuote.quote} was added to the list!` })
      setTimeout(() => {
        dispatch({ type: 'MESSAGE', payload: null })
      }, 5000)
      const quotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', quotes.concat(newQuote))
    },
    onError: () => {
      dispatch({ type: 'MESSAGE', payload: 'Quote must be at least 5 characters long.' })
      dispatch({ type: 'TYPE', payload: 'error' })
      setTimeout(() => {
        dispatch({ type: 'MESSAGE', payload: null })
        dispatch({ type: 'TYPE', payload: 'add' })
      }, 5000)
    }, retry: 1
  })

  const updateQuoteMutation = useMutation(updateQuote, {
    onSuccess: (newQuote) => {
      const quotes = queryClient.getQueryData('anecdotes')
      const newQuotes = quotes.map(elem => elem.id !== newQuote.id ? elem : newQuote)
      queryClient.setQueryData('anecdotes', newQuotes)
    }
  })

  const submitQuote = async (e) => {
    e.preventDefault()
    const quote = e.target.quote.value

    // if (quote.length < 5) {
    //   console.log('quote must be at least 5 characters long.')
    //   dispatch({ type: 'MESSAGE', payload: 'Quote must be at least 5 characters long.' })
    //   dispatch({ type: 'TYPE', payload: 'error' })
    //   setTimeout(() => {
    //     dispatch({ type: 'MESSAGE', payload: null })
    //     dispatch({ type: 'TYPE', payload: 'add' })
    //   }, 5000)
    //   return -1
    // }

    newQuoteMutation.mutate({ quote, likes: 0 })
    e.target.quote.value = ''
  }

  const submitLike = async (quote) => {
    updateQuoteMutation.mutate({ ...quote, likes: quote.likes + 1 })
    dispatch({ type: 'MESSAGE', payload: `You just liked ${quote.quote}!` })
    setTimeout(() => {
      dispatch({ type: 'MESSAGE', payload: null })
    }, 5000)
  }

  const result = useQuery('anecdotes', getQuotes, {
    refetchOnWindowFocus: false,
    retry: 3
  })

  if (result.isLoading) {
    return <div>Loading data...</div>
  }

  if (result.isError) {
    return <p>The anecdote service is not available due to problems with the server.</p>
  }

  const quotes = result.data

  return (
    <div className="App">
      <div className="flex flex-col">
        <form onSubmit={submitQuote}>
          <label htmlFor='quote'>Add quote:</label>
          <input id='quote' name='quote' type='text' />
        </form>
      </div>
      <Notification />
      <div className="flex items-center justify-center mt-10">
        <ul>
          {quotes.map(elem => (
            <li key={elem.id} className='flex items-center text-left text-2xl my-3'>
              <p>{elem.quote}</p>
              <p className='ml-2'>{`has ${elem.likes} ${elem.likes > 1 || elem.likes === 0 ? 'likes' : 'like'}`}</p>
              <button onClick={() => submitLike(elem)}>Like!</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App