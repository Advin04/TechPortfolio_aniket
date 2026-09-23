import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section className="section bg-transparent relative overflow-hidden" id="experience">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--first-color)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section Heading matching reference site */}
        <h2 className="section__title text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Syne'] leading-tight mb-10">
          <span className="text-[var(--first-color)] block sm:inline">My Work</span>
          <br className="hidden sm:block" />
          <span className="text-white"> Experience</span>
        </h2>

        {/* Interactive Tabs: Experience vs Education */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === 'experience'
                ? 'bg-[var(--first-color)] text-[var(--black-color)] shadow-lg shadow-[var(--first-color)]/20 scale-105'
                : 'bg-[var(--body-color)] text-[var(--text-color)] border border-[var(--border-color)] hover:text-white hover:border-[var(--first-color)]/40'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === 'education'
                ? 'bg-[var(--first-color)] text-[var(--black-color)] shadow-lg shadow-[var(--first-color)]/20 scale-105'
                : 'bg-[var(--body-color)] text-[var(--text-color)] border border-[var(--border-color)] hover:text-white hover:border-[var(--first-color)]/40'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </button>
        </div>

        {/* Timeline Content Area */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-[var(--first-color)]/30 space-y-8 my-6">
          {activeTab === 'experience' &&
            portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Axis Node Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-6 w-4 h-4 rounded-full bg-[var(--first-color)] border-4 border-[var(--container-color)] group-hover:scale-125 transition-transform duration-300 shadow-md shadow-[var(--first-color)]/50" />

                <SpotlightCard className="experience-card p-6 md:p-8 flex flex-col gap-4 cursor-pointer hover:border-[var(--first-color)]/50 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[var(--border-color)] pb-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-[var(--white-color)] font-['Syne'] tracking-wide">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-semibold text-[var(--first-color)] block mt-1">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--first-color)] bg-[var(--body-color)] px-4 py-1.5 rounded-full border border-[var(--border-color)] shadow-inner">
                      <Calendar className="w-3.5 h-3.5 text-[var(--first-color)]" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[var(--text-color)]">
                    <MapPin className="w-3.5 h-3.5 text-[var(--first-color)]" />
                    <span>{exp.location}</span>
                  </div>

                  <ul className="flex flex-col gap-2.5 mt-2">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-xs md:text-sm text-[var(--text-color)] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[var(--first-color)] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>
            ))}

          {activeTab === 'education' &&
            portfolioData.education.map((edu, eIdx) => (
              <div key={eIdx} className="relative group">
                {/* Timeline Axis Node Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-6 w-4 h-4 rounded-full bg-[var(--first-color)] border-4 border-[var(--container-color)] group-hover:scale-125 transition-transform duration-300 shadow-md shadow-[var(--first-color)]/50" />

                <SpotlightCard className="education-card p-6 md:p-8 flex flex-col gap-4 cursor-pointer hover:border-[var(--first-color)]/50 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[var(--border-color)] pb-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-[var(--white-color)] font-['Syne'] tracking-wide">
                        {edu.degree}
                      </h3>
                      <span className="text-sm font-semibold text-[var(--first-color)] block mt-1">
                        {edu.institution}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--first-color)] bg-[var(--body-color)] px-4 py-1.5 rounded-full border border-[var(--border-color)] shadow-inner">
                      <Calendar className="w-3.5 h-3.5 text-[var(--first-color)]" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-[var(--text-color)] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[var(--first-color)]" />
                      {edu.location}
                    </span>
                    <span className="font-bold font-mono text-[var(--first-color)] px-3 py-1 rounded bg-[var(--body-color)] border border-[var(--border-color)]">
                      {edu.grade}
                    </span>
                  </div>

                  {edu.coursework && (
                    <div className="mt-3 pt-3 border-t border-[var(--border-color)]">
                      <span className="text-xs font-semibold text-[var(--white-color)] block mb-2">
                        Relevant Coursework & Core Modules:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, cIdx) => (
                          <span key={cIdx} className="text-xs font-mono px-3 py-1 rounded-md bg-[var(--body-color)] border border-[var(--border-color)] text-[var(--text-color)]">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </SpotlightCard>
              </div>
            ))}
        </div>

        {/* Achievements Section Card */}
        <div className="mt-16 pt-10 border-t border-[var(--border-color)]">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[var(--first-color)]/20 text-[var(--first-color)] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold font-['Syne'] text-[var(--white-color)]">Achievements & Leadership</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.achievements.map((ach, aIdx) => (
              <SpotlightCard key={aIdx} className="achievement-card p-5 flex items-center justify-between cursor-pointer hover:border-[var(--first-color)]/40 transition-colors">
                <div>
                  <h4 className="text-sm font-semibold text-[var(--white-color)] font-['Syne']">{ach.title}</h4>
                  <p className="text-xs text-[var(--text-color)] mt-1">{ach.description}</p>
                </div>
                <span className="text-xs font-mono font-bold text-[var(--first-color)] px-3 py-1 rounded-full bg-[var(--body-color)] border border-[var(--border-color)] shrink-0 ml-3">
                  {ach.year}
                </span>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
