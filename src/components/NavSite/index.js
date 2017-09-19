import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav';
import Work from '../Work';
import About from '../About';
import './style.css';

class NavSite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: 'work',
      navLib: {
        'work': <Work />,
        'about': <About />,
      }
    }

    this.renderNav = this.renderNav.bind(this);
    this.changeNav = this.changeNav.bind(this);
  }

  componentDidMount() {
    this.renderNav();
  }

  renderNav() {
    let nav = this.state.nav;
    this.setState({ navEl: this.state.navLib[nav] }, this.setActive);
  }

  changeNav(e) {
    let el = e.target;
    let id = el.getAttribute('id');
    this.setState({ nav: id }, this.renderNav);
  }

  setActive() {
    let newActive = document.getElementById(this.state.nav);
    let links = document.getElementsByClassName('nav-link');
    for (var key in links) {
      if (links.hasOwnProperty(key)) {
        links[key].setAttribute('class', 'nav-link');
      }
    }

    newActive.setAttribute('class', 'nav-link active');
  }

  render() {
    return (
      <div id='site' className="scroll-space">
        <div className="container">

          <div className="row">

              <Nav
                clickHandler={this.changeNav}
                name='about' />
              <Nav
                clickHandler={this.changeNav}
                name='work'>
                <ul className="dropdown">
                  <li className="dropdown-item">Prime Table</li>
                  <li className="dropdown-item">Market Tavern</li>
                </ul>
              </Nav>
              <Nav
                clickHandler={this.changeNav}
                name='contact'/>

          </div>

          { this.state.navLib[this.state.nav] }

        </div>
      </div>
    );
  }
}

export default NavSite;
