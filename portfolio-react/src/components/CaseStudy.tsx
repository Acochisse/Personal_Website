import React from 'react';

interface CaseBlock {
  label: string;
  content: React.ReactNode;
}

const blocks: CaseBlock[] = [
  {
    label: 'Problem',
    content:
      'Unallocated cloud spend had grown to ~$91,000 in December — representing costs with no business owner, no cost center, and no visibility. Leadership had limited ability to hold teams accountable or forecast accurately.',
  },
  {
    label: 'Approach',
    content: (
      <ul className="case-list">
        <li>Deployed and configured <strong>Apptio Cloudability</strong> as the primary FinOps platform.</li>
        <li>Designed and enforced a company-wide <strong>tagging and cost allocation governance</strong> framework.</li>
        <li>Worked cross-functionally with application and infrastructure teams to close tagging gaps.</li>
        <li>Automated reporting and alerting workflows to surface anomalies and untagged resource spikes in near real-time.</li>
      </ul>
    ),
  },
  {
    label: 'Result',
    content: (
      <>
        Unallocated cloud spend dropped from <strong>~$91,000 in December</strong> to{' '}
        <strong>~$5,200 in March</strong> — a <strong>94% reduction in 3 months</strong>. Every dollar now has a
        business owner, enabling accurate chargeback, forecasting, and ongoing spend accountability.
      </>
    ),
  },
  {
    label: 'Tools Used',
    content: (
      <div className="tools-grid">
        {['Apptio Cloudability', 'Microsoft Azure', 'AWS', 'Tagging Governance Controls', 'Reporting Automation', 'Budget Alerting'].map(
          (tool) => (
            <span key={tool} className="tool-tag">
              {tool}
            </span>
          )
        )}
      </div>
    ),
  },
];

const CaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="section section-alt">
      <div className="container">
        <p className="section-eyebrow">Featured Case Study</p>
        <h2 className="section-title">Reducing Unallocated Cloud Spend by 94%</h2>
        <p className="section-lead">
          Bank of Oklahoma Financial (BOKF) · Cloud FinOps Engineer · Oct 2023 – Present
        </p>
        <div className="case-blocks">
          {blocks.map((b) => (
            <div key={b.label} className="case-block">
              <h3 className="case-label">{b.label}</h3>
              <div className="case-content">{b.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
