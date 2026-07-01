import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { Trophy, Users, Heart } from 'lucide-react';

const Extracurricular = () => {
  const activities = [
    {
      title: "PICT Volleyball Team",
      organization: "Member",
      icon: Trophy,
      description: "PCZSC (SPPU) 2025 Champion (2023-2026). Exhibited strong Team Player, Teamwork, and Leadership skills."
    },
    {
      title: "Organization Committee",
      organization: "International Yoga Day (PICT)",
      icon: Users,
      description: "Active member of the organization committee for International Yoga Day."
    },
    {
      title: "Universal Human Values Workshop",
      organization: "Volunteer Team Lead",
      icon: Heart,
      description: "Led the Volunteering team, assisted in organizing and coordinating UHV workshop sessions for Professors in 2026."
    }
  ];

  return (
    <section id="extracurricular" className="py-24 bg-white/[0.02]">
      <div className="max-width-container mx-auto px-6">
        <SectionHeader title="Leadership & Activities" subtitle="Beyond the Classroom" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
