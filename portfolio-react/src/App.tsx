import React from 'react';
import './styles/styles.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import CaseStudy from './components/CaseStudy';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <CaseStudy />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
