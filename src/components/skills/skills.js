import React, { Component } from 'react';
import { TimelineLite } from "gsap";
import VisibilitySensor from "react-visibility-sensor";
import './skills.css';

const pLanguages = [
  {
    name:"HTML",
    star:"★★★",
    emptyStar:"☆",
  },
  {
    name:"CSS",
    star:"★★★",
    emptyStar:"☆",
  },
  {
    name:"JavaScript",
    star:"★★★",
    emptyStar:"☆",
  },
  {
    name:"TypeScript",
    star:"★★",
    emptyStar:"☆☆",
  },
  {
    name:"Python",
    star:"★★",
    emptyStar:"☆☆",
  },
  {
    name:"C++",
    star:"★★",
    emptyStar:"☆☆",
  },
  {
    name:"Java",
    star:"★★",
    emptyStar:"☆☆",
  },
  {
    name:"VHDL",
    star:"★★",
    emptyStar:"☆☆",
  },
  {
    name:"ARM Assembly",
    star:"★★",
    emptyStar:"☆☆",
  },
]

const technologies = [
  {
    name:"Angular 2+",
    star:"★★★",
    emptyStar:"☆",
  },
  {
    name:"React",
    star:"★★★",
    emptyStar:"☆",
  },
  {
    name:"Redux",
    star:"★★",
    emptyStar:"☆☆",
  },
  {
    name:"Node.js",
    star:"★★★",
    emptyStar:"☆",
  },
  {
    name:"Express.js",
    star:"★★★",
    emptyStar:"☆",
  },
  {
    name:"Socket.io",
    star:"★★",
    emptyStar:"☆☆",
  },
]

const languages = [
  {
    name:"English",
    star:"★★★★",
    emptyStar:"",
  },
  {
    name:"French",
    star:"★★★★",
    emptyStar:"",
  }
]

class Skills extends Component {

  constructor() {
    super();
    this.state = {
      visiSensorActive: true
    }
  }

  componentDidMount() {
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
            {technologies.map(skill => {
              return (
                <div className="skill-box">
                  <span> {skill.name} </span>
                  <span className="star-rating">
                    {skill.star}
                    <span className="empty-star">
                      {skill.emptyStar}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
          <h2> Programming Languages: </h2>
          <div className="skills-list">
            {pLanguages.map(skill => {
              return (
                <div className="skill-box">
                  <span> {skill.name} </span>
                  <span className="star-rating">
                    {skill.star}
                    <span className="empty-star">
                      {skill.emptyStar}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
          <h2> Languages: </h2>
          <div className="skills-list">
            {languages.map(skill => {
              return (
                <div className="skill-box">
                  <span> {skill.name} </span>
                  <span className="star-rating">
                    {skill.star}
                    <span className="empty-star">
                      {skill.emptyStar}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
