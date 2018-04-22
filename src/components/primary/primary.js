import React, { Component } from 'react';
import { TimelineLite } from "gsap";
import VisibilitySensor from "react-visibility-sensor";
import { isMobileOnly } from 'react-device-detect';
import './primary.css';

class Primary extends Component {

  constructor() {
    super();
    this.state = {
      visiSensorActive: true
    }
    this.tween1 = null;
  }

  componentDidMount() {
  }

  showSkills(visible) {
    if (visible && !isMobileOnly) {
      let t1 = new TimelineLite();
      t1.staggerTo(['#box1', '#box2', '#box3'], 1, {opacity:1, y:0}, 0.3);
      this.setState({
        visiSensorActive: false
      });
    }
  }

  render() {
    return (
      <section id="primary">
        <h1 id="about-me"> About Me </h1>

        <div id="primary-container">
          <div className="primary-box" id="box1">
            <img src={require('../../assets/icon3.png')} />
            <h1> Computer Engineering </h1>
            <p> At McGill Univerity, I have learned a wide variety of topics ranging from microelectronics to operating systems.
                I worked on many different projects including a File System, a Pipelined processor, an AM receiver,
                a humidity-sensing RFID, etc...</p>
          </div>
          <div className="primary-box" id="box2">
            <img src={require('../../assets/icon2.png')} />
            <h1> Web Development </h1>
            <p> I love designing websites using Moderm Front-End libraries like React and Angular.
                Most of the web apps I have created use Node.js on the Back-End, and are hosted on
                a Linux VM on Google Compute Engine. I am currently learning Golang and trying to become
                more familiar with the Google Cloud features.</p>
          </div>
          <div className="primary-box" id="box3">
            <img src={require('../../assets/icon1.png')} />
            <h1> Software Engineering </h1>
            <p> My passion for problem solving, and computers, combined with desire to create things has naturally led
            me to programming. I attach a lot of importance to clean, organized, and
            well-tested code. I also always try to optimize what is optimizable.</p>
          </div>
        </div>
        <VisibilitySensor active={this.state.visiSensorActive} onChange={e => this.showSkills(e)} />
      </section>
    )
  }
}

export default Primary;
