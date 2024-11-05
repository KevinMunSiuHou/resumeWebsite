// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <img src="/profile.png" alt="Profile" className="profile-picture" />
    <h1>John Doe</h1>
    <p>Software Developer</p>
    <nav>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
