import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "ArogyaAi",
      role: "Full Stack Developer",
      period: "2023 - Present",
      description: "Developed backend appointment management and real-time consultation features."
    },
    {
      company: "SkillSwap",
      role: "MERN Stack Developer",
      period: "2022 - 2023",
      description: "Built a skill-sharing marketplace with real-time booking and notifications."
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="exp-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="glass-card exp-card animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
            <span className="period">{exp.period}</span>
            <h3>{exp.company}</h3>
            <h4>{exp.role}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
