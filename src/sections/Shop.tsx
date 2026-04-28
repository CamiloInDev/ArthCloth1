import React, { useState, useEffect } from 'react';
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
    name: 'Hoodie Cropped',
    price: 45.99,
    category: 'ropa',
    image: '/images/products/busocrop.webp',
  },
  {
    id: 2,
    name: 'Hoodie',
    price: 54.99,
    category: 'ropa',
    image: '/images/products/Busomaloshabitos.webp',
  },
  {
    id: 3,
    name: 'Camibuso',
    price: 39.99,
    category: 'ropa',
    image: '/images/products/camibuso.webp',
  },
  {
    id: 4,
    name: 'Coleccion Malos Hábitos',
    price: 24.99,
    category: 'ropa',
    image: '/images/products/camimaloshabi.webp',
    badge: 'Popular',
  },
  {
    id: 5,
    name: 'Coleccion Death or Glory',
    price: 24.99,
    category: 'ropa',
    image: '/images/products/camideath.webp',
  },
  {
    id: 6,
    name: 'Camiseta A.C.A.B',
    price: 27.99,
    category: 'ropa',
    image: '/images/products/acab.webp',
    badge: 'New',
  },
  // Accesorios
  {
    id: 7,
    name: 'Bufanda B&W',
    price: 19.99,
    category: 'accesorios',
    image: '/images/products/carru2.webp',
  },
  {
    id: 8,
    name: 'Aretes',
    price: 14.99,
    category: 'accesorios',
    image: 'https://picsum.photos/seed/aretes/600/600.jpg',
  },
];

export const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'ropa' | 'accesorios'>('ropa');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const titleRef = useScrollReveal({ from: { opacity: 0, y: 30 }, duration: 0.8 });

  // Handle hash navigation for category selection
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#shop-ropa') {
        setActiveCategory('ropa');
        // Smooth scroll to shop section after setting category
        setTimeout(() => {
          document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === '#shop-accesorios') {
        setActiveCategory('accesorios');
        // Smooth scroll to shop section after setting category
        setTimeout(() => {
          document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const filteredProducts = products.filter((p) => p.category === activeCategory);

  const handleWhatsAppClick = (product: Product) => {
    const message = encodeURIComponent(`Hola, estoy interesado en el producto: ${product.name} con precio €${product.price.toFixed(2)}`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <>
      <section id="shop" className="relative py-24 md:py-32 bg-ink-dark">
      <div id="shop-ropa" />
      <div id="shop-accesorios" />
      {/* Section Title with Enhanced Design */}
      <div ref={titleRef} className="text-center mb-16 px-4 relative">
        {/* Decorative tribal elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-ink-blood to-transparent opacity-60"></div>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <InkSplatter variant={1} opacity={0.15} />
        </div>
        
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
          <span className="relative inline-block">
            LA
            <span className="absolute -inset-2 bg-ink-blood/20 blur-xl animate-pulse"></span>
          </span>
          <br />
          <span className="relative inline-block">
            <span className="text-glow-blood">TIENDA</span>
            <span className="absolute -inset-1 bg-gradient-to-r from-ink-blood/30 to-ink-blood/10 blur-lg"></span>
          </span>
        </h2>
        
        <div className="relative inline-block">
          <p className="font-heading text-sm md:text-base text-white/70 tracking-[0.3em] uppercase mb-4">
            Prendas locales forjadas autonomamente
          </p>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-ink-blood via-ink-blood/50 to-transparent"></div>
        </div>
        
        {/* Decorative arrows */}
        <div className="flex justify-center items-center gap-8 mt-6">
          <svg width="40" height="2" viewBox="0 0 40 2" className="opacity-40">
            <path d="M0,1 L30,1 M25,0 L30,1 L25,2" stroke="#9F1239" strokeWidth="1" fill="none" />
          </svg>
          <span className="font-heading text-xs text-ink-blood/60 tracking-widest uppercase">Exclusive Collection</span>
          <svg width="40" height="2" viewBox="0 0 40 2" className="opacity-40">
            <path d="M40,1 L10,1 M15,0 L10,1 L15,2" stroke="#9F1239" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      {/* Enhanced Category Tabs */}
      <div className="flex justify-center gap-6 md:gap-12 mb-16 px-4 relative">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-ink-blood/5 blur-xl rounded-full"></div>
        
        <button
          onClick={() => setActiveCategory('ropa')}
          className={`relative font-heading text-lg md:text-xl tracking-[0.2em] uppercase px-8 py-4 transition-all duration-500 group ${
            activeCategory === 'ropa'
              ? 'text-white scale-105'
              : 'text-white/60 hover:text-white/80'
          }`}
        >
          <span className="relative z-10">Ropa</span>
          
          {/* Active state effects */}
          {activeCategory === 'ropa' && (
            <>
              <div className="absolute inset-0 bg-ink-blood/20 border border-ink-blood/30 rounded-lg backdrop-blur-sm"></div>
              <div className="absolute -inset-1 bg-ink-blood/20 blur-lg rounded-lg"></div>
              <InkSplatter variant={2} opacity={0.1} />
            </>
          )}
          
          {/* Hover effects */}
          <div className={`absolute inset-0 bg-gradient-to-r from-ink-blood/10 to-transparent rounded-lg transition-opacity duration-300 ${
            activeCategory === 'ropa' ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
          }`}></div>
          
          {/* Bottom indicator */}
          {activeCategory === 'ropa' && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-ink-blood rounded-full glow-blood"></div>
          )}
        </button>
        
        <button
          onClick={() => setActiveCategory('accesorios')}
          className={`relative font-heading text-lg md:text-xl tracking-[0.2em] uppercase px-8 py-4 transition-all duration-500 group ${
            activeCategory === 'accesorios'
              ? 'text-white scale-105'
              : 'text-white/60 hover:text-white/80'
          }`}
        >
          <span className="relative z-10">Accesorios</span>
          
          {/* Active state effects */}
          {activeCategory === 'accesorios' && (
            <>
              <div className="absolute inset-0 bg-ink-blood/20 border border-ink-blood/30 rounded-lg backdrop-blur-sm"></div>
              <div className="absolute -inset-1 bg-ink-blood/20 blur-lg rounded-lg"></div>
              <InkSplatter variant={2} opacity={0.1} />
            </>
          )}
          
          {/* Hover effects */}
          <div className={`absolute inset-0 bg-gradient-to-r from-ink-blood/10 to-transparent rounded-lg transition-opacity duration-300 ${
            activeCategory === 'accesorios' ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
          }`}></div>
          
          {/* Bottom indicator */}
          {activeCategory === 'accesorios' && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-ink-blood rounded-full glow-blood"></div>
          )}
        </button>
      </div>

      {/* Enhanced Product Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-ink-card to-ink-card/80 overflow-hidden transition-all duration-700 transform hover:scale-105 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Enhanced border effects */}
              <div className="absolute inset-0 border border-ink-blood/20 rounded-lg"></div>
              <div className="absolute inset-0 border border-white/10 rounded-lg m-px"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-ink-blood/50"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-ink-blood/50"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-ink-blood/50"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-ink-blood/50"></div>
              {/* Enhanced Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-ink-black to-ink-black/50">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredProduct === product.id ? 'scale-125 brightness-50 contrast-110' : 'scale-100 brightness-75'
                  }`}
                  loading="lazy"
                />

                {/* Enhanced Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 z-20">
                    <div className="relative">
                      <span className="relative px-3 py-1.5 bg-ink-blood text-white text-[10px] font-heading tracking-widest uppercase shadow-lg shadow-ink-blood/50">
                        {product.badge}
                      </span>
                      <div className="absolute -inset-1 bg-ink-blood/30 blur-sm rounded"></div>
                    </div>
                  </div>
                )}

                {/* Enhanced overlay with ink effects */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-ink-black/40 to-transparent"></div>
                  <InkSplatter variant={3} opacity={0.3} />
                  <div className="relative z-10 flex gap-4">
                    <button
                      onClick={() => handleWhatsAppClick(product)}
                      className="group/btn w-14 h-14 bg-ink-black/90 border-2 border-ink-blood/60 flex items-center justify-center text-white hover:bg-ink-blood hover:border-ink-blood hover:scale-110 transition-all duration-300 shadow-lg shadow-ink-blood/30"
                      aria-label="Contactar por WhatsApp"
                    >
                      <MessageCircle className="w-6 h-6 group-hover/btn:animate-pulse" />
                    </button>
                    <button
                      className="group/btn w-14 h-14 bg-ink-black/90 border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/20 hover:border-white hover:scale-110 transition-all duration-300 shadow-lg"
                      aria-label="Quick view"
                    >
                      <Eye className="w-6 h-6 group-hover/btn:animate-pulse" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Product Info */}
              <div className="relative p-5 bg-gradient-to-t from-ink-black/30 to-transparent">
                {/* Top border decoration */}
                <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-ink-blood/30 to-transparent"></div>
                
                <h3 className="font-heading text-sm text-white tracking-wider uppercase mb-3 font-semibold">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <p className="font-body text-xl text-ink-bloodLight font-bold tracking-tight">
                      €{product.price.toFixed(2)}
                    </p>
                    <div className="absolute -inset-1 bg-ink-blood/10 blur-sm"></div>
                  </div>
                  
                  {/* Quick action indicator */}
                  <div className="w-8 h-8 rounded-full border border-ink-blood/30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-ink-blood rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Shop;
