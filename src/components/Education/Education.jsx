import React from 'react';
import './Education.css';
import { resumeData } from '../../constants';

const Education = () => {
  return (
    <section id="education" className="education-section section-container">
      <div className="section-header-center">
        <h2 className="pill-title">EDUCATION</h2>
      </div>
      
      <div className="edu-flex">
        <div className="edu-list">
          {resumeData.education.map((edu, index) => (
             <div className="edu-card" key={`edu-${index}`}>
                <div className="edu-icon-bg">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </div>
                <div className="edu-details">
                  <p className="edu-date">{edu.date}</p>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-inst">{edu.institution}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
