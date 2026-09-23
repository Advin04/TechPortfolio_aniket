import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCirclePos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
    }, 16);
    return () => clearInterval(interval);
  }, [position]);

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="custom-cursor-circle"
        style={{
          left: `${circlePos.x}px`,
          top: `${circlePos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
          backgroundColor: isHovered ? 'hsla(110, 75%, 60%, 0.15)' : 'transparent',
        }}
      />
    </>
  );
};
