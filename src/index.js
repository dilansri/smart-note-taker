import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './views/app-container'
import './index.css'
import { Provider } from 'react-redux'
import reducers from './core/reducers'
import { createStore } from 'redux'

let store = createStore(reducers)
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

