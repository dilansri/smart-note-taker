import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import reducers from './core/reducers'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import routes from './core/router'
let store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);