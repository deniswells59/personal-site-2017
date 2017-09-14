import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/personal">Personal</Link>
        <Link to="/professional">Professional</Link>
      </div>
    );
  }
}

export default App;
