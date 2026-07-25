import React from 'react';
import { ADDONS } from '../data/products';
import { Image, Link, Zap, Check, Sparkles } from 'lucide-react';

interface AddonsBarProps {
  customLogo: boolean;
  setCustomLogo: (val: boolean) => void;
  reviewLinkSetup: boolean;
  setReviewLinkSetup: (val: boolean) => void;
  expressShipping: boolean;
  setExpressShipping: (val: boolean) => void;
}

export const AddonsBar: React.FC<AddonsBarProps> = ({
  customLogo,
  setCustomLogo,
  reviewLinkSetup,
  setReviewLinkSetup,
  expressShipping,
  setExpressShipping,
}) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="font-extrabold text-base sm:text-lg text-white font-['Outfit']">
              Recommended Add-Ons for Your Order
            </h3>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Boost your card appearance & guarantee instant 24-hour priority dispatch.
          </p>
        </div>
        <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-1 rounded-full font-bold self-start sm:self-auto">
          Optional Order Upgrades
        </span>
      </div>

      {/* Addons Grid */}
      <div className="grid sm:grid-cols-3 gap-4">
        
        {/* Addon 1: Custom Logo */}
        <label
          onClick={() => setCustomLogo(!customLogo)}
          className={`cursor-pointer p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 relative ${
            customLogo
              ? 'bg-blue-600/30 border-blue-400 shadow-lg ring-2 ring-blue-400/30'
              : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center">
              <Image className="w-5 h-5" />
            </div>
            <div
              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                customLogo ? 'bg-blue-500 border-blue-400 text-white' : 'border-slate-600 bg-slate-900'
              }`}
            >
              {customLogo && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between font-bold text-sm text-white">
              <span>Custom Logo Printing</span>
              <span className="text-amber-300 font-extrabold">+₹199</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug mt-1">
              High-definition UV printing of your business logo on card/stand front.
            </p>
          </div>
        </label>

        {/* Addon 2: Review Link Setup */}
        <label
          onClick={() => setReviewLinkSetup(!reviewLinkSetup)}
          className={`cursor-pointer p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 relative ${
            reviewLinkSetup
              ? 'bg-blue-600/30 border-blue-400 shadow-lg ring-2 ring-blue-400/30'
              : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center">
              <Link className="w-5 h-5" />
            </div>
            <div
              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                reviewLinkSetup ? 'bg-blue-500 border-blue-400 text-white' : 'border-slate-600 bg-slate-900'
              }`}
            >
              {reviewLinkSetup && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between font-bold text-sm text-white">
              <span>Place ID Link Setup</span>
              <span className="text-amber-300 font-extrabold">+₹149</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug mt-1">
              We locate your Google Place ID, test the deep link, & lock encode it.
            </p>
          </div>
        </label>

        {/* Addon 3: Express Shipping */}
        <label
          onClick={() => setExpressShipping(!expressShipping)}
          className={`cursor-pointer p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 relative ${
            expressShipping
              ? 'bg-blue-600/30 border-blue-400 shadow-lg ring-2 ring-blue-400/30'
              : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <div
              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                expressShipping ? 'bg-blue-500 border-blue-400 text-white' : 'border-slate-600 bg-slate-900'
              }`}
            >
              {expressShipping && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between font-bold text-sm text-white">
              <span>Express Air Courier</span>
              <span className="text-amber-300 font-extrabold">+₹99</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug mt-1">
              Priority 12-24h air courier dispatch (BlueDart/Delhivery Air) with SMS tracking.
            </p>
          </div>
        </label>

      </div>

    </div>
  );
};
