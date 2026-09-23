import React from 'react';
import { Star, Quote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Testimonials = () => {
  const testimonials = portfolioData.testimonials;

  return (
    <section className="section overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="section__title">
          <span>What</span> They Say
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="flex w-full overflow-hidden mask-gradient py-4">
        <div className="flex gap-6 animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={idx}
              className="w-80 sm:w-96 p-6 rounded-2xl bg-[var(--container-color)] border border-[var(--border-color)] flex flex-col justify-between shrink-0 hover:border-[var(--first-color)] transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 rounded-full border-2 border-[var(--first-color)] object-cover"
                />
                <div>
                  <h3 className="text-base font-semibold font-['Syne'] text-[var(--white-color)]">{item.name}</h3>
                  {item.role && <p className="text-xs text-[var(--first-color)]">{item.role}</p>}
                  <div className="flex items-center gap-1 text-amber-400 text-xs mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>

              <p className="text-[var(--text-color)] text-sm italic leading-relaxed relative">
                <Quote className="w-6 h-6 text-[var(--first-color)] opacity-20 absolute -top-2 -left-2" />
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
