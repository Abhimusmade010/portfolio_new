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
      role: "Project Development Intern",
      company: "Pune Institute of Computer Technology (PICT)",
      period: "Jan 2026 – Mar 2026",
      points: [
        "Worked as a Project Development Intern on ArogyaCare, contributing to the backend development of a healthcare platform enabling the access of nearby doctors, booking appointment, and storage of patient visit.",
        "Developed robust RESTful APIs and implemented JWT-based authentication, role-based authorization for Doctors, Patients, and Pharmacists, and protected application routes, with input validation using Zod.",
        "Contributed to repository and live deployment for Arogya."
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
