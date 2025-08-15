import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="uk-margin-small-left uk-margin-small-right uk-margin-xlarge-top uk-margin-xlarge-bottom">
      <h3 className="uk-margin-xlarge-left uk-light">Key Competencies</h3>
      <ul className="uk-margin-xlarge-left uk-margin-xlarge-right">
        <li>Cloud infrastructure management, Azure & AWS operations, Infrastructure automation</li>
        <li>FinOps best practices, System monitoring & Troubleshooting, Cloud governance & compliance</li>
        <li>Terraform & Python scripting, DevOps pipeline management, Cost optimization & reporting</li>
      </ul>
      
      <h3 className="uk-margin-xlarge-left uk-light">Professional Experience</h3>
      <div className="uk-margin-xlarge-left uk-margin-xlarge-right">
        <strong>Bank of Oklahoma Financial</strong> <span style={{ float: 'right' }}>Oct 2023 - Present</span><br />
        <em>Cloud FinOps Engineer</em><br />
        <ul>
          <li>Serve as primary FinOps engineer, implementing financial operations best practices for cloud cost optimization across Azure and AWS environments.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
