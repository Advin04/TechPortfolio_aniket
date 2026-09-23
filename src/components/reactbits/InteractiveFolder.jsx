import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Folder as FolderIcon } from 'lucide-react';

export const InteractiveFolder = ({
  title,
  subtitle,
  badgeText,
  color = '#6366f1',
  cards = [
    { title: 'Project 01', subtitle: 'Agentic AI' },
    { title: 'Project 02', subtitle: 'Full Stack' },
    { title: 'Project 03', subtitle: 'Systems' },
  ],
  isAvailable = true,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`flex flex-col items-center group cursor-pointer select-none ${className}`}
    >
      {/* 3D ANIMATED FOLDER CONTAINER */}
      <div className="relative w-64 h-48 sm:w-72 sm:h-52 flex items-center justify-center perspective-1000 mb-6">
        
        {/* Glow behind folder on hover */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none scale-110"
          style={{ backgroundColor: color }}
        />

        {/* FOLDER BACK PLATE */}
        <div
          className="absolute bottom-0 w-56 h-36 sm:w-64 sm:h-40 rounded-2xl shadow-xl transition-all duration-300"
          style={{ backgroundColor: color, filter: 'brightness(0.75)' }}
        >
          {/* Folder Tab Top Left */}
          <div
            className="absolute -top-3 left-4 w-20 h-5 rounded-t-lg"
            style={{ backgroundColor: color, filter: 'brightness(0.75)' }}
          />
        </div>

        {/* 3 FANNING PAPER CARDS INSIDE FOLDER */}
        <div className="absolute bottom-6 w-48 sm:w-56 flex justify-center items-end pointer-events-none z-10">
          
          {/* LEFT CARD */}
          <motion.div
            initial={false}
            animate={
              isHovered
                ? { y: -45, x: -35, rotate: -15, scale: 1.05 }
                : { y: 0, x: 0, rotate: 0, scale: 0.95 }
            }
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute bottom-0 w-36 h-28 sm:w-40 sm:h-32 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-2xl p-3 flex flex-col justify-between backdrop-blur-md"
          >
            <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
              <span>CARD / 01</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white font-['Syne'] truncate">
                {cards[0]?.title || 'System AI'}
              </p>
              <p className="text-[10px] text-gray-400 truncate">
                {cards[0]?.subtitle || 'Architecture'}
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={false}
            animate={
              isHovered
                ? { y: -45, x: 35, rotate: 15, scale: 1.05 }
                : { y: 0, x: 0, rotate: 0, scale: 0.95 }
            }
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute bottom-0 w-36 h-28 sm:w-40 sm:h-32 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-2xl p-3 flex flex-col justify-between backdrop-blur-md"
          >
            <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
              <span>CARD / 03</span>
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white font-['Syne'] truncate">
                {cards[2]?.title || 'Microservices'}
              </p>
              <p className="text-[10px] text-gray-400 truncate">
                {cards[2]?.subtitle || 'Production'}
              </p>
            </div>
          </motion.div>

          {/* CENTER CARD */}
          <motion.div
            initial={false}
            animate={
              isHovered
                ? { y: -65, x: 0, rotate: 0, scale: 1.1 }
                : { y: -8, x: 0, rotate: 0, scale: 1 }
            }
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative z-10 w-36 h-28 sm:w-40 sm:h-32 rounded-xl bg-slate-100 border border-white/80 shadow-2xl p-3.5 flex flex-col justify-between text-slate-900"
          >
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-600">
              <span>PRIMARY</span>
              <Sparkles className="w-3 h-3 text-indigo-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-extrabold font-['Syne'] text-slate-950 truncate">
                {cards[1]?.title || title}
              </p>
              <p className="text-[10px] font-medium text-slate-600 truncate">
                {cards[1]?.subtitle || badgeText}
              </p>
            </div>
          </motion.div>

        </div>

        {/* FOLDER FRONT COVER FLAP */}
        <motion.div
          initial={false}
          animate={
            isHovered
              ? { rotateX: -20, y: 6, scale: 0.98 }
              : { rotateX: 0, y: 0, scale: 1 }
          }
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ backgroundColor: color }}
          className="absolute bottom-0 w-56 h-24 sm:w-64 sm:h-28 rounded-b-2xl rounded-tr-xl shadow-2xl z-20 flex items-center justify-between px-5 border-t border-white/20 origin-bottom"
        >
          <div className="flex items-center gap-2 text-white">
            <FolderIcon className="w-5 h-5 text-white/90" />
            <span className="text-xs sm:text-sm font-bold font-['Syne'] tracking-wide">
              {title}
            </span>
          </div>

          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </motion.div>

      </div>

      {/* DESCRIPTION & BADGE BELOW FOLDER */}
      <div className="text-center max-w-xs">
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span
            className={`px-3 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
              isAvailable
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
            }`}
          >
            {badgeText}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-white font-['Syne'] group-hover:text-[var(--first-color)] transition-colors">
          {title}
        </h3>

        <p className="text-xs text-[var(--text-color)] mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>

    </div>
  );
};
