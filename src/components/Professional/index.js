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
            <Parallax opacity='0.3' size='100' perRow='4' rows='5' />
            <Parallax opacity='0.5' size='200' perRow='3' rows='3' />
          </div>
        </div>
      </div>
    );
  }
}

export default Professional;
