import React from 'react';

/**
 * Tribal decorative divider with SVG pattern
 * Used to separate sections with a raw, tattoo-flash aesthetic
 */
export const TribalDivider: React.FC<{ variant?: 'thin' | 'thick' | 'wave' }> = ({ variant = 'thick' }) => {
  if (variant === 'wave') {
    return (
      <div className="w-full h-16 overflow-hidden opacity-60">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,30 Q150,0 300,30 T600,30 T900,30 T1200,30 L1200,60 L0,60 Z"
            fill="#1a1a1a"
          />
          <path
            d="M0,35 Q150,5 300,35 T600,35 T900,35 T1200,35"
            stroke="#9F1239"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>
    );
  }

  const height = variant === 'thin' ? 'h-2' : 'h-4';

  return (
    <div className={`w-full ${height} relative overflow-hidden tribal-divider`}>
      <div className="absolute inset-0 bg-gradient-to-r from-ink-black via-ink-blood/20 to-ink-black opacity-40" />
    </div>
  );
};

export default TribalDivider;
