import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <main className="relative z-10">
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
