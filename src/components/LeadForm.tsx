import React, { useState } from 'react';
import { Send, CheckCircle2, PhoneCall, Building2, MapPin, Sparkles } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    city: '',
    outlets: '1 Outlet',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="lead-form" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-bold">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Instant Call / WhatsApp Inquiry</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Get Custom Quote or Sample Demo Pack
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Have questions about custom logo printing, multi-branch discount packages, or agency white-label reselling? Fill out this 20-second form and our product team will connect on WhatsApp with sample mockups.
            </p>

            <div className="space-y-4 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Free Digital Mockup of Your Business Logo on Card</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Special Pricing for 5+ Outlets & Regional Agencies</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Response within 15 minutes during business hours</span>
              </div>
            </div>
          </div>

          {/* Right Lead Form */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2">
                  Request Callback & Sample Preview
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Sharma"
                      className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Business / Brand Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Third Wave Cafe"
                      className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">WhatsApp Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Mumbai, Delhi, Pune"
                      className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Number of Outlets / Cards</label>
                    <select
                      value={formData.outlets}
                      onChange={(e) => setFormData({ ...formData, outlets: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                    >
                      <option value="1 Outlet">1 Unit (Single Outlet)</option>
                      <option value="2 Outlets">2-3 Units (Starter Pack)</option>
                      <option value="5 Outlets">5-10 Units (Multi-Branch Chain)</option>
                      <option value="Agency / Bulk">10+ Units (Agency / White Label)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Requirements / Notes</label>
                    <input
                      type="text"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Custom logo printing or link question..."
                      className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry for Free Preview</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    🔒 We respect your privacy. No spam guarantee.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white font-['Outfit']">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-slate-300 text-xs max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>! Our TapReview specialist will message you on WhatsApp (<span className="text-emerald-400 font-bold">{formData.phone}</span>) shortly with sample card mockups for <span className="text-white font-bold">{formData.businessName}</span>.
                </p>

                <div className="pt-4">
                  <a
                    href={`https://wa.me/919876543210?text=Hi%20TapReview%2C%20I%20just%20submitted%20a%20lead%20form%20for%20${encodeURIComponent(formData.businessName)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md transition-transform hover:scale-105"
                  >
                    <span>Message Us Directly on WhatsApp Now →</span>
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
