import React, { Component } from 'react';
import { TimelineLite, TweenLite } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import './intro.css';


class Intro extends Component {

  constructor() {
    super()
    this.tween1 = null;
  }

  componentDidMount() {
    let t1 = new TimelineLite();
    let t2 = new TimelineLite();
    setTimeout(() => {
      t1.staggerTo(["#profile-name", "#profile-subtitle", "#intro-btn1", "#intro-btn2"], 0.5, {y:0, opacity: 1}, 0.2);
      t2.staggerTo(["#header-btn1", "#header-btn2", "#header-btn3"], 0.5, {y:0, opacity: 1}, 0.2);
    }, 500);
  }

  render() {
    return (
      <section id="intro">

        <div id="intro-background">
          <div id="stripe1"></div>
          <div id="stripe2"></div>
        </div>
        <div id="intro-container">
          <header>
            <div id="logo">SK</div>
            <div id="header-flex-space"></div>
            <a className="header-btn" id="header-btn1" target="_blank" href="../assets/RESUME.pdf">RESUME</a>
            <a className="header-btn" id="header-btn2" target="_blank" href="https://www.linkedin.com/in/krafftsimon">LINKEDIN</a>
            <a className="header-btn" id="header-btn3" target="_blank" href="https://www.github.com/krafftsimon">GITHUB</a>
          </header>
          <div id="profile">
            <h1 id="profile-name"> Simon Krafft </h1>
            <h3 id="profile-subtitle"> Web-Developer / Software Engineer </h3>
            <button className="intro-button" id="intro-btn1" onClick={() => TweenLite.to(window, 1, {scrollTo:"#projects"})}> Projects <FaArrowRight size={24} /> </button>
            <button className="intro-button" id="intro-btn2" onClick={() => TweenLite.to(window, 1, {scrollTo:"#contact"})}> Contact <FaArrowRight size={24} /> </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
