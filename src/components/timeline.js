import React from 'react'
import dev from '../images/dev.jpg'
import pitt from '../images/pitt.png'
import icf from '../images/icf.jpg'

const timeline = () => (
  <>
    <div className="timeline is-centered">
      <div className="timeline-item is-warning">
        <div className="timeline-marker is-warning is-image is-48x48">
          <img src={icf} alt="ICF" />
        </div>
        <div className="timeline-content">
          <p className="heading">July 2019 -current</p>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="timeline-item is-warning">
        <div className="timeline-marker is-warning is-image is-48x48">
          <img src={dev} alt="DEV" />
        </div>
        <div className="timeline-content">
          <p className="heading">Nov 2017 - Feb 2018</p>
          <p>DEV, Software Engineering Intern</p>
        </div>
      </div>
      <div className="timeline-item is-warning">
        <div className="timeline-marker is-warning is-image is-48x48">
          <img src={pitt} alt="Pitt" />
        </div>
        <div className="timeline-content">
          <p className="heading">2015 - 2017</p>
          <p>BSc in Computer Science, Courses</p>
          <p>University of Pittsburgh</p>
        </div>
      </div>
      <header className="timeline-header">
        <span className="tag is-large is-danger">
          <a
            className="has-text-white"
            href="https://drive.google.com/file/d/180XAMKzLXvOmXbS2rAZXgDflE3aLrZ0K/view?usp=sharing"
          >
            VIEW MY RESUME
          </a>
        </span>
      </header>
    </div>
  </>
);

export default timeline
