import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='contact-section'>
        <h2>
          Ask about a project! &nbsp; Get to know me! &nbsp; Send me spam!
        </h2>
        <form>
          <input
            value={ this.state.name }
            name='name'
            type='text'
            placeholder='name'
            onChange={ (e) => this.handleUserInput(e) }
            maxLength='100'/>
          <input
            value={ this.state.email }
            name='email'
            type='email'
            placeholder='email'
            onChange={ (e) => this.handleUserInput(e) }
            maxLength='100'/>
          <input
            value={ this.state.phone }
            type='phone'
            name='phone'
            placeholder='phone'
            onChange={ (e) => this.handleUserInput(e) }
            maxLength='100'/>

          <textarea
            value={ this.state.message }
            name='message'
            placeholder='message'
            rows='5'
            maxLength='1000'></textarea>

          <input
            type='submit'
            value='submit'/>
        </form>
      </div>
    );
  }
}

export default Contact;
