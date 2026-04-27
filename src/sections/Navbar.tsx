import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

/**
 * Navbar — Fixed transparent navigation with backdrop blur
 * Logo: New Rocker font, white with subtle red glow on hover
 * Menu: Oswald uppercase, ink drip / glow red hover effect
 */
export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Tienda', href: '#shop' },
    { label: 'Galería', href: '#gallery' },
    { label: 'Portafolio', href: '#portfolio' },
    { label: 'Nosotros', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-black/80 backdrop-blur-md border-b border-ink-blood/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="font-display text-2xl md:text-3xl text-white hover:text-glow-blood transition-all duration-300 tracking-wider"
          >
            ARTHCLOTH
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-heading text-sm tracking-widest text-white/80 hover:text-ink-bloodLight hover:text-glow-blood transition-all duration-300 relative group"
              >
                {link.label}
                {/* Ink drip underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ink-blood group-hover:w-full transition-all duration-400 ease-out" />
              </a>
            ))}
          </div>

          {/* Right icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white/70 hover:text-ink-bloodLight transition-colors duration-300">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-ink-black/95 backdrop-blur-xl border-t border-ink-blood/20 overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-heading text-lg tracking-widest text-white/80 hover:text-ink-bloodLight transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
            <button className="text-white/70 hover:text-ink-bloodLight transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
