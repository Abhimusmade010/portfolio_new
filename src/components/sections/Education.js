import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const RoadmapItem = ({ edu, index }) => (
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
        className="w-full relative group"
      >
        <GlassCard className="p-6 relative overflow-hidden group-hover:border-primary/50 transition-colors">
          <div className="absolute top-0 right-0 p-8 text-primary opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <GraduationCap size={100} />
          </div>
          
          <div className={`flex justify-between items-start mb-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-md">
              {edu.period}
            </span>
            <span className="text-primary font-bold flex items-center gap-1">
              <Award size={14}/> {edu.grade}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
          <div className={`flex items-center gap-2 text-slate-400 mb-6 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
            <BookOpen size={16} />
            <span>{edu.institution}</span>
          </div>

          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
            {edu.courses.map(course => (
              <span key={course} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-500 font-medium">
                {course}
              </span>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  </div>
);

const Education = () => {
  const education = [
    {
      degree: "S.S.C. (10th)",
      institution: "W.E.S.N.E.S",
      period: "2021",
      grade: "97.60%",
      courses: ["General Science", "Mathematics"]
    },
    {
      degree: "H.S.C. (12th)",
      institution: "C.H.I.J.C",
      period: "2021 - 2023",
      grade: "80.67%",
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    },
    {
      degree: "B.E. (Information Technology)",
      institution: "Pune Institute Of Computer Technology, Pune",
      period: "2023 - 2027",
      grade: "9.33/10 (Aggregate)",
      courses: ["Object Oriented Programming", "Operating System", "Data Structures & Algorithms", "DBMS", "Computer Networks", "Software Engineering"]
    }
  ];

  return (
    <section id="education" className="py-24 bg-white/[0.02]">
      <div className="max-width-container mx-auto px-6">
        <SectionHeader title="Education" subtitle="Academic Roadmap" />
        <div className="relative mt-12">
          {education.map((edu, index) => (
            <RoadmapItem key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
