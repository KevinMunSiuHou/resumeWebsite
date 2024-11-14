// src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  const educations = [
    {course:'Master of Data Science',univerity:'University of Malaya',year:'2022-2023'},
    {course:'Degree in Electronic Engineering',univerity:'University of Malaysia Malacca',year:'2014-2018'},
  ];
  return (
  <div id="education" className="education">
    <h2>Education</h2>
    <div className='education-level'>
      {educations.map((edu, index) => (
        <div className="education-content">
          <h3>{edu.course}</h3>
          <h4>{edu.univerity}</h4>
          <p>{edu.year}</p>
        </div>
        ))}
    </div>
  </div>
  );
};

export default Education;
