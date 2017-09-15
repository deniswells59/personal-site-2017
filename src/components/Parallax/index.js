import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cloud from '../Cloud';
import './style.css';

class Parallax extends Component {
  constructor(props) {
    super(props);

  }

  generateClouds() {
    let clouds = [];
    let width  = window.innerWidth;
    let height = window.innerHeight;

    let xOffset      = width  / this.props.perRow;
    let yOffset      = height / this.props.rows;

    let center = {
      top: height - (height * .3),
      bottom: height - (height * .3 + height * .5),
      left: width * .5 - width * .2 - this.props.size,
      right: width * .5 + width * .2
    }

    for(let i = 0; i < this.props.rows; i++) {
      let bottom = yOffset * i + yOffset / 3;
      let top    = bottom + parseInt(this.props.size * .5);

      for(let ii = 0; ii < this.props.perRow; ii++) {
        let left = xOffset * ii + xOffset / 4;
        let right = left + width * .4;
				if(i % 2) left += xOffset / 2;

        if(left < center.left || left > center.right ||
            bottom > center.top || top < center.bottom) {
          clouds.push(
            <Cloud key={ `${i}-${ii}` }
            size={ this.props.size }
            left={ left }
            bottom={ bottom }
            opacity= { this.props.opacity }
            />
          )
        }

      }
    }

    return clouds;
  }

  render() {
    return (
      <div className="Parallax">
        { this.generateClouds() }
      </div>
    );
  }
}

export default Parallax;
