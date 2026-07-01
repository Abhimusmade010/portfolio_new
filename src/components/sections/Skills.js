import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { Code2, Database, Layout, Settings, Terminal, Cpu } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon, delay }) => (
  <GlassCard delay={delay} className="group hover:border-primary/50 transition-colors">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill}
          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </GlassCard>
);

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      icon: Terminal,
      skills: ["C", "C++", "JavaScript", "Java"],
      delay: 0.1
    },
    {
      title: "Web Technologies",
      icon: Layout,
      skills: ["HTML", "CSS", "ReactJs", "NodeJs", "ExpressJs", "JWT"],
      delay: 0.2
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "Redis"],
      delay: 0.3
    },
    {
      title: "Tools",
      icon: Settings,
      skills: ["SQL WorkBench", "MongoDB Atlas", "Git", "GitHub", "Postman", "Swagger", "VS Code"],
      delay: 0.4
    },
    {
      title: "Cloud & APIs",
      icon: Code2,
      skills: ["AWS S3", "Cloudinary", "Gemini AI"],
      delay: 0.5
    },
    {
      title: "Coursework",
      icon: Cpu,
      skills: ["OOP", "OS", "DSA", "DBMS", "CN", "Software Engineering"],
      delay: 0.6
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-width-container mx-auto px-6">
        <SectionHeader title="Technical Arsenal" subtitle="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <SkillCategory key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
