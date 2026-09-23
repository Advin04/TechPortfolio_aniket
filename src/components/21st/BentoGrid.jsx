import React, { useState } from 'react';

export const BentoGrid = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export const BentoCard = ({
  title,
  subtitle,
  description,
  icon: Icon,
  tags = [],
  colSpan = 'col-span-1',
  rowSpan = 'row-span-1',
  children,
  className = '',
  highlight = false,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl bg-[var(--container-color)] border border-[var(--border-color)] p-6 transition-all duration-300 hover:border-[var(--first-color)]/50 hover:shadow-2xl hover:shadow-[var(--first-color)]/10 ${colSpan} ${rowSpan} ${className}`}
    >
      {/* Radial Mouse Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(226, 232, 240, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* Top Header Row */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-[var(--body-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--first-color)] group-hover:scale-110 group-hover:border-[var(--first-color)]/40 transition-transform">
            <Icon className="w-5 h-5" />
          </div>
        )}
        {subtitle && (
          <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[var(--body-color)] border border-[var(--border-color)] text-[var(--text-color)]">
            {subtitle}
          </span>
        )}
      </div>

      {/* Title & Description */}
      <div className="relative z-10 mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[var(--first-color)] transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-xs sm:text-sm text-[var(--text-color)] leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Custom Body / Visual Content */}
      {children && <div className="relative z-10 my-4">{children}</div>}

      {/* Bottom Tags */}
      {tags.length > 0 && (
        <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-[var(--body-color)] border border-[var(--border-color)] text-[var(--first-color)] group-hover:border-[var(--first-color)]/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
