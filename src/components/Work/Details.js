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

  render() {
    let detail;
    switch(this.props.current) {
      case 'PT':
        detail = <DetailList
                    title='Prime Table'
                    github='http://github.com'
                    link='http://primetablestk.com'
                    description='Lorem ipsum'
                    fileName='PT'/>;
        break;
      case 'MT':
      detail = <DetailList
                  title='Market Tavern'
                  github='http://github.com'
                  link='http://primetablestk.com'
                  description='Lorem ipsum'
                  fileName='MT'/>;
      break;
      case 'DW':
        detail = <DetailList
                    title='This Site'
                    github='http://github.com'
                    link='http://primetablestk.com'
                    description='Lorem ipsum'
                    fileName='DW'/>;
        break;
      }

    return (
      <div>
        { detail }
      </div>
    );
  }
}

export default Details;
