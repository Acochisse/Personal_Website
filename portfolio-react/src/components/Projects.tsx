import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="uk-margin-small-left uk-margin-small-right uk-margin-xlarge-top uk-margin-xlarge-bottom uk-padding-large">
      <h2 className="uk-margin-xlarge-left uk-light uk-heading-medium">Projects</h2>
      <div className="uk-margin-xlarge-left uk-margin-xlarge-right uk-grid-match uk-grid-large" uk-grid>
        
        {/* Project 1 */}
        <div className="uk-width-1-2@m">
          <div className="uk-card uk-card-default uk-card-hover" style={{backgroundColor: 'black', border: '1px solid #333'}}>
            <div className="uk-card-body">
              <h4 className="uk-card-title uk-light">Personal Portfolio Website</h4>
              <p className="uk-light">A responsive portfolio website built with React and UIkit, showcasing my professional experience and projects. Features include smooth scrolling navigation and mobile-responsive design.</p>
              <p className="uk-light">
                <strong>Technologies:</strong> React, TypeScript, UIkit, CSS
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="uk-width-1-2@m">
          <div className="uk-card uk-card-default uk-card-hover" style={{backgroundColor: 'black', border: '1px solid #333', minHeight: '300px'}}>
            <div className="uk-card-body">
              <h3 className="uk-card-title uk-light" style={{fontSize: '2rem', marginBottom: '2rem'}}>Cloud Cost Optimization Tool</h3>
              <p className="uk-light" style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
                Developed an automated tool for analyzing and optimizing cloud resource costs across Azure and AWS platforms, resulting in significant cost savings.
              </p>
              <div className="uk-light">
                <h4 style={{color: '#666', marginBottom: '1rem'}}>Technologies:</h4>
                <p style={{fontSize: '1.1rem'}}>Python, Azure SDK, AWS SDK, Terraform</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add more projects as needed */}
        
      </div>
    </section>
  );
};

export default Projects;
