import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="title">

        <div className="main-title">
          <img src="/assets/line.gif" alt=""/>
          <h1>
            <span className="bigger">
              D
            </span>ENIS <span className="bigger">W</span>
          ELLS
          </h1>
          <img src="/assets/line.gif" alt=""/>
        </div>

       <div className="sub-title">
         <img src="/assets/alien-waving.gif" alt="atom!" className='atom-img'/>
         <p>Hi, I'm a
           <span className="pink"> Web Developer</span>
         </p>
         <img src="/assets/alien-waving.gif" alt="atom!" className='atom-img'/>
       </div>

      </div>
    );
  }
}

export default Header;
