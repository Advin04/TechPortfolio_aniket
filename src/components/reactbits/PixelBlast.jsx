import React, { useEffect, useRef } from 'react';

export const PixelBlast = ({
  pixelSize = 4,
  gap = 16,
  color = 'rgba(226, 232, 240, 0.45)',
  activeColor = 'rgba(255, 255, 255, 0.95)',
  blastRadius = 140,
  className = '',
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let pixels = [];
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    const initGrid = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      pixels = [];

      const cols = Math.ceil(width / gap);
      const rows = Math.ceil(height / gap);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const ox = i * gap + gap / 2;
          const oy = j * gap + gap / 2;
          pixels.push({
            ox,
            oy,
            x: ox,
            y: oy,
            vx: 0,
            vy: 0,
            size: pixelSize,
            alpha: 0.18 + Math.random() * 0.25,
            active: 0,
          });
        }
      }
    };

    initGrid();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', initGrid);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < pixels.length; i++) {
        const p = pixels[i];

        // Calculate distance from cursor
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < blastRadius) {
          const force = (1 - dist / blastRadius) * 22;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
          p.active = Math.min(1, p.active + 0.2);
        } else {
          p.active = Math.max(0, p.active - 0.03);
        }

        // Return to original grid point with spring dynamics
        const homeDx = p.ox - p.x;
        const homeDy = p.oy - p.y;
        p.vx += homeDx * 0.08;
        p.vy += homeDy * 0.08;
        p.vx *= 0.84;
        p.vy *= 0.84;

        p.x += p.vx;
        p.y += p.vy;

        // Draw Pixel
        ctx.save();
        const currentSize = p.size + p.active * 3;
        ctx.fillStyle = p.active > 0.05 ? activeColor : color;
        ctx.globalAlpha = p.alpha + p.active * 0.7;

        if (p.active > 0.1) {
          ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
          ctx.shadowBlur = 8 * p.active;
        }

        ctx.fillRect(p.x - currentSize / 2, p.y - currentSize / 2, currentSize, currentSize);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', initGrid);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pixelSize, gap, color, activeColor, blastRadius]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 w-full h-full ${className}`}
    />
  );
};
