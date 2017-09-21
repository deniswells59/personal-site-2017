import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
  render() {
    return (
      <div className='contact-section'>
        <h2>
          Ask about a project! &nbsp; Get to know me! &nbsp; Send me spam!
        </h2>
        <form>
          <input type='text' placeholder='name'/>
          <input type='email' placeholder='email'/>
          <input type='phone' placeholder='phone'/>
          <texarea placeholder='message'></texarea>
          <input type="submit" value='submit'/>
        </form>
      </div>
    );
  }
}

export default Contact;
