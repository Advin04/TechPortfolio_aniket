import React from 'react';

export const BorderBeam = ({
  size = 200,
  duration = 10,
  delay = 0,
  colorFrom = '#ffffff',
  colorTo = 'hsl(210, 20%, 85%)',
  className = '',
}) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(0deg,black,black)] ${className}`}
    >
      <div
        style={{
          '--size': `${size}px`,
          '--duration': `${duration}s`,
          '--delay': `${delay}s`,
          '--color-from': colorFrom,
          '--color-to': colorTo,
        }}
        className="absolute aspect-square w-[var(--size)] animate-border-beam [background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] [offset-anchor:50%_50%] [offset-path:rect(0_auto_auto_0_round_calc(var(--size)))]"
      />
    </div>
  );
};
