import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Clapperboard } from 'lucide-react';
import { InteractiveFolder } from './reactbits/InteractiveFolder';
import { Particles } from './reactbits/Particles';

export const PortalGateway = ({ onSelectTech }) => {
  const [showMediaModal, setShowMediaModal] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--body-color)] px-4 py-8 overflow-y-auto">
      {/* Interactive Background Particles */}
      <Particles particleCount={45} color="hsl(210, 20%, 85%)" />

      {/* Header Info */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto mb-10 sm:mb-14 z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--first-color)] text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[var(--first-color)]" />
          <span>PORTAL GATEWAY</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Syne'] tracking-tight mb-3">
          Choose Your Portfolio
        </h1>

        <p className="text-xs sm:text-sm text-[var(--text-color)] leading-relaxed max-w-md mx-auto">
          Hover any folder to view contents. Click a folder to launch the domain.
        </p>
      </motion.div>

      {/* 3D INTERACTIVE FOLDERS GRID */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-4xl w-full z-10 px-4 place-items-center mb-6"
      >
        {/* TECH PORTFOLIO FOLDER */}
        <InteractiveFolder
          title="Tech Portfolio"
          subtitle="Agentic AI pipelines, Gemini RAG copilots, microservices, and full-stack software."
          badgeText="Live Now"
          color="#6366f1"
          cards={[
            { title: 'Agentic AI', subtitle: 'Pipelines & RAG' },
            { title: 'Full-Stack', subtitle: 'React & Node' },
            { title: 'Microservices', subtitle: 'Real-time' },
          ]}
          isAvailable={true}
          onClick={onSelectTech}
        />

        {/* MEDIA PORTFOLIO FOLDER */}
        <InteractiveFolder
          title="Media Portfolio"
          subtitle="2D animation, motion graphics, video editing, and creative production."
          badgeText="Live Site"
          color="#ec4899"
          cards={[
            { title: '2D Animation', subtitle: 'Motion & Visuals' },
            { title: 'Video Editing', subtitle: 'Post Production' },
            { title: 'Media Work', subtitle: 'Launch Site ➔' },
          ]}
          isAvailable={true}
          onClick={() => {
            window.open('https://mediaportfolio-aniket.vercel.app/', '_blank');
          }}
        />
      </motion.div>

      {/* Media Portfolio Modal */}
      <AnimatePresence>
        {showMediaModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowMediaModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl bg-[var(--container-color)] border border-[var(--border-color)] p-6 sm:p-8 text-center shadow-2xl"
            >
              <button
                onClick={() => setShowMediaModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[var(--body-color)] border border-[var(--border-color)] text-white flex items-center justify-center hover:border-[var(--first-color)] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <Clapperboard className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white font-['Syne'] mb-2">
                Media Portfolio
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-color)] leading-relaxed mb-6">
                2D animation, motion graphics, video editing, and creative production portfolio.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://mediaportfolio-aniket.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center py-3 text-xs sm:text-sm flex items-center gap-1.5"
                >
                  <span>Launch Media Portfolio</span> ➔
                </a>
                <button
                  onClick={() => setShowMediaModal(false)}
                  className="btn-secondary w-full justify-center py-2.5 text-xs text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
