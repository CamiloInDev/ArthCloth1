import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Sections
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import Gallery from '@/sections/Gallery';
import Shop from '@/sections/Shop';
import Portfolio from '@/sections/Portfolio';
import About from '@/sections/About';
import Footer from '@/sections/Footer';

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger);

/**
 * ARTHCLOTH — Main App Component
 * Ultra dark single-page website with gothic-punk-tribal streetwear aesthetic
 * 
 * Architecture:
 * - Navbar: Fixed transparent with blur, blood red accents
 * - Hero: Full viewport, New Rocker title, shop CTA
 * - Shop: Clothing & accessories with category tabs (PRIMARY FOCUS)
 * - Gallery: Modern carousel for lifestyle imagery
 * - Portfolio: Masonry grid of featured collections
 * - About: Brand story with tribal dividers
 * - Footer: Deep black with tribal band
 * 
 * Global effects: Grain texture overlay, GSAP ScrollTrigger reveals
 */
function App() {
  useEffect(() => {
    // Configure GSAP defaults for the dark tattoo aesthetic
    gsap.defaults({
      ease: 'power3.out',
      duration: 0.8,
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-ink-black text-white overflow-x-hidden">
      {/* Global grain/noise texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />
        <Shop />
        <Gallery />
        <Portfolio />
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
