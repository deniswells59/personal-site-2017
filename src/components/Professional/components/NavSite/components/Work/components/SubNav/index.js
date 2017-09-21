import React, { Component } from 'react';

class Details extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <li
        id={ this.props.initials }
        className={ `work-list-item ${ this.props.active ? 'active' : '' }` }>
        <h3>
          <a
            onClick={ this.props.clickHandler }
            data-site={ this.props.initials }>{ this.props.name }</a>

        </h3>
        <p><a
            target='_blank'
            href={ `http://${this.props.url}` }>
          { this.props.url }
        </a></p>
      </li>
    );
  }
}

export default Details;
