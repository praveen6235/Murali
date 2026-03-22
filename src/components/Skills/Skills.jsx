import React from 'react';
import './Skills.css';
import { resumeData } from '../../constants';

const Skills = () => {
  const allSkills = [
    ...resumeData.skills.languages,
    ...resumeData.skills.frameworks,
    ...resumeData.skills.tools,
    ...resumeData.skills.softSkills
  ];

  return (
    <section id="skills" className="skills-section section-container">
      <div className="section-header-center">
        <h2 className="pill-title">SKILLS</h2>
      </div>
      
      <div className="skills-marquee">
        <div className="skills-grid">
          {allSkills.map((skill, index) => (
             <div className="skill-card" key={index}>
               <div className="skill-glow"></div>
               <div className="skill-content">
                  <p>{skill}</p>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
