import React, { Component } from 'react';
import { TimelineLite } from "gsap";
import VisibilitySensor from "react-visibility-sensor";
import { isMobileOnly } from 'react-device-detect';

import projectList from './project-list';
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
      t1.staggerTo(['#boilerplate', '#vote', '#gt', '#pong', '#fractal', '#bomberman', '#proc', '#rfid'], 2 , {opacity: 1, height: 600, ease: "Expo.easeOut"}, 0.5);
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
            {projectList.map(project => {
              return (
                <div className="project-placeholder">
                  <div className="project-div" id={project.id}>
                    <div className="project-pic"></div>
                    <div className="project-desc">
                      <h1>{project.title}</h1>
                      <p>{project.description}</p>
                      {project.github && <a type="button" target="_blank" href={project.github}>GITHUB</a>}
                      {project.visit && <a type="button" target="_blank" href={project.visit}>VISIT</a>}
                      {project.poster && <a type="button" target="_blank" href={project.poster}>POSTER PRESENTATION</a>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
