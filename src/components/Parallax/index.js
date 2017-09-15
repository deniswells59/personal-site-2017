import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cloud from '../Cloud';
import './style.css';

class Parallax extends Component {
  constructor(props) {
    super(props);

  }

  generateClouds() {
    let numPerRow = 2;
    let rows = 2;
    let clouds = [];
    let width  = window.innerWidth;
    let height = window.innerHeight;
    let size   = parseInt(this.props.size);

    let xOffset = width  * this.props.xOffset;
    let yOffset = height * this.props.yOffset;

    let sum = 0;
    while(sum <= width) {
      sum += xOffset + (size / 2);
      numPerRow += 1;
    }

    let newSum = 0;
    while(newSum <= height) {
      newSum += yOffset + (size / 2);
      rows += 1;
    }

    let center = {
      top: height - (height * .3),
      bottom: height - (height * .3 + height * .5),
      left: width * .5 - width * .2 - size,
      right: width * .5 + width * .2 + size
    }

    for(let i = 0; i < rows; i++) {
      let bottom = yOffset * i;
      let top    = bottom + size;

      for(let ii = 0; ii < numPerRow; ii++) {
        let left = xOffset * ii;

				if(i % 2) left += xOffset / 2;
        let right = left + size;

        if(left < center.left || right > center.right ||
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
