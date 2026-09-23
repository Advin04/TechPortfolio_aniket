import React, { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { PortalGateway } from './components/PortalGateway';
import { TargetCursor } from './components/reactbits/TargetCursor';
import { PixelBlast } from './components/reactbits/PixelBlast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Works } from './components/Works';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState(null); // null = PortalGateway, 'tech' = Tech Portfolio

  return (
    <div className="min-h-screen bg-[var(--body-color)] text-[var(--text-color)] selection:bg-[var(--first-color)] selection:text-[var(--black-color)] relative">
      {/* 1. Splash Screen */}
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      {/* 2. Portal Gateway Domain Selection Screen (Shows after Splash until Tech or Media domain is chosen) */}
      {!showSplash && !selectedDomain && (
        <PortalGateway onSelectTech={() => setSelectedDomain('tech')} />
      )}

      {/* 3. Tech Portfolio Website (Shows when 'tech' domain is selected) */}
      {!showSplash && selectedDomain === 'tech' && (
        <div className="animate-fadeIn relative">
          {/* Global PixelBlast Interactive Canvas Background */}
          <PixelBlast
            pixelSize={5}
            gap={18}
            color="rgba(210, 220, 235, 0.2)"
            activeColor="rgba(255, 255, 255, 0.95)"
            blastRadius={150}
          />

          {/* TargetCursor in Silver/Grey */}
          <TargetCursor color="hsl(210, 20%, 85%)" />
          <Navbar onResetGateway={() => setSelectedDomain(null)} />
          <main className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <Works />
            <Services />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
