import React, { useState } from 'react';
import { STAND_PRICING, CARD_PRICING, ADDONS } from '../data/products';
import { MessageSquare, Sparkles, Check, Truck, ShieldCheck, Zap } from 'lucide-react';
import { waLink } from '../utils/wa';

export const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stands' | 'cards'>('stands');

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-[#B45309] border border-amber-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Volume Pricing & Bulk Discounts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A2233] font-['Outfit']">
            Transparent Pricing & Wholesale Tiers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No hidden subscriptions or software fees. One-time purchase with instant WhatsApp ordering.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#F6F8FC] p-1.5 rounded-2xl border border-slate-200 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('stands')}
              className={`px-6 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all ${
                activeTab === 'stands'
                  ? 'bg-[#1A56DB] text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Acrylic L-Stands
            </button>
            <button
              onClick={() => setActiveTab('cards')}
              className={`px-6 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all ${
                activeTab === 'cards'
                  ? 'bg-[#1A56DB] text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              NFC PVC Cards
            </button>
          </div>
        </div>

        {/* Pricing Table (Acrylic Stands or NFC Cards) */}
        <div className="bg-[#F6F8FC] border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-[#1A2233]">
              
              {/* Table Header */}
              <thead className="bg-[#1A2233] text-white text-xs uppercase font-extrabold tracking-wider">
                <tr>
                  <th className="py-4 px-6">Quantity</th>
                  <th className="py-4 px-6">Price Per Unit</th>
                  <th className="py-4 px-6">Total Amount</th>
                  <th className="py-4 px-6 text-right">Order Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-200">
                {(activeTab === 'stands' ? STAND_PRICING : CARD_PRICING).map((row, idx) => {
                  const productLabel = activeTab === 'stands' ? 'Google Review Stands' : 'NFC Review Cards';
                  const msgText = `Hi TapForReview, I want to order ${row.quantityText} ${productLabel} at Rs.${row.unitPrice} each (Rs.${row.totalPrice.toLocaleString('en-IN')} total). Please confirm.`;
                  const rowWaUrl = waLink(msgText);

                  return (
                    <tr
                      key={idx}
                      className={`hover:bg-blue-50/50 transition-colors ${
                        row.isPopular ? 'bg-amber-50/70 border-l-4 border-l-[#B45309]' : ''
                      }`}
                    >
                      {/* Quantity */}
                      <td className="py-4 px-6 font-bold text-slate-900">
                        <div className="flex items-center gap-2">
                          <span>{row.quantityText} units</span>
                          {row.isPopular && (
                            <span className="bg-[#B45309] text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wide">
                              POPULAR
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Unit Price */}
                      <td className="py-4 px-6 font-extrabold text-[#1A56DB]">
                        ₹{row.unitPrice.toLocaleString('en-IN')} / unit
                      </td>

                      {/* Total Price */}
                      <td className="py-4 px-6 font-black text-[#1A2233]">
                        ₹{row.totalPrice.toLocaleString('en-IN')}
                      </td>

                      {/* Order Button */}
                      <td className="py-4 px-6 text-right">
                        <a
                          href={rowWaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold px-4 py-2 rounded-xl text-xs shadow-xs hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
                        >
                          <MessageSquare className="w-3.5 h-3.5 fill-current" />
                          <span>Order on WhatsApp</span>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
        </div>

        {/* Customization Add-ons Section */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl text-[#1A2233] font-['Outfit']">
                Customization Add-Ons & Extras
              </h3>
              <p className="text-xs text-slate-600">
                Enhance your cards with custom branding or express packaging options
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full w-fit">
              All Prices Inclusive of GST
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {ADDONS.map((addon, i) => (
              <div key={i} className="bg-white border border-slate-200 p-4 rounded-2xl flex items-start justify-between gap-3 shadow-xs">
                <div>
                  <span className="font-bold text-[#1A2233] block text-sm">{addon.name}</span>
                  <span className="text-slate-500">{addon.note}</span>
                </div>
                <span className="font-black text-[#1A56DB] bg-blue-50 px-2.5 py-1 rounded-lg text-xs shrink-0 border border-blue-100">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center text-xs text-slate-500 font-medium">
            * Free shipping on prepaid orders anywhere in India. Cash on Delivery (COD) available for ₹49 extra courier processing.
          </div>
        </div>

      </div>
    </section>
  );
};
