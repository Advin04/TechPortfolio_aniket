import React, { useState } from 'react';
import { Code, Server, Layout, Search, Plus, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const Services = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const defaultIcons = [Code, Server, Layout, Search];

  return (
    <section className="section bg-[var(--container-color)] border-y border-[var(--border-color)]" id="service">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="section__title">
          <span>My</span> Services
        </h2>

        <div className="flex flex-col gap-4">
          {portfolioData.services.map((service, index) => {
            const Icon = defaultIcons[index % defaultIcons.length];
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[var(--first-color)] bg-[var(--body-color)] shadow-[0_4px_25px_hsla(var(--hue),75%,60%,0.15)]'
                    : 'border-[var(--border-color)] bg-[var(--container-color)] hover:border-[var(--first-color)]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[hsla(var(--hue),75%,60%,0.1)] text-[var(--first-color)] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold font-['Syne'] text-[var(--white-color)]">{service.title}</h3>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--white-color)] transition-transform duration-300 ${
                      isOpen ? 'rotate-45 text-[var(--first-color)] border-[var(--first-color)]' : ''
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="px-6 pb-6 pt-2 border-t border-[var(--border-color)]"
                    >
                      <p className="text-[var(--text-color)] text-sm mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex flex-wrap gap-4">
                        {service.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--container-color)] border border-[var(--border-color)] text-xs text-[var(--white-color)]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[var(--first-color)]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
