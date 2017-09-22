import React, { Component } from 'react';

import Header from './components/Header';
import NavSite from './components/NavSite';

import './style.css';

class Professional extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Professional">

        <Header />

        <NavSite {...this.props}/>

      </div>
    );
  }
}

export default Professional;
