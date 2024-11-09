// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <img src="/profile.jpg" alt="Profile" className="profile-picture" />
    <h1>Kevin Mun</h1>
    <h3>Lead Data Engineer · Backend Developer · Data Scientist</h3>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
