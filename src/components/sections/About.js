import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { User, Target, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "CGPA", value: "9.33/10", icon: Target },
    { label: "DSA Problems", value: "600+", icon: Heart },
    { label: "Hackathons", value: "2+", icon: Coffee },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-width-container mx-auto px-6">
        <SectionHeader title="About Me" subtitle="My Story" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-sm">
              <img 
                src="/Abhishek_Musmade_Photo.png" 
                alt="Abhishek Musmade" 
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <User className="text-primary" />
              Who am I?
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed text-lg">
              I'm a Mern Stack Developer with experience in Backend technologies and skilled in designing backend systems and optimizing for performance.
            </p>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              Always excited to explore new technologies, solve problems, and enhance application efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <GlassCard key={i} className="p-6 text-center group hover:border-primary/50 transition-colors">
                  <stat.icon size={24} className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">{stat.label}</div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
