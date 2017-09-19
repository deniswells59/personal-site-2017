import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Details from './Details';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Prime Table',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fileName: 'PT',
      links: {
        'github': 'https://github.com',
        'site': 'https://primetablestk.com',
      }
    }
  }

  render() {
    return (
      <div className="row work-row">
        <div className="col-xs-12 col-lg-4 work-col">
          <ul className='work-list'>

            <li className='work-list-item active'>
              <h3><a href="">Prime Table</a></h3>
              <p><a href="#">primetablestk.com</a></p>
            </li>

            <li className='work-list-item'>
              <h3><a href="">Market Tavern</a></h3>
              <p><a href="#">markettavernstk.com</a></p>
            </li>

            <li className='work-list-item'>
              <h3><a href="">This Site</a></h3>
              <p><a href="#">deniswells.com</a></p>
            </li>

          </ul>
        </div>
        <div className="col-xs-12 col-lg-8 work-col work-col-right">
          <Details site={ this.state }/>
        </div>
      </div>
    );
  }
}

export default Work;
