import React from 'react';

interface ServiceItem {
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    title: 'Cloud Cost Optimization',
    description:
      'Identify and eliminate wasteful spend across AWS and Azure — right-sizing, reserved capacity planning, and idle resource cleanup.',
  },
  {
    title: 'Cost Allocation & Tagging Strategy',
    description:
      'Design and enforce tagging governance frameworks that give every dollar a business owner and a cost center.',
  },
  {
    title: 'Governance & Spend Controls',
    description:
      'Implement budget policies, approval workflows, and guardrails that prevent runaway spend before it hits the invoice.',
  },
  {
    title: 'Reporting & Anomaly Detection',
    description:
      'Build automated dashboards and alerting pipelines that surface cost anomalies and chargeback/showback reports to stakeholders.',
  },
  {
    title: 'Cloud Operations (AWS & Azure)',
    description:
      'Day-to-day cloud engineering support — infrastructure automation with Terraform, pipeline management, and incident response.',
  },
];

const WhatIDo: React.FC = () => {
  return (
    <section id="what-i-do" className="section">
      <div className="container">
        <h2 className="section-title">What I Do</h2>
        <div className="cards-grid">
          {services.map((s) => (
            <div key={s.title} className="card">
              <h3 className="card-title">{s.title}</h3>
              <p className="card-body">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
