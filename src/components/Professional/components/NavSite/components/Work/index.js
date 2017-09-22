import React, { Component } from 'react';
import './style.css';

import SubNav from './components/SubNav';
import Details from './components/Details';

class Work extends Component {
  constructor(props) {
    super(props);

    // Project Constants + Also File System for Images :P
    let PROJECTS = {
      PT: 'PT',
      MT: 'MT',
      DW: 'DW'
    }

    this.state = {
      scrolledIn : false,       // Watches for scroll Animation
      currentWork: PROJECTS.PT, // Sets initial Project
      projects   : PROJECTS,
    }

    this.renderDetails = this.renderDetails.bind(this);
    this.changeSubNav  = this.changeSubNav.bind(this);

    this.scrollCheck   = this.scrollCheck.bind(this);
    this.swapWorkClass = this.swapWorkClass.bind(this);
  }

  componentDidMount() {
    // Init scroll animation event
    this.scrollCheck();
    document.addEventListener('scroll', this.scrollCheck);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollCheck);
  }

  scrollCheck() {
    let el = document.getElementById('scroll-trigger'); // Div
    let elemBottom = el.getBoundingClientRect().bottom; // Bottom on div

    let isVisible = elemBottom <= window.innerHeight; // Once Bottom is viewable

    if(isVisible) {
      this.cleanUpScroll(); // Kill the event
      // Wait until the pics load
      this.loadPicsThenShow(() => {
        this.swapWorkClass('work-col', 'hide', 'animated fadeIn'); // Then show em!
      });
    }
  }

  loadPicsThenShow(cb) { // Waits for Pics to load
    let imagesSources = [
      `/assets/${this.state.currentWork}/main.png`,
      `/assets/${this.state.currentWork}/other.png`
    ];

    this.props.asyncLoop({ // We gotta do it async
      length : 2,
      functionToLoop : (loop, i) => {
        var myImage = new Image();
        myImage.src = imagesSources[i];
        myImage.onload = loop;
      },
      callback: cb,
    });
  }

  swapWorkClass(elClass, toRemove, toAdd) {
    let divs = document.getElementsByClassName(elClass); // Find the divs

    // Loop them
    for(let key in divs) {
      if (divs.hasOwnProperty(key)) {
        this.props.removeClass(divs[key], toRemove); // remove some classes
        this.props.addClass(divs[key], toAdd);       // add some classes
      }
    }
  }

  cleanUpScroll() { // Kill the events!
    this.setState({ scrolledIn: true });
    document.removeEventListener('scroll', this.scrollCheck);
  }

  renderDetails(e) {
    e.preventDefault();
    let el = e.target;
    let id = el.getAttribute('data-site');

    this.swapWorkClass('work-col-right', 'fadeIn', 'fadeOut');// Hide the old stuff

    setTimeout(() => { // Wait for animation
      this.setState({ currentWork: this.state.projects[id] }, () => { // CHANGE!
        this.changeSubNav();          // Change the nav bar!
        this.loadPicsThenShow(() => { // Load the Pics!
          this.swapWorkClass('work-col-right', 'fadeOut', 'fadeIn'); // Show it!
        });
      });
    }, 400);
  }

  changeSubNav() {
    let className = 'work-list-item';
    let newActive = document.getElementById( this.state.currentWork );
    let links = document.getElementsByClassName(className);

    for (var key in links) {
      if (links.hasOwnProperty(key)) {
        this.props.removeClass(links[key], 'active');
      }
    }

    this.props.addClass(newActive, 'active');
  }

  render() {
    let deets = <Details
                  {...this.props}
                  current={ this.state.currentWork } />;
    if(window.innerWidth <= 1200) {
      let work = Object.keys(this.state.projects);
      deets = work.map((i, idx) => {
        return <Details
                  key={idx}
                  {...this.props}
                  current={ i } />;
      });
    }
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
          { deets }
        </div>

      </div>
    );
  }
}

export default Work;
