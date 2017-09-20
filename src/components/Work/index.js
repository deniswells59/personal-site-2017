import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import SubNav from './SubNav';
import Details from './Details';

class Work extends Component {
  constructor(props) {
    super(props);

    let PROJECTS = {
      PT: 'PT',
      MT: 'MT',
      DW: 'DW'
    }

    this.state = {
      scrolledIn: false,
      currentWork: PROJECTS.PT,
      projects: PROJECTS,
    }

    this.renderDetails = this.renderDetails.bind(this);
    this.changeSubNav = this.changeSubNav.bind(this);

    this.scrollCheck = this.scrollCheck.bind(this);
    this.showWork = this.showWork.bind(this);
  }

  componentDidMount() {
    this.scrollCheck();
    document.addEventListener('scroll', this.scrollCheck);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollCheck);
  }

  scrollCheck() {
    let el = document.getElementById('scroll-trigger');
    let elemBottom = el.getBoundingClientRect().bottom;

    let isVisible = elemBottom <= window.innerHeight;

    if(isVisible) {
      this.showWork();
      this.cleanUpScroll();
    }
  }

  showWork() {
    let divs = document.getElementsByClassName('work-col');
    for(let key in divs) {
      if (divs.hasOwnProperty(key)) {
        this.swapClass(divs[key]);
      }
    }
  }

  swapClass(el) {
    let oldClass = el.getAttribute('class');
    let arr = oldClass.split(' ');
    let indexToRemove = arr.indexOf('before-scroll');

    arr.splice(indexToRemove, 1);
    arr.push('animated fadeIn');

    let newClass = arr.join(' ');
    el.setAttribute('class', newClass);
  }

  cleanUpScroll() {
    this.setState({ scrolledIn: true });
    document.removeEventListener('scroll', this.scrollCheck);
  }

  renderDetails(e) {
    e.preventDefault();
    let el = e.target;
    let id = el.getAttribute('data-site');

    this.setState({ currentWork: this.state.projects[id] }, this.changeSubNav);
  }


  changeSubNav() {
    let className = 'work-list-item';
    let newActive = document.getElementById( this.state.currentWork );
    let links = document.getElementsByClassName(className);

    for (var key in links) {
      if (links.hasOwnProperty(key)) {
        links[key].setAttribute('class', className);
      }
    }

    newActive.setAttribute('class', `${className} active`);
  }

  render() {
    return (
      <div className='row work-row'>
        <div
          className='col-xs-12 col-lg-4 work-col work-col-left before-scroll'
          id='scroll-trigger'>
          <h2 className='work-title'>Look what I can do!</h2>
          <p className='work-subtitle'>Click on these thingys to see each project</p>
          <ul className='work-list'>

            <SubNav
                active='true'
                clickHandler={ this.renderDetails }
                initials='PT'
                name='Prime Table'
                url='primetablestk.com' />

            <SubNav
                clickHandler={ this.renderDetails }
                initials='MT'
                name='Market Tavern'
                url='markettavernstk.com' />

            <SubNav
                clickHandler={ this.renderDetails }
                initials='DW'
                name='This Site'
                url='deniswells.com' />

          </ul>
        </div>

        <div
          className='col-xs-12 col-lg-8 work-col work-col-right before-scroll'>
          <Details
            current={ this.state.currentWork }
            projects={ this.state.projects }/>
        </div>

      </div>
    );
  }
}

export default Work;
