import React,{ Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Login extends Component{
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(provider){
        this.props.providerLogin(provider)
    }

    render(){
        return (
            <MuiThemeProvider>
                <div style={{width:300,position:'relative',top:'50%',margin:'auto'}}>
                    <TextField type="email" hintText="email"/><br />
                    <TextField type="password" hintText="password"/><br />
                    <RaisedButton label="Login" primary={true} />
                    <RaisedButton onClick={this.handleLogin} label="Login with GitHub" />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Login