import React from 'react';
import { BrainCircuit } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      id: 'languages',
      title: 'LANGUAGES',
      color: '#f97316', // Orange
      borderColor: 'border-orange-500/40',
      bgColor: 'bg-orange-500/10',
      textColor: 'text-orange-400',
      items: [
        { name: 'JavaScript', icon: '/assets/img/skills-frontend-3.svg' },
        { name: 'SQL', icon: '/assets/img/skills-backend-2.svg' },
        { name: 'Python', icon: '/assets/img/skills-frontend-3.svg' },
        { name: 'C++', icon: '/assets/img/skills-frontend-3.svg' },
        { name: 'C', icon: '/assets/img/skills-frontend-1.svg' },
        { name: 'TypeScript', icon: '/assets/img/skills-frontend-3.svg' },
        { name: 'Java', icon: '/assets/img/skills-backend-1.svg' },
      ],
    },
    {
      id: 'frameworks',
      title: 'FRAMEWORKS',
      color: '#38bdf8', // Cyan
      borderColor: 'border-cyan-500/40',
      bgColor: 'bg-cyan-500/10',
      textColor: 'text-cyan-400',
      items: [
        { name: 'Flask', icon: '/assets/img/skills-backend-3.svg' },
        { name: 'React.js', icon: '/assets/img/skills-frontend-4.svg' },
        { name: 'Next.js', icon: '/assets/img/skills-frontend-4.svg' },
        { name: 'Node.js', icon: '/assets/img/skills-backend-3.svg' },
        { name: 'FastAPI', icon: '/assets/img/skills-backend-3.svg' },
        { name: 'Spring Boot', icon: '/assets/img/skills-backend-1.svg' },
        { name: 'Express', icon: '/assets/img/skills-backend-3.svg' },
      ],
    },
    {
      id: 'aiml',
      title: 'AI / ML',
      color: '#c084fc', // Purple
      borderColor: 'border-purple-500/40',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400',
      items: [
        { name: 'Agentic AI', icon: '/assets/img/skills-design-1.svg' },
        { name: 'MCP', icon: '/assets/img/skills-design-4.svg' },
        { name: 'ONNX', icon: '/assets/img/skills-design-3.svg' },
        { name: 'Scikit-learn', icon: '/assets/img/skills-design-3.svg' },
        { name: 'OpenCV', icon: '/assets/img/skills-design-2.svg' },
        { name: 'MediaPipe', icon: '/assets/img/skills-design-1.svg' },
        { name: 'PyTorch', icon: '/assets/img/skills-design-1.svg' },
        { name: 'Hugging Face', icon: '/assets/img/skills-design-2.svg' },
        { name: 'QLoRA', icon: '/assets/img/skills-design-4.svg' },
        { name: 'RLHF', icon: '/assets/img/skills-design-5.svg' },
        { name: 'PEFT', icon: '/assets/img/skills-design-6.svg' },
        { name: 'LangGraph', icon: '/assets/img/skills-design-4.svg' },
      ],
    },
    {
      id: 'databases',
      title: 'DATABASES',
      color: '#f59e0b', // Amber/Gold
      borderColor: 'border-amber-500/40',
      bgColor: 'bg-amber-500/10',
      textColor: 'text-amber-400',
      items: [
        { name: 'pgvector', icon: '/assets/img/skills-backend-2.svg' },
        { name: 'Supabase', icon: '/assets/img/skills-backend-4.svg' },
        { name: 'DynamoDB', icon: '/assets/img/skills-backend-4.svg' },
        { name: 'MongoDB', icon: '/assets/img/skills-backend-4.svg' },
        { name: 'MySQL', icon: '/assets/img/skills-backend-2.svg' },
        { name: 'PostgreSQL', icon: '/assets/img/skills-backend-2.svg' },
      ],
    },
    {
      id: 'tools',
      title: 'TOOLS',
      color: '#10b981', // Green
      borderColor: 'border-emerald-500/40',
      bgColor: 'bg-emerald-500/10',
      textColor: 'text-emerald-400',
      items: [
        { name: 'Bash', icon: '/assets/img/skills-frontend-7.svg' },
        { name: 'Postman', icon: '/assets/img/skills-backend-5.svg' },
        { name: 'AWS Bedrock', icon: '/assets/img/skills-backend-5.svg' },
        { name: 'AWS Lambda', icon: '/assets/img/skills-backend-5.svg' },
        { name: 'Docker', icon: '/assets/img/skills-backend-3.svg' },
        { name: 'Git', icon: '/assets/img/skills-frontend-7.svg' },
        { name: 'Linux', icon: '/assets/img/skills-frontend-7.svg' },
      ],
    },
    {
      id: 'coursework',
      title: 'COURSEWORK',
      color: '#f43f5e', // Rose/Red
      borderColor: 'border-rose-500/40',
      bgColor: 'bg-rose-500/10',
      textColor: 'text-rose-400',
      items: [
        { name: 'Data Structures & Algorithms' },
        { name: 'AI & Machine Learning' },
        { name: 'DBMS' },
        { name: 'Design & Analysis of Algorithms' },
        { name: 'OOPS' },
        { name: 'Operating Systems' },
      ],
    },
  ];

  return (
    <section className="section bg-transparent relative overflow-hidden py-16" id="skills">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header matching sanyamwadhwa.tech */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--container-color)]/80 border border-[var(--border-color)] text-[var(--first-color)] text-xs font-mono font-semibold uppercase tracking-widest mb-4 shadow-sm">
            <BrainCircuit className="w-3.5 h-3.5 text-[var(--first-color)]" />
            <span>TECHNICAL MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Syne'] tracking-tight mb-3 leading-tight">
            The stack behind <span className="text-[var(--first-color)]">the systems.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[var(--text-color)] max-w-xl mx-auto font-mono leading-relaxed">
            44+ technologies across 6 core domains. Hover any row to pause.
          </p>
        </div>

        {/* SINGLE SLEEK MATRIX BOX (Exact 1:1 match with sanyamwadhwa.tech) */}
        <div className="rounded-xl border border-[var(--border-color)] bg-[#0d1117]/95 backdrop-blur-2xl overflow-hidden shadow-2xl">
          {skillCategories.map((cat, idx) => {
            // Duplicate items for smooth infinite loop
            const marqueeItems = [...cat.items, ...cat.items, ...cat.items, ...cat.items];

            return (
              <div
                key={cat.id}
                className="flex flex-col md:flex-row items-stretch border-b border-[var(--border-color)]/60 last:border-b-0 relative group transition-colors duration-300 hover:bg-white/[0.02]"
              >
                {/* Left Color Accent Bar */}
                <div
                  className="w-full md:w-1.5 h-1 md:h-auto shrink-0 transition-all duration-300"
                  style={{ backgroundColor: cat.color }}
                />

                {/* Left Category Label Box */}
                <div className="w-full md:w-44 shrink-0 p-3.5 md:py-4 md:px-5 border-b md:border-b-0 md:border-r border-[var(--border-color)]/60 flex flex-col justify-center bg-[var(--body-color)]/40">
                  <h3
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono"
                    style={{ color: cat.color }}
                  >
                    {cat.title}
                  </h3>
                  <span className="text-[11px] font-mono text-gray-400 mt-0.5">
                    {cat.items.length} skills
                  </span>
                </div>

                {/* Right Infinite Scrolling Track */}
                <div className="flex-1 overflow-hidden mask-gradient py-3.5 px-3 group cursor-pointer flex items-center">
                  <div
                    className={`flex gap-3 w-max ${
                      idx % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'
                    } group-hover:[animation-play-state:paused]`}
                  >
                    {marqueeItems.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md border text-xs font-mono font-medium shrink-0 transition-all duration-300 ${cat.bgColor} ${cat.borderColor} text-gray-200 hover:text-white hover:border-white/60 hover:scale-[1.03]`}
                      >
                        {skill.icon && (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-3.5 h-3.5 object-contain opacity-80 group-hover:opacity-100"
                          />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Note */}
        <p className="text-center font-mono text-xs text-gray-400/80 mt-6 tracking-wide">
          Hover any row to pause · Each row scrolls continuously
        </p>

      </div>
    </section>
  );
};
