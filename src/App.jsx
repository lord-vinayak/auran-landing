import React, { useEffect } from 'react';
import Navbar from './components/layouts/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import WhyUs from './components/sections/WhyUs';
import CTA from './components/sections/CTA';
import Footer from './components/layouts/Footer';
import Lenis from 'lenis';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo.out
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-200">
      
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <CTA />
      <Footer />
    </div>
  );
}; export default App;