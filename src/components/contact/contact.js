import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div id="contact-background">
          <div id="contact-stripe1"></div>
          <div id="contact-stripe2"></div>
        </div>
        <div id="contact-container">
          <h1> Contact Information </h1>
          <div id="contact-box">
            <div id="phone">
              <img src={require('../../assets/icon4.png')} alt="phone icon" />
              <span> 914-620-7262 </span>
            </div>
            <div id="email">
              <img src={require('../../assets/icon5.png')} alt="mail icon" />
              <span> krafftsimon@gmail.com </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
