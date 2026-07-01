import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />

      <div className="max-width-container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Open to Internship Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
        >
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
            Abhishek
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Mern Stack Developer with experience in Backend technologies and skilled in designing backend systems and optimizing for performance. Always excited to explore new technologies, solve problems, and enhance application efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="projects" smooth={true}>
            <button className="btn-primary flex items-center gap-2 group cursor-pointer">
              View My Projects
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <a 
            href="/I2K231277_AbhishekMusmade_Resume_Platform9.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 cursor-pointer"
          >
            <Download size={18} />
            Resume
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/10 rounded-full relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full absolute top-2 left-1/2 -translate-x-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
