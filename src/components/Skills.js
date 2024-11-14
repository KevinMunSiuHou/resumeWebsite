// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {title:'Python',level:'90%'},
    {title:'Microsoft SQL',level:'80%'},
    {title:'MySQL',level:'80%'},
    {title:'Dagster',level:'80%'},
    {title:'DBT',level:'75%'},
    {title:'MongoDB',level:'75%'},
    {title:'APIs',level:'70%'},
    {title:'Flask',level:'70%'},
    {title:'Git Version Control (GIT)',level:'70%'},
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
