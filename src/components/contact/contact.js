import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
      <section id="contact">
        <div id="contact-background"></div>
        <div id="contact-container">
          <h1> Contact Information </h1>
          <div id="contact-box">
            <div id="phone">
              <img src={require('../../assets/icon4.png')} />
              <span> 914-620-7262 </span>
            </div>
            <div id="email">
              <img src={require('../../assets/icon5.png')} />
              <span> krafftsimon@gmail.com </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
