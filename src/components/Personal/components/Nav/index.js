import React, { Component } from 'react';
import './style.css';

class Nav extends Component {
  render() {
    return (
      <div className='nav-old'>
        <h2 className='fantasy'>Navigation:</h2>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Work</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
