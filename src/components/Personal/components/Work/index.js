import React, { Component } from 'react';
import Details from './components/Details';
import './style.css';

class Work extends Component {
  render() {
    return (
      <div className='work-old' id='work'>
        <div className="title">
          <h2>My Work</h2>
          <img
            width='100%'
            src='/assets/kitter.gif'
            alt='kit-kat'/>
        </div>

        <Details
          name='Prime Table'
          fileName='PT'
          desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          site='https://primetablestk.com'
          github='https://github.com' />
        <Details
          name='Market Tavern'
          fileName='MT'
          desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          site='https://markettavernstk.com'
          github='https://github.com' />
        <Details
          name='My Site'
          fileName='DW'
          desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          site='https://deniswells.com'
          github='https://github.com' />

      </div>
    );
  }
}

export default Work;
