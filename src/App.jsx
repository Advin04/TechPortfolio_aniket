import React, { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
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
  const [showWebsite, setShowWebsite] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--body-color)] text-[var(--text-color)] selection:bg-[var(--first-color)] selection:text-[var(--black-color)] relative">
      {!showWebsite && (
        <SplashScreen onComplete={() => setShowWebsite(true)} />
      )}

      {showWebsite && (
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
          <Navbar />
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
