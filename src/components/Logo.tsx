import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showTagline = true, size = 'md', isDark = false }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* SVG Vector Icon matching the user's brand image: Smartphone tapping card stand with 5 stars arc & NFC waves */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Arc of 5 Golden Stars */}
          <g fill="#F59E0B">
            {/* Star 1 */}
            <polygon points="32,38 34.5,43 40,43.8 36,47.7 36.9,53.2 32,50.6 27.1,53.2 28,47.7 24,43.8 29.5,43" />
            {/* Star 2 */}
            <polygon points="45,26 47.5,31 53,31.8 49,35.7 49.9,41.2 45,38.6 40.1,41.2 41,35.7 37,31.8 42.5,31" />
            {/* Star 3 (Center top) */}
            <polygon points="60,20 62.5,25 68,25.8 64,29.7 64.9,35.2 60,32.6 55.1,35.2 56,29.7 52,25.8 57.5,25" />
            {/* Star 4 */}
            <polygon points="75,26 77.5,31 83,31.8 79,35.7 79.9,41.2 75,38.6 70.1,41.2 71,35.7 67,31.8 72.5,31" />
            {/* Star 5 */}
            <polygon points="88,38 90.5,43 96,43.8 92,47.7 92.9,53.2 88,50.6 83.1,53.2 84,47.7 80,43.8 85.5,43" />
          </g>

          {/* Golden Star Arc Curve */}
          <path
            d="M 26 56 A 42 42 0 0 1 94 56"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeDasharray="100"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* NFC Signal Waves */}
          <path
            d="M 62 48 A 10 10 0 0 1 72 58"
            stroke="#0284C7"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 66 42 A 16 16 0 0 1 82 58"
            stroke="#0284C7"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Acrylic Counter Stand (Base / Back) */}
          <path
            d="M 52 70 L 74 70 L 68 92 L 46 92 Z"
            fill="#0284C7"
            opacity="0.2"
            stroke="#0284C7"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M 54 92 L 64 92 L 68 98 L 50 98 Z"
            fill="#0284C7"
            stroke="#0284C7"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Tapping Smartphone (Slanted 3D Phone) */}
          <g transform="rotate(-25 48 68)">
            <rect
              x="36"
              y="44"
              width="26"
              height="46"
              rx="5"
              fill="#0F4C81"
              stroke="#0B3C68"
              strokeWidth="2"
            />
            {/* Phone Screen */}
            <rect x="39" y="48" width="20" height="34" rx="2" fill="#FFFFFF" />
            {/* Home Indicator / Speaker */}
            <circle cx="49" cy="86" r="1.5" fill="#CBD5E1" />
            <line x1="46" y1="46" x2="52" y2="46" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            {/* Screen NFC Pulse graphic */}
            <circle cx="49" cy="65" r="5" fill="#38BDF8" opacity="0.3" />
            <circle cx="49" cy="65" r="2.5" fill="#0284C7" />
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black tracking-tight ${textSizes[size]} font-['Outfit'] ${isDark ? 'text-white' : 'text-[#0B3C68]'}`}>
            Tap<span className={isDark ? 'text-sky-400' : 'text-[#0284C7]'}>ForReview</span>
          </span>
          <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-1.5 py-0.5 rounded border border-amber-300/60 uppercase tracking-wider shrink-0">
            INDIA 🇮🇳
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'} font-semibold tracking-normal mt-0.5`}>
            NFC Google Review Cards & Stands
          </span>
        )}
      </div>
    </div>
  );
};
