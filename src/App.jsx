import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Ricing from './components/Ricing';
import Footer from './components/Footer';
import AudioHUD from './components/AudioHUD';

function App() {
  // Polyfill/Simple Smooth Scroll using native scroll-behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="app-wrapper">
      <AudioHUD />
      <Hero />
      <About />
      <Projects />
      <Ricing />
      <Footer />
    </div>
  );
}

export default App;
