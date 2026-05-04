import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative"
  >
    <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6">
      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
      
      {/* Project Overlay Info */}
      <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex gap-2 mb-3 flex-wrap">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-primary/20 backdrop-blur-md rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="px-2">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
            <GithubIcon size={18} />
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        {project.description}
      </p>
      <div className="space-y-2 mb-6">
        {project.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
            <div className="w-1 h-1 rounded-full bg-primary" />
            {feature}
          </div>
        ))}
      </div>
      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-bold text-primary group/link">
        View Codebase <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Arogya Healthcare",
      description: "Gemini AI-powered health assistant for medical queries and secure video consultations.",
      features: [
        "AI-powered medical query handling",
        "Integrated WebRTC/Jitsi video calls",
        "Role-based dynamic dashboards",
        "Cloudinary asset management"
      ],
      tags: ["React", "Node.js", "MongoDB", "Gemini AI", "WebRTC"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      github: "https://github.com/Abhimusmade010/ArogyaAi",
      live: "https://deploymentarogya.vercel.app"
    },
    {
      title: "FindYourStay",
      description: "Scalable hotel booking platform with RBAC and atomic database operations.",
      features: [
        "RBAC for Customers & Admins",
        "MongoDB Transactions for atomicity",
        "Redis caching for performance",
        "Service-layer MVC pattern"
      ],
      tags: ["Node.js", "Express", "MongoDB", "Redis", "React"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      github: "https://github.com/Abhimusmade010/findYourStay",
    },
    {
      title: "Campus Hardware Issue Mgmt",
      description: "Full-stack campus issue reporting platform for faculty and admins.",
      features: [
        "Secure JWT authentication",
        "Complaint lifecycle tracking",
        "Role-based access control",
        "Real-time status updates"
      ],
      tags: ["MERN Stack", "JWT", "REST API", "Tailwind"],
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      github: "https://github.com/Abhimusmade010/project1-backend",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white/[0.02]">
      <div className="max-width-container mx-auto px-6">
        <SectionHeader title="Projects" subtitle="Innovation & Impact" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
