import React from 'react';
import './Contact.css';
import { resumeData } from '../../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-container">
      <div className="section-header-center">
        <h2 className="pill-title">CONTACT</h2>
      </div>
      
      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-desc">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="info-item">
            <Mail className="info-icon" size={24} />
            <div>
              <h4>Email</h4>
              <p>{resumeData.contact.email}</p>
            </div>
          </div>
          
          <div className="info-item">
            <Phone className="info-icon" size={24} />
            <div>
              <h4>Phone</h4>
              <p>{resumeData.contact.phone}</p>
            </div>
          </div>
          
          <div className="info-item">
            <MapPin className="info-icon" size={24} />
            <div>
              <h4>Location</h4>
              <p>{resumeData.education[0].location}</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <p className="form-title">Send Me A Message</p>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea rows="4" placeholder="Hello there..."></textarea>
            </div>
            <button className="btn-primary" style={{marginTop: '10px'}} type="submit">
              <span>SEND MESSAGE</span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
