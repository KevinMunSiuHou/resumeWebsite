import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    { year: 'Jun 2023 - Present', job: 'Software Engineer at XYZ Company' , jobDetails:'ZZZZZZZZ'},
    { year: 'August 2022 - May 2023', job: 'Junior Developer at ABC Corp' , jobDetails:'ZZZZZZZZ'},
    { year: '2018 - 2019', job: 'Intern at DEF Ltd' , jobDetails:'ZZZZZZZZ'},
  ];

  const topProjects = [
    { title: 'Project 1', description: 'Brief description of project 1' },
    { title: 'Project 2', description: 'Brief description of project 2' },
    { title: 'Project 3', description: 'Brief description of project 3' },
    { title: 'Project 4', description: 'Brief description of project 4' },
    { title: 'Project 5', description: 'Brief description of project 5' },
  ];

  return (
    <div>
      {/* Top 5 Projects Section */}
      <section id="projects" className="projects">
        <h2>Top 5 Projects</h2>
        <div className="projects-list">
          {topProjects.map((project, index) => (
            <div className="project-item" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-content">
                <h3>{exp.job}</h3>
                <p>{exp.jobDetails}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
