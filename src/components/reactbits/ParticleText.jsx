import React, { useEffect, useRef } from 'react';

export const ParticleText = ({
  text = 'Web Developer',
  fontSize = 44,
  fontFamily = 'Syne, sans-serif',
  color = 'hsl(210, 20%, 85%)',
  particleSize = 2,
  mouseRadius = 90,
  className = '',
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let animationFrameId;

    let particles = [];
    let mouse = { x: -9999, y: -9999, radius: mouseRadius };

    const init = () => {
      const containerWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 600;
      
      // Calculate responsive font size based on text length and container width
      let computedFontSize = Math.min(fontSize, Math.floor((containerWidth * 0.95) / (text.length * 0.54)));
      if (computedFontSize < 18) computedFontSize = 18;

      ctx.font = `bold ${computedFontSize}px ${fontFamily}`;
      const textMetrics = ctx.measureText(text);
      const measuredWidth = Math.ceil(textMetrics.width);

      canvas.width = Math.max(containerWidth, measuredWidth + 40);
      canvas.height = Math.ceil(computedFontSize * 1.5);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${computedFontSize}px ${fontFamily}`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 2, canvas.height / 2);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      particles = [];

      const gap = 3;
      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const index = (y * canvas.width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 128) {
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              originX: x,
              originY: y,
              vx: 0,
              vy: 0,
              size: particleSize,
              color: color,
            });
          }
        }
      }
    };

    init();

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          const pushX = Math.cos(angle) * force * 8;
          const pushY = Math.sin(angle) * force * 8;

          p.vx -= pushX;
          p.vy -= pushY;
        }

        // Return to origin with spring physics
        const homeDx = p.originX - p.x;
        const homeDy = p.originY - p.y;

        p.vx += homeDx * 0.08;
        p.vy += homeDy * 0.08;

        p.vx *= 0.82; // friction
        p.vy *= 0.82;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, fontSize, fontFamily, color, particleSize, mouseRadius]);

  return (
    <div className={`relative inline-block w-full overflow-visible ${className}`}>
      <canvas ref={canvasRef} className="block cursor-pointer max-w-full" />
    </div>
  );
};
