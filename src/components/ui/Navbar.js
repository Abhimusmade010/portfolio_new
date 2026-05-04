import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
      isScrolled ? 'bg-[#030712]/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-width-container mx-auto px-6 flex justify-between items-center">
        <Link to="home" smooth={true} className="text-2xl font-bold cursor-pointer group">
          Abhishek<span className="text-primary group-hover:animate-pulse">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              spy={true}
              activeClass="text-primary"
              className="text-sm font-medium text-slate-400 hover:text-white cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-8">
            <a href="https://github.com/Abhimusmade010" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-musmade-0582a7289/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030712] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-400 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
