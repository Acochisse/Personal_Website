import React from 'react';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillData: SkillCategory[] = [
  {
    category: 'Cloud Platforms',
    skills: ['AWS', 'Microsoft Azure'],
  },
  {
    category: 'FinOps & Cost Management',
    skills: [
      'Apptio Cloudability',
      'Tagging Strategy & Governance',
      'Chargeback / Showback',
      'Budgeting & Forecasting Controls',
      'Anomaly Detection',
      'Cost Allocation Frameworks',
    ],
  },
  {
    category: 'Infrastructure & Automation',
    skills: ['Terraform', 'Terraform Cloud', 'Python', 'PowerShell', 'Bash'],
  },
  {
    category: 'DevOps & Tooling',
    skills: ['Azure DevOps', 'GitHub', 'GitLab', 'Bitbucket', 'CircleCI'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillData.map((cat) => (
            <div key={cat.category} className="skill-category">
              <h3 className="skill-category-title">{cat.category}</h3>
              <ul className="skill-list">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
