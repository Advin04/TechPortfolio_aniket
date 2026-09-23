import React from 'react';
import { motion } from 'framer-motion';

export const SpecularButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`relative group overflow-hidden px-8 py-4 rounded-full font-bold text-sm text-[var(--black-color)] bg-[var(--first-color)] shadow-[0_0_30px_hsla(var(--hue),75%,60%,0.4)] transition-all duration-300 border border-emerald-300 ${className}`}
    >
      {/* Specular Highlight Sweep Layer */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

      {/* Glass Inner Glow */}
      <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <span className="relative z-10 flex items-center justify-center gap-3 tracking-wider uppercase">
        {children}
      </span>
    </motion.button>
  );
};
