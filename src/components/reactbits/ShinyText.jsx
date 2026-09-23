import React from 'react';

export const ShinyText = ({ text, children, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${disabled ? '' : 'animate-shiny-text'} ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.4) 70%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text || children}
    </span>
  );
};
