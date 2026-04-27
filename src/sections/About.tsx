import React from 'react';
import { useScrollReveal, useInkReveal } from '@/hooks/useScrollReveal';
import TribalDivider from '@/components/TribalDivider';

/**
 * About / Story Section
 * Tribal decorative dividers, text in Inter + red accents
 * Raw studio story with ink-themed copy
 */
export const About: React.FC = () => {
  const sectionRef = useScrollReveal({ from: { opacity: 0, y: 40 }, duration: 1 });
  const imageRef = useInkReveal();

  return (
    <section id="about" className="relative py-24 md:py-32 bg-ink-dark">
      {/* Top tribal divider */}
      <TribalDivider variant="wave" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side with ink reveal */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] bg-ink-black overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80"
                alt="Tattoo artist at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative frame corners */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-ink-blood" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-ink-blood" />
          </div>

          {/* Text side */}
          <div className="relative">
            <span className="font-heading text-xs text-ink-blood tracking-[0.3em] uppercase mb-4 block">
              Desde 2018
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-8 leading-tight">
              Historia de
              <br />
              <span className="text-glow-blood">Sangre y Tinta</span>
            </h2>

            <div className="space-y-6 font-body text-sm md:text-base text-white/70 leading-relaxed">
              <p>
                <span className="text-ink-bloodLight font-semibold">ETERNAL INK</span> nació en el
                corazón del barrio gótico, entre callejones oscuros y el zumbido constante de las
                máquinas de tatuar. Lo que comenzó como un pequeño estudio clandestino se ha
                convertido en un santuario para quienes llevan el arte en la piel.
              </p>
              <p>
                Nuestro estilo se nutre de las tradiciones{' '}
                <span className="text-white font-medium">old-school americanas</span>, del
                poderío del <span className="text-white font-medium">blackwork</span> europeo,
                y de la fuerza ancestral de los patrones{' '}
                <span className="text-white font-medium">tribales</span>. Cada pieza que sale
                de nuestro estudio es una declaración de guerra contra lo ordinario.
              </p>
              <p>
                En 2022 expandimos nuestra visión al mundo del streetwear. La ropa y los
                accesorios de <span className="text-ink-bloodLight font-semibold">ETERNAL INK</span>{' '}
                no son moda pasajera — son armadura para quienes caminan entre sombras.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/10">
              <div>
                <span className="font-display text-3xl md:text-4xl text-ink-bloodLight block">
                  2.5K+
                </span>
                <span className="font-heading text-[10px] text-white/50 tracking-widest uppercase">
                  Tatuajes
                </span>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl text-ink-bloodLight block">
                  6
                </span>
                <span className="font-heading text-[10px] text-white/50 tracking-widest uppercase">
                  Artistas
                </span>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl text-ink-bloodLight block">
                  7
                </span>
                <span className="font-heading text-[10px] text-white/50 tracking-widest uppercase">
                  Años
                </span>
              </div>
            </div>
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
