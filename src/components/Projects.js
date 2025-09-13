// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const topProjects = [
    { title: 'Data Schema Rebuild'},
    { title: 'Data Migration'},
    { title: 'In House Dashboard'},
    { title: 'Data Pipeline (ETL)'},
    { title: 'Automation Tasks'},
  ];

  return (
    <section id= "projects" className="projects">
      <h2>Top 5 Projects</h2>
      <ul>
        {topProjects.map((project, index) => (
          <li key={index}>
            {project.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
