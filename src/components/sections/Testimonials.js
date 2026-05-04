import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechFlow",
      text: "Abhishek is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills are top-notch.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "CTO at InnovateHub",
      text: "Working with Abhishek was a pleasure. He took our complex requirements and turned them into a seamless, high-performance application.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Emily Davis",
      role: "Lead Designer",
      text: "Abhishek has a rare talent for bridging the gap between design and development. He brings creative visions to life perfectly.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-width-container mx-auto px-6">
        <SectionHeader title="Testimonials" subtitle="What People Say" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <GlassCard key={index} delay={index * 0.1} className="relative group">
              <Quote className="absolute top-6 right-8 text-primary/20 group-hover:text-primary transition-colors" size={40} />
              <p className="text-slate-400 italic mb-8 relative z-10 leading-relaxed">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
