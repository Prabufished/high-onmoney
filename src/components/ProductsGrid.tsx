import React from 'react';
import { GRID_PRODUCTS, GridProduct } from '../data/products';
import { MessageSquare, Star, Sparkles, Smartphone, Share2, Instagram, Facebook, Globe, MessageCircle } from 'lucide-react';
import { waLink } from '../utils/wa';

export const ProductsGrid: React.FC = () => {
  const renderProductImageSlot = (product: GridProduct) => {
    switch (product.imageType) {
      case 'stand':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl flex flex-col items-center justify-center p-4 text-white relative overflow-hidden group-hover:scale-102 transition-transform">
            <div className="w-12 h-12 bg-[#1A56DB] rounded-xl flex items-center justify-center mb-2 shadow-md">
              <Star className="w-7 h-7 text-amber-400 fill-amber-400" />
            </div>
            <span className="font-black text-sm tracking-wider font-['Outfit'] text-white">
              GOOGLE REVIEW STAND
            </span>
            <span className="text-[10px] text-slate-300">Tap or Scan for 5 Stars</span>
            <div className="mt-2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="absolute top-2 right-2 bg-blue-500/30 text-blue-200 text-[9px] font-bold px-2 py-0.5 rounded border border-blue-400/40">
              Acrylic L-Stand
            </span>
          </div>
        );
      case 'card':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl flex flex-col items-center justify-center p-4 text-white relative overflow-hidden group-hover:scale-102 transition-transform border border-slate-700">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-2 shadow-md">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <span className="font-black text-sm tracking-wider font-['Outfit'] text-amber-400">
              NFC REVIEW CARD
            </span>
            <span className="text-[10px] text-slate-300">Pocket & Counter PVC Card</span>
            <span className="absolute top-2 right-2 bg-amber-500/20 text-amber-300 text-[9px] font-bold px-2 py-0.5 rounded border border-amber-400/40">
              Matte PVC
            </span>
          </div>
        );
      case 'whatsapp':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-900 rounded-2xl flex flex-col items-center justify-center p-4 text-white relative overflow-hidden group-hover:scale-102 transition-transform">
            <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mb-2 shadow-md">
              <MessageCircle className="w-7 h-7 text-white fill-current" />
            </div>
            <span className="font-black text-sm tracking-wider font-['Outfit'] text-[#25D366]">
              WHATSAPP STAND
            </span>
            <span className="text-[10px] text-slate-300">Direct Customer Chat Tap</span>
            <span className="absolute top-2 right-2 bg-emerald-500/20 text-emerald-300 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-400/40">
              WhatsApp Direct
            </span>
          </div>
        );
      case 'instagram':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-950 rounded-2xl flex flex-col items-center justify-center p-4 text-white relative overflow-hidden group-hover:scale-102 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 rounded-xl flex items-center justify-center mb-2 shadow-md">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <span className="font-black text-sm tracking-wider font-['Outfit'] text-pink-300">
              INSTAGRAM STAND
            </span>
            <span className="text-[10px] text-slate-300">Instant Follow & Tag</span>
            <span className="absolute top-2 right-2 bg-pink-500/20 text-pink-300 text-[9px] font-bold px-2 py-0.5 rounded border border-pink-400/40">
              Social Growth
            </span>
          </div>
        );
      case 'facebook':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 rounded-2xl flex flex-col items-center justify-center p-4 text-white relative overflow-hidden group-hover:scale-102 transition-transform">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-2 shadow-md">
              <Facebook className="w-7 h-7 text-white" />
            </div>
            <span className="font-black text-sm tracking-wider font-['Outfit'] text-blue-400">
              FACEBOOK STAND
            </span>
            <span className="text-[10px] text-slate-300">Page Likes & Check-ins</span>
            <span className="absolute top-2 right-2 bg-blue-500/20 text-blue-300 text-[9px] font-bold px-2 py-0.5 rounded border border-blue-400/40">
              Facebook Likes
            </span>
          </div>
        );
      default:
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-2xl flex flex-col items-center justify-center p-4 text-white relative overflow-hidden group-hover:scale-102 transition-transform">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-2 shadow-md">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <span className="font-black text-sm tracking-wider font-['Outfit'] text-purple-300">
              FULLY CUSTOM STAND
            </span>
            <span className="text-[10px] text-slate-300">Zomato, Swiggy, Website, Menu</span>
            <span className="absolute top-2 right-2 bg-purple-500/20 text-purple-300 text-[9px] font-bold px-2 py-0.5 rounded border border-purple-400/40">
              Any Platform
            </span>
          </div>
        );
    }
  };

  return (
    <section id="products" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs font-extrabold text-[#1A56DB]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NFC + QR Custom Hardware</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2233] font-['Outfit']">
            Our Custom NFC Stands & Cards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Choose the perfect tap hardware for your counter desk. Custom printed with your logo & link before dispatch.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GRID_PRODUCTS.map((product) => {
            const orderMsg = `Hi TapForReview, I want to order the ${product.name} (₹${product.fromPrice}). Please share details.`;
            const waUrl = waLink(orderMsg);

            return (
              <div
                key={product.id}
                className="group bg-[#F6F8FC] border border-slate-200/90 rounded-3xl p-5 hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between space-y-4"
              >
                {/* Product Image Slot */}
                <div className="overflow-hidden rounded-2xl">
                  {renderProductImageSlot(product)}
                </div>

                {/* Info */}
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-lg text-[#1A2233] font-['Outfit']">
                      {product.name}
                    </h3>
                    <span className="text-xs font-black text-[#1A56DB] bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                      from ₹{product.fromPrice}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
