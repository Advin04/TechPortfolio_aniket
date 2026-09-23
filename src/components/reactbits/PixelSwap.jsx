import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const PixelSwap = ({ src, alt, className = '', gridSize = 8 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const totalPixels = gridSize * gridSize;
  const pixels = Array.from({ length: totalPixels });

  return (
    <div
      className={`relative overflow-visible group ${className}`}
    >
      {/* Base Image with Spring Pop Hover Effect */}
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain object-bottom transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.07] group-hover:-translate-y-2 group-hover:brightness-105 group-hover:drop-shadow-[0_30px_60px_rgba(226,232,240,0.3)]"
      />
    </div>
  );
};
