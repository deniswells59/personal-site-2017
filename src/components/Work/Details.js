import React, { Component } from 'react';
import { logThis } from '../../common';

import DetailList from './DetailList';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: this.props.projects
    }
  }

  componentDidMount() {
    console.log(logThis);
  }

  render() {
    let detail;
    if(this.props.current === 'PT') {
      detail =
      <DetailList
        title='Prime Table'
        github='http://github.com'
        link='http://primetablestk.com'
        description='Lorem ipsum'
        fileName='PT'/>;
    } else {
      detail =
      <DetailList
        title='Market Tavern'
        github='http://github.com'
        link='http://primetablestk.com'
        description='Lorem ipsum'
        fileName='MT'/>;
    }

    return (
      <div>
        { detail }
      </div>
    );
  }
}

export default Details;
