import { createSlice } from '@reduxjs/toolkit'
import quoteService from '../services/quotes'

const quoteSlice = createSlice({
  name: 'addQuote',
  initialState: [],
  reducers: {
    addLike(state, action) {
      const id = action.payload
      const quoteToUpdate = state.find(q => q.id === id)
      const updatedQuote = { ...quoteToUpdate, likes: quoteToUpdate.likes + 1 }

      return state.map(quote => quote.id !== id ? quote : updatedQuote)
    },
    saveQuote(state, action) {
      const quote = action.payload
      return [...state, quote]

    },
    fetchQuotes(state, action) {
      return [...state, ...action.payload]
    }
  },
})

export const { addLike, fetchQuotes, saveQuote } = quoteSlice.actions

export const initializeQuotes = () => {
  return async dispatch => {
    const quotes = await quoteService.getAll()
    dispatch(fetchQuotes(quotes))
  }
}

export const addQuote = quote => {
  return async dispatch => {
    const newQuote = await quoteService.sendQuote(quote)
    dispatch(saveQuote(newQuote))
  }
}

export const addLikeQuote = quote => {
  return async dispatch => {
    const id = quote.id
    const newQuote = await quoteService.updateQuote(id, quote)
    dispatch(addLike(newQuote.id))
  }
}

export default quoteSlice.reducer