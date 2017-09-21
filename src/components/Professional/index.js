import React, { Component } from 'react';
import Logo from '../Logo';
import Parallax from '../Parallax';
import NavSite from '../NavSite';
import './style.css';

class Professional extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="Professional">

        <div className="header">

          <div className="info-wrapper animated fadeIn" id="info">

            <Logo size="100" dur="2" delay=".5" backgroundColor="transparent" />


            <p className='title'>Hi, I'm a Web Developer</p>

            <hr/>
            <div className="social-links">
              <a href="#" className="icon-href">
                <i className="icon-social-github icons"></i>
              </a>
              <a href="#" className="icon-href">
                <i className="icon-social-linkedin icons"></i>
              </a>
              <a href="https://twitter.com/deniswells59" className="icon-href">
                <i className="icon-social-twitter icons"></i>
              </a>
            </div>

          </div>

          <div className="call-to-action animated fadeIn animated-delay">
            <p className="cta-text">THERE'S PROOF DOWN HERE</p>
            <a data-scroll href="#site" className='scroll-link'>
              <i className="icon-arrow-down icons bounce"></i>
            </a>
          </div>
          <div className="layer-wrapper">

            <Parallax opacity='0.3' scrollOffset='0.55' size='20'/>
            <Parallax opacity='0.6' scrollOffset='0.65' size='30'/>
            <Parallax opacity='0.8' scrollOffset='1.00' size='35'/>

          </div>

        </div>

        <NavSite />
      </div>
    );
  }
}

export default Professional;
