import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { MagnetButton } from './reactbits/MagnetButton';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({ user_name: '', user_email: '', user_message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'success', message: 'Message sent successfully! ✅' });
    setFormData({ user_name: '', user_email: '', user_message: '' });

    setTimeout(() => {
      setStatus(null);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section bg-transparent border-t border-[var(--border-color)]" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="section__title">
          Contact <span>Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info Cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <SpotlightCard className="flex items-center gap-4 p-5">
              <div className="w-12 h-12 rounded-xl bg-[hsla(var(--hue),75%,60%,0.1)] text-[var(--first-color)] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold font-['Syne'] text-[var(--white-color)]">Email</h3>
                <a href={`mailto:${portfolioData.contact.email}`} className="text-xs text-[var(--text-color)] hover:text-[var(--first-color)] transition-colors">
                  {portfolioData.contact.email}
                </a>
              </div>
            </SpotlightCard>

            <SpotlightCard className="flex items-center gap-4 p-5">
              <div className="w-12 h-12 rounded-xl bg-[hsla(var(--hue),75%,60%,0.1)] text-[var(--first-color)] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold font-['Syne'] text-[var(--white-color)]">Phone number</h3>
                <a href={`tel:${portfolioData.contact.phone}`} className="text-xs text-[var(--text-color)] hover:text-[var(--first-color)] transition-colors">
                  {portfolioData.contact.phone}
                </a>
              </div>
            </SpotlightCard>

            <SpotlightCard className="flex items-center gap-4 p-5">
              <div className="w-12 h-12 rounded-xl bg-[hsla(var(--hue),75%,60%,0.1)] text-[var(--first-color)] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold font-['Syne'] text-[var(--white-color)]">Location</h3>
                <a
                  href={portfolioData.contact.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--text-color)] hover:text-[var(--first-color)] transition-colors"
                >
                  {portfolioData.contact.location}
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-[var(--body-color)] border border-[var(--border-color)] flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-[var(--first-color)]">Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--white-color)] focus:border-[var(--first-color)] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-[var(--first-color)]">Email</label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--white-color)] focus:border-[var(--first-color)] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-[var(--first-color)]">Message</label>
                <textarea
                  name="user_message"
                  value={formData.user_message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--white-color)] focus:border-[var(--first-color)] focus:outline-none transition-colors resize-none"
                />
              </div>

              {status && (
                <div className="flex items-center gap-2 text-sm text-[var(--first-color)]">
                  <CheckCircle className="w-5 h-5" />
                  <span>{status.message}</span>
                </div>
              )}

              <MagnetButton className="btn-primary gap-2 self-start">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </MagnetButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
