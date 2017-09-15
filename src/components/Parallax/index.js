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

    for(let i = 0; i < this.props.rows; i++) {
      let bottom = yOffset * i + yOffset / 3;

      for(let ii = 0; ii < this.props.perRow; ii++) {
        let left = xOffset * ii + xOffset / 4;
				if(i % 2) left += xOffset / 2;

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
