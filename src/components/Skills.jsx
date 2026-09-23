import React from 'react';
import { BentoGrid, BentoCard } from './21st/BentoGrid';
import { BorderBeam } from './21st/BorderBeam';
import { BrainCircuit, Code2, Database, Layers, Cpu, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const getIconForCategory = (title) => {
    if (title.includes('AI')) return BrainCircuit;
    if (title.includes('Backend')) return Layers;
    if (title.includes('Frontend')) return Code2;
    if (title.includes('Databases')) return Database;
    if (title.includes('Languages')) return Cpu;
    return Sparkles;
  };

  const getColSpan = (idx) => {
    if (idx === 4) return 'col-span-1 md:col-span-2'; // AI/ML GenAI Card featured large
    if (idx === 1) return 'col-span-1 md:col-span-2'; // Backend & Frameworks
    return 'col-span-1';
  };

  return (
    <section className="section" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="section__title">
          Technical <span>Bento Matrix</span>
        </h2>

        <p className="text-center text-[var(--text-color)] max-w-2xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
          Full-spectrum breakdown of technologies, frameworks, vector stores, and AI models engineered across production workloads and microservices.
        </p>

        <BentoGrid>
          {portfolioData.skills.map((cat, idx) => {
            const Icon = getIconForCategory(cat.title);
            const colSpan = getColSpan(idx);
            const isFeatured = idx === 4 || idx === 1;

            return (
              <BentoCard
                key={idx}
                title={cat.title}
                subtitle={`${cat.items.length} Techs`}
                icon={Icon}
                colSpan={colSpan}
                className="skills-card relative flex flex-col justify-between"
              >
                {isFeatured && (
                  <BorderBeam size={180} duration={9} delay={idx * 0.8} colorFrom="#ffffff" colorTo="hsl(210, 20%, 85%)" />
                )}

                <div className="flex flex-wrap gap-2.5 my-2">
                  {cat.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--body-color)] border border-[var(--border-color)] hover:border-[var(--first-color)]/60 transition-all duration-200 hover:-translate-y-0.5 shadow-sm group/skill cursor-pointer"
                    >
                      {skill.icon && (
                        <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain opacity-80 group-hover/skill:opacity-100 transition-opacity" />
                      )}
                      <span className="text-xs font-semibold text-[var(--white-color)] group-hover/skill:text-[var(--first-color)] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </BentoCard>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
};

