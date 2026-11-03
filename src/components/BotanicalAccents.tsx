import React from 'react';

export const OliveBranchDivider: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-48 h-6 mx-auto',
  color = '#C5A059',
}) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059]" />
    {/* Twin delicate olive leaves / heart instead of star */}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={color}
        opacity="0.9"
        transform="scale(0.55) translate(9, 9)"
      />
    </svg>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059]" />
  </div>
);

// Intertwined Rings Wedding Crest - completely replacing the star/radiating geometry
export const WeddingRingsCrest: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Intertwined golden wedding bands with soft laurel branch */}
    <circle cx="42" cy="50" r="22" stroke="#C5A059" strokeWidth="3.5" fill="none" opacity="0.95" />
    <circle cx="58" cy="50" r="22" stroke="#E5C378" strokeWidth="3.5" fill="none" opacity="0.95" />
    {/* Ring inner depth */}
    <circle cx="42" cy="50" r="18.5" stroke="#4A121A" strokeWidth="1" fill="none" opacity="0.4" />
    <circle cx="58" cy="50" r="18.5" stroke="#3B4426" strokeWidth="1" fill="none" opacity="0.4" />
    {/* Little diamond / gem accent on bride ring */}
    <path d="M42 23 L45 28 L42 33 L39 28 Z" fill="#C5A059" />
    <circle cx="42" cy="28" r="1.5" fill="#FAF7F2" />
  </svg>
);

export const FloralCorner: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position = 'top-left', className = 'w-24 h-24' }) => {
  const transforms: Record<string, string> = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-[-1]',
  };

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none opacity-40 ${transforms[position]} ${className}`}
    >
      <path
        d="M5 95 C 10 50, 50 10, 95 5"
        stroke="#C5A059"
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />
      {/* Leaves */}
      <path
        d="M20 70 C 15 55, 30 50, 35 60 C 35 70, 25 75, 20 70 Z"
        fill="#3B4426"
        opacity="0.6"
      />
      <path
        d="M45 45 C 40 30, 55 25, 60 35 C 60 45, 50 50, 45 45 Z"
        fill="#3B4426"
        opacity="0.6"
      />
      <path
        d="M70 20 C 65 5, 80 0, 85 10 C 85 20, 75 25, 70 20 Z"
        fill="#3B4426"
        opacity="0.6"
      />
      {/* Blossom */}
      <circle cx="35" cy="60" r="3" fill="#4A121A" />
      <circle cx="60" cy="35" r="3" fill="#4A121A" />
      <circle cx="85" cy="10" r="4" fill="#C5A059" />
    </svg>
  );
};
