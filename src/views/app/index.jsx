import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {green100,green700,green500} from 'material-ui/styles/colors'
import Notes from '../containers/notes'


import HeaderBar from '../components/header-bar'

const myMuiTheme = getMuiTheme({
      palette :{
        primary1Color : green500,
        primary2Color : green700,
        primary3Color : green100,
      }
    },
    {
      avatar: {
        borderColor: null
      }
    }
);

class App extends Component {
  //TODO Handle state with componentDidMount

  constructor(props){
    super(props)
  }
  
  render() {
    console.log(this.props.notes)
    
    return(
      <MuiThemeProvider muiTheme={myMuiTheme}>
        <div>
          <HeaderBar />    
          <Notes />    
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
