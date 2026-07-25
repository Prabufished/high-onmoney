import React, { useState } from 'react';
import { Sparkles, Star, Smartphone, Upload, Check, ShoppingBag, Eye } from 'lucide-react';

interface CardCustomizerProps {
  onAddToCartCustomized: (details: {
    businessName: string;
    googleMapsUrl: string;
    style: 'google-white' | 'matte-black' | 'acrylic-clear';
  }) => void;
}

export const CardCustomizer: React.FC<CardCustomizerProps> = ({
  onAddToCartCustomized,
}) => {
  const [businessName, setBusinessName] = useState('Your Business Name');
  const [googleMapsUrl, setGoogleMapsUrl] = useState('');
  const [style, setStyle] = useState<'google-white' | 'matte-black' | 'acrylic-clear'>('google-white');
  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');
  const [isCopiedSuccess, setIsCopiedSuccess] = useState(false);

  const handleApply = () => {
    onAddToCartCustomized({
      businessName: businessName || 'My Business',
      googleMapsUrl,
      style,
    });
    setIsCopiedSuccess(true);
    setTimeout(() => setIsCopiedSuccess(false), 3000);
  };

  return (
    <section id="customizer" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real-Time Product Previewer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            See Your Custom NFC Card & Stand Live
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Type your business name below to preview how your personalized Google review NFC card or counter stand will look when delivered to your doorstep.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Input 1: Business Name */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider block">
                1. Your Business Name (Printed on Card)
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                maxLength={35}
                placeholder="e.g. Apex Dental Clinic, Cafe Mocha, Urban Salon"
                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm font-semibold"
              />
              <span className="text-[11px] text-slate-400 block">
                Max 35 characters • Printed in high-definition UV
              </span>
            </div>

            {/* Input 2: Google Maps Link or Place Name */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider block">
                2. Your Google Review / Maps Page URL (Optional)
              </label>
              <input
                type="text"
                value={googleMapsUrl}
                onChange={(e) => setGoogleMapsUrl(e.target.value)}
                placeholder="Paste Google Maps link or type location (or provide on WhatsApp later)"
                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs font-mono"
              />
              <span className="text-[11px] text-slate-400 block">
                Don't have your link handy? Leave blank — our team will help you find it after order!
              </span>
            </div>

            {/* Style Selector */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider block">
                3. Choose Physical Style
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setStyle('google-white')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                    style === 'google-white'
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg'
                      : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-white border border-slate-300"></div>
                  <span>Google White</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStyle('matte-black')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                    style === 'matte-black'
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg'
                      : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-slate-900 border border-slate-500"></div>
                  <span>Midnight Black</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStyle('acrylic-clear')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                    style === 'acrylic-clear'
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg'
                      : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-cyan-100/30 border border-cyan-400"></div>
                  <span>Acrylic Stand</span>
                </button>
              </div>
            </div>

            {/* View Side Toggle */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-bold text-slate-400">Card View Side:</span>
              <div className="bg-slate-900 p-1 rounded-xl border border-slate-700 flex text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setCardSide('front')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    cardSide === 'front' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Front Side (NFC Tap)
                </button>
                <button
                  type="button"
                  onClick={() => setCardSide('back')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    cardSide === 'back' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Back Side (QR Code)
                </button>
              </div>
            </div>

            {/* Save & Apply Action */}
            <div className="pt-2">
              <button
                onClick={handleApply}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 text-sm"
              >
                {isCopiedSuccess ? (
                  <>
                    <Check className="w-5 h-5 text-white" />
                    <span>Saved! Added Customization Details to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Use This Custom Design in Cart</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Live Graphic Preview Stage */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-sm">
              <div className="text-center text-xs font-extrabold text-indigo-400 uppercase tracking-wider mb-3 flex items-center justify-center gap-1.5">
                <Eye className="w-4 h-4" />
                <span>Live Rendering Preview</span>
              </div>

              {/* CARD MOCKUP */}
              {style !== 'acrylic-clear' ? (
                <div
                  className={`w-full aspect-[1.58/1] rounded-2xl shadow-2xl p-6 border-2 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                    style === 'google-white'
                      ? 'bg-white text-slate-900 border-slate-200'
                      : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-slate-700'
                  }`}
                >
                  {/* Google Brand Color Stripe */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                    <div className="h-full w-1/4 bg-[#4285F4]" />
                    <div className="h-full w-1/4 bg-[#EA4335]" />
                    <div className="h-full w-1/4 bg-[#FBBC04]" />
                    <div className="h-full w-1/4 bg-[#34A853]" />
                  </div>

                  {cardSide === 'front' ? (
                    <>
                      {/* Front Card Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                          <span className={`font-black text-sm ${style === 'google-white' ? 'text-slate-800' : 'text-white'}`}>
                            Google Review
                          </span>
                        </div>
                        <div className="w-8 h-6 bg-gradient-to-r from-amber-300 to-yellow-500 rounded border border-amber-600/50 flex items-center justify-center text-[9px] font-black text-amber-950">
                          NFC
                        </div>
                      </div>

                      {/* Business Name Main Body */}
                      <div className="my-auto text-left space-y-1">
                        <div className="text-[10px] font-extrabold text-blue-500 tracking-widest uppercase truncate">
                          {businessName || 'YOUR BUSINESS NAME'}
                        </div>
                        <h4 className={`font-black text-base sm:text-lg leading-tight ${style === 'google-white' ? 'text-slate-900' : 'text-white'}`}>
                          TAP HERE TO REVIEW
                        </h4>
                        <div className="flex text-amber-400 gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400 pt-2 border-t border-slate-200/40">
                        <span>Tap Mobile • Instant Link</span>
                        <span className="text-emerald-500 font-bold">Dual NFC + QR</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Back Card View */}
                      <div className="flex items-center justify-between border-b border-slate-200/40 pb-2">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider ${style === 'google-white' ? 'text-slate-700' : 'text-slate-300'}`}>
                          Backup Scan Option
                        </span>
                        <span className="text-[9px] text-blue-500 font-bold">No NFC Required</span>
                      </div>

                      <div className="flex items-center gap-4 my-auto">
                        <div className="w-16 h-16 bg-white p-1 rounded-xl border border-slate-300 shadow-md flex items-center justify-center shrink-0">
                          {/* Simulated QR Code */}
                          <div className="w-full h-full bg-slate-900 grid grid-cols-4 gap-0.5 p-0.5 rounded">
                            <div className="bg-white col-span-2 row-span-2"></div>
                            <div className="bg-white"></div>
                            <div className="bg-white"></div>
                            <div className="bg-white col-span-2 row-span-2"></div>
                          </div>
                        </div>

                        <div className="text-left space-y-1">
                          <div className="text-[11px] font-bold text-blue-500 uppercase">
                            {businessName || 'YOUR BUSINESS NAME'}
                          </div>
                          <p className={`text-[10px] leading-tight ${style === 'google-white' ? 'text-slate-600' : 'text-slate-300'}`}>
                            Scan with camera or Google Pay to open review page instantly.
                          </p>
                        </div>
                      </div>

                      <div className="text-[9px] text-slate-400 text-center font-mono">
                        TapReview.in • Official NFC Google Card
                      </div>
                    </>
                  )}
                </div>
              ) : (
                /* ACRYLIC STAND MOCKUP */
                <div className="w-full aspect-[3/4] bg-white text-slate-900 rounded-3xl shadow-2xl p-6 border-4 border-slate-200 flex flex-col items-center justify-between relative overflow-hidden">
                  
                  {/* Stand Top Bar */}
                  <div className="w-full flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                      <span className="font-extrabold text-xs text-slate-800">Google Reviews</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      ACRYLIC STAND
                    </span>
                  </div>

                  {/* Body */}
                  <div className="text-center space-y-3 my-auto">
                    <div className="text-xs font-black text-blue-600 tracking-wider uppercase">
                      {businessName || 'YOUR BUSINESS NAME'}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 leading-tight">
                      TAP PHONE TO REVIEW US
                    </h3>
                    <div className="flex justify-center text-amber-400 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-blue-50 border-2 border-blue-500 text-blue-600 flex items-center justify-center mx-auto shadow-inner">
                      <Smartphone className="w-7 h-7" />
                    </div>
                  </div>

                  {/* QR Footer */}
                  <div className="w-full bg-slate-50 p-2.5 rounded-2xl border border-slate-200 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white border border-slate-300 p-0.5 rounded flex items-center justify-center shrink-0">
                      <div className="w-full h-full bg-slate-900 grid grid-cols-4 gap-0.5 p-0.5">
                        <div className="bg-white col-span-2 row-span-2"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white col-span-2 row-span-2"></div>
                      </div>
                    </div>
                    <div className="text-left leading-tight">
                      <span className="text-[10px] font-bold text-slate-900 block">Or Scan QR Code</span>
                      <span className="text-[9px] text-slate-500 block">Works with camera or GPay</span>
                    </div>
                  </div>

                  {/* Acrylic Stand Base Graphic */}
                  <div className="absolute -bottom-3 -left-2 -right-2 h-4 bg-slate-300 border-t border-slate-400 rounded-b-xl"></div>
                </div>
              )}

              <p className="text-[11px] text-slate-400 text-center mt-3">
                *High Definition UV Laser Engraved • Resistant to water & sunlight
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
