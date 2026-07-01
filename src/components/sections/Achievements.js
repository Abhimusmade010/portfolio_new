import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { Trophy, Code, Star, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Smart India Hackathon 2025",
      organization: "Software Category (Participant)",
      date: "2025",
      icon: Trophy,
      description: "Participated in the prestigious national level hackathon under the Software Category."
    },
    {
      title: "Poonawala Fincorp Hackathon",
      organization: "Participant",
      date: "2025",
      icon: Medal,
      description: "Participant in the 2025 hackathon focusing on innovative financial technology solutions."
    },
    {
      title: "Solved 600+ DSA Problems",
      organization: "Multiple Platforms",
      date: "Ongoing",
      icon: Code,
      description: "Consistent problem solver across LeetCode, CodeChef, HackerRank, and GeeksforGeeks."
    },
    {
      title: "Pradnya-INC’26",
      organization: "Pre-Final Round, Coding Competition",
      date: "2026",
      icon: Star,
      description: "Reached the Pre-Final round of the Pradnya-INC’26 Coding Competition."
    }
  ];

  return (
    <section id="achievements" className="py-24">
      <div className="max-width-container mx-auto px-6">
        <SectionHeader title="Achievements" subtitle="Milestones & Recognition" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <GlassCard key={index} delay={index * 0.1} className="flex gap-6 group hover:border-primary/50 transition-colors">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary h-fit group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-xs font-bold text-slate-500 uppercase">{item.date}</span>
                </div>
                <p className="text-primary text-sm font-medium mb-3">{item.organization}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
