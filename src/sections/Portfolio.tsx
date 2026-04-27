import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import InkSplatter from '@/components/InkSplatter';

/**
 * Portfolio Section — Tattoo work showcase
 * Cards with images of tattoos, hover simulating "fresh ink" effect
 * Ink drip / bleed reveal on hover
 */

interface PortfolioItem {
  id: number;
  title: string;
  client: string;
  style: string;
  image: string;
  date: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Serpiente Realista',
    client: 'Marco D.',
    style: 'Realismo',
    image: 'https://images.unsplash.com/photo-1590246815117-7f6d71f72db2?w=800&q=80',
    date: '2024',
  },
  {
    id: 2,
    title: 'Mandala Geometric',
    client: 'Lucía M.',
    style: 'Geométrico',
    image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=800&q=80',
    date: '2024',
  },
  {
    id: 3,
    title: 'Lobo Howling',
    client: 'Diego R.',
    style: 'Black & Grey',
    image: 'https://images.unsplash.com/photo-1542727313-4f3e99aa2568?w=800&q=80',
    date: '2023',
  },
  {
    id: 4,
    title: 'Japanese Dragon',
    client: 'Ana S.',
    style: 'Japonés',
    image: 'https://images.unsplash.com/photo-1596816692476-e25e0c50d27e?w=800&q=80',
    date: '2023',
  },
  {
    id: 5,
    title: 'Tribal Sleeve',
    client: 'Jorge L.',
    style: 'Tribal',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80',
    date: '2024',
  },
  {
    id: 6,
    title: 'Roses & Dagger',
    client: 'Carmen P.',
    style: 'Neo-Traditional',
    image: 'https://images.unsplash.com/photo-1617228069733-80f24c79b7c0?w=800&q=80',
    date: '2024',
  },
];

export const Portfolio: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const titleRef = useScrollReveal({ from: { opacity: 0, y: 30 }, duration: 0.8 });

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-ink-black">
      {/* Section Title */}
      <div ref={titleRef} className="text-center mb-16 px-4">
        <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
          <span className="text-glow-blood">Portafolio</span>
        </h2>
        <p className="font-heading text-sm md:text-base text-white/50 tracking-[0.2em] uppercase">
          Trabajos recientes en piel
        </p>
      </div>

      {/* Masonry-like Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {portfolioData.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden cursor-pointer ${
                index === 0 || index === 3 ? 'md:row-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative ${
                  index === 0 || index === 3 ? 'aspect-[3/4]' : 'aspect-square'
                } bg-ink-dark overflow-hidden`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredId === item.id
                      ? 'scale-110 brightness-[0.6] saturate-150'
                      : 'scale-100 brightness-90 saturate-100'
                  }`}
                  loading="lazy"
                />

                {/* Fresh ink simulation overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Dark gradient from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/40 to-transparent" />

                  {/* Ink splatter effect */}
                  <InkSplatter variant={((item.id % 3) + 1) as 1 | 2 | 3} opacity={0.3} />

                  {/* Content reveal */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="transform transition-transform duration-500 translate-y-0">
                      <span className="inline-block px-2 py-1 bg-ink-blood/80 text-white text-[10px] font-heading tracking-widest uppercase mb-3">
                        {item.style} — {item.date}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="font-heading text-xs text-white/60 tracking-widest uppercase">
                        Cliente: {item.client}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Red glow border on hover */}
                <div
                  className={`absolute inset-0 border-2 transition-all duration-500 pointer-events-none ${
                    hoveredId === item.id
                      ? 'border-ink-blood/60 glow-blood'
                      : 'border-transparent'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
