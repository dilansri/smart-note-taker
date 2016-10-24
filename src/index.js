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
import { startGetNotes,login,logout } from './core/actions'
let store = createStore(reducers,applyMiddleware(thunk))

firebase.auth().onAuthStateChanged((user)=>{
  console.log('auth status changed')
  console.log(user)
  if(user){
    hashHistory.push('/notes')
    store.dispatch(login({uid:user.uid}))
    store.dispatch(startGetNotes())
  }else{
    store.dispatch(logout())
    hashHistory.push('/')
  }
})

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)