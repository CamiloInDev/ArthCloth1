import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import InkSplatter from '@/components/InkSplatter';

/**
 * Tattoo Flash Gallery — Modern cinematic carousel
 * Features: aggressive zoom hover, ink splatter overlay, title reveal with ink drip effect
 * Supports placeholder tattoo images that can be easily replaced
 */
interface TattooItem {
  id: number;
  title: string;
  style: string;
  image: string;
  description: string;
}

const tattooData: TattooItem[] = [
  {
    id: 1,
    title: 'Cráneo Old School',
    style: 'Old School',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80',
    description: 'Diseño clásico con rosas y dagas',
  },
  {
    id: 2,
    title: 'Serpiente Tribal',
    style: 'Blackwork',
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=800&q=80',
    description: 'Patrón tribal con sombreado profundo',
  },
  {
    id: 3,
    title: 'Rosa Negra',
    style: 'Black & Grey',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80',
    description: 'Realismo con alto contraste',
  },
  {
    id: 4,
    title: 'Daga Corazón',
    style: 'Traditional',
    image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=800&q=80',
    description: 'Flash sheet clásico americano',
  },
  {
    id: 5,
    title: 'Lobo Tribal',
    style: 'Tribal',
    image: 'https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?w=800&q=80',
    description: 'Diseño maorí inspirado',
  },
  {
    id: 6,
    title: 'Calaca Mexicana',
    style: 'Neo-Traditional',
    image: 'https://images.unsplash.com/photo-1551232864-3f8890e9a8a3?w=800&q=80',
    description: 'Arte con influencia mexicana',
  },
];

export const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useScrollReveal({ from: { opacity: 0, y: 30 }, duration: 0.8 });

  // Number of visible cards based on screen size
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, tattooData.length - visibleCount);

  const navigate = useCallback(
    (direction: 'next' | 'prev') => {
      if (isAnimating) return;
      setIsAnimating(true);

      const newIndex =
        direction === 'next'
          ? Math.min(activeIndex + 1, maxIndex)
          : Math.max(activeIndex - 1, 0);

      setActiveIndex(newIndex);

      // Animate cards with GSAP for cinematic feel
      gsap.to(cardsRef.current.filter(Boolean), {
        x: -newIndex * (100 / visibleCount) + '%',
        duration: 0.7,
        ease: 'power3.inOut',
        onComplete: () => setIsAnimating(false),
      });
    },
    [activeIndex, isAnimating, maxIndex, visibleCount]
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  // Card hover animation
  const handleCardHover = (id: number) => {
    setHoveredId(id);
    const card = cardsRef.current.find((c) => c?.dataset.id === String(id));
    if (card) {
      gsap.to(card.querySelector('.card-image'), {
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(card.querySelector('.card-overlay'), {
        opacity: 1,
        duration: 0.3,
      });
      gsap.to(card.querySelector('.card-title'), {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0.1,
        ease: 'power3.out',
      });
    }
  };

  const handleCardLeave = (id: number) => {
    setHoveredId(null);
    const card = cardsRef.current.find((c) => c?.dataset.id === String(id));
    if (card) {
      gsap.to(card.querySelector('.card-image'), {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(card.querySelector('.card-overlay'), {
        opacity: 0,
        duration: 0.3,
      });
      gsap.to(card.querySelector('.card-title'), {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-ink-black overflow-hidden">
      {/* Section Title */}
      <div ref={titleRef} className="text-center mb-16 px-4">
        <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
          Flash <span className="text-glow-blood">Sheet</span>
        </h2>
        <p className="font-heading text-sm md:text-base text-white/50 tracking-[0.2em] uppercase">
          Galería de diseños disponibles
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation Buttons */}
        <button
          onClick={() => navigate('prev')}
          disabled={activeIndex === 0}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-ink-dark/80 border border-ink-blood/30 text-white hover:bg-ink-blood/20 hover:border-ink-blood transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => navigate('next')}
          disabled={activeIndex === maxIndex}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-ink-dark/80 border border-ink-blood/30 text-white hover:bg-ink-blood/20 hover:border-ink-blood transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Cards Track */}
        <div ref={carouselRef} className="overflow-hidden">
          <div className="flex transition-transform duration-700 ease-out">
            {tattooData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                data-id={item.id}
                className="flex-shrink-0 px-2 md:px-3"
                style={{ width: `${100 / visibleCount}%` }}
                onMouseEnter={() => handleCardHover(item.id)}
                onMouseLeave={() => handleCardLeave(item.id)}
              >
                <div className="relative aspect-[3/4] bg-ink-dark overflow-hidden cursor-pointer group">
                  {/* Image */}
                  <div className="card-image absolute inset-0 bg-cover bg-center transition-transform duration-400">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Ink splatter overlay on hover */}
                  <div
                    className="card-overlay absolute inset-0 opacity-0 bg-gradient-to-t from-ink-black via-ink-black/60 to-transparent transition-opacity duration-300"
                  >
                    {hoveredId === item.id && (
                      <InkSplatter variant={(item.id % 3) + 1 as 1 | 2 | 3} opacity={0.3} />
                    )}
                  </div>

                  {/* Title reveal with ink drip effect */}
                  <div className="card-title absolute bottom-0 left-0 right-0 p-6 translate-y-5 opacity-0">
                    <span className="inline-block px-2 py-1 bg-ink-blood/80 text-white text-[10px] font-heading tracking-widest uppercase mb-2">
                      {item.style}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-white/60">{item.description}</p>
                  </div>

                  {/* Zoom icon */}
                  <button
                    onClick={() => openLightbox(index)}
                    className="absolute top-4 right-4 w-10 h-10 bg-ink-black/60 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-ink-blood transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Zoom"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                gsap.to(cardsRef.current.filter(Boolean), {
                  x: -i * (100 / visibleCount) + '%',
                  duration: 0.7,
                  ease: 'power3.inOut',
                });
              }}
              className={`w-2 h-2 transition-all duration-300 ${
                i === activeIndex
                  ? 'bg-ink-blood w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-heading"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={tattooData[lightboxIndex].image}
              alt={tattooData[lightboxIndex].title}
              className="w-full h-auto max-h-[80vh] object-contain border border-ink-blood/20"
            />
            <div className="mt-4 text-center">
              <h3 className="font-display text-3xl text-white">
                {tattooData[lightboxIndex].title}
              </h3>
              <p className="font-heading text-sm text-ink-blood tracking-widest uppercase mt-2">
                {tattooData[lightboxIndex].style}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
