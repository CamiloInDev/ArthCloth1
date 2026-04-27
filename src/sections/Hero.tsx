import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import InkSplatter from '@/components/InkSplatter';

/**
 * Hero Section — Full viewport height
 * Background: subtle tattoo texture at low opacity
 * Large logo in New Rocker, subtitle in Oswald
 * CTA button with red border, hover scale + ink splatter via GSAP
 */
export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal: letters appear like being tattooed (opacity + slight scale)
      gsap.from(titleRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Subtitle slide up
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8,
      });

      // CTA button pop
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 1.2,
      });

      // Decorative elements fade in
      gsap.from(decorRef.current?.children || [], {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 1.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // CTA hover ink splatter animation
  const handleCtaMouseEnter = () => {
    gsap.to(ctaRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleCtaMouseLeave = () => {
    gsap.to(ctaRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink-black"
    >
      {/* Logo background - difuminado */}
      <div className="absolute inset-0 opacity-[0.08] flex items-center justify-center">
        <img
          src="/images/tattoos/logoangelaFinal.webp"
          alt="ARTHCLOTH Background"
          className="w-full max-w-6xl h-auto object-contain"
        />
      </div>

      {/* Subtle tattoo texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="tattoo-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20,50 Q30,20 50,30 Q70,40 80,50" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.5" />
              <circle cx="30" cy="30" r="8" stroke="#fff" strokeWidth="0.3" fill="none" opacity="0.3" />
              <path d="M60,70 L70,60 L80,70" stroke="#fff" strokeWidth="0.3" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tattoo-pattern)" />
        </svg>
      </div>

      {/* Radial gradient center glow (very subtle) */}
      <div className="absolute inset-0 bg-gradient-radial from-ink-blood/5 via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Decorative top element: tribal arrow */}
        <div ref={decorRef} className="mb-8 flex justify-center items-center gap-4">
          <svg width="60" height="20" viewBox="0 0 60 20" className="opacity-40">
            <path d="M0,10 L50,10 M40,2 L50,10 L40,18" stroke="#9F1239" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="font-heading text-xs tracking-[0.3em] text-ink-grayLight uppercase">
            Streetwear & Accesorios
          </span>
          <svg width="60" height="20" viewBox="0 0 60 20" className="opacity-40">
            <path d="M60,10 L10,10 M20,2 L10,10 L20,18" stroke="#9F1239" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 tracking-wider leading-none"
        >
          ARTHCLOTH
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-heading text-lg sm:text-xl md:text-2xl text-white/70 tracking-[0.15em] uppercase mb-12"
        >
          <span className="text-white/90">CLOTHING</span> & <span className="text-ink-bloodLight">STREETWEAR</span>
        </p>

        {/* Additional subtitle */}
        <p className="font-body text-sm text-white/50 tracking-wide mb-12 max-w-2xl mx-auto">
          Estilo único. Ropa premium. Tu esencia.
        </p>

        {/* CTA Button with ink splatter effect */}
        <div className="relative inline-block">
          <a
            ref={ctaRef}
            href="#shop"
            onMouseEnter={handleCtaMouseEnter}
            onMouseLeave={handleCtaMouseLeave}
            className="relative inline-block px-10 py-4 border-2 border-ink-blood text-white font-heading text-lg tracking-[0.2em] uppercase bg-transparent hover:bg-ink-blood/10 transition-colors duration-300 overflow-hidden group"
          >
            {/* Ink splatter overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <InkSplatter variant={1} opacity={0.4} />
            </div>
            <span className="relative z-10">Ver Tienda</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-ink-blood/60" />
      </div>

      {/* Bottom tribal edge decoration */}
      <div className="absolute bottom-0 left-0 w-full h-16 opacity-30">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,60 L0,30 Q100,10 200,30 Q300,50 400,25 Q500,0 600,30 Q700,60 800,20 Q900,0 1000,30 Q1100,50 1200,20 L1200,60 Z"
            fill="#1a1a1a"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
