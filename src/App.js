// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <div className="container">
        <div className="left-section">
          <div className="left-top-section">
            <Projects />
          </div>
          <div className="left-middle-section">
            <Skills />
          </div>
          <div className="left-bottom-section">
            <Education />
          </div>
        </div>
        <div className="right-section">
          <Experience />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;
