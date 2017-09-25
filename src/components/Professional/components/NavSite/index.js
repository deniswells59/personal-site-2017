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
      nav: 'work'
    }

    this.changeNav = this.changeNav.bind(this);
    this.scrollCheck = this.scrollCheck.bind(this);
  }

  componentDidMount() {
    this.setActive();
    this.setHolderHeight();


    if(this.props.isMobile()) {
      this.scrollCheck();
      document.addEventListener('scroll', this.scrollCheck);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollCheck);
  }

  scrollCheck() {
    let el = document.getElementById('nav-holder'); // Div
    let elemTop = el.getBoundingClientRect().top; // Bottom on div

    if(elemTop <= 0) {
      this.props.addClass(el, 'fixed');
    } else {
      this.props.removeClass(el, 'fixed');
    };
  }

  setHolderHeight() {
    let el = document.getElementById('nav-holder');
    let height = el.clientHeight || el.offsetHeight;

    el.style.minHeight = `${height}px`;
  }

  changeNav(e) {
    let el = e.target;
    let id = el.getAttribute('id');

    this.setState({ nav: id }, this.setActive);
    document.querySelector('#site').scrollIntoView({
      behavior: 'smooth'
    });
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
    let current;
    switch(this.state.nav) {
      case 'work':
        current = <Work scrolledIn='false' {...this.props}/>;
        break;
      case 'about':
        current = <About scrolledIn='true' />;
        break;
      case 'contact':
        current = <Contact scrolledIn='true' {...this.props}/>;
        break;
    }

    return (
      <div id='site' className="scroll-space">
        <div className="container">
          <div id='nav-holder' className='nav-holder'>
            <div className="row" id='nav-wrapper' >

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
        </div>

        <div id='view-box' className='container-fluid'>
          { current }
        </div>


      </div>
    );
  }
}

export default NavSite;
