import React, { Component } from 'react';
import Svg from '../SVG/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Svg size='300' dur='2' delay='true' backgroundColor='#f1f1f1'/>
      </div>
    );
  }
}

export default App;
