// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {title:'Python',level:'80%'},
    {title:'SQL',level:'70%'},
    {title:'Data Analysis',level:'80%'},
    {title:'APIs',level:'70%'},
    {title:'Machine Learning',level:'80%'},
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="skill">
            <span className="skill-name">{skill.title}</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: skill.level }}></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
