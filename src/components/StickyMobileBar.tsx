import React from 'react';
import { ShoppingBag, Sparkles, Zap } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenCart: () => void;
  onOpenCustomizer: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  onOpenCart,
  onOpenCustomizer,
}) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl flex items-center gap-2">
      <button
        onClick={onOpenCustomizer}
        className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-3 px-2 rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-slate-300"
      >
        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
        <span>Live Preview</span>
      </button>

      <button
        onClick={onOpenCart}
        className="flex-2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white text-xs font-black py-3 px-4 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
      >
        <ShoppingBag className="w-4 h-4" />
        <span>Buy Counter Combo — ₹1,499</span>
      </button>
    </div>
  );
};
