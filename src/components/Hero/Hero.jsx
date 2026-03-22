import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../../constants';
import './Hero.css';
import Resume from '../assest/resume.pdf'

const Hero = () => {
  return (
    <section id="hero" className="hero-section section-container">
      <div className="hero-left">
        <h1 className="hero-name">
          Hello, <br />
          This is <span className="gradient-text">{resumeData.name}</span>, <br />
          I'm a  <span className="text-teal">{resumeData.role}</span>.
        </h1>
        <div className="hero-socials">
          <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
          <a href={`mailto:${resumeData.contact.email}`}><Mail size={20}/></a>
        </div>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            <span>CONTACT ME</span>
          </a>
          <a href={Resume} className="btn-secondary">
            <span>GET RESUME</span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="code-window">
          <div className="code-header">
            <div className="mac-dots">
              <span className="mac-dot red"></span>
              <span className="mac-dot yellow"></span>
              <span className="mac-dot green"></span>
            </div>
          </div>
          <div className="code-body">
            <pre>
              <code>
                <span className="code-keyword">const</span> <span className="code-variable">coder</span> <span className="code-operator">=</span> {'{'}
                <br/>
                {'  '}<span className="code-property">name</span>: <span className="code-string">'{resumeData.name}'</span>,
                <br/>
                {'  '}<span className="code-property">skills</span>: [
                <br/>
                {'    '}<span className="code-string">'Python'</span>, <span className="code-string">'React'</span>, <span className="code-string">'SQL'</span>,
                <br/>
                {'    '}<span className="code-string">'Machine Learning'</span>, <span className="code-string">'CSS'</span>
                <br/>
                {'  '}],
                <br/>
                {'  '}<span className="code-method">hardWorker</span>: <span className="code-keyword">function</span>() {'{'}
                <br/>
                {'    '}<span className="code-keyword">return</span> <span className="code-boolean">true</span>;
                <br/>
                {'  }'},
                <br/>
                {'  '}<span className="code-method">problemSolver</span>: <span className="code-keyword">function</span>() {'{'}
                <br/>
                {'    '}<span className="code-keyword">return</span> <span className="code-boolean">true</span>;
                <br/>
                {'  }'}
                <br/>
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
