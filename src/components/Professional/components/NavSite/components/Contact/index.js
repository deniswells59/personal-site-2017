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
      messageSent: false
    }

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    }

    let valid = this.validateForm(data);
    this.props.sendMail(data)
      .then(res => {
        console.log('RES', res);
      })
  }

  validateForm(data) {
    let valid = true;
    for(let key in data) {
      if (data.hasOwnProperty(key)) {
        if(key !== 'phone' && !data[key] && data[key].length <= 0) {
          valid = false;
        }
      }
    }
    return valid;
  }

  render() {
    return (
      <div className='contact-section animated fadeIn'>
        <h2>
          Ask about a project! &nbsp; Get to know me! &nbsp; Send me spam!
        </h2>
        <form onSubmit={ this.handleSubmit }>
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
            onChange={ (e) => this.handleUserInput(e) }
            rows='5'
            maxLength='1000'></textarea>

          <input
            disabled={this.state.messageSent}
            type='submit'
            value='send'/>
        </form>
      </div>
    );
  }
}

export default Contact;
