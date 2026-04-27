import React from 'react';

/**
 * SVG Ink Splatter component
 * Used as overlay on hover states for cards, buttons, and gallery items
 * to simulate fresh ink splashing on skin/paper
 */
export const InkSplatter: React.FC<{
  className?: string;
  opacity?: number;
  variant?: 1 | 2 | 3;
}> = ({ className = '', opacity = 0.6, variant = 1 }) => {
  const splatters = [
    // Variant 1: classic round splatter
    <svg key="1" viewBox="0 0 200 200" className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} style={{ opacity }}>
      <defs>
        <filter id="ink1">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
        </filter>
      </defs>
      <path
        d="M100,20 C130,10 160,30 170,60 C180,90 160,120 140,140 C120,160 90,170 70,160 C40,150 20,120 25,90 C30,60 50,30 80,25 Z"
        fill="#0a0a0a"
        filter="url(#ink1)"
      />
      <circle cx="90" cy="80" r="15" fill="#0a0a0a" filter="url(#ink1)" />
      <circle cx="120" cy="110" r="8" fill="#0a0a0a" filter="url(#ink1)" />
      <circle cx="60" cy="120" r="10" fill="#0a0a0a" filter="url(#ink1)" />
      <circle cx="140" cy="90" r="6" fill="#0a0a0a" filter="url(#ink1)" />
      <circle cx="80" cy="140" r="5" fill="#0a0a0a" filter="url(#ink1)" />
    </svg>,
    // Variant 2: aggressive drip
    <svg key="2" viewBox="0 0 200 200" className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} style={{ opacity }}>
      <path
        d="M50,40 Q80,30 120,45 Q160,60 150,100 Q140,140 100,150 Q60,160 40,120 Q20,80 50,40 Z M90,150 L85,180 L95,175 L100,180 L105,170 Z"
        fill="#0a0a0a"
      />
      <circle cx="70" cy="80" r="12" fill="#0a0a0a" />
      <circle cx="130" cy="90" r="8" fill="#0a0a0a" />
      <circle cx="100" cy="60" r="15" fill="#0a0a0a" />
    </svg>,
    // Variant 3: scattered drops
    <svg key="3" viewBox="0 0 200 200" className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} style={{ opacity }}>
      <circle cx="100" cy="100" r="40" fill="#0a0a0a" />
      <circle cx="60" cy="70" r="15" fill="#0a0a0a" />
      <circle cx="150" cy="80" r="20" fill="#0a0a0a" />
      <circle cx="140" cy="130" r="12" fill="#0a0a0a" />
      <circle cx="70" cy="140" r="18" fill="#0a0a0a" />
      <circle cx="100" cy="50" r="10" fill="#0a0a0a" />
      <circle cx="160" cy="110" r="8" fill="#0a0a0a" />
      <circle cx="40" cy="110" r="6" fill="#0a0a0a" />
      <circle cx="80" cy="170" r="7" fill="#0a0a0a" />
    </svg>,
  ];

  return splatters[variant - 1] || splatters[0];
};

export default InkSplatter;
