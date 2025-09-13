// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  return (<section id="about" className="about">
    <h2>About Me</h2>
    <p>Experienced Data Engineer with over {yearsOfExperience} years of expertise across Telecommunication, Logistics, and FinTech sectors (2018–present). Skilled in data migration, pipeline development, and access control management. Proficient in Python, MSSQL, MySQL, MongoDB, and modern data platforms such as Snowflake and OceanBase. Hands-on experience with cloud and streaming technologies including AWS S3 and Apache Flink. Strong background in building and optimizing ETL/ELT workflows, schema design (including Snowflake schema rebuilds), and workflow automation using Microsoft Power Automate and Azure. Adept at leveraging tools such as Dagster, GitLab, and JIRA to drive efficient project delivery. Holds a Data Science degree from the University of Malaya with proven analytical and problem-solving skills.</p>
  </section>);
};

export default About;
