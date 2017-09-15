import React, { Component } from 'react';
import './style.css';

class Cloud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size   : this.props.size || '200',
      color  : this.props.backgroundColor || '#fcfcfc',
      bottom : this.props.bottom  || '0',
    	left   : this.props.left || '0',
    	opacity: this.props.opacity || '1',
    }
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
           version="1.1" className="cloud"
           width={ `${this.state.size}px` }
           height={ `${this.state.size}px` }
           viewBox="0 0 46 50"
           style={{
             enableBackground:'new 0 0 46 46' ,
             bottom: `${this.state.bottom}px`,
             left:`${this.state.left}px`,
             opacity: this.state.opacity,
           }}>
        <g>
        	<path fill="transparent" stroke={ this.state.color }
            d="M39.354,21.998c0.07-0.401,0.114-0.812,0.114-1.232c0-3.926-3.183-7.108-7.108-7.108c-0.855,0-1.674,0.159-2.436,0.437   c-2.314-3.588-6.337-5.97-10.924-5.97c-7.18,0-13,5.82-13,13c0,0.337,0.025,0.668,0.051,0.999C2.576,22.996,0,26.131,0,29.875   c0,4.418,3.582,8,8,8h30c4.418,0,8-3.582,8-8C46,25.92,43.126,22.643,39.354,21.998z" />
        </g>
      </svg>
    );
  }
}

export default Cloud;
