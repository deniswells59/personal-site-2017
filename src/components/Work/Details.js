import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.site;
  }

  render() {
    return (
      <div>
        <div className="work-img-wrapper">
          <div
            className="work-img-other"
            style={{
              backgroundImage: `url('/assets/${this.props.site.fileName}/other.png')` }}
              ></div>
          <div
            className="work-img-main"
            style={{
              backgroundImage: `url('/assets/${this.props.site.fileName}/main.png')` }}
            ></div>
        </div>
        <div className="work-header">
          <h2>
            { this.props.site.title }
          </h2>
          <div className="social-links">
            <a href={ this.props.site.links.github } className="work-href">
              <i className="icon-social-github icons"></i>
            </a>
            <a href={ this.props.site.links.site } className="work-href">
              <i className="icon-link icons"></i>
            </a>
          </div>
        </div>

        <p className='work-desc'>
          { this.props.site.description }
        </p>
      </div>
    );
  }
}

export default Details;
