import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 z-40">
      {/* Floating Chat Bubble Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center group"
        aria-label="Chat with TapReview on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
        <MessageSquare className="w-6 h-6 fill-current" />
      </button>

      {/* Popup Chat Card */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 text-slate-900">
          
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-sm">
                TR
              </div>
              <div>
                <h4 className="font-bold text-sm text-white font-['Outfit']">TapReview India Support</h4>
                <div className="flex items-center gap-1 text-[10px] text-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  <span>Online • Instant Reply</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-emerald-700 text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl shadow-xs border border-slate-200 text-slate-700 space-y-1">
              <span className="font-bold text-slate-900 block">👋 Namaste! How can we help?</span>
              <p className="text-[11px] leading-relaxed">
                Need help finding your Google Maps review link or custom logo printing options for your store?
              </p>
            </div>

            <a
              href="https://wa.me/919876543210?text=Hi%20TapReview%2C%20I%20want%20to%20order%20NFC%20Google%20Review%20Cards%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat Now</span>
            </a>
          </div>

          <div className="bg-white p-2 text-[10px] text-center text-slate-400 border-t border-slate-100 font-medium">
            Fast assistance for orders & custom logo designs
          </div>
        </div>
      )}
    </div>
  );
};
