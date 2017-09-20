import React, { Component } from 'react';
import './style.css';

class Star extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size   : this.props.size || '40',
      color  : this.props.backgroundColor || '#fcfcfc',
      bottom : this.props.bottom  || '0',
    	left   : this.props.left || '0',
    	opacity: this.props.opacity || '1',
    	fill   : this.props.fill || 'transparent',
    }

    this.oscillate = this.oscillate.bind(this);
  }

  componentDidMount() {
    // this.animation = setInterval(this.oscillate, 1000);
    this.setState({ cap: this.state.left + 5 });
  }

  oscillate() {
    if(this.state.left < this.state.cap) {
      this.setState({ left: this.state.left++ });
    }
  }

  render() {

    return (
      <svg width={ this.state.size }
           height={ this.state.size }
           className='star'
           viewBox='0 0 100 100'
           style={{
             bottom: `${this.state.bottom}px`,
             left: `${this.state.left}px`,
             opacity: this.props.opacity,
           }}>

        <filter id='blur'>
          <feGaussianBlur in='SourceGraphic' stdDeviation='2' />
        </filter>

        <circle cx='50' cy='50' r='5' fill='#fcfcfc'
                filter='url(#blur)' />
      </svg>
    );
  }
}

export default Star;
