import React from 'react';
import { ShieldCheck, Heart, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenPolicy: (type: 'about' | 'contact' | 'shipping' | 'refund' | 'privacy' | 'gst') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="bg-slate-900 p-2.5 rounded-2xl border border-slate-800 inline-block">
              <Logo size="md" isDark={true} />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The #1 NFC + QR code Google review booster for local Indian retail, salons, clinics, cafes, and service outlets. One-time purchase, zero monthly subscriptions.
            </p>
            <div className="flex items-center gap-2 text-slate-300 font-semibold text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Guaranteed Compatible with All NFC Phones</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Products & Pricing</a></li>
              <li><a href="#customizer" className="hover:text-blue-400 transition-colors">Live Card Customizer</a></li>
              <li><a href="#who-its-for" className="hover:text-blue-400 transition-colors">Who It's For</a></li>
              <li><a href="#social-proof" className="hover:text-blue-400 transition-colors">500+ Verified Reviews</a></li>
            </ul>
          </div>

          {/* Col 3: Customer Policies */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">Trust & Policies</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onOpenPolicy('about')} className="hover:text-blue-400 transition-colors text-left">
                  About TapReview
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('shipping')} className="hover:text-blue-400 transition-colors text-left">
                  Pan-India Express Shipping
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('refund')} className="hover:text-blue-400 transition-colors text-left">
                  1-Year Replacement Warranty
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('privacy')} className="hover:text-blue-400 transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('gst')} className="hover:text-blue-400 transition-colors text-left font-semibold text-blue-400">
                  GST Tax Credit Invoice
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">Support Desk</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: +91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>support@tapreview.in</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Mumbai & Delhi Hubs</span>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('contact')}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] mt-1"
                >
                  Contact Form
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6 text-center text-slate-500 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} TapReview India Tech Pvt Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Local Businesses in India</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
