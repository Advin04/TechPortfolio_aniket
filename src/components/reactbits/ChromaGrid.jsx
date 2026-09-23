import React, { useRef, useState } from 'react';

export const ChromaGridCard = ({ children, className = '', chromaColor = 'hsl(110, 75%, 60%)' }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--container-color)] p-6 transition-all duration-300 hover:border-[var(--first-color)] hover:shadow-[0_10px_35px_hsla(var(--hue),75%,60%,0.2)] ${className}`}
    >
      {/* Holographic Grid Pattern Layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.25 : 0.08,
          backgroundImage: `
            linear-gradient(to right, rgba(110, 240, 110, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(110, 240, 110, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Chromatic Radial Light Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `
            radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, hsla(110, 75%, 60%, 0.22), transparent 50%),
            radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.15), transparent 60%),
            radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.1), transparent 70%)
          `,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
