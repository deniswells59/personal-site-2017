import React, { Component } from 'react';

import Nav from './components/Nav';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import './style.css';

class NavSite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: 'work',
      navLib: {
        'work': <Work scrolledIn='false' />,
       'about': <About scrolledIn='true' />,
       'contact': <Contact scrolledIn='true' />,
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
              name='work' />
            <Nav
              clickHandler={this.changeNav}
              name='contact' />

          </div>
        </div>

        <div id='view-box' className='container-fluid'>
          { this.state.navLib[this.state.nav] }
        </div>


      </div>
    );
  }
}

export default NavSite;
