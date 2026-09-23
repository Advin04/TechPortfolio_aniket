import React from 'react';
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="bg-[var(--container-color)] border-t border-[var(--border-color)] py-12">
      <div className="container mx-auto px-6 flex flex-col items-center text-center gap-8">
        <h2 className="text-xl sm:text-2xl font-bold font-['Syne'] text-[var(--white-color)] max-w-2xl">
          {portfolioData.contact.footerTagline}
        </h2>

        <ul className="flex items-center gap-8">
          <li>
            <a href="#work" className="text-sm font-medium text-[var(--white-color)] hover:text-[var(--first-color)] transition-colors">
              Work
            </a>
          </li>
          <li>
            <a href="#service" className="text-sm font-medium text-[var(--white-color)] hover:text-[var(--first-color)] transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#skills" className="text-sm font-medium text-[var(--white-color)] hover:text-[var(--first-color)] transition-colors">
              Skills
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {portfolioData.socials.github && (
            <a
              href={portfolioData.socials.github.startsWith('http') ? portfolioData.socials.github : `https://${portfolioData.socials.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[var(--body-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--white-color)] hover:border-[var(--first-color)] hover:text-[var(--first-color)] hover:-translate-y-1 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {portfolioData.socials.linkedin && (
            <a
              href={portfolioData.socials.linkedin.startsWith('http') ? portfolioData.socials.linkedin : `https://${portfolioData.socials.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[var(--body-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--white-color)] hover:border-[var(--first-color)] hover:text-[var(--first-color)] hover:-translate-y-1 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {portfolioData.socials.instagram && (
            <a
              href={portfolioData.socials.instagram.startsWith('http') ? portfolioData.socials.instagram : `https://${portfolioData.socials.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[var(--body-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--white-color)] hover:border-[var(--first-color)] hover:text-[var(--first-color)] hover:-translate-y-1 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
        </div>

        <span className="text-xs text-[var(--text-color)]">
          &#169; All Rights Reserved By {portfolioData.name}
        </span>
      </div>
    </footer>
  );
};
