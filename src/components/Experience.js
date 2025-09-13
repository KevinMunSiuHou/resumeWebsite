// src/components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    { 
      year: 'Jun 2023 - Present', 
      company: 'DOO Group Sdn Bhd', 
      job: 'Lead of Data Engineer', 
      desc: [
        {title:'ETL Pipeline Development and Maintenance', detail:'Designed and deployed ETL pipelines using Dagster; implemented Apache Flink to enhance scalability and performance in real-time data processing; continuously optimized pipelines by exploring new technologies.'},
        {title:'Data Schema Rebuild', detail:'Rebuilt Oceanbase schemas with normalization/denormalization, indexing, and partitioning to improve query performance, storage efficiency, and data consistency; implemented schema versioning and documentation for easier maintenance and onboarding.'},
        {title:'Data Synchronization and Monitoring', detail:'Investigated and resolved missing trade data caused by database synchronization issues; integrated Microsoft Teams webhooks to deliver real-time anomaly alerts and system notifications.'},
        {title:'API Connector Development', detail:'Researched and developed Python connectors for API integration; automated data extraction and processing workflows using cron jobs to improve efficiency.'},
        {title:'Project Management & Version Control', detail:'Tracked progress and managed tasks with JIRA; organized manpower allocation to match skill sets with project needs; managed GitLab codebase for efficient version control and team collaboration.'}
      ] 
    },
    { 
      year: 'Aug 2022 - May 2023', 
      company: 'Forest Interactive Sdn Bhd', 
      job: 'Senior Data Analyst | Backend Developer', 
      desc: [
        {title:'In-House Dashboard Development', detail:'Backend development focus on Flask app; Collaborating closely with frontend developer for seamless integration.'},
        {title:'ETL Pipeline Development and Maintenance', detail:'Building cron jobs to summarize sales data; Establishing robust pipelines for streamlined operations'},
        {title:'Data Analysis', detail:'Conducting analysis on telecommunication data; Developing models for text analysis and brand classification.'}
      ]  
    },
    { 
      year: 'Apr 2022 - Jul 2022', 
      company: 'DAOventures', 
      job: 'Senior Data Analyst | Full Stack Developer', 
      desc: [
        {title:'ETL Pipeline Development and Maintenance', detail:'Designed and deployed ETL pipelines for data collection of historical trade data; Creation of API keys for data processing'},
        {title:'AWS Integration for Data Processing', detail:'Establishing connections via AWS S3 and EC2 for data processing; Generating summary data from processed data.'},
        {title:'Backtesting Trading Strategies', detail:'Creating backtest Python scripts to evaluate client strategies.'},
        {title:'Data Analysis', detail:'Analyzing backtest results to identify strategy strengths and weaknesses; Optimizing backend code performance for handling large data volumes.'}
      ]  
    },
    { 
      year: 'Aug 2021 - Jul 2022', 
      company: 'J&T Express (M) Sdn Bhd', 
      job: 'Senior Data Analyst | Data Engineer', 
      desc: [
        {title:'Automate Routine Tasks', detail:'Developed Python scripts for automate daily reporting tasks.'},
        {title:'Data Transformation', detail:'Developed Python scripts for modifying dirty data and working along with Microsoft Excel. Automate Daily Tasks.'},
        {title:'ETL Pipeline Development and Maintenance', detail:'Create cron jobs to collect with logistics internal data (Wrong Sorting data).'}
      ] 
    },
    { 
      year: 'Jul 2018 - Jan 2020', 
      company: 'Huawei Technologies (M) Sdn Bhd', 
      job: 'Network Design Engineer | Data Engineer', 
      desc: [
        {title:'Data Analysis', detail:'Prepare technical documentation and presentations; Utilize Microsoft Excel and Huawei Software tools for configuration and analysis; Support daily routine tasks of the product manager'},
        {title:'Bidding Project Contributions', detail:'Provide technical solutions and proposals for project bids; Respond to clarification requests with detailed technical information.'},
        {title:'Technical Sales Support Activities', detail:'Engage in sales projects by offering technical support services; Conduct network planning, design, and evaluation; Present technical solutions to customers effectively.'}
      ] 
    },
  ];

  return (
    <div id="experience" className="experience">
      <h2>Working Experiences</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            {/* <div className="timeline-year">{exp.year}</div> */}
            <div className="timeline-content">
              <h3>{exp.job}</h3>
              <div className="company-year">
                <span className="company-name">{exp.company}</span>
                <span className="year">{exp.year}</span>
              </div>
              <div className="timeline-content-list">
                <ul>
                  {exp.desc.map((point, i) => (
                    <li key={i}>
                      {point.title && <strong>{point.title}: </strong>}
                      {point.detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
