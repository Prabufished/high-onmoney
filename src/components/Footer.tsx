import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, ShieldCheck, Heart, MessageSquare } from 'lucide-react';
import { waLink, WHATSAPP_DISPLAY } from '../utils/wa';

export const Footer: React.FC = () => {
  const footerWaUrl = waLink('Hi TapForReview, I want to inquire about ordering Google Review Stands.');

  return (
    <footer className="bg-[#1A2233] text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Logo size="md" isDark={true} />
            <p className="text-slate-400 text-xs leading-relaxed">
              India's #1 NFC + QR code Google review booster for restaurants, salons, clinics, retail shops, and service outlets. One-time purchase, zero subscriptions.
            </p>
            <div className="pt-1">
              <a
                href={footerWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold px-3.5 py-2 rounded-xl text-xs shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider font-['Outfit']">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#products" className="hover:text-white transition-colors">NFC Products Grid</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Wholesale Tiers</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider font-['Outfit']">
              Tap Hardware
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#products" className="hover:text-white transition-colors">Google Review Stand (₹899)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">NFC Review Card (₹449)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">WhatsApp Counter Stand</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Instagram Follow Stand</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Facebook Page Stand</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Fully Custom Zomato / Swiggy Stand</a></li>
            </ul>
          </div>

          {/* Col 4: Office Address */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider font-['Outfit']">
              Chennai Head Office
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              2nd Floor, Harini Complex, 10, Bharathidasan Street, Bhuvaneshwari Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>🇮🇳 Delivery across all Indian states & union territories</div>
              <div>⚡ Dispatch in 48 hours via BlueDart / Delhivery</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 TapForReview. All rights reserved. (tapforreview.in)
          </div>
          <div className="flex items-center gap-6">
            <span>GST Registered Business</span>
            <span>Made with Care for Indian Small Businesses 🇮🇳</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
