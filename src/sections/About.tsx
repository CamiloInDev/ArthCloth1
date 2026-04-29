import React, { useState, useEffect } from 'react';
import { useScrollReveal, useInkReveal } from '@/hooks/useScrollReveal';
import TribalDivider from '@/components/TribalDivider';

/**
 * About / Story Section
 * Tribal decorative dividers, text in Inter + red accents
 * Raw studio story with ink-themed copy
 */
export const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useScrollReveal({ from: { opacity: 0, y: 40 }, duration: 1 });
  const imageRef = useInkReveal();

  const slides = [
    {
      id: 1,
      title: "De la piel al textil.",
      subtitle: "Mi Historia",
      image: "/images/tattoos/logoangelaFinal.webp",
      isLogo: true,
      content: [
        "Soy Ángela, tatuadora de Bogotá. En mi estudio, plasmo ideas que duran para siempre en la piel; ahora, <span class='text-ink-bloodLight font-semibold'>ArthCloth</span> es el puente para trasladar ese arte y mi estilo gráfico a prendas únicas.",
        "Fusionamos el mundo del arte corporal con el streetwear. No solo hacemos ropa: creamos piezas de colección para quienes entienden que vestirse es también una forma de identidad."
      ]
    },
    {
      id: 2,
      title: "Arte Corporal",
      subtitle: "Mi Estudio",
      image: "/images/tattoos/arte.webp",
      content: [
        "Mi estudio en Bogotá es un espacio donde las ideas cobran vida en la piel. Cada tatuaje es una conversación entre cliente y artista, una historia que se contará por siempre.",
        "Especializada en estilos que van desde el blackwork hasta el tradicional, cada diseño refleja la personalidad única de quien lo lleva."
      ]
    },
    {
      id: 3,
      title: "ArthCloth",
      subtitle: "Colecciones",
      image: "/images/tattoos/arth.webp",
      content: [
        "La marca nace como la extensión natural de mi arte. Cada prenda es un lienzo que lleva mi sello distintivo, fusionando la estética tattoo con el streetwear urbano.",
        "Colecciones limitadas que hablan el mismo lenguaje visual que mis tatuajes: audaces, personales y con una historia detrás de cada diseño."
      ]
    }
  ];

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="about" className="relative py-24 md:py-32 bg-ink-dark">
      {/* Top tribal divider */}
      <TribalDivider variant="wave" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Organic Tattoo-style Carousel */}
          <div ref={imageRef} className="relative group">
            <div className="aspect-[4/5] bg-ink-black overflow-hidden relative">
              {/* Organic frame SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 500" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9e1239" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="#9e1239" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#9e1239" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M 20 30 Q 10 50 15 100 T 25 200 Q 20 250 30 300 T 20 400 Q 25 450 40 470 L 380 470 Q 395 450 380 400 T 370 300 Q 380 250 375 200 T 385 100 Q 390 50 380 30 L 20 30"
                  stroke="url(#frameGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  opacity="0.8"
                />
                <path 
                  d="M 25 35 Q 15 55 20 105 T 30 205 Q 25 255 35 305 T 25 405 Q 30 455 45 475 L 375 475 Q 390 455 375 405 T 365 305 Q 375 255 370 205 T 380 105 Q 385 55 375 35 L 25 35"
                  stroke="#9e1239" 
                  strokeWidth="1" 
                  fill="none"
                  opacity="0.4"
                />
              </svg>
              
              {/* Images */}
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {slide.isLogo ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ink-black via-ink-black/90 to-ink-black/80 p-8">
                      <img
                        src={slide.image}
                        alt="ETERNAL INK Logo"
                        className="w-full h-full object-contain filter brightness-125 contrast-110 drop-shadow-lg"
                      />
                    </div>
                  ) : (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      style={{ filter: 'brightness(0.6) contrast(1.2)' }}
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
              
              {/* Tattoo-style corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <path d="M 2 8 Q 8 2 16 8 T 30 8 Q 24 14 16 8 T 2 8" stroke="#9e1239" strokeWidth="2" fill="none" opacity="0.6"/>
                  <circle cx="16" cy="8" r="1.5" fill="#9e1239" opacity="0.8"/>
                </svg>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rotate-90">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <path d="M 2 8 Q 8 2 16 8 T 30 8 Q 24 14 16 8 T 2 8" stroke="#9e1239" strokeWidth="2" fill="none" opacity="0.6"/>
                  <circle cx="16" cy="8" r="1.5" fill="#9e1239" opacity="0.8"/>
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 w-8 h-8 -rotate-90">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <path d="M 2 8 Q 8 2 16 8 T 30 8 Q 24 14 16 8 T 2 8" stroke="#9e1239" strokeWidth="2" fill="none" opacity="0.6"/>
                  <circle cx="16" cy="8" r="1.5" fill="#9e1239" opacity="0.8"/>
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 rotate-180">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <path d="M  2 8 Q 8 2 16 8 T 30 8 Q 24 14 16 8 T 2 8" stroke="#9e1239" strokeWidth="2" fill="none" opacity="0.6"/>
                  <circle cx="16" cy="8" r="1.5" fill="#9e1239" opacity="0.8"/>
                </svg>
              </div>
              
              {/* Elegant indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? 'w-10 bg-gradient-to-r from-ink-blood to-ink-bloodLight shadow-lg shadow-ink-blood/30'
                        : 'w-2 bg-white/30 hover:bg-white/50 hover:w-4'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Text side */}
          <div className="relative">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute inset-0'
                }`}
              >
                <span className="font-heading text-xs text-ink-blood tracking-[0.3em] uppercase mb-4 block">
                  {slide.subtitle}
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-8 leading-tight">
                  {slide.title.includes(' ') ? (
                    <>
                      {slide.title.split(' ').slice(0, -1).join(' ')} <br />
                      <span className="text-glow-blood">{slide.title.split(' ').slice(-1)[0]}</span>
                    </>
                  ) : (
                    <span className="text-glow-blood">{slide.title}</span>
                  )}
                </h2>

                <div className="space-y-6 font-body text-sm md:text-base text-white/70 leading-relaxed">
                  {slide.content.map((paragraph, pIndex) => (
                    <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </div>
              </div>
            ))}

                      </div>
        </div>
      </div>

      {/* Bottom tribal divider */}
      <div className="mt-24">
        <TribalDivider variant="thick" />
      </div>
    </section>
  );
};

export default About;
