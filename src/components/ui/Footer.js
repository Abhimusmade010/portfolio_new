import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

const Footer = () => {
  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/Abhimusmade010" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/abhishek-musmade-0582a7289/" },
    { icon: TwitterIcon, href: "#" },
  ];

  return (
    <footer className="py-12 border-t border-white/10 bg-[#030712] relative">
      <div className="max-width-container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <Link to="home" smooth={true} className="text-2xl font-bold cursor-pointer">
            Abhishek<span className="text-primary">.</span>
          </Link>

          <div className="flex gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map(link => (
              <Link 
                key={link} 
                to={link.toLowerCase()} 
                smooth={true} 
                className="text-sm text-slate-400 hover:text-white cursor-pointer transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-primary transition-colors">
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Abhishek. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#!" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#!" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <Link 
        to="home" 
        smooth={true} 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-primary text-white rounded-full shadow-lg shadow-primary/25 cursor-pointer hover:scale-110 transition-transform"
      >
        <ArrowUp size={20} />
      </Link>
    </footer>
  );
};

export default Footer;
