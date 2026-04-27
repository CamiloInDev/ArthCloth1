import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

/**
 * Footer — Deep black with tribal band, social icons, copyright
 * Raw, premium tattoo studio feel
 */
export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-ink-black pt-16 pb-8">
      {/* Tribal band at top */}
      <div className="absolute top-0 left-0 w-full h-3 overflow-hidden">
        <svg viewBox="0 0 1200 12" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <pattern id="tribal-footer" x="0" y="0" width="40" height="12" patternUnits="userSpaceOnUse">
              <path d="M0,6 L10,0 L20,6 L30,12 L40,6" stroke="#1a1a1a" strokeWidth="1" fill="none" />
              <path d="M0,6 L10,12 L20,6 L30,0 L40,6" stroke="#9F1239" strokeWidth="0.5" fill="none" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tribal-footer)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <h3 className="font-display text-3xl text-white mb-4">ARTHCLOTH</h3>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
              Tienda de ropa streetwear y accesorios. Estilo único desde 2018. Cada prenda es una
              declaración, cada diseño cuenta una historia.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-ink-bloodLight hover:border-ink-blood/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-ink-bloodLight hover:border-ink-blood/50 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-ink-bloodLight hover:border-ink-blood/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm text-white tracking-[0.2em] uppercase mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', href: '#hero' },
                { label: 'Tienda', href: '#shop' },
                { label: 'Galería', href: '#gallery' },
                { label: 'Portafolio', href: '#portfolio' },
                { label: 'Nosotros', href: '#about' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/50 hover:text-ink-bloodLight transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm text-white tracking-[0.2em] uppercase mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-ink-blood mt-1 flex-shrink-0" />
                <span className="font-body text-sm text-white/50">
                  Calle Oscura 666, Barrio Gótico
                  <br />
                  Barcelona, España
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-ink-blood flex-shrink-0" />
                <span className="font-body text-sm text-white/50">+34 666 999 666</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-ink-blood flex-shrink-0" />
                <span className="font-body text-sm text-white/50">hola@arthcloth.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/30">
            © 2024 ARTHCLOTH. Todos los derechos reservados.
          </p>
          <p className="font-heading text-[10px] text-white/20 tracking-[0.2em] uppercase">
            Hecho con sangre y tinta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
