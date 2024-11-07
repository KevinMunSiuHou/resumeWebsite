// src/components/Skills.js
import React from 'react';

const Skills = () => {
  const skills = ['Python', 'SQL', 'Data Analysis', 'APIs', 'Machine Learning'];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
