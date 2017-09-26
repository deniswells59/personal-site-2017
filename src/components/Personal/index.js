import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

import './style.css';

class Personal extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let nav = document.querySelector('#nav-fixer');
    let width = nav.clientWidth || nav.offsetWidth;

    nav.style.position = 'fixed';
    nav.style.minWidth = `${width}px`;
  }

  render() {
    return (
      <div className="Personal">
        <div className="container">
          <div className="row">

            <div className="col-xs-2">
              <div className="-section" id='nav-fixer'>
                <Nav />
              </div>
            </div>

            <div className="col-xs-10">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 -section">
                    <Header />
                  </div>
                  <div className="col-xs-12 -section">
                    <Work />
                  </div>
                  <div className="col-xs-12 -section">
                    <About />
                  </div>
                  <div className="col-xs-12 -section">
                    <Contact />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Personal;
