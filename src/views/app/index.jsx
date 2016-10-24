import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {green100,green700,green500} from 'material-ui/styles/colors'
import Notes from '../containers/notes'

import { startLogin } from '../../core/actions'
import firebase from '../../core/firebase'


import HeaderBar from '../containers/header-bar'
import NewNoteDialog from '../containers/new-note'
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
  constructor(props){
    super(props)
  }
  
  render() {
    //console.log(this.props.notes)
    //if(!firebase.auth().currentUser) this.props.dispatch(startLogin())    
    return(
      <MuiThemeProvider muiTheme={myMuiTheme}>
        <div>
          <HeaderBar />  
          <NewNoteDialog />  
          <Notes />    
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
