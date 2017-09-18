import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Work from './Work';
import './style.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: 'work',
      navLib: {
        'work': <Work />,
      }
    }

    this.renderNav = this.renderNav.bind(this);
  }

  componentDidMount() {
    this.renderNav();
  }

  renderNav() {
    let nav = this.state.nav;
    this.setState({ navEl: this.state.navLib[nav] });
  }

  render() {
    return (
      <div id='site' className="scroll-space">
        { this.state.navEl }
      </div>
    );
  }
}

export default Nav;
