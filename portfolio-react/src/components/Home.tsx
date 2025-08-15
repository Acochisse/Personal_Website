import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="uk-margin-small-left uk-margin-small-right uk-margin-xlarge-top uk-margin-xlarge-bottom">
      <h1 className="uk-margin-xlarge-left uk-light uk-text-left uk-margin-xlarge-right">Blake Stewart</h1>
      <div className="uk-margin-xlarge-left uk-margin-xlarge-right uk-light">
        <p>
          918-510-7218 • lee.stewart909@gmail.com •{' '}
          <a href="https://linkedin.com/in/blake-l-stewart" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/blake-l-stewart
          </a>
          <br />
          Tulsa, OK •{' '}
          <a href="https://acochisse.github.io/Personal_Website/" target="_blank" rel="noopener noreferrer">
            acochisse.github.io/Personal_Website
          </a>{' '}
          •{' '}
          <a href="https://github.com/Acochisse" target="_blank" rel="noopener noreferrer">
            github.com/Acochisse
          </a>
        </p>
        
        <div className="uk-margin-medium-top uk-margin-medium-bottom">
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            I'm a proud Tulsa native with a lifelong fascination for the skies above and beyond. Growing up in the heart of Oklahoma, 
            I developed a deep appreciation for both aviation and astronomy – whether watching planes take off from Tulsa International 
            or stargazing under the expansive prairie sky.
          </p>
          
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            My professional journey has been anchored by my experience at BOKF, where I've had the opportunity to grow and contribute 
            to one of the region's leading financial institutions. This role has allowed me to combine analytical thinking with client 
            service, skills that complement my technical interests and attention to detail.
          </p>
          
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            When I'm not focused on work, you'll often find me tracking flight patterns, reading about the latest developments in 
            space exploration, or planning my next stargazing session away from the city lights. There's something compelling about 
            the intersection of human ingenuity and the vastness of space – from the engineering marvels that get us airborne to 
            the cosmic phenomena that remind us how small yet significant we are in the universe.
          </p>
          
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            Living in Tulsa has given me a strong foundation and sense of community, while my curiosities about aviation and 
            astronomy keep me looking toward the future and the endless possibilities that lie ahead.
          </p>
        </div>

        <h3 className="uk-text-left uk-margin-medium-top">Cloud FinOps Engineer</h3>
        <p>
          Cloud Engineer and FinOps specialist with 1+ years of experience optimizing cloud costs across Azure and AWS platforms.
          Primary FinOps engineer implementing financial operations best practices and building cost management processes.
          Expanding into Technical Project Management through cross-functional project leadership.
          Strong foundation in full-stack development, infrastructure automation, and stakeholder collaboration with proven ability to drive efficiency and deliver successful outcomes.
        </p>
      </div>
    </section>
  );
};

export default Home;
