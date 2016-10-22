import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {green100,green700,green500} from 'material-ui/styles/colors'
import Note from '../components/note'

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

    this.updateNote = this.updateNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
  }

  updateNote(payload){
    this.props.dispatch({type:'UPDATE_NOTE',payload:payload})
  }

  deleteNote(payload){
    this.props.dispatch({type:'DELETE_NOTE',payload:payload})
  }
  
  render() {
    console.log(this.props.notes)

    var notesList = (
      <div>
        {this.props.notes.map(note=> ( 
          <Note key={note.id} 
                id={note.id}
                note={note}
                updateNote={this.updateNote}
                deleteNote={this.deleteNote}/>
          ))}
      </div>
    )
    return(
      <MuiThemeProvider muiTheme={myMuiTheme}>
        <div>
          <HeaderBar />    
          {notesList}      
        </div>
      </MuiThemeProvider>
    )
    /*
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    */
  }
}

export default App
