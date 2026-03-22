import React from 'react';
import './About.css';
import { resumeData } from '../../constants';
import Murali from '../assest/murali.jpeg'; 

const About = () => {
  return (
    <section id="about" className="about-section section-container">
      <div className="about-grid">
        <div className="about-content-left">
          <h2 className="about-title">WHO I AM</h2>
          <p className="about-text">
            My name is <span className="text-pink">{resumeData.name}</span>. I am a highly motivated and driven {resumeData.role} with a passion for web development, software engineering, and machine learning.
          </p>
          <p className="about-text">
            I actively focus on building accessible, robust products and exploring datasets to solve real-world problems. Throughout my career, whether through training at {resumeData.education[0].institution} or working on solo projects, I have developed a strong foundation in modern programming languages and frameworks. 
          </p>
          <p className="about-text">
            I'm a quick learner with an intellectual curiosity that drives me to continuously adapt to new technologies and collaborate with amazing teams.
          </p>
        </div>
        
        <div className="about-content-right">
          <div className="vertical-text">
            ABOUT ME
          </div>
          <div className="about-image-wrapper">
             <div className="about-image-box">
                <img src={Murali} alt="Profile" className="about-image" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
