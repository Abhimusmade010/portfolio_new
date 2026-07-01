import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Extracurricular from './components/sections/Extracurricular';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Extracurricular />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
