import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { Trophy, Users, Heart, Target } from 'lucide-react';

const Extracurricular = () => {
  const activities = [
    {
      title: "Volleyball Team Champion",
      organization: "PICT Volleyball Team",
      icon: Trophy,
      description: "PCZSC (SPPU) 2025 Champion. Represented PICT at inter-college competitions; secured 11+ tournament victories."
    },
    {
      title: "UHV Workshop Volunteer",
      organization: "Universal Human Values",
      icon: Heart,
      description: "Assisted in organizing and coordinating workshop sessions for students in 2024."
    },
    {
      title: "Leadership & Teamwork",
      organization: "Athletics",
      icon: Target,
      description: "Developed strong leadership and teamwork skills through competitive sports and collaborative events."
    },
    {
      title: "Community Outreach",
      organization: "Volunteer Services",
      icon: Users,
      description: "Actively involved in coordinating campus workshops and fostering a supportive community environment."
    }
  ];

  return (
    <section id="extracurricular" className="py-24 bg-white/[0.02]">
      <div className="max-width-container mx-auto px-6">
        <SectionHeader title="Leadership & Activities" subtitle="Beyond the Classroom" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((item, index) => (
            <GlassCard key={index} delay={index * 0.1} className="text-center group hover:border-primary/50 transition-colors">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <item.icon size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-primary text-xs font-bold uppercase mb-4 tracking-wider">{item.organization}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
