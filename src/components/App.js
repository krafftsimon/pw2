import React, { Component } from 'react';
import Intro from './intro/intro';
import Primary from './primary/primary';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Contact from './contact/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="global-container">
        <Intro />
        <Primary />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
