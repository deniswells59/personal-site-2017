import React, { Component } from 'react';

class DetailList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className='work-img-wrapper'>
          <div
            className="work-img-other"
            style={{
              backgroundImage: `url('/assets/${this.props.fileName}/other.png')` }}
              ></div>
          <div
            className="work-img-main"
            style={{
              backgroundImage: `url('/assets/${this.props.fileName}/main.png')` }}
            ></div>
        </div>

        <div className="work-header">
          <h2 className='work-title'>
            { this.props.title }
          </h2>
          <div className="work-links">
            <a target="_blank" href={ this.props.github } className="work-href">
              <i className="icon-social-github icons"></i>
            </a>
            <a target="_blank" href={ this.props.link } className="work-href">
              <i className="icon-link icons"></i>
            </a>
          </div>
        </div>

        <p className='work-desc'>
          { this.props.description }
        </p>
      </div>
    );
  }
}

export default DetailList;
