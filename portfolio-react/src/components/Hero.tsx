import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <p className="hero-eyebrow">Cloud FinOps Engineer</p>
        <h1 className="hero-name">Blake Stewart</h1>
        <p className="hero-headline">
          Reduced unallocated cloud spend by 94%&nbsp;
          <span className="hero-stat">($91k → $5.2k)</span> in 3 months.
        </p>
        <p className="hero-sub">
          I work at the intersection of cloud engineering, financial governance, and automation —
          turning raw cloud spend data into clear cost accountability and measurable savings.
        </p>
        <div className="hero-actions">
          <a href="#case-study" className="btn btn-primary">See the Case Study</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
