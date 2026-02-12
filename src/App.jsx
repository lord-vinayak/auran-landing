import React from 'react';
import Navbar from './components/layouts/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import WhyUs from './components/sections/WhyUs';
import CTA from './components/sections/CTA';
import Footer from './components/layouts/Footer';

const App = () => {
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