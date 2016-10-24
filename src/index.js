import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import reducers from './core/reducers'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import routes from './core/router'
import firebase from './core/firebase'
import { hashHistory } from 'react-router'
let store = createStore(reducers,applyMiddleware(thunk))

firebase.auth().onAuthStateChanged((user)=>{
  console.log('auth status changed')
  console.log(user)
  if(user){
    hashHistory.push('/notes')
  }else{
    hashHistory.push('/')
  }
})

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)