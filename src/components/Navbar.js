import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">Abhishek<span>.</span></a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="contact-btn">Hire Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
