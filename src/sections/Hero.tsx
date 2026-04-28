import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ChevronDown, ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "PREMIUM STREETWEAR",
      subtitle: "Calidad que define tu estilo",
      image: "/images/products/carru2.webp",
      image2: "/images/products/carru2s.webp",
      cta: "Explorar",
      link: "#shop-accesorios"
    },
    {
      id: 2,
      title: "Coleccion Malos habitos",
      subtitle: "",
      image: "/images/products/Busomaloshabitos.webp",
      cta: "Ver Colección",
      link: "#shop-ropa"
    },
    {
      id: 3,
      title: "LIMITED EDITION",
      subtitle: "Piezas exclusivas no volverán",
      image: "/images/products/carru3.webp",
      image2: "/images/products/carru4.webp",
      mobileImage: "/images/products/carru4.webp",
      cta: "Comprar Ahora",
      link: "#shop"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8,
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 1.2,
      });

      gsap.from(decorRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        delay: 1.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [currentSlide]);

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

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
      className="relative h-screen overflow-hidden bg-ink-black"
    >
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image - Responsive Design */}
          <div className="absolute inset-0 flex">
            {/* Desktop: Dual images | Mobile: Single image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="hidden sm:block w-1/2 h-full object-cover"
              style={{ filter: 'brightness(0.5)' }}
            />
            <img
              src={slide.image2 || slide.image}
              alt={`${slide.title} 2`}
              className="hidden sm:block w-1/2 h-full object-cover"
              style={{ filter: 'brightness(0.5)' }}
            />
            {/* Mobile version: Single centered image */}
            <img
              src={slide.mobileImage || slide.image}
              alt={slide.title}
              className="sm:hidden absolute inset-0 w-full h-full object-cover object-top"
              style={{ filter: 'brightness(0.5)' }}
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-ink-black/50" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4 max-w-5xl mx-auto">
              {/* Decorative top */}
              <div ref={index === 0 ? decorRef : undefined} className="mb-8 flex justify-center items-center gap-4">
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

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 tracking-wider leading-none">
                ARTHCLOTH
              </h1>

              <h2
                ref={titleRef}
                className="font-display text-2xl sm:text-3xl md:text-4xl text-ink-bloodLight mb-6 tracking-wider"
              >
                {slide.title}
              </h2>

              <p
                ref={subtitleRef}
                className="font-heading text-base sm:text-lg md:text-xl text-white/80 tracking-[0.1em] uppercase mb-10"
              >
                {slide.subtitle}
              </p>

              <a
                ref={ctaRef}
                href={slide.link || "#shop"}
                onMouseEnter={handleCtaMouseEnter}
                onMouseLeave={handleCtaMouseLeave}
                className="relative inline-flex items-center gap-2 px-8 py-4 border-2 border-ink-blood text-white font-heading text-base tracking-[0.1em] uppercase bg-ink-blood hover:bg-ink-blood/90 transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <InkSplatter variant={1} opacity={0.4} />
                </div>
                <ShoppingBag className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{slide.cta}</span>
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center z-20"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center z-20"
        aria-label="Next slide"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-ink-blood w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-6 h-6 text-ink-blood/60" />
      </div>
    </section>
  );
};

export default Hero;
