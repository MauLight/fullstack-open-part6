import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { uniReducer } from './reducers/uniReducer'
import AppRedux from './App'

const store = createStore(uniReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRedux />
  </Provider>
)