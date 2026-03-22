import React from 'react';
import { ExternalLink } from 'lucide-react';
import { resumeData } from '../../constants';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section section-container">
      <div className="section-header-center">
        <h2 className="pill-title">PROJECTS</h2>
      </div>
      
      <div className="projects-flex">
        {resumeData.projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="code-window">
               <div className="code-header">
                 <div className="mac-dots">
                   <span className="mac-dot red"></span>
                   <span className="mac-dot yellow"></span>
                   <span className="mac-dot green"></span>
                 </div>
                 <div className="project-header-title">
                   {project.title}
                 </div>
               </div>
               <div className="code-body">
                 <pre>
                   <code>
                     <span className="code-keyword">const</span> <span className="code-variable">project</span> <span className="code-operator">=</span> {'{'}
                     <br/>
                     {'  '}<span className="code-property">name</span>: <span className="code-string">'{project.title}'</span>,
                     <br/>
                     {'  '}<span className="code-property">date</span>: <span className="code-string">'{project.date}'</span>,
                     <br/>
                     {'  '}<span className="code-property">repository</span>: <span className="code-string">'{project.github}'</span>,
                     <br/>
                     {'  '}<span className="code-property">features</span>: [
                     <br/>
                     {project.description.slice(0, 3).map((desc, i) => (
                       <React.Fragment key={i}>
                         {'    '}<span className="code-string">"{desc.substring(0, 60)}..."</span>,
                         <br/>
                       </React.Fragment>
                     ))}
                     {'  '}]
                     <br/>
                     {'}'};
                   </code>
                 </pre>
                 <div className="project-links-bottom">
                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary small-btn">
                     <span>View Code</span>
                   </a>
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
