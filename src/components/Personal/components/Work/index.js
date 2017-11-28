import React, { Component } from 'react';
import Details from './components/Details';
import './style.css';

class Work extends Component {
  render() {
    return (
      <div className='work-old' id='work'>
        <div className="title">
          <h2>My Work</h2>
          <img
            width='100%'
            src='/assets/kitter.gif'
            alt='kit-kat'/>
        </div>

        <Details
          name='Pine + Palm'
          fileName='PP'
          desc="I created this for a local band in my hometown. We initially worked on an e-commerce store front, but canned it because the band didn't have enough merch to populate it. It's all still there if they want it or if you want it (please hire me..). I used React, Redux, and Headless Wordpress."
          site='http://pineandorpalm.com'
          github='https://github.com/deniswells59/pine-and-or-palm' />
        <Details
          name='Prime Table'
          fileName='PT'
          desc="I made this. It was my first time getting paid to design something. I went for something dark and sophisticated and modern. So, check it out. I used jQuery and, full disclosure, a little bit of an HTML template that I bought for $14. :)"
          site='http://primetablestk.com'
          github='https://github.com/deniswells59/PrimeTable' />
        <Details
          name='Market Tavern'
          fileName='MT'
          desc="My Prime Table website was so successful, the owners asked me to redesign their other site. This is also where my girlfriend works so I really had to put in the work. I decided to have a little respect for the tech on this one. I used Webpack to bundle and Babel to compile my front end code. So there's some ES6 in there because that's what I like! And jQuery because smooth scrolling sucks without it."
          site='http://markettavernstk.com'
          github='https://github.com/deniswells59/MarketTavern' />
        <Details
          name='My Site'
          fileName='DW'
          desc="React, Webpack, Node + Express backend because I can. Explore, my dude."
          site='http://deniswells.com'
          github='https://github.com/deniswells59/personal-site-2017' />

      </div>
    );
  }
}

export default Work;
