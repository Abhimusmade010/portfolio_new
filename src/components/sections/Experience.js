import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const TimelineItem = ({ exp, index }) => (
  <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-24 mb-12 last:mb-0">
    {/* Timeline Line */}
    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
    
    {/* Timeline Dot */}
    <div className="absolute left-[-4px] md:left-1/2 top-0 w-2 h-2 rounded-full bg-primary md:-translate-x-1/2 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />

    <div className={`md:flex ${index % 2 === 0 ? 'md:justify-end md:text-right' : 'md:col-start-2'}`}>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-md mb-4">
          {exp.period}
        </span>
        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
        <p className="text-primary font-medium mb-4">{exp.company}</p>
        
        <GlassCard className="p-5">
          <ul className="space-y-3 text-slate-400 text-sm text-left">
            {exp.points.map((point, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 mt-1.5" />
                {point}
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Lead Full Stack Developer",
      company: "TechNova Solutions",
      period: "2023 - PRESENT",
      points: [
        "Architected and deployed a scalable microservices backend using Node.js and AWS.",
        "Improved application performance by 40% through code optimization and Redis caching.",
        "Led a team of 5 developers in delivering a high-impact fintech dashboard."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Innovate Hub",
      period: "2022 - 2023",
      points: [
        "Developed core features for a MERN-stack social platform with 10k+ active users.",
        "Integrated third-party APIs for real-time data synchronization and notifications.",
        "Collaborated with UX designers to implement pixel-perfect responsive layouts."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Global Clients",
      period: "2021 - 2022",
      points: [
        "Delivered 15+ custom web solutions for diverse international clients.",
        "Specialized in high-conversion landing pages and e-commerce integrations.",
        "Maintained 100% client satisfaction rate through clear communication and timely delivery."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-width-container mx-auto px-6">
        <SectionHeader title="My Journey" subtitle="Career Timeline" />
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
