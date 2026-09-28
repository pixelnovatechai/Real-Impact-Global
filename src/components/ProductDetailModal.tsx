import React, { useState } from 'react';
import { X, Check, Droplets, Sparkles, Activity, ShieldCheck, HelpCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectForInquiry: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectForInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'minerals' | 'usage' | 'faqs'>('overview');

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#071A33]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Surface */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-[#dae3f1] z-10 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#dae3f1] bg-[#f8f9ff]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#d5e3ff] text-[#0756A3] px-2.5 py-1 rounded">
              {product.tag}
            </span>
            <span className="text-xs text-[#44474d]">
              {product.specs.volume}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#44474d] hover:text-[#131c26] hover:bg-[#eef4ff] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0756A3]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Main Top Block: Image + Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 bg-[#f8f9ff] rounded-xl p-4 flex items-center justify-center h-64 border border-[#dae3f1]">
              <img
                src={product.image}
                alt={product.alt}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="sm:col-span-7 flex flex-col">
              <span className="text-xs text-[#0756A3] font-semibold uppercase tracking-wider">
                {product.subtitle}
              </span>
              <h3 id="modal-title" className="font-['Plus_Jakarta_Sans'] font-bold text-2xl text-[#131c26] mt-1">
                {product.name}
              </h3>
              <p className="text-xl font-bold text-[#C99A24] mt-2 tabular-nums">
                {product.price}
                <span className="text-xs font-normal text-[#44474d] ml-1.5">
                  / Retail Price
                </span>
              </p>

              <p className="text-xs sm:text-sm text-[#44474d] mt-3 leading-relaxed">
                {product.shortDescription}
              </p>

              <div className="mt-4 pt-4 border-t border-[#dae3f1] grid grid-cols-2 gap-2 text-xs text-[#44474d]">
                <div>
                  <span className="font-semibold text-[#131c26] block">Source:</span>
                  <span className="truncate block">{product.specs.origin}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#131c26] block">Standard:</span>
                  <span className="truncate block">{product.specs.purityStandard}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="border-b border-[#dae3f1] flex gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 text-xs sm:text-sm font-semibold transition-all relative ${
                activeTab === 'overview'
                  ? 'text-[#0756A3]'
                  : 'text-[#44474d] hover:text-[#131c26]'
              }`}
            >
              Overview & Benefits
              {activeTab === 'overview' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0756A3]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('minerals')}
              className={`pb-2.5 text-xs sm:text-sm font-semibold transition-all relative ${
                activeTab === 'minerals'
                  ? 'text-[#0756A3]'
                  : 'text-[#44474d] hover:text-[#131c26]'
              }`}
            >
              Mineral Profile
              {activeTab === 'minerals' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0756A3]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('usage')}
              className={`pb-2.5 text-xs sm:text-sm font-semibold transition-all relative ${
                activeTab === 'usage'
                  ? 'text-[#0756A3]'
                  : 'text-[#44474d] hover:text-[#131c26]'
              }`}
            >
              How to Use
              {activeTab === 'usage' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0756A3]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('faqs')}
              className={`pb-2.5 text-xs sm:text-sm font-semibold transition-all relative ${
                activeTab === 'faqs'
                  ? 'text-[#0756A3]'
                  : 'text-[#44474d] hover:text-[#131c26]'
              }`}
            >
              Product FAQ
              {activeTab === 'faqs' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0756A3]" />
              )}
            </button>
          </div>

          {/* Tab Content Panels */}
          {activeTab === 'overview' && (
            <div className="space-y-4 text-xs sm:text-sm text-[#44474d]">
              <p className="leading-relaxed">{product.fullDescription}</p>
              
              <div className="bg-[#eef4ff] p-4 rounded-xl space-y-2">
                <h4 className="font-semibold text-[#091c35] text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#0756A3]" />
                  Key Clinical Advantages
                </h4>
                {product.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0756A3] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'minerals' && (
            <div className="space-y-3">
              <p className="text-xs text-[#44474d]">
                Bioavailable elemental composition verified per manufacturing batch:
              </p>
              <div className="border border-[#dae3f1] rounded-xl overflow-hidden divide-y divide-[#dae3f1]">
                {product.mineralProfile.map((item, idx) => (
                  <div key={idx} className="p-3 bg-white hover:bg-[#f8f9ff] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <div>
                      <span className="font-semibold text-[#131c26]">{item.mineral}</span>
                      <p className="text-[#44474d] text-[11px]">{item.function}</p>
                    </div>
                    <span className="font-mono text-[#0756A3] font-semibold tabular-nums shrink-0">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="space-y-3">
              <h4 className="font-semibold text-[#091c35] text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-[#0756A3]" />
                Recommended Daily Protocol
              </h4>
              <ol className="space-y-2.5 text-xs sm:text-sm text-[#44474d]">
                {product.directions.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 bg-[#f8f9ff] p-3 rounded-lg border border-[#dae3f1]">
                    <span className="w-5 h-5 rounded-full bg-[#0756A3] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="space-y-3">
              {product.faqs.map((f, i) => (
                <div key={i} className="p-3.5 bg-[#f8f9ff] rounded-xl border border-[#dae3f1] text-xs sm:text-sm">
                  <p className="font-semibold text-[#131c26] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#0756A3] shrink-0" />
                    {f.q}
                  </p>
                  <p className="text-[#44474d] mt-1.5 pl-6 leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-[#f8f9ff] border-t border-[#dae3f1] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#44474d]">
            Available individually or inside Smart Partner Packages A, B & C.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-[#44474d] hover:text-[#131c26] hover:bg-[#dae3f1]/40 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectForInquiry(product.name);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-5 py-2 text-xs font-semibold text-white bg-[#0756A3] hover:bg-[#054585] rounded-lg transition-all shadow-sm whitespace-nowrap"
            >
              Inquire / Add to Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
