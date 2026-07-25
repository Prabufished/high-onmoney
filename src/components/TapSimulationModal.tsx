import React, { useState } from 'react';
import { X, Star, Smartphone, CheckCircle2, ExternalLink, ThumbsUp, Sparkles, AlertCircle } from 'lucide-react';

interface TapSimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderNow: () => void;
}

export const TapSimulationModal: React.FC<TapSimulationModalProps> = ({
  isOpen,
  onClose,
  onOrderNow,
}) => {
  const [step, setStep] = useState<'tap' | 'loading' | 'review'>('tap');
  const [selectedStars, setSelectedStars] = useState(5);
  const [reviewText, setReviewText] = useState('Amazing service and friendly staff! Highly recommended.');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSimulateTap = () => {
    setStep('loading');
    setTimeout(() => {
      setStep('review');
    }, 1200);
  };

  const handleReset = () => {
    setStep('tap');
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative text-white">
        
        {/* Header */}
        <div className="bg-slate-800/90 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              NFC
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Interactive Tap Simulation</h3>
              <p className="text-[11px] text-slate-400">See what your customer experiences</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {step === 'tap' && (
            <div className="text-center space-y-6 py-4">
              <div className="relative inline-block my-2">
                {/* Simulated Phone Tapping Stand */}
                <div className="w-40 h-40 rounded-full bg-blue-500/10 border-2 border-dashed border-blue-400/50 flex items-center justify-center mx-auto relative animate-pulse">
                  <div className="w-28 h-28 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                    <Smartphone className="w-14 h-14" />
                  </div>
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md whitespace-nowrap">
                  TAP YOUR PHONE HERE
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-extrabold text-white">
                  Step 1: Customer Taps Phone
                </h4>
                <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                  No app required. The built-in NFC reader in any iPhone or Android phone detects the card instantly.
                </p>
              </div>

              <button
                onClick={handleSimulateTap}
                className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Simulate Smartphone Tap</span>
              </button>
            </div>
          )}

          {step === 'loading' && (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-sm font-semibold text-blue-300">
                Opening Google Review page...
              </p>
              <p className="text-xs text-slate-400">
                Takes 1-2 seconds on customer smartphone
              </p>
            </div>
          )}

          {step === 'review' && (
            <div className="space-y-4">
              {/* Simulated Smartphone Screen showing Google Review Form */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-xl border border-slate-200">
                
                {/* Simulated Google Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900 leading-none">Your Business Name</h4>
                      <span className="text-[10px] text-slate-500 font-medium">Posting publicly on Google Maps</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    Direct Link
                  </span>
                </div>

                {!submitted ? (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-slate-700 text-center">
                      Rate your experience
                    </p>
                    <div className="flex justify-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setSelectedStars(star)}
                          className="p-1 hover:scale-125 transition-transform"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              star <= selectedStars
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>

                    <textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      rows={2}
                      className="w-full text-xs p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                      placeholder="Share details of your own experience at this place..."
                    ></textarea>

                    <button
                      onClick={() => setSubmitted(true)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 text-xs rounded-xl shadow-md transition-colors"
                    >
                      Post Review
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-4 space-y-2 animate-in zoom-in-95">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h5 className="font-bold text-sm text-slate-900">Review Submitted on Google!</h5>
                    <p className="text-[11px] text-slate-600">
                      That’s it! The review is now live on your Google Business profile.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 font-bold text-white">
                  <ThumbsUp className="w-4 h-4 text-emerald-400" />
                  <span>Why This Works 3X Better Than Manual Asking:</span>
                </div>
                <ul className="text-[11px] space-y-1 list-disc list-inside text-slate-300">
                  <li>Zero friction: Customer doesn’t have to search your business name on Google</li>
                  <li>Opens direct 5-star rating box on their personal Google account</li>
                  <li>Takes under 10 seconds while the customer is standing at your counter</li>
                </ul>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleReset}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-2.5 text-xs rounded-xl transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOrderNow();
                  }}
                  className="flex-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2.5 text-xs rounded-xl shadow-lg transition-transform hover:scale-105"
                >
                  Order NFC Cards & Stands Now
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
