import React, { Component } from 'react';
import Logo from '../Logo';
import Parallax from '../Parallax';
import './style.css';

class Professional extends Component {

  render() {
    return (
      <div className="Professional">
        <div className="header">

          <div className="info-wrapper" id="info">
            <Logo size="100" dur="2" delay=".5" backgroundColor="transparent" />
            <div className="social-links">
              <i className="icon-social-github icons"></i>
              <i className="icon-social-linkedin icons"></i>
              <i className="icon-social-twitter icons"></i>
            </div>
          </div>
          <div className="layer-wrapper">
            <Parallax opacity='0.3' scrollOffset='0.15' size='20'/>
            <Parallax opacity='0.6' scrollOffset='0.23' size='30'/>
            <Parallax opacity='1'   scrollOffset='0.25' size='35'/>


          </div>
        </div>

        <div className="scroll-space"></div>
      </div>
    );
  }
}

export default Professional;
