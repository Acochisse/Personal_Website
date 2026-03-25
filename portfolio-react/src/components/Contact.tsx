import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-lead">
          Open to FinOps, Cloud Financial Operations, and Cloud Engineering roles.
          Feel free to reach out directly.
        </p>
        <div className="contact-links">
          <a
            href="mailto:lee.stewart909@gmail.com"
            className="contact-link"
            aria-label="Email"
          >
            <span className="contact-icon">✉</span>
            <span>lee.stewart909@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/blake-l-stewart"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="LinkedIn"
          >
            <span className="contact-icon">in</span>
            <span>linkedin.com/in/blake-l-stewart</span>
          </a>
          <a
            href="https://github.com/Acochisse"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="GitHub"
          >
            <span className="contact-icon">⌥</span>
            <span>github.com/Acochisse</span>
          </a>
          <a
            href="/assets/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Resume"
          >
            <span className="contact-icon">↓</span>
            <span>Download Resume</span>
          </a>
        </div>
        <p className="footer-note">Tulsa, OK · Available for remote roles</p>
      </div>
    </section>
  );
};

export default Contact;
