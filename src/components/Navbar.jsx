import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Sparkles } from 'lucide-react';
import { MagnetButton } from './reactbits/MagnetButton';
import { AnimatedThemeToggler } from './magicui/AnimatedThemeToggler';
import { portfolioData } from '../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'experience', 'work', 'service', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#work', id: 'work' },
    { name: 'Competencies', href: '#service', id: 'service' },
    { name: 'Skills', href: '#skills', id: 'skills' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-9xl z-50 transition-all duration-300">
      <nav
        className={`flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 ${isScrolled
          ? 'bg-[var(--body-color)]/85 backdrop-blur-xl border-[var(--first-color)]/30 shadow-2xl shadow-[var(--first-color)]/10'
          : 'bg-[var(--body-color)]/60 backdrop-blur-md border-[var(--border-color)] shadow-lg'
          }`}
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group text-xl font-bold font-['Syne'] text-[var(--white-color)] tracking-wider">
          <div className="w-8 h-8 rounded-full bg-[var(--container-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--first-color)] group-hover:border-[var(--first-color)] transition-colors">
            <Sparkles className="w-4 h-4 text-[var(--first-color)]" />
          </div>
          <span>{portfolioData.logoName}<span className="text-[var(--first-color)]">.</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1.5 bg-[var(--container-color)]/60 p-1 rounded-full border border-[var(--border-color)]">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`relative text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 inline-block ${activeSection === link.id
                    ? 'text-white bg-[var(--first-color)]/20 border border-[var(--first-color)]/40 shadow-sm'
                    : 'text-[var(--text-color)] hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <AnimatedThemeToggler />
            <MagnetButton href="#contact" className="btn-primary flex items-center gap-2 text-xs py-2 px-5">
              <span>Contact</span>
              <Send className="w-3.5 h-3.5" />
            </MagnetButton>
          </div>
        </div>

        {/* Mobile Hamburger & Theme Toggler */}
        <div className="flex items-center gap-2 md:hidden">
          <AnimatedThemeToggler />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--white-color)] p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6 text-[var(--first-color)]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[var(--body-color)]/95 backdrop-blur-2xl rounded-2xl p-6 flex flex-col gap-4 md:hidden border border-[var(--border-color)] shadow-2xl animate-fadeIn">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-sm font-semibold px-4 py-2 rounded-xl transition-all ${activeSection === link.id
                      ? 'text-[var(--first-color)] bg-[var(--container-color)] border border-[var(--first-color)]/30'
                      : 'text-white hover:bg-[var(--container-color)]'
                      }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-center justify-center mt-2 text-sm"
            >
              Contact me <Send className="w-4 h-4 ml-1" />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};


