import React, { useId } from 'react';

interface BrandMarkProps {
  className?: string;
  variant?: 'medallion' | 'emblem';
}

/**
 * Vector monogram faithful to the official LN INTEGRA circular emblem.
 * Avoids downscaling raster text at small sizes so the mark stays sharp everywhere.
 */
export const BrandMark: React.FC<BrandMarkProps> = ({
  className = 'w-11 h-11',
  variant = 'medallion',
}) => {
  const uid = useId().replace(/:/g, '');
  const gradId = `ln-gold-${uid}`;

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="16" y1="14" x2="104" y2="106" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E6CA8B" />
          <stop offset="50%" stopColor="#C6A15B" />
          <stop offset="100%" stopColor="#9A7838" />
        </linearGradient>
      </defs>

      {variant === 'medallion' && (
        <circle cx="60" cy="60" r="57" fill="#FAF6EE" />
      )}

      {/* Outer circular ring */}
      <circle
        cx="60"
        cy="60"
        r="54.5"
        stroke={`url(#${gradId})`}
        strokeWidth={variant === 'medallion' ? '2.6' : '2.2'}
      />

      {/* Interlocked L + N serif monogram */}
      <g fill={`url(#${gradId})`}>
        {/* L vertical stem + top/bottom serifs */}
        <path d="M35 34h12v2.4h-3.4v39.2h12.2c4.4 0 6.6-1.6 8.2-5.4h2.2l-1.3 8.2H35V76h3.4V36.4H35V34Z" />
        {/* N left stem + diagonal + right stem with serifs */}
        <path d="M51.5 41.5h5.8l22.1 33.4V44h-3.6v-2.5H87V44h-3.6v42.5h-3.1L56.7 51v32.5h3.5V86H49.3v-2.5h3.6V44h-1.4v-2.5Z" />
      </g>
    </svg>
  );
};
