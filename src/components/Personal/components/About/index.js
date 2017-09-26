import React, { Component } from 'react';
import './style.css';

class About extends Component {
  render() {
    return (
      <div className='about-wrapper' id='about'>
        <div className="title">
          <img src='/assets/duck.jpg' alt=""/>
          <h2>About</h2>
        </div>
        <p>Hello, this is website. I created this myself using HTML and CSS.</p>
        <p>I do develop and design websites. If you want to, you can pay me for it.</p>
        <p>Thanks!</p>
      </div>
    );
  }
}

export default About;
