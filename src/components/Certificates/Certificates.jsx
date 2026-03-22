import React from 'react';
import './Certificates.css';
import { resumeData } from '../../constants';

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section section-container">
      <div className="section-header-center">
        <h2 className="pill-title">CERTIFICATES</h2>
      </div>
      
      <div className="cert-flex">
        <div className="cert-list">
          {resumeData.certificates.map((cert, index) => (
             <div className="cert-card" key={`cert-${index}`}>
                <div className="cert-icon-bg">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div className="cert-details">
                  <p className="cert-date">{cert.date}</p>
                  <h3 className="cert-name">{cert.name}</h3>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">Link &rarr;</a>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
