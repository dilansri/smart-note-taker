import React,{ Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Login extends Component{
    constructor(props){
        super(props)
        this.handleLoginGitHub = this.handleLoginGitHub.bind(this)
        this.handleLoginGoogle = this.handleLoginGoogle.bind(this)
    }

    handleLoginGitHub(){
        this.props.providerLogin('github')
    }

    handleLoginGoogle(){
        this.props.providerLogin('google')        
    }

    render(){
        return (
            <MuiThemeProvider>
                <div style={{width:450,position:'relative',top:'50%',margin:'auto'}}>
                    <TextField fullWidth={true} type="email" hintText="email"/><br />
                    <TextField fullWidth={true} type="password" hintText="password"/><br />
                    <RaisedButton label="Login" primary={true} />
                    <RaisedButton onClick={this.handleLoginGitHub} label="Login with GitHub" />
                    <RaisedButton onClick={this.handleLoginGoogle} label="Login with Google" />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Login