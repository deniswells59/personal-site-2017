import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Nav extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="col-xs-4">
        <div className={ `nav ${this.props.name}` }>
          <div className="nav-link-wrapper">
            <a
              onClick={ this.props.clickHandler }
              id={ this.props.name }
              className='nav-link'>
              { this.props.name }
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
