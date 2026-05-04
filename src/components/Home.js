import React from 'react';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="hero-content animate-fade-in">
        <span className="greeting">Hello, I'm</span>
        <h1>Abhishek</h1>
        <h2 className="title">Full Stack Developer & UI/UX Enthusiast</h2>
        <p>
          I build high-performance, scalable web applications with a focus on 
          exceptional user experience and clean architecture.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="secondary-btn">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
