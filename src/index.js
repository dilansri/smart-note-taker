import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/app-container'
import './index.css'
import { Provider } from 'react-redux'
import reducers from './core/reducers'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);