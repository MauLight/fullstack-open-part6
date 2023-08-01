import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AnecdoteContextProvider } from './context/AnecdoteContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnecdoteContextProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AnecdoteContextProvider>
)