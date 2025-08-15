import React, { useEffect } from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';
import './styles/styles.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    // Initialize UIkit icons
    UIkit.use(Icons);
    
    // Initialize smooth scrolling
    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const elementId = target.getAttribute('href') || '';
      const element = document.querySelector(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <hr className="uk-margin-xlarge-top uk-margin-xlarge-left uk-margin-xlarge-right" />
      <div className="uk-margin-xlarge-top">
        <About />
      </div>
      <hr className="uk-margin-xlarge-top uk-margin-xlarge-left uk-margin-xlarge-right" />
      <div className="uk-margin-xlarge-top">
        <Projects />
      </div>
    </div>
  );
}

export default App;
