import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import SubNav from './SubNav';
import Details from './Details';

class Work extends Component {
  constructor(props) {
    super(props);

    let obj = {
      PT: {
        title: 'Prime Table',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        fileName: 'PT',
        links: {
          'github': 'https://github.com',
          'site': 'https://primetablestk.com',
        }
      },
      MT: {
        title: 'Market Tavern',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        fileName: 'MT',
        links: {
          'github': 'https://github.com',
          'site': 'https://makrettavernstk.com',
        }
      },
      DW: {
        title: 'Prime Table',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        fileName: 'PT',
        links: {
          'github': 'https://github.com',
          'site': 'https://primetablestk.com',
        }
      }
    }

    this.state = {
      currentWork: obj.PT,
      obj
    }

    this.changeSubNav = this.changeSubNav.bind(this);
  }

  changeSubNav(e) {
    e.preventDefault();
    let el = e.target;
    let id = el.getAttribute('data-site');

    this.setState({ currentWork: this.state.obj[id] }, this.renderSubNav);
  }

  renderSubNav() {
    // let subNav = this.state.currentWork;
    // this.setState
  }

  render() {
    return (
      <div className="row work-row">
        <div className="col-xs-12 col-lg-4 work-col work-col-left">
          <h2 className='work-title'>Look what I can do!</h2>
          <p className='work-subtitle'>Click on these thingys to see all my projects</p>
          <ul className='work-list'>

            <SubNav
                active='true'
                clickHandler={ this.changeSubNav }
                initials='PT'
                name='Prime Table'
                url='primetablestk.com' />

            <SubNav
                clickHandler={ this.changeSubNav }
                initials='MT'
                name='Market Tavern'
                url='markettavernstk.com' />

            <SubNav
                clickHandler={ this.changeSubNav }
                initials='DW'
                name='This Site'
                url='deniswells.com' />

          </ul>
        </div>

        <div className="col-xs-12 col-lg-8 work-col work-col-right">
          <Details site={ this.state.currentWork }/>
        </div>

      </div>
    );
  }
}

export default Work;
