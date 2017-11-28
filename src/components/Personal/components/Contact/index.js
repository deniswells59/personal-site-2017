import React, { Component } from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';

import './style.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      messageSent: false,
      status: 'Send'
    }

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleCallback = this.googleCallback.bind(this);
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  googleCallback() {
    let data = {
      gresponse: this.recaptcha.getResponse(),
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    }

    if(!data.gresponse) data.gresponse = 'yo';

    let valid = this.validateForm(data);

    if(valid) {
      this.props.sendMail(data)
      .then(res => {
        if(res.status === 400) {
          this.setState({ status: 'Zoinks! There was an Error! Try Again....' });

          setTimeout(() => {
            this.setState({ status: 'Send', messageSent: false });
          }, 3000);
        } else {
          this.setState({ status: 'Message Sent!' });
        }
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ messageSent: true });

    this.recaptcha.execute();
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
      <div className='contact-old' id='contact'>
        <div className="title">
          <h2>Contact</h2>
            <form className='old-form' onSubmit={ this.handleSubmit }>

              <label htmlFor='name'>Name</label>
              <input
                required='true'
                value={ this.state.name }
                name='name'
                type='text'
                placeholder='name'
                onChange={ (e) => this.handleUserInput(e) }
                maxLength='100'/>

              <label htmlFor='email'>Email</label>
              <input
                required='true'
                value={ this.state.email }
                name='email'
                type='email'
                placeholder='email'
                onChange={ (e) => this.handleUserInput(e) }
                maxLength='100'/>

              <label htmlFor='phone'>Phone</label>
              <input
                value={ this.state.phone }
                type='phone'
                name='phone'
                placeholder='phone'
                onChange={ (e) => this.handleUserInput(e) }
                maxLength='100'/>

              <label htmlFor='message'>Message</label>
              <textarea
                required='true'
                value={ this.state.message }
                name='message'
                placeholder='message'
                onChange={ (e) => this.handleUserInput(e) }
                rows='5'
                maxLength='1000'></textarea>

              <input
                disabled={this.state.messageSent}
                type='submit'
                readOnly='true'
                value={ this.state.status }/>
              <Recaptcha
                ref={ ref => this.recaptcha = ref }
                sitekey='6LdvgDIUAAAAAMWp277wkKbdFJlMZr_24cHVIaJO'
                onResolved={ this.googleCallback } />

            </form>

        </div>
      </div>
    );
  }
}

export default Contact;
