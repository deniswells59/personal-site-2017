import React, { Component } from 'react';

import DetailList from '../DetailList';

class Details extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let detail;
    switch(this.props.current) {
      case 'PP':
        detail = <DetailList
                    title='Pine + Palm'
                    github='https://github.com/deniswells59/pine-and-or-palm'
                    link='http://pineandorpalm.com'
                    description="I created this for a local band in my hometown. We initially worked on an e-commerce store front, but canned it because the band didn't have enough merch to populate it. It's all still there if they want it or if you want it (please hire me..). I used React, Redux, and Headless Wordpress."
                    fileName='PP'/>;
        break;
      case 'PT':
        detail = <DetailList
                    title='Prime Table'
                    github='https://github.com/deniswells59/PrimeTable'
                    link='http://primetablestk.com'
                    description="I made this. It was my first time getting paid to design something. I went for something dark and sophisticated and modern. So, check it out. I used jQuery and, full disclosure, a little bit of an HTML template that I bought for $14. :)"
                    fileName='PT'/>;
        break;
      case 'MT':
      detail = <DetailList
                  title='Market Tavern'
                  github='https://github.com/deniswells59/MarketTavern'
                  link='https://marketavernstk.com'
                  description="My Prime Table website was so successful, the owners asked me to redesign their other site. This is also where my girlfriend works so I really had to put in the work. I decided to have a little respect for the tech on this one. I used Webpack to bundle and Babel to compile my front end code. So there's some ES6 in there because that's what I like! And jQuery because smooth scrolling sucks without it."
                  fileName='MT'/>;
      break;
      case 'DW':
        detail = <DetailList
                    title='This Site'
                    github='https://github.com/deniswells59/personal-site-2017'
                    link='http://deniswells.com'
                    description='React, Webpack, Node + Express backend because I can. Explore, my dude.'
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
