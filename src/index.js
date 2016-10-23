import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './views/app-container'
import './index.css'
import { Provider } from 'react-redux'
import reducers from './core/reducers'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let store = createStore(reducers,applyMiddleware(thunk))
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
); 
/*
ReactDOM.render(
    <App />,
  document.getElementById('root')
);*/

