import React, { useEffect, useState } from 'react';

export const TargetCursor = ({ color = 'hsl(210, 20%, 85%)' }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [targetBox, setTargetBox] = useState(null); // { x, y, width, height }

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Track interactive elements including skills, project, experience & education cards
      const interactiveElem = e.target.closest('a, button, input, textarea, .services__card, .work__card, .project-card, .skills-card, .skills__data, .contact__card, .experience-card, .education-card, .achievement-card, [data-cursor-target="true"]');
      if (interactiveElem) {
        const rect = interactiveElem.getBoundingClientRect();
        setTargetBox({
          x: rect.left - 6,
          y: rect.top - 6,
          width: rect.width + 12,
          height: rect.height + 12,
        });
      } else {
        setTargetBox(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let frameId;
    const animate = () => {
      setTargetPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.25,
        y: prev.y + (pos.y - prev.y) * 0.25,
      }));
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [pos]);

  const isSnapping = !!targetBox;

  return (
    <>
      {/* Central Tactical Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] transition-transform duration-100"
        style={{
          backgroundColor: color,
          transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)`,
        }}
      />

      {/* Target Reticle Frame / Element Lock */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-200 ease-out"
        style={
          isSnapping
            ? {
                transform: `translate(${targetBox.x}px, ${targetBox.y}px)`,
                width: `${targetBox.width}px`,
                height: `${targetBox.height}px`,
              }
            : {
                transform: `translate(${targetPos.x - 16}px, ${targetPos.y - 16}px) rotate(45deg)`,
                width: '32px',
                height: '32px',
              }
        }
      >
        {/* Top-Left Corner Bracket ┌ */}
        <span
          className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 transition-all duration-200"
          style={{ borderColor: color }}
        />
        {/* Top-Right Corner Bracket ┐ */}
        <span
          className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 transition-all duration-200"
          style={{ borderColor: color }}
        />
        {/* Bottom-Left Corner Bracket └ */}
        <span
          className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 transition-all duration-200"
          style={{ borderColor: color }}
        />
        {/* Bottom-Right Corner Bracket ┘ */}
        <span
          className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 transition-all duration-200"
          style={{ borderColor: color }}
        />
      </div>
    </>
  );
};
