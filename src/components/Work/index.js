import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Work extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-lg-6 work-col">
          <h2>Prime Table</h2>
          <p className='work-link'><a href="#">primetablestk.com</a></p>
        </div>
        <div className="col-xs-12 col-lg-6">
          <div className="Nav">
            WORK
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
