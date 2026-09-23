import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LatticeLoader } from './reactbits/LatticeLoader';
import { SpecularButton } from './reactbits/SpecularButton';
import { Particles } from './reactbits/Particles';
import { Sparkles, Rocket } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsReady(true);
        }, 150);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.15, filter: 'blur(15px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--body-color)] text-[var(--white-color)] overflow-hidden"
        >
          <Particles particleCount={30} color="hsl(210, 20%, 85%)" />

          {/* Glowing Background Orbs */}
          <div className="blob-big top-1/4 left-1/4" />
          <div className="blob-big bottom-1/4 right-1/4" />

          <div className="relative z-10 flex flex-col items-center gap-8 max-w-md text-center px-6">
            {/* Logo Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--container-color)] text-xs font-semibold text-[var(--first-color)] uppercase tracking-widest shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[var(--first-color)] animate-spin" />
              <span>{portfolioData.name} Portfolio</span>
            </motion.div>

            {/* Lattice Loader */}
            <div className="my-2">
              <LatticeLoader size={56} color="hsl(210, 20%, 85%)" />
            </div>

            {/* Thinking / Progress Counter */}
            <div className="flex items-center gap-3 bg-[var(--container-color)] px-5 py-2.5 rounded-2xl border border-[var(--border-color)] shadow-md">
              <span className="text-sm font-medium text-[var(--text-color)]">
                {progress < 100 ? 'Thinking...' : 'System Ready'}
              </span>
              <span className="font-mono text-base font-bold text-[var(--first-color)] min-w-[3.5rem] text-right">
                {progress}%
              </span>
            </div>

            {/* Reveal Specular Button when progress hits 100% */}
            {isReady && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
                className="mt-4"
              >
                <SpecularButton onClick={handleGetStarted}>
                  <span>Get Started</span>
                  <Rocket className="w-5 h-5 text-[var(--black-color)]" />
                </SpecularButton>
              </motion.div>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
