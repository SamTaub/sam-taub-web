import React from 'react';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Connect from './components/Connect/Connect';

const App = () => {
  return (
    <div>
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Connect />
    </div>
  );
};

export default App;
