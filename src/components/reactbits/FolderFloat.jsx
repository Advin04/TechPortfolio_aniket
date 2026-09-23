import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Folder, Sparkles, CheckCircle2 } from 'lucide-react';

export const FolderFloatCard = ({
  title,
  subtitle,
  category,
  badgeText,
  icon: Icon,
  accentColor = 'var(--first-color)',
  isAvailable = true,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -12, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative group cursor-pointer w-full max-w-sm sm:max-w-md ${className}`}
    >
      {/* Glow Backdrop */}
      <div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
      />

      {/* Main Folder Container */}
      <div className="relative rounded-3xl bg-[var(--container-color)]/90 backdrop-blur-xl border border-[var(--border-color)] group-hover:border-[var(--first-color)] p-6 sm:p-8 flex flex-col justify-between min-h-[320px] shadow-2xl transition-all duration-300 overflow-hidden">
        
        {/* Floating Top Folder Tab */}
        <div className="absolute top-0 left-8 -translate-y-1/2 px-4 py-1 rounded-full bg-[var(--body-color)] border border-[var(--border-color)] text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--first-color)] shadow-md flex items-center gap-1.5">
          <Folder className="w-3 h-3 text-[var(--first-color)]" />
          <span>{category}</span>
        </div>

        {/* Top Header Row */}
        <div className="flex items-center justify-between pt-2 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[var(--body-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--first-color)] group-hover:scale-110 group-hover:border-[var(--first-color)] transition-all duration-300">
            {Icon ? <Icon className="w-6 h-6" /> : <Folder className="w-6 h-6" />}
          </div>

          <span
            className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${
              isAvailable
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
            }`}
          >
            {badgeText}
          </span>
        </div>

        {/* Content Details */}
        <div className="my-auto py-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Syne'] tracking-tight group-hover:text-[var(--first-color)] transition-colors duration-300 mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-color)] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Action Button Row */}
        <div className="pt-4 border-t border-[var(--border-color)]/60 flex items-center justify-between mt-4">
          <span className="text-xs font-semibold text-[var(--white-color)] group-hover:text-[var(--first-color)] transition-colors">
            {isAvailable ? 'Launch Experience' : 'In Development'}
          </span>

          <div className="w-9 h-9 rounded-full bg-[var(--body-color)] border border-[var(--border-color)] group-hover:border-[var(--first-color)] group-hover:bg-[var(--first-color)] group-hover:text-[var(--black-color)] flex items-center justify-center text-white transition-all duration-300">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

      </div>
    </motion.div>
  );
};
