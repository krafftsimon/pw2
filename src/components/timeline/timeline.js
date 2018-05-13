import React, { Component } from 'react';
import './timeline.css';

class Timeline extends Component {

  render() {
    return (
      <section id="timeline">
        <h1> Timeline </h1>
        <div id="timeline-container">
          <div className="timeline-event-container-right">
            <div className="timeline-event">
              <h1 className="timeline-event-title"> AlgoExpert </h1>
              <p className="timeline-event-description"> 
                Internship at AlgoExpert. Full-Stack developer.
              </p>
            </div>
          </div>
          <div className="timeline-event-container-left">
            <div className="timeline-event">
            <h1 className="timeline-event-title">McGill </h1>
              <p className="timeline-event-description"> 
                Graduated from McGill University from a Bachelor's
                degree in computer engineering.
              </p>
            </div>
          </div>
          <div className="timeline-event-container-right">
            <div className="timeline-event">
              <h1 className="timeline-event-title">McGill </h1>
              <p className="timeline-event-description"> 
                Graduated from McGill University from a Bachelor's
                degree in computer engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
  
export default Timeline;