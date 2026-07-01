import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../ui/Icons';

const Contact = () => {
  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/Abhimusmade010" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/abhishek-musmade-0582a7289/" },
    { icon: TwitterIcon, href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-white/[0.02]">
      <div className="max-width-container mx-auto px-6">
        <SectionHeader title="Get In Touch" subtitle="Let's Build Something Great" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Have a project in mind?</h3>
            <p className="text-slate-400 mb-10 max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas or 
              opportunities to be part of your visions. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Me</p>
                  <p className="text-lg font-medium">abhishekmusmade342@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-secondary/10 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Let's Chat</p>
                  <p className="text-lg font-medium">+91 7775865346</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-6">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <GlassCard className="p-8 md:p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Abhishek Musmade"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="abhishekmusmade342@gmail.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white resize-none"
                />
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
