import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Check, ShoppingBag, Zap, ShieldCheck, Sparkles, Star, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onAddToCart: (product: Product) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onAddToCart }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'combos' | 'singles'>('all');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filterCategory === 'combos') return p.type === 'combo' || p.type === 'pack';
    if (filterCategory === 'singles') return p.type === 'card' || p.type === 'stand';
    return true;
  });

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Transparent Pricing • One-Time Cost</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Choose Your Google Review NFC Package
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No monthly subscriptions, no hidden software fees. Includes lifetime chip programming, durable waterproof material, and free express India dispatch.
          </p>

          {/* Filter Category Toggle Buttons */}
          <div className="pt-4 flex justify-center">
            <div className="bg-slate-200/80 p-1 rounded-2xl flex text-xs font-bold text-slate-700">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  filterCategory === 'all'
                    ? 'bg-white text-blue-600 shadow-sm font-extrabold'
                    : 'hover:text-slate-900'
                }`}
              >
                All Packages (7)
              </button>
              <button
                onClick={() => setFilterCategory('combos')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1 ${
                  filterCategory === 'combos'
                    ? 'bg-blue-600 text-white shadow-sm font-extrabold'
                    : 'hover:text-slate-900'
                }`}
              >
                <span>🔥 Value Combos & Packs</span>
                <span className="bg-amber-400 text-slate-900 text-[10px] px-1.5 py-0.5 rounded font-black">SAVE 40%</span>
              </button>
              <button
                onClick={() => setFilterCategory('singles')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  filterCategory === 'singles'
                    ? 'bg-white text-blue-600 shadow-sm font-extrabold'
                    : 'hover:text-slate-900'
                }`}
              >
                Single Units
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProducts.map((product) => {
            const perUnitPrice = Math.round(product.price / product.unitCount);

            return (
              <div
                key={product.id}
                className={`relative bg-white rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                  product.isPopular
                    ? 'border-2 border-blue-600 shadow-2xl ring-4 ring-blue-500/10 lg:-translate-y-2'
                    : 'border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-300'
                }`}
              >
                {/* Popular Ribbon / Badge */}
                {product.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-xs px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                    <span>{product.tag}</span>
                  </div>
                )}

                {!product.isPopular && product.badge && (
                  <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-emerald-200">
                    {product.badge}
                  </div>
                )}

                <div>
                  {/* Category Tag */}
                  <div className="text-[11px] font-extrabold text-blue-600 uppercase tracking-widest mb-1 pt-1">
                    {product.unitCount === 1 ? 'Single Unit' : `${product.unitCount} Units Bundle`}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] mb-2">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Price Block */}
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-sm text-slate-400 line-through font-semibold">
                        MRP ₹{product.mrp.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-extrabold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md">
                        Save ₹{product.savings}
                      </span>
                    </div>

                    {product.unitCount > 1 && (
                      <div className="text-[11px] text-blue-700 font-bold mt-1.5 flex items-center gap-1">
                        <span>⚡ Effective Cost: Only ₹{perUnitPrice}/unit</span>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 text-xs text-slate-700">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-tight font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div>
                  <button
                    onClick={() => onAddToCart(product)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group ${
                      product.isPopular
                        ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-xl shadow-blue-500/20 hover:scale-[1.02]'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:scale-[1.01]'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart — ₹{product.price.toLocaleString('en-IN')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[10px] text-slate-400 text-center mt-2 font-medium">
                    100% Guaranteed Working • Free GST Invoice
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bulk Corporate Order Callout */}
        <div className="mt-16 bg-white border border-blue-100 rounded-3xl p-8 shadow-md text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            <span>Need 20+ Custom Units or Franchise Branding?</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">
            Special Corporate & Franchise Pricing
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            We provide custom UV color printing, CSV batch encoding, and dedicated account manager support for chains, agencies, and large businesses.
          </p>
          <div className="pt-2">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl text-xs transition-colors"
            >
              <span>Request Bulk Corporate Quote</span>
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
