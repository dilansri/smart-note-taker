import React from 'react'
import Login from '../../components/login'
import { connect } from 'react-redux'
import { startLogin } from '../../../core/actions'

const mapDispatchToProps = function(dispatch){
    return {
        providerLogin : (provider) => {
            dispatch(startLogin(provider))
        }
    }
}

const LoginContainer = connect((state)=>{return{}},mapDispatchToProps)(Login)

export default LoginContainer