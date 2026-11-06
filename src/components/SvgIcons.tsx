import React from 'react';

export const ButterflyIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
    <path d="M50 50 C30 10, 0 15, 8 45 C12 60, 35 58, 50 50Z" fill="#A893D1" />
    <path d="M50 50 C70 10, 100 15, 92 45 C88 60, 65 58, 50 50Z" fill="#A893D1" />
    <path d="M50 52 C35 60, 15 75, 28 88 C38 96, 48 75, 50 52Z" fill="#D97A8E" />
    <path d="M50 52 C65 60, 85 75, 72 88 C62 96, 52 75, 50 52Z" fill="#D97A8E" />
    <rect x="47" y="35" width="6" height="40" rx="3" fill="#F8EDE6" />
  </svg>
);

export const StarIcon: React.FC<{ className?: string; size?: number; fillStar?: string }> = ({ 
  className = '', 
  size = 56,
  fillStar = '#F8EDE6'
}) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
    <path d="M50 4 L60 40 L96 50 L60 60 L50 96 L40 60 L4 50 L40 40Z" fill={fillStar} />
    <circle cx="50" cy="50" r="9" fill="#4A6FA5" />
  </svg>
);

export const HeartIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
    <circle cx="50" cy="50" r="46" fill="#DCD2EE" />
    <path d="M50 78 C20 58, 22 30, 38 28 C45 27, 49 32, 50 36 C51 32, 55 27, 62 28 C78 30, 80 58, 50 78Z" fill="#D97A8E" />
  </svg>
);

export const FlowerIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
    <g fill="#F2A07B">
      <circle cx="50" cy="24" r="20" />
      <circle cx="76" cy="50" r="20" />
      <circle cx="50" cy="76" r="20" />
      <circle cx="24" cy="50" r="20" />
    </g>
    <circle cx="50" cy="50" r="18" fill="#F8EDE6" />
    <path d="M50 40 L58 50 L50 60 L42 50Z" fill="#D97A8E" />
  </svg>
);

export const HeroButterfly: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <path d="M50 50 C25 0, -10 10, 4 46 C10 62, 34 60, 50 50Z" fill="#A893D1" />
    <path d="M50 50 C75 0, 110 10, 96 46 C90 62, 66 60, 50 50Z" fill="#4A6FA5" />
    <path d="M50 52 C30 62, 6 80, 22 94 C36 104, 48 76, 50 52Z" fill="#D97A8E" />
    <path d="M50 52 C70 62, 94 80, 78 94 C64 104, 52 76, 50 52Z" fill="#2E2448" />
    <rect x="47.5" y="30" width="5" height="48" rx="2.5" fill="#F8EDE6" />
  </svg>
);

export const CandleIcon: React.FC<{ className?: string; size?: number; lit?: boolean }> = ({ 
  className = '', 
  size = 28, 
  lit = true 
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    {lit && (
      <path
        d="M12 2C12 2 9 4.5 9 6.5C9 8.16 10.34 9.5 12 9.5C13.66 9.5 15 8.16 15 6.5C15 4.5 12 2 12 2Z"
        fill="#F2A07B"
        className="animate-pulse"
      />
    )}
    <path d="M12 9.5V11" stroke="#2E2448" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="8" y="11" width="8" height="10" rx="1.5" fill="#DCD2EE" stroke="#4A3A6E" strokeWidth="1.2" />
    <path d="M6 21H18" stroke="#2E2448" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
