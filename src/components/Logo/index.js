import React, { Component } from 'react';
import './style.css';

class Logo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dur     : this.props.dur,
      halfDur : this.props.dur / 2,
      quarDur : this.props.dur / 4,
      delayDur: this.props.delay || 0,

      backgroundColor: this.props.backgroundColor || '#000',
    }
  }

  render() {
    return (
      <svg width={this.props.size}
           height={this.props.size}
           style={{backgroundColor: `${this.state.backgroundColor}`}}
           viewBox="0 0 100 100">
        <path id='D'
          fill='none' stroke="#fcfcfc" strokeWidth="1" strokeMiterlimit="0"
          d="M10,10 c60,3 60,70 0,73 L10,10" />
        <path id='W-1'
          fill='none' stroke="#fcfcfc" strokeWidth="1" strokeMiterlimit="0"
          d="M25,15 L41,70" />
        <path id='W-2'
          fill='none' stroke="#fcfcfc" strokeWidth="1" strokeMiterlimit="0"
          d="M42.5,74.5 L45.3,83 L60,65 L74.7,83 L90,15" />

          <animate xlinkHref='#D' attributeName='stroke-dashoffset' id="animateD"
            from='201' to='0' dur={`${this.state.halfDur}s`} begin={`${this.state.delayDur}s`} fill='freeze'
            keySplines="0 0.2 0.5 1; 0 0.2 0.5 1; 0 0.2 0.5 1; 0 0.2 0.5 1; 0 0.2 0.5 1; 0 0.2 0.5 1"
        		keyTimes="0;0.22;0.33;0.55;0.66;0.88;1" calcMode="spline"/>

          <animate xlinkHref='#W-2' attributeName='stroke-dashoffset'
            from='126' to='0' dur={`${this.state.halfDur}s`} begin={`${this.state.halfDur}s`} fill='freeze'
            keySplines="0 0.1 0.5 1; 0 0.1 0.5 1; 0 0.1 0.5 1; 0 0.1 0.5 1; 0 0.1 0.5 1; 0 0.1 0.5 1"
            keyTimes="0;0.11;0.33;0.55;0.66;0.88;1" calcMode="spline"/>

      </svg>
    );
  }
}

export default Logo;
