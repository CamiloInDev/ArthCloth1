import React, { useState } from 'react';
import { Eye, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import InkSplatter from '@/components/InkSplatter';

/**
 * Shop Section — Clothing & Accessories store
 * Two categories: Ropa (Clothing) and Accesorios (Accessories)
 * Dark cards with aggressive hover effects, fresh ink simulation
 */

interface Product {
  id: number;
  name: string;
  price: number;
  category: 'ropa' | 'accesorios';
  image: string;
  badge?: string;
}

const products: Product[] = [
  // Ropa
  {
    id: 1,
    name: 'Camiseta "Skull Rose"',
    price: 29.99,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    badge: 'Más Vendido',
  },
  {
    id: 2,
    name: 'Hoodie "Blackwork"',
    price: 59.99,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80',
  },
  {
    id: 3,
    name: 'Chaqueta Cuero Tribal',
    price: 149.99,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1551028919-ac76c9085e79?w=600&q=80',
    badge: 'Nuevo',
  },
  {
    id: 4,
    name: 'Tank Top "Old School"',
    price: 24.99,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80',
  },
  // Accesorios
  {
    id: 5,
    name: 'Collar Daga Plata',
    price: 39.99,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=600&q=80',
  },
  {
    id: 6,
    name: 'Anillo Cráneo Negro',
    price: 19.99,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    badge: 'Oferta',
  },
  {
    id: 7,
    name: 'Pulsera Cuero Tachas',
    price: 14.99,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
  },
  {
    id: 8,
    name: 'Gorra "Eternal Ink"',
    price: 22.99,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80',
  },
];

export const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'ropa' | 'accesorios'>('ropa');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const titleRef = useScrollReveal({ from: { opacity: 0, y: 30 }, duration: 0.8 });

  const filteredProducts = products.filter((p) => p.category === activeCategory);

  const handleWhatsAppClick = (product: Product) => {
    const message = encodeURIComponent(`Hola, estoy interesado en el producto: ${product.name} con precio €${product.price.toFixed(2)}`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="shop" className="relative py-24 md:py-32 bg-ink-dark">
      {/* Section Title */}
      <div ref={titleRef} className="text-center mb-12 px-4">
        <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
          La <span className="text-glow-blood">Tienda</span>
        </h2>
        <p className="font-heading text-sm md:text-base text-white/50 tracking-[0.2em] uppercase">
          Streetwear gótico-punk y accesorios tribales
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 md:gap-8 mb-12 px-4">
        <button
          onClick={() => setActiveCategory('ropa')}
          className={`relative font-heading text-lg md:text-xl tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 ${
            activeCategory === 'ropa'
              ? 'text-ink-bloodLight'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          Ropa
          {activeCategory === 'ropa' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ink-blood glow-blood" />
          )}
        </button>
        <button
          onClick={() => setActiveCategory('accesorios')}
          className={`relative font-heading text-lg md:text-xl tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 ${
            activeCategory === 'accesorios'
              ? 'text-ink-bloodLight'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          Accesorios
          {activeCategory === 'accesorios' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ink-blood glow-blood" />
          )}
        </button>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-ink-card overflow-hidden border border-white/5 hover:border-ink-blood/30 transition-all duration-500"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-ink-black">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProduct === product.id ? 'scale-110 brightness-75' : 'scale-100'
                  }`}
                  loading="lazy"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-ink-blood text-white text-[10px] font-heading tracking-widest uppercase">
                    {product.badge}
                  </span>
                )}

                {/* Fresh ink overlay on hover */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <InkSplatter variant={2} opacity={0.25} />
                  <div className="relative z-10 flex gap-3">
                    <button
                      onClick={() => handleWhatsAppClick(product)}
                      className="w-12 h-12 bg-ink-black/80 border border-ink-blood/50 flex items-center justify-center text-white hover:bg-ink-blood/20 transition-all duration-300"
                      aria-label="Contactar por WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </button>
                    <button
                      className="w-12 h-12 bg-ink-black/80 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                      aria-label="Quick view"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-heading text-sm text-white tracking-wide uppercase mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-lg text-ink-bloodLight font-semibold">
                  €{product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
