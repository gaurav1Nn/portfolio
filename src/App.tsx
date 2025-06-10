import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Services';
import Projects from './components/Portfolio';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger setup
    ScrollTrigger.create({
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to('.hero-bg', {
          y: progress * 100,
          duration: 0.3,
        });
      },
    });

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="App font-inter">
      <LoadingScreen />
      <CustomCursor />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;