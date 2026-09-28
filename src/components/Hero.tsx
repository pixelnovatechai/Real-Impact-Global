import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Product } from '../types';

interface HeroProps {
  onExploreProducts: () => void;
  onJoinBusiness: () => void;
  onSelectProduct: (product: Product) => void;
  products: Product[];
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onJoinBusiness,
  onSelectProduct,
  products
}) => {
  const magnesiumProduct = products.find(p => p.id === 'magnesium-spray') || products[0];
  const seaWaterProduct = products.find(p => p.id === 'deep-sea-water') || products[1];

  return (
    <section id="hero" className="relative overflow-hidden bg-[#f8f9ff] pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Subtle organic atmospheric lighting */}
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-[#d5e3ff]/40 rounded-full blur-3xl pointer-events-none -mr-28 -mt-28" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C99A24]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Subtle editorial kicker (Anti-slop clean metadata style) */}
            <div className="inline-flex items-center gap-2.5 bg-[#e0e9f7] px-3.5 py-1.5 rounded-full border border-[#c5c6ce]/30">
              <span className="w-2 h-2 rounded-full bg-[#C99A24] animate-pulse" />
              <span className="text-xs font-semibold text-[#091c35] tracking-wider uppercase font-['Inter']">
                Global Wellness & Opportunity
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-4xl sm:text-5xl lg:text-6xl text-[#131c26] tracking-tight leading-[1.1] text-balance">
              Wellness. Opportunity.{' '}
              <span className="text-[#0756A3] block sm:inline">Real Impact.</span>
            </h1>

            {/* Subtitle with measure discipline */}
            <p className="text-base sm:text-lg text-[#44474d] max-w-xl leading-relaxed">
              Empowering lives through premium natural health solutions and an empowering digital business ecosystem. Elevate your cellular vitality and unlock scalable financial independence with Real Impact Global.
            </p>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto bg-[#071A33] hover:bg-[#0756A3] text-white font-medium text-sm px-6 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0756A3]"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onJoinBusiness}
                className="w-full sm:w-auto bg-[#F5F8FC] hover:bg-[#e5effd] text-[#131c26] font-medium text-sm px-6 py-3.5 rounded-lg border border-[#c5c6ce]/60 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0756A3]"
              >
                <span>Join Business</span>
              </button>
            </div>

            {/* Proof Points & Trust Numbers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#dae3f1] w-full mt-2">
              <div>
                <p className="font-['Plus_Jakarta_Sans'] font-bold text-2xl sm:text-3xl text-[#131c26] tabular-nums">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-[#44474d] mt-0.5">
                  Natural Formulations
                </p>
              </div>

              <div className="border-l border-[#dae3f1] pl-4">
                <p className="font-['Plus_Jakarta_Sans'] font-bold text-2xl sm:text-3xl text-[#0756A3] tabular-nums">
                  RM 150
                </p>
                <p className="text-xs sm:text-sm text-[#44474d] mt-0.5">
                  Low Barrier Entry
                </p>
              </div>

              <div className="border-l border-[#dae3f1] pl-4">
                <p className="font-['Plus_Jakarta_Sans'] font-bold text-2xl sm:text-3xl text-[#131c26]">
                  Global
                </p>
                <p className="text-xs sm:text-sm text-[#44474d] mt-0.5">
                  Community Network
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase Visual with 3D Tilt Hover and Quick View Click */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0756A3]/10 to-transparent rounded-3xl blur-2xl" />

            <div className="relative z-10 flex gap-4 sm:gap-6 items-center">
              
              {/* Card 1: Magnesium Spray */}
              <div
                onClick={() => onSelectProduct(magnesiumProduct)}
                className="cursor-pointer group bg-white p-4 sm:p-5 rounded-2xl shadow-[0_12px_28px_rgba(7,26,51,0.08)] border border-[#dae3f1]/70 transform -rotate-4 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 w-44 sm:w-52"
                role="button"
                tabIndex={0}
                aria-label="View Magnesium Spray Details"
              >
                <div className="relative bg-[#f8f9ff] p-3 rounded-xl overflow-hidden flex items-center justify-center h-48 sm:h-56">
                  <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider bg-[#d5e3ff] text-[#0756A3] px-2 py-0.5 rounded">
                    Topical
                  </span>
                  <img
                    src="/products/magnesium_spray_hero.png"
                    alt="Magnesium Spray"
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold text-[#131c26] group-hover:text-[#0756A3] transition-colors line-clamp-1">
                    Magnesium Spray
                  </p>
                  <p className="text-xs text-[#44474d] mt-0.5">
                    Transdermal Relief
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-[#0756A3] underline underline-offset-2">
                    Quick View
                  </span>
                </div>
              </div>

              {/* Card 2: Deep Sea Water */}
              <div
                onClick={() => onSelectProduct(seaWaterProduct)}
                className="cursor-pointer group bg-white p-4 sm:p-5 rounded-2xl shadow-[0_12px_28px_rgba(7,26,51,0.08)] border border-[#dae3f1]/70 transform rotate-4 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 w-44 sm:w-52 mt-8 sm:mt-12"
                role="button"
                tabIndex={0}
                aria-label="View Deep Sea Water Concentrate Details"
              >
                <div className="relative bg-[#f8f9ff] p-3 rounded-xl overflow-hidden flex items-center justify-center h-48 sm:h-56">
                  <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider bg-[#ffdcc3] text-[#a57b5b] px-2 py-0.5 rounded">
                    Ionic
                  </span>
                  <img
                    src="/products/deep_sea_water_hero.png"
                    alt="Deep Sea Water Concentrate"
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold text-[#131c26] group-hover:text-[#0756A3] transition-colors line-clamp-1">
                    Deep Sea Water
                  </p>
                  <p className="text-xs text-[#44474d] mt-0.5">
                    Mineral Concentrate
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-[#0756A3] underline underline-offset-2">
                    Quick View
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
