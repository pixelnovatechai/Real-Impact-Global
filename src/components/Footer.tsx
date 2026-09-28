import React from 'react';
import { ArrowUp, Heart, Shield } from 'lucide-react';
import { LOGO_URL } from '../data/content';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f8f9ff] border-t border-[#dae3f1] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-[#dae3f1]">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#071A33]/15 shadow-sm">
              <img
                src={LOGO_URL}
                alt="Real Impact Global Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#131c26] block leading-none">
                Real Impact Global
              </span>
              <span className="text-xs text-[#44474d] mt-1 block">
                Pure Oceanic Minerals & Digital Partner Ecosystem
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#44474d]">
            <button onClick={() => onNavigate('hero')} className="hover:text-[#0756A3] transition-colors">
              Home
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-[#0756A3] transition-colors">
              About
            </button>
            <button onClick={() => onNavigate('products')} className="hover:text-[#0756A3] transition-colors">
              Products
            </button>
            <button onClick={() => onNavigate('opportunity')} className="hover:text-[#0756A3] transition-colors">
              Opportunity
            </button>
            <button onClick={() => onNavigate('community')} className="hover:text-[#0756A3] transition-colors">
              Community
            </button>
            <button onClick={() => onNavigate('qualifier')} className="hover:text-[#0756A3] transition-colors">
              Campaign
            </button>
            <button onClick={() => onNavigate('faq')} className="hover:text-[#0756A3] transition-colors">
              FAQ
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#0756A3] transition-colors">
              Contact
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white border border-[#dae3f1] text-[#44474d] hover:text-[#0756A3] hover:border-[#0756A3] shadow-sm transition-colors flex items-center gap-1.5 text-xs font-semibold"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#44474d]">
          <p>
            © 2026 Real Impact Global (RiG). All rights reserved.
          </p>

          <p className="text-[11px] text-center sm:text-right max-w-md">
            Product claims have not been evaluated by local drug administrations for diagnosing or curing specific disease. For general dietary replenishment and topical relaxation.
          </p>
        </div>

      </div>
    </footer>
  );
};
