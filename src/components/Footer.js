import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Kevin Mun</p>
        <p>Made with React</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/kevin-mun" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/kevinmun" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:kevin@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
