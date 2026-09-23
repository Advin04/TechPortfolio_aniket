import React from 'react';

export const LatticeLoader = ({ size = 48, color = 'hsl(110, 75%, 60%)' }) => {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <div className="grid grid-cols-3 gap-2 w-full h-full">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="rounded-full animate-pulse shadow-sm"
            style={{
              backgroundColor: color,
              animationDelay: `${(i % 3) * 0.15 + Math.floor(i / 3) * 0.15}s`,
              animationDuration: '1.2s',
              boxShadow: `0 0 10px ${color}`
            }}
          />
        ))}
      </div>
    </div>
  );
};
