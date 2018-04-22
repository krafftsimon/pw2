import React, { Component } from 'react';
import { TimelineLite } from "gsap";
import VisibilitySensor from "react-visibility-sensor";
import { isMobileOnly } from 'react-device-detect';
import './projects.css';

class Projects extends Component {

  constructor() {
    super();
    this.state = {
      visiSensorActive: true
    }
  }

  componentDidMount() {
  }

  showSkills(visible) {
    if (visible && !isMobileOnly) {
      let t1 = new TimelineLite();
      t1.staggerTo(['#vote', '#gt', '#pong', '#fractal', '#bomberman', '#proc', '#rfid'], 2 , {opacity: 1, height: 600, ease: "Expo.easeOut"}, 0.5);
      this.setState({
        visiSensorActive: false
      });
    }
  }

  render() {
    return (
      <section id="projects">
        <div id="projects-container">
          <h1 id="projects-title"> Projects / Portfolio </h1>
          <VisibilitySensor active={this.state.visiSensorActive} offset={{bottom:200}} onChange={e => this.showSkills(e)} />
          <div id="projects-list">
            <div className="project-placeholder">
              <div className="project-div" id="vote">
                <div className="project-pic"></div>
                <div className="project-desc">
                  <h1> VotE </h1>
                  <p> Informational web app for the popular mmorpg World of Warcraft. </p>
                  <a type="button" target="_blank" href="https://www.github.com/krafftsimon/vote"> GITHUB </a>
                  <a type="button" target="_blank" href="http://vote.krafftsimon.com"> VISIT </a>
                </div>
              </div>
            </div>
            <div className="project-placeholder">
              <div className="project-div" id="gt">
                <div className="project-pic"></div>
                <div className="project-desc">
                  <h1> Gainz-Tracker </h1>
                  <p> Web app to record and visualize your progress at the gym.</p>
                  <a type="button" target="_blank" href="https://www.github.com/krafftsimon/gainz-tracker"> GITHUB </a>
                  <a type="button" target="_blank" href="http://gainz-tracker.com"> VISIT </a>
                </div>
              </div>
            </div>
            <div className="project-placeholder">
              <div className="project-div" id="pong">
                <div className="project-pic"></div>
                <div className="project-desc">
                  <h1> Pong Mini-Game </h1>
                  <p> Online multiplayer pong mini-game, using socket.io. </p>
                  <a type="button" target="_blank" href="https://www.github.com/krafftsimon/mp-pong-game"> GITHUB </a>
                  <a type="button" target="_blank" href="http://pong.krafftsimon.com"> VISIT </a>
                </div>
              </div>
            </div>
            <div className="project-placeholder">
              <div className="project-div" id="fractal">
                <div className="project-pic"></div>
                <div className="project-desc">
                  <h1> Fractal-Renderer </h1>
                  <p> Web application to visualize the Mandelbrot set. </p>
                  <a type="button" target="_blank" href="https://www.github.com/krafftsimon/fractal-renderer"> GITHUB </a>
                  <a type="button" target="_blank" href="http://fractal.krafftsimon.com"> VISIT </a>
                </div>
              </div>
            </div>
            <div className="project-placeholder">
              <div className="project-div" id="bomberman">
                <div className="project-pic"></div>
                <div className="project-desc">
                  <h1> Bomberman Reloaded </h1>
                  <p> Java mini-game inspired by the original, old-school Bomberman game. </p>
                  <a type="button" target="_blank" href="https://www.github.com/krafftsimon/bomberman-minigame"> GITHUB </a>
                </div>
              </div>
            </div>
            <div className="project-placeholder">
              <div className="project-div" id="proc">
                <div className="project-pic"></div>
                <div className="project-desc">
                  <h1> Pipelined Processor </h1>
                  <p> MIPS pipelined processor with 5 stages and coded using VHDL. </p>
                  <a type="button" target="_blank" href="https://www.github.com/krafftsimon/ECSE425_GROUP5"> GITHUB </a>
                </div>
              </div>
            </div>
            <div className="project-placeholder">
              <div className="project-div" id="rfid">
                <div className="project-pic"></div>
                <div className="project-desc">
                  <h1> Humidity Sensing RFID </h1>
                  <p> Practical Radio-Frequency Identification Device (RFID), capable of detecting changes in humidity. </p>
                  <a type="button" target="_blank" href="../assets/RFID_Poster_Presentation.pdf"> POSTER PRESENTATION </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
