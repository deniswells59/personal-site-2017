import React, { Component } from 'react';

import Logo from './components/Logo';
import Parallax from './components/Parallax';

class Header extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    let arrow = document.querySelector('.icon-arrow-down');
    arrow.addEventListener('click', this.scrollDown);
  }

  componentWillUnmount() {
    let arrow = document.querySelector('.icon-arrow-down');
    arrow.removeEventListener('click', this.scrollDown);
  }

  scrollDown(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="header">

        <div className="info-wrapper animated fadeIn" id="info">

          <Logo size="100" dur="2" delay=".5" backgroundColor="transparent" />


          <p className='title'>Hi, I'm a Web Developer</p>

          <hr/>
          <div className="social-links">
            <a href="https://github.com/deniswells59" target="_blank" className="icon-href">
              <i className="icon-social-github icons"></i>
            </a>
            <a href="https://www.linkedin.com/in/denis-wells-426726119/" target="_blank" className="icon-href">
              <i className="icon-social-linkedin icons"></i>
            </a>
            <a href="https://twitter.com/deniswells59" target="_blank" className="icon-href">
              <i className="icon-social-twitter icons"></i>
            </a>
          </div>

        </div>

        <div className="call-to-action animated fadeIn animated-delay">
          <p className="cta-text">THERE'S PROOF DOWN HERE</p>
          <a data-scroll href="#site" className='scroll-link'>
            <i className="icon-arrow-down icons bounce"></i>
          </a>
        </div>
        <div className="layer-wrapper">

          <Parallax {...this.props} opacity='0.3' scrollOffset='0.55' size='20'/>
          <Parallax {...this.props} opacity='0.6' scrollOffset='0.65' size='30'/>
          <Parallax {...this.props} opacity='0.8' scrollOffset='1.00' size='35'/>

        </div>

      </div>
    );
  }
}

export default Header;
