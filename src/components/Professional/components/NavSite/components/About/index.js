import React, { Component } from 'react';
import './style.css';

class About extends Component {
  render() {
    return (
      <div className='row animated fadeIn'>
        <div className='col-xs-12'>
          <div className='about-text-wrapper'>
            <p>
              Hello. My name is Denis Wells and I am a Full Stack Web Developer. I first started to coding in 2013. A year later, I saw the
              show 'Mr. Robot' and decided, "Yeah, I'll quit my job! That's what I wanna do!" Then, a few months later, I started watching 'Silicon Valley' and was like,
              "Yeah, okay. I'll do that."
            </p>
            <p>
              That next year, in 2016, I left my job at Costco, moved to the Bay Area, learned as much as I could from peers, professionals, and failed job interviews and came back home.
              Now, I am an employed Web Developer. I also run my own freelance gig on the side. Whether you need a full web app, a static website, or you just
              want me to throw a Wordpress site together, I wanna work with you.
            </p>
            <br />
            <p>
              Reach out to me. Or be my friend:
            </p>

            <div className='contact-mini'>
              <p>
                <i className='icon-envelope'></i>
                <a href='mailto:me@deniswells.com'>me@deniswells.com</a>
              </p>
              <p>
                <i className='icon-phone'></i>
                <a href='tel:2097516168'>2097516168</a>
              </p>
              <p>
                <i className='icon-social-twitter'></i>
                <a href='https://twitter.com/deniswells59'>@deniswells59</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
