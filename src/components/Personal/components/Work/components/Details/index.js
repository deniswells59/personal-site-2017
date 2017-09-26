import React, { Component } from 'react';

import './style.css';

class Details extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className='detail-wrapper'>
        <h2 className='work-personal-title'>{ this.props.name }</h2>
        <img src={`/assets/${this.props.fileName}/main.png`} alt=""/>
        <p>{ this.props.desc }</p>
        <div className="personal-links">
          <p>Website - <a href={ this.props.site }>
            { this.props.site }
          </a></p>
        <p>Github - <a href={ this.props.github }>
            { this.props.github }
          </a></p>
        </div>
      </div>
    );
  }
}

export default Details;
