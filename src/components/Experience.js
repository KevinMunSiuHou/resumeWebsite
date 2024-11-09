// src/components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    { year: '2021 - Present', job: 'Software Engineer at XYZ Company' },
    { year: '2019 - 2021', job: 'Junior Developer at ABC Corp' },
    { year: '2018 - 2019', job: 'Intern at DEF Ltd' },
  ];

  return (
    <div id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-year">{exp.year}</div>
            <div className="timeline-content">
              <h3>{exp.job}</h3>
              <p>Details about the job responsibilities and achievements can go here.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
