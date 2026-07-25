import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
  showBadge?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  isDark = false,
  showBadge = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 ${className}`}>
      {/* Official TapForReview Icon: Teal open NFC ring + Gold Star + Dual NFC waves */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} shrink-0 drop-shadow-xs`}
      >
        {/* Outer Teal Arc with Gap at Top Right */}
        <path
          d="M 68 20 A 38 38 0 1 0 86 52"
          stroke="#00a3a5"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Dual Concentric NFC Waves inside */}
        <path
          d="M 33 39 A 16 16 0 0 1 33 69"
          stroke="#00a3a5"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 46 32 A 25 25 0 0 1 46 76"
          stroke="#00a3a5"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        {/* Golden Star at Top-Right Gap */}
        <polygon
          points="78,16 82,26 93,27 85,35 87,46 78,40 69,46 71,35 63,27 74,26"
          fill="#f59e0b"
        />
      </svg>

      {/* Brand Name Text: tapforreview.in */}
      <div className="flex items-center gap-1.5 leading-none">
        <span className={`font-extrabold tracking-tight ${textSizes[size]} font-['Outfit']`}>
          <span className="text-[#00a3a5]">tapforreview</span>
          <span className={isDark ? 'text-white' : 'text-[#0f172a]'}>.in</span>
        </span>

        {showBadge && (
          <span className="hidden xs:inline-block bg-amber-100/90 text-[#b45309] text-[9px] font-extrabold px-1.5 py-0.5 rounded border border-amber-300/80 uppercase tracking-wider">
            INDIA 🇮🇳
          </span>
        )}
      </div>
    </div>
  );
};
