// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const topProjects = [
    { title: 'Project 1', description: 'Brief description of project 1' },
    { title: 'Project 2', description: 'Brief description of project 2' },
    { title: 'Project 3', description: 'Brief description of project 3' },
    { title: 'Project 4', description: 'Brief description of project 4' },
    { title: 'Project 5', description: 'Brief description of project 5' },
  ];

  return (
    <section id= "projects" className="projects">
      <h2>Top 5 Projects</h2>
      <ul>
        {topProjects.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
