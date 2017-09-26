import React, { Component } from 'react';
import './style.css';

class Nav extends Component {
  render() {
    return (
      <div className='nav-old'>
        <h2 className='fantasy'>Navigation:</h2>
        <ul>
          <li>
            <a href="#home">
              <button>
                Home
              </button>
            </a>
          </li>
          <li>
            <a href="#work">
              <button>
                Work
              </button>
            </a>
          </li>
          <li>
            <a href="#about">
              <button>
                About
              </button>
            </a>
          </li>
          <li>
            <a href="#contact">
              <button>
                Contact
              </button>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
