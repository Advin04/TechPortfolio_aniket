import React from 'react';
import { Send, User } from 'lucide-react';
import { MagnetButton } from './reactbits/MagnetButton';
import { ShinyText } from './reactbits/ShinyText';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  return (
    <section className="section bg-transparent relative overflow-hidden pt-20" id="about">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--first-color)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--body-color)] border border-[var(--border-color)] text-[var(--first-color)] text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm">
          <User className="w-3.5 h-3.5 text-[var(--first-color)]" />
          <ShinyText text="About Me" speed={3} className="text-xs font-semibold tracking-widest" />
        </div>

        <h2 className="about-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-snug md:leading-relaxed mb-8 max-w-3xl mx-auto">
          Computer Engineering student specializing in{' '}
          <ShinyText speed={4} className="font-extrabold text-[var(--first-color)] underline decoration-silver/40 decoration-wavy underline-offset-4">
            Generative AI
          </ShinyText>
          ,{' '}
          <ShinyText speed={4} className="font-extrabold text-[var(--first-color)] underline decoration-silver/40 decoration-wavy underline-offset-4">
            Full-Stack Microservices
          </ShinyText>
          , and{' '}
          <ShinyText speed={4} className="font-extrabold text-[var(--first-color)] underline decoration-silver/40 decoration-wavy underline-offset-4">
            Machine Learning
          </ShinyText>
          .
        </h2>

        <p className="text-[var(--text-color)] text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {portfolioData.aboutDescription}
        </p>

        <MagnetButton href="#contact" className="btn-primary gap-2 inline-flex items-center">
          <ShinyText text="Contact me" speed={4} className="font-semibold text-white" />
          <Send className="w-4 h-4 text-white" />
        </MagnetButton>
      </div>
    </section>
  );
};


