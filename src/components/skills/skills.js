import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import VisibilitySensor from 'react-visibility-sensor';

import { techList, programmingLangList } from './skill-list';
import './skills.css';


class Skills extends Component {

  constructor() {
    super();
    this.state = {
      visiSensorActive: true
    }
  }

  showSkills(visible) {
    if (visible) {
      let t1 = new TimelineLite();
      t1.staggerTo(('.skill-box'), 0.4, {y: 0, x: 0, opacity: 1}, 0.1);
      this.setState({
        visiSensorActive: false
      });
    }
  }

  render() {
    return (
      <section id="skills">
        <div id="skills-background"></div>
        <div id="skills-container">
          <h1> Skills / Technologies </h1>
          <VisibilitySensor active={this.state.visiSensorActive} offset={{bottom:200}} onChange={e => this.showSkills(e)} />
          <h2> Technologies: </h2>
          <div className="skills-list">
            {techList.map(tech => {
              return (
                <a className="skill-item" target="_blank" href={tech.url}>
                  <img className="skill-item-img" src={require('../../assets/' + tech.imgUrl)} alt={tech.imgUrl} />
                  <h3 className="skill-item-name">{tech.name}</h3>
                </a>
              );
            })}
          </div>
          <h2> Programming Languages: </h2>
          <div className="skills-list">
            {programmingLangList.map(pLang => {
              return (
                <a className="skill-item" target="_blank" href={pLang.url}>
                  <img className="skill-item-img" src={require('../../assets/' + pLang.imgUrl)} alt={pLang.imgUrl} />
                  <h3 className="skill-item-name">{pLang.name}</h3>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
