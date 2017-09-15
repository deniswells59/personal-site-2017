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

          </div>
          <div className="layer-wrapper">
            <Parallax opacity='0.4' size='100' xOffset=".15" yOffset=".15" />
            <Parallax opacity='0.6' size='200' xOffset=".25" yOffset=".25" />
            <Parallax opacity='1'   size='280' xOffset=".40"  yOffset=".3" />
          </div>
        </div>
      </div>
    );
  }
}

export default Professional;
