import React from 'react';
import { Check, Info, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductsSectionProps {
  products: Product[];
  onOpenProductModal: (product: Product) => void;
  onSelectForInquiry: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  onOpenProductModal,
  onSelectForInquiry,
}) => {
  return (
    <section id="products" className="bg-[#e5effd]/50 py-20 lg:py-28 border-y border-[#dae3f1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0756A3] uppercase tracking-widest">
            Our Flagship Offerings
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl text-[#131c26] mt-2 tracking-tight">
            Pure Wellness Essentials
          </h2>
          <p className="text-sm sm:text-base text-[#44474d] mt-3 leading-relaxed">
            Designed to restore fundamental cellular mineral balance and rejuvenate your neuromuscular vitality naturally.
          </p>
        </div>

        {/* 2 Flagship Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(7,26,51,0.05)] border border-[#dae3f1] p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Product Image Stage */}
                  <div
                    onClick={() => onOpenProductModal(product)}
                    className="relative bg-[#f8f9ff] rounded-xl p-6 sm:p-8 flex items-center justify-center h-72 sm:h-80 cursor-pointer overflow-hidden border border-[#dae3f1]/50 group-hover:border-[#0756A3]/30 transition-colors"
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${product.name} details`}
                  >
                    <div className="absolute top-3 left-3 bg-[#d5e3ff] text-[#003f7c] text-xs font-semibold px-2.5 py-1 rounded">
                      {product.tag}
                    </div>

                    <div className="absolute top-3 right-3 text-xs text-[#44474d] font-mono tabular-nums">
                      {product.specs.volume}
                    </div>

                    <img
                      src={product.image}
                      alt={product.alt}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold text-[#0756A3] flex items-center gap-1 shadow-sm opacity-90 group-hover:opacity-100">
                      <Info className="w-3.5 h-3.5" />
                      <span>Click for Specs</span>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0756A3] uppercase tracking-wider">
                        {product.subtitle}
                      </span>
                      <span className="text-lg font-bold text-[#C99A24] tabular-nums">
                        {product.price}
                      </span>
                    </div>

                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl text-[#131c26] mt-1 group-hover:text-[#0756A3] transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-sm text-[#44474d] mt-2.5 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Key Highlights Checklist */}
                    <ul className="mt-5 space-y-2 text-xs sm:text-sm text-[#44474d]">
                      {product.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#0756A3] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-8 pt-6 border-t border-[#dae3f1] grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onOpenProductModal(product)}
                    className="w-full py-2.5 px-3 bg-[#F5F8FC] hover:bg-[#eef4ff] text-[#131c26] rounded-lg text-xs font-semibold border border-[#c5c6ce]/60 transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
                  >
                    <Info className="w-3.5 h-3.5 text-[#0756A3]" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onSelectForInquiry(product.name)}
                    className="w-full py-2.5 px-3 bg-[#0756A3] hover:bg-[#054585] text-white rounded-lg text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-1.5 focus:outline-none"
                  >
                    <span>Order / Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
