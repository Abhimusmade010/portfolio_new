import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, center = true }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1 bg-primary mt-4 rounded-full ${center ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionHeader;
