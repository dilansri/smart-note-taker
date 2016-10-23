import React from 'react'
import { Route, Router, IndexRoute, hashHistory} from 'react-router'
import firebase from '../firebase'
import App from '../../views/app-container'
import Login from '../../views/login'

const requireLogin = (nextState,replace,next) => {
    if(!firebase.auth.currentUser){
        replace('/')
    }
    next()
}



const handleIfLoggedIn = (nextState,replace,next) => {
    if(firebase.auth.currentUser){
        replace('/notes')
    }
    next()
}

const routes = (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="notes" component={App} onEnter={requireLogin} />
            <IndexRoute component={Login} onEnter={handleIfLoggedIn} />
        </Route>
    </Router>
)

export default routes