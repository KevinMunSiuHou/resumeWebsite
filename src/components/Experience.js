// src/components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    { year: 'Jun 2023 - Present', company: 'DOO Group Sdn Bhd', job: 'Lead of Data Engineer', desc: 'Conducted data migration through analysis and script development, built Python API connectors for ETL automation, performed web scraping on social media, and managed projects and code using JIRA and GitLab.' },
    { year: 'Aug 2022 - May 2023', company: 'Forest Interactive Sdn Bhd', job: 'Senior Data Analyst | Backend Developer', desc: 'Developed an in-house dashboard with a Flask backend in collaboration with frontend developers, created Cron jobs for sales data ETL pipelines, and performed telecommunication data analysis, including text analysis and brand classification modeling.'  },
    { year: 'Apr 2022 - Jul 2022', company: 'DAOventures', job: 'Senior Data Analyst | Full Stack Developer', desc: 'Built an ETL pipeline for historical trade data from DEX, integrated AWS S3 and EC2 for data processing and summary generation, developed Python scripts for strategy backtesting, and optimized backend code to handle large data volumes while analyzing backtest results for strategy insights.'  },
    { year: 'Aug 2021 - Jul 2022', company: 'J&T Express (M) Sdn Bhd', job: 'Senior Data Analyst | Data Engineer', desc: 'Automated daily reporting tasks with Python scripts, developed data cleaning scripts integrated with Excel, and created ETL pipelines with cron jobs to handle logistics data.'},
    { year: 'Jul 2018 - Jan 2020', company: 'Huawei Technologies (M) Sdn Bhd', job: 'Network Design Engineer | Data Engineer', desc: 'Conducted data analysis with technical documentation, Excel, and Huawei tools to support product management, contributed technical solutions for bidding projects, and provided technical sales support, including network planning, design, and customer presentations.'  },
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
              <h4>{exp.company}</h4>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
