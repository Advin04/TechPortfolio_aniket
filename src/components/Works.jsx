import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { ChromaGridCard } from './reactbits/ChromaGrid';
import { BorderBeam } from './21st/BorderBeam';
import { portfolioData } from '../data/portfolioData';

export const Works = () => {
  return (
    <section className="section bg-transparent relative overflow-hidden" id="work">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--first-color)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Heading matching reference site */}
        <h2 className="section__title text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Syne'] leading-tight mb-14">
          <span className="text-white">I make Incredible</span>
          <br />
          <span className="text-[var(--first-color)]">Projects</span>
        </h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <ChromaGridCard
              key={project.id}
              className="project-card work__card flex flex-col justify-between group cursor-pointer relative overflow-hidden p-6 md:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--container-color)]/80 backdrop-blur-xl hover:border-[var(--first-color)]/50 transition-all duration-500 shadow-2xl"
            >
              <BorderBeam size={240} duration={8 + idx * 2} delay={idx * 1.5} colorFrom="#ffffff" colorTo="hsl(210, 20%, 85%)" />

              {/* Number Badge & Category Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black font-mono text-[var(--first-color)] tracking-tighter">
                    {project.id}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-color)] border-l border-[var(--border-color)] pl-3">
                    {project.subtitle || 'Software Project'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[var(--body-color)] border border-[var(--border-color)] text-[var(--white-color)] hover:border-[var(--first-color)] hover:text-[var(--first-color)] flex items-center justify-center transition-colors"
                      aria-label="GitHub Repo"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.demoLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[var(--first-color)] text-[var(--black-color)] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-md shadow-[var(--first-color)]/20"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>

              {/* Project Preview Image */}
              <div className="rounded-2xl overflow-hidden mb-6 border border-[var(--border-color)] relative group-hover:border-[var(--first-color)]/40 transition-colors">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Details & Tech Stack Badges */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--white-color)] mb-3 font-['Syne'] leading-snug group-hover:text-[var(--first-color)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[var(--text-color)] text-xs sm:text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                {/* Techstack used label & tags */}
                <div className="pt-4 border-t border-[var(--border-color)]">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--first-color)] block mb-2.5">
                    Techstack used:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags?.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[var(--body-color)] border border-[var(--border-color)] text-[var(--text-color)] group-hover:border-[var(--first-color)]/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ChromaGridCard>
          ))}
        </div>
      </div>
    </section>
  );
};

