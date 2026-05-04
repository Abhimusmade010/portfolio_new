import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { GraduationCap, BookOpen, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.E (Information Technology)",
      institution: "Pune Institute Of Computer Technology",
      location: "Pune, India",
      period: "2023 - 2027",
      grade: "9.332 CGPA",
      courses: ["Object Oriented Programming", "Operating System", "Data Structures & Algorithms", "DBMS", "Computer Networks"]
    },
    {
      degree: "Higher Secondary Education - Science",
      institution: "Cambridge High International Jr. College",
      location: "Shrirampur, India",
      period: "2021 - 2023",
      grade: "80.67%",
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    }
  ];

  return (
    <section id="education" className="py-24 bg-white/[0.02]">
      <div className="max-width-container mx-auto px-6">
        <SectionHeader title="Education" subtitle="Learning Foundation" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <GlassCard key={index} delay={index * 0.1} className="relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-primary opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-md">
                    {edu.period}
                  </span>
                  <span className="text-primary font-bold">{edu.grade}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <div className="flex items-center gap-2 text-slate-400 mb-6 text-sm">
                  <BookOpen size={16} />
                  <span>{edu.institution}</span>
                  <span className="mx-2">|</span>
                  <MapPin size={16} />
                  <span>{edu.location}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.courses.map(course => (
                    <span key={course} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-500 font-medium">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
