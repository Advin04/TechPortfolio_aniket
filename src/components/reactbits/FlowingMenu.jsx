import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const FlowingMenu = ({
  items = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#work', id: 'work' },
    { name: 'Competencies', href: '#service', id: 'service' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ],
  isOpen,
  onClose,
  onResetGateway,
  activeSection,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-[var(--body-color)]/95 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
      >
        {/* TOP HEADER */}
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto z-10 pb-6 border-b border-[var(--border-color)]/60">
          <div className="flex items-center gap-2 text-xl font-bold font-['Syne'] text-[var(--white-color)] tracking-wider">
            <div className="w-8 h-8 rounded-full bg-[var(--container-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--first-color)]">
              <Sparkles className="w-4 h-4 text-[var(--first-color)]" />
            </div>
            <span>{portfolioData.logoName}<span className="text-[var(--first-color)]">.</span></span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--white-color)] flex items-center justify-center hover:border-[var(--first-color)] hover:text-[var(--first-color)] transition-all cursor-pointer shadow-lg"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* FLOWING MENU ITEMS CENTER CONTAINER */}
        <div className="my-auto py-8 max-w-6xl mx-auto w-full flex flex-col gap-2 z-10">
          {items.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const isActive = activeSection === item.id;
            // Create repeated text for horizontal marquee ribbon
            const marqueeText = Array(10).fill(`${item.name} ✦ `).join('');

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative overflow-hidden rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-[var(--first-color)]/40 hover:bg-[var(--container-color)]/60"
              >
                <a
                  href={linkHref(item.href)}
                  onClick={() => {
                    onClose();
                  }}
                  className="relative block py-3.5 px-6 z-10"
                >
                  {/* BASE STATIC TITLE */}
                  {!isHovered && (
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Syne'] tracking-tight transition-colors duration-300 ${
                          isActive ? 'text-[var(--first-color)]' : 'text-[var(--white-color)]'
                        }`}
                      >
                        {item.name}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-[var(--text-color)] opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}

                  {/* FLOWING MARQUEE RIBBON ON HOVER */}
                  {isHovered && (
                    <div className="w-full overflow-hidden mask-gradient py-1">
                      <div className="flex gap-4 w-max animate-marquee text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Syne'] tracking-tight text-[var(--first-color)] uppercase whitespace-nowrap">
                        <span>{marqueeText}</span>
                      </div>
                    </div>
                  )}
                </a>
              </div>
            );
          })}
        </div>

        {/* BOTTOM FOOTER OPTIONS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto w-full pt-6 border-t border-[var(--border-color)]/60 z-10">
          {onResetGateway && (
            <button
              onClick={() => {
                onClose();
                onResetGateway();
              }}
              className="btn-secondary text-xs py-2.5 px-5 rounded-full flex items-center gap-2 text-white border-[var(--border-color)] hover:border-[var(--first-color)] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--first-color)]" />
              <span>Switch Domain Gateway</span>
            </button>
          )}

          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary text-xs py-2.5 px-6 rounded-full flex items-center gap-2"
          >
            <span>Contact me</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

function linkHref(href) {
  return href;
}
