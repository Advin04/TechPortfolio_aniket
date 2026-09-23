import React, { useEffect, useRef } from 'react';

export const CursorGrid = ({
  gridSize = 25,
  glowColor = 'hsl(110, 75%, 60%)',
  fadeDuration = 600,
  className = '',
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const activeCells = new Map();

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      if (relativeX < 0 || relativeX > canvas.width || relativeY < 0 || relativeY > canvas.height) {
        return;
      }

      const col = Math.floor(relativeX / gridSize);
      const row = Math.floor(relativeY / gridSize);
      const key = `${col},${row}`;

      activeCells.set(key, {
        x: col * gridSize,
        y: row * gridSize,
        timestamp: Date.now(),
      });
    };

    const parent = canvas.parentElement || window;
    parent.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();

      // Draw subtle background grid lines
      ctx.strokeStyle = 'rgba(110, 240, 110, 0.15)';
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw active glowing grid cells
      activeCells.forEach((cell, key) => {
        const elapsed = now - cell.timestamp;
        if (elapsed > fadeDuration) {
          activeCells.delete(key);
        } else {
          const progress = elapsed / fadeDuration;
          const currentAlpha = (1 - progress) * 0.55;

          ctx.fillStyle = `hsla(110, 75%, 60%, ${currentAlpha})`;
          ctx.fillRect(cell.x + 1, cell.y + 1, gridSize - 2, gridSize - 2);

          ctx.strokeStyle = `hsla(110, 75%, 60%, ${currentAlpha * 1.5})`;
          ctx.strokeRect(cell.x + 0.5, cell.y + 0.5, gridSize - 1, gridSize - 1);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      parent.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gridSize, glowColor, fadeDuration]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-10 ${className}`}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
};
