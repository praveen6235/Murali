import React from 'react';
import { resumeData } from '../../constants';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} <span className="text-teal">{resumeData.name}</span>. All rights reserved.
        </p>
        <p className="footer-subtext">
          Built with React & Vite. Inspired by amazing portfolios across the web.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
