import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Star from '../Star';
import './style.css';

class Parallax extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 0,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let scrollPos = window.scrollY;
    this.setState({ top: scrollPos * this.props.scrollOffset });
  }

  generateStars() {
    let skyWidth  = window.innerWidth;
    let skyHeight = window.innerHeight;

    return this.createGrid(skyWidth, skyHeight);
  }

  createGrid(width, height) {
    let starsToReturn = [];
    let numberOfCols  = Math.floor(width  / 100);
    let numberOfRows  = Math.floor(height / 100);

    let colWidth  = width  / numberOfCols;
    let rowHeight = height / numberOfRows;

    for(let i = 0; i <= numberOfRows; i++) {
      let startPoint = rowHeight * -1;
      let top        = startPoint + rowHeight * i;

      let coords = {
        top,
        bottom: top + rowHeight,
      };

      for(let ii = 0; ii <= numberOfCols; ii++) {
        let beginPoint = colWidth * -1 ;
        let left       = beginPoint + colWidth * ii;

        coords.left  = left;
        coords.right = left + colWidth;

        starsToReturn.push(this.placeStar(coords, `${i}-${ii}`));
      }
    }
    return starsToReturn;
  }

  placeStar(coords, key) {
    let randomBottom = this.randomIntFromInterval(coords.bottom, coords.top);
    let randomLeft   = this.randomIntFromInterval(coords.left, coords.right);

    return <Star
              key={ key }
              size={ this.props.size }
              bottom={ randomBottom }
              left={ randomLeft }
              opacity={ this.props.opacity } />
  }

  randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  render() {
    return (
      <div className="Parallax"
           style={{ top: `${this.state.top}px` }}>
        { this.generateStars() }
      </div>
    );
  }
}

export default Parallax;
