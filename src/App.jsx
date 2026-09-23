import React, { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { TargetCursor } from './components/reactbits/TargetCursor';
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
    <div className="min-h-screen bg-[var(--body-color)] text-[var(--text-color)] selection:bg-[var(--first-color)] selection:text-[var(--black-color)]">
      {!showWebsite && (
        <SplashScreen onComplete={() => setShowWebsite(true)} />
      )}

      {showWebsite && (
        <div className="animate-fadeIn">
          {/* TargetCursor in Silver/Grey */}
          <TargetCursor color="hsl(210, 20%, 85%)" />
          <Navbar />
          <main>
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
