import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';

export const AnimatedThemeToggler = ({ className = '' }) => {
  const [isDark, setIsDark] = useState(true);
  const buttonRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.body.classList.add('light-theme');
    } else {
      setIsDark(true);
      document.body.classList.remove('light-theme');
    }
  }, []);

  const toggleTheme = (e) => {
    const newIsDark = !isDark;

    const changeThemeState = () => {
      setIsDark(newIsDark);
      if (newIsDark) {
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
      }
    };

    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      changeThemeState();
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect() || {
      left: e.clientX,
      top: e.clientY,
      width: 0,
      height: 0,
    };

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      changeThemeState();
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: newIsDark ? clipPath.reverse() : clipPath,
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: newIsDark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--first-color)] hover:border-[var(--first-color)] transition-all duration-300 focus:outline-none cursor-pointer ${className}`}
      aria-label="Toggle Theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
        <Sun
          className={`w-4 h-4 absolute transition-all duration-500 ease-in-out ${
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100 text-amber-500'
          }`}
        />
        <Moon
          className={`w-4 h-4 absolute transition-all duration-500 ease-in-out ${
            isDark ? 'rotate-0 scale-100 opacity-100 text-[var(--first-color)]' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
};
