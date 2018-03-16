import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Grid from './Grid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid />
        <p>Hello, world!</p>
      </div>
    );
  }
}

export default App;
