import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import MyTestComponent from './MyTestComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green100,green500,green700} from 'material-ui/styles/colors';

const myMuiTheme = getMuiTheme({
      pallete :{
        primary1Color : green500,
        primary2Color : green700,
        primary3Color : green100
      }
    },
    {
      avatar: {
        borderColor: null,
      }
    }
);

class App extends Component {
  
  render() {
    
    return(
      <MuiThemeProvider muiTheme={myMuiTheme}>
        <MyTestComponent />
      </MuiThemeProvider>
    );
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

export default App;
