import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, FileText, Sparkles } from 'lucide-react';
import { Particles } from './reactbits/Particles';
import { MagnetButton } from './reactbits/MagnetButton';
import { PixelSwap } from './reactbits/PixelSwap';
import { ShinyText } from './reactbits/ShinyText';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const socials = [
    { name: 'GitHub', icon: Github, href: portfolioData.socials.github },
    { name: 'LinkedIn', icon: Linkedin, href: portfolioData.socials.linkedin },
    { name: 'Email', icon: Mail, href: portfolioData.socials.email },
    { name: 'Resume', icon: FileText, href: '#contact' },
  ];

  return (
    <section className="relative min-h-screen lg:h-screen lg:max-h-[100vh] pt-20 lg:pt-20 pb-8 lg:pb-4 flex flex-col justify-between overflow-hidden bg-[var(--body-color)]" id="home">
      {/* Background Particles */}
      <Particles particleCount={35} color="hsl(210, 20%, 85%)" />

      {/* 3-Line Stacked Typography Background matching sample image */}
      <div className="hero-stacked-container absolute top-20 sm:top-24 md:top-28 lg:top-28 left-0 w-full text-center z-0 select-none overflow-hidden flex flex-col items-center justify-center leading-[0.82] tracking-tight pointer-events-auto cursor-pointer">
        <h1 className="hero-stacked-typography text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.8rem] 2xl:text-[5.5rem] font-bold uppercase whitespace-nowrap text-fill-hero py-0 transition-all duration-300">
          ANIKET SAXENA
        </h1>
        <h1 className="hero-stacked-typography text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.8rem] 2xl:text-[5.5rem] font-bold uppercase whitespace-nowrap text-outline-hero py-0 transition-all duration-300">
          ANIKET SAXENA
        </h1>
        <h1 className="hero-stacked-typography text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.8rem] 2xl:text-[5.5rem] font-bold uppercase whitespace-nowrap text-outline-hero py-0 transition-all duration-300">
          ANIKET SAXENA
        </h1>
      </div>


      <div className="container mx-auto px-4 sm:px-6 md:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end z-10 relative flex-1 pt-4 lg:pt-2">

        {/* LEFT COLUMN: Short Concise Role & Tagline CTA */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-3.5 pb-4 lg:pb-8 z-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--white-color)] font-['Syne'] tracking-tight leading-tight">
            Full-Stack & AI Engineer
          </h2>

          <p className="text-[var(--text-color)] text-xs sm:text-sm md:text-base leading-relaxed max-w-sm">
            Building agentic AI pipelines, Gemini RAG copilots, and real-time microservices.
          </p>

          <MagnetButton href="#contact" className="btn-primary gap-2 mt-2 inline-flex items-center group">
            <ShinyText text="Let's collaborate" speed={4} className="font-bold text-white text-xs sm:text-sm" />
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </MagnetButton>
        </div>


        {/* CENTER COLUMN: Character Focal Photo (Spans 5 cols on lg) */}
        <div className="lg:col-span-5 flex justify-center items-end relative min-h-[320px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[580px] overflow-visible my-2 lg:my-0">
          {/* Subtle Vertical Glow behind character */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-full bg-gradient-to-t from-[var(--first-color)]/30 via-[var(--first-color)]/10 to-transparent blur-3xl pointer-events-none z-0" />

          <div className="relative w-full max-w-[340px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[780px] flex items-end justify-center group cursor-pointer z-10 scale-100 sm:scale-110 lg:scale-[1.4] origin-bottom transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            <PixelSwap
              src={portfolioData.profileImage}
              alt={portfolioData.name}
              gridSize={8}
              className="w-full h-auto max-h-[450px] sm:max-h-[580px] lg:max-h-[780px] object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Social Links Pill Stack (Horizontal row on mobile, Vertical stack on desktop) */}
        <div className="lg:col-span-3 flex flex-row flex-wrap lg:flex-col items-center justify-center lg:items-end gap-2.5 pb-4 lg:pb-8 w-full z-20">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="w-auto sm:w-full max-w-[140px] sm:max-w-[210px] flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-3 rounded-full bg-[var(--container-color)]/90 border border-[var(--border-color)] text-[var(--white-color)] hover:border-[var(--first-color)] hover:bg-[var(--container-color)] hover:shadow-xl hover:shadow-[var(--first-color)]/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[var(--body-color)] flex items-center justify-center text-[var(--first-color)] group-hover:scale-110 transition-transform">
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-[var(--white-color)] group-hover:text-[var(--first-color)] transition-colors">
                    {social.name}
                  </span>
                </div>
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[var(--text-color)] group-hover:text-[var(--first-color)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all hidden sm:block" />
              </a>
            );
          })}
        </div>

      </div>

      {/* Bottom Seamless Gradient Mask blending into next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-[var(--body-color)]/80 to-[var(--container-color)] pointer-events-none z-10" />
    </section>
  );
};


