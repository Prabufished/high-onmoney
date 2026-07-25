import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { waLink } from '../utils/wa';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const url = waLink('Hi TapForReview, I want to order NFC Google Review Stands for my business.');

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center animate-in fade-in"
    >
      {/* Pulse Outer Ring */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

      {/* WhatsApp Icon */}
      <MessageSquare className="w-7 h-7 fill-current relative z-10" />

      {/* Tooltip Label on Hover Desktop */}
      <span className="hidden lg:group-hover:inline-block absolute right-16 bg-[#1A2233] text-white text-xs font-extrabold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-md font-['Outfit']">
        Order on WhatsApp
      </span>
    </a>
  );
};
