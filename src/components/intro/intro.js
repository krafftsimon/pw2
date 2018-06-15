import React, { Component } from 'react';
import { TimelineLite, TweenLite } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import GoThreeBars from 'react-icons/lib/go/three-bars';
import GoX from 'react-icons/lib/go/x';
import GoFileText from 'react-icons/lib/go/file-text';
import './intro.css';


class Intro extends Component {

  constructor() {
    super()
    this.tween1 = null;
    this.state = {
      mobileMenuOpen: false
    };
  }

  componentDidMount() {
    let t1 = new TimelineLite();
    let t2 = new TimelineLite();
    let t3 = new TimelineLite();
    setTimeout(() => {
      t1.staggerTo(["#profile-name", "#profile-subtitle", "#intro-btn1", "#intro-btn2"], 0.5, {y:0, opacity: 1}, 0.2);
      t2.staggerTo(["#header-btn1", "#header-btn2", "#header-btn3"], 0.5, {y:0, opacity: 1}, 0.2);
      t3.staggerTo([
        "#code-line-1", 
        "#code-line-2", 
        "#code-line-3",
        "#code-line-4",
        "#code-line-5",
        "#code-line-6",
        "#code-line-7",
        "#code-line-8"
      ], 0.6, {width: 150}, 0.4);
    }, 500);
    document.addEventListener('click', (e) => this.closeMenuEventListener(e));
    document.addEventListener('touchend', (e) => this.closeMenuEventListener(e));
  }

  openMobileMenu() {
    TweenLite.to("#mobile-menu", 0.3, {opacity: 1, width:"200px", height:"300px"});
    setTimeout(() => {
      this.setState({
        mobileMenuOpen: true
      });
    }, 10);
  }

  closeMobileMenu() {
    this.setState({
    mobileMenuOpen: false
    });
    TweenLite.to("#mobile-menu", 0.3, {opacity: 0, width:"0", height:"0"});
  }

  closeMenuEventListener(e) {
    if (this.state.mobileMenuOpen) {
      let menu = document.getElementById('mobile-menu');
      if (e.target !== menu && !menu.contains(e.target)) {
        TweenLite.to("#mobile-menu", 0.3, {opacity: 0, width:"0", height:"0"});
        this.setState({
          mobileMenuOpen: false
        });
      }
    }
  }

  render() {
    return (
      <section id="intro">

        <div id="intro-background">
          <div id="stripe1"></div>
          <div id="stripe2"></div>
        </div> 
        <div id="intro-container">
          <div id="comp-illustration">
            <div id="code-line-1"></div>
            <div id="code-line-2"></div>
            <div id="code-line-3"></div>
            <div id="code-line-4"></div>
            <div id="code-line-5"></div>
            <div id="code-line-6"></div>
            <div id="code-line-7"></div>
            <div id="code-line-8"></div>
          </div>
          <div id="mobile-menu-open" onClick={() => this.openMobileMenu()}> <GoThreeBars size={40} /> </div>
          <div id="mobile-menu">
            <div id="mobile-menu-close" onClick={() => this.closeMobileMenu()}> <GoX size={40} /> </div>
            <div id="mobile-menu-spacer"></div>
            <a className="mobile-menu-btn" target="_blank" href="https://www.github.com/krafftsimon">
              <img className="mobile-menu-icon" src={require('../../assets/github-icon.png')} alt="github logo" />
              <span className="mobile-menu-text">Github</span>
            </a>
            <a className="mobile-menu-btn" target="_blank" href="https://www.linkedin.com/in/krafftsimon">
              <img className="mobile-menu-icon" src={require('../../assets/linkedin-icon.png')} alt="linkedin logo"/>
              <span className="mobile-menu-text">Linkedin</span>
            </a>
            <a className="mobile-menu-btn" target="_blank" href="../assets/RESUME.pdf">
              <GoFileText id="mobile-menu-icon-3" size={32} color='black' />
              <span className="mobile-menu-text">Resume</span>
            </a>
          </div>
          <header>
            <div id="logo">SK</div>
            <div id="header-flex-space"></div>
            <div id="header-btn-container">
              <a className="header-btn" id="header-btn1" target="_blank" href="../assets/RESUME.pdf">RESUME</a>
              <a className="header-btn" id="header-btn2" target="_blank" href="https://www.linkedin.com/in/krafftsimon">LINKEDIN</a>
              <a className="header-btn" id="header-btn3" target="_blank" href="https://www.github.com/krafftsimon">GITHUB</a>
            </div>
          </header>
          <div id="profile">
            <h1 id="profile-name"> Simon Krafft </h1>
            <h3 id="profile-subtitle"> Web-Developer / Software Engineer </h3>
            <button className="intro-button" id="intro-btn1" onClick={() => TweenLite.to(window, 1, {scrollTo:"#projects"})}> PROJECTS <FaArrowRight size={24} style={{marginLeft: 8}} /> </button>
            <button className="intro-button" id="intro-btn2" onClick={() => TweenLite.to(window, 1, {scrollTo:"#contact"})}> CONTACT <FaArrowRight size={24} style={{marginLeft: 8}} /> </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
