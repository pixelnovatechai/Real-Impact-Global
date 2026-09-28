import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  faqs: FaqItem[];
  onOpenWhatsApp: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs, onOpenWhatsApp }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'products', label: 'Products & Science' },
    { id: 'business', label: 'Business & Packages' },
    { id: 'qualifier', label: 'Campaigns & Retreats' },
    { id: 'support', label: 'Support & Ordering' },
  ];

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 lg:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-[#0756A3] uppercase tracking-widest">
          Got Questions?
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl text-[#131c26] mt-2 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-[#44474d] mt-3 leading-relaxed">
          Everything you need to know about RiG products, compensation, and partner opportunities.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#44474d]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search questions (e.g. magnesium, RM150, Pangkor, shipment)..."
          className="w-full bg-white border border-[#dae3f1] rounded-2xl py-3.5 pl-11 pr-4 text-sm text-[#131c26] placeholder-[#75777e] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0756A3] focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs font-semibold text-[#44474d] hover:text-[#131c26]"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#eef4ff] rounded-2xl border border-[#dae3f1] mb-8 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-[#071A33] text-white shadow-sm'
                : 'text-[#44474d] hover:text-[#131c26] hover:bg-[#dae3f1]/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion Items List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#dae3f1] p-6">
            <HelpCircle className="w-8 h-8 text-[#0756A3] mx-auto mb-2 opacity-60" />
            <p className="text-sm font-semibold text-[#131c26]">No matching questions found</p>
            <p className="text-xs text-[#44474d] mt-1">
              Try searching with different keywords or chat with our team directly.
            </p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#dae3f1] overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left font-['Plus_Jakarta_Sans'] font-semibold text-base text-[#131c26] flex justify-between items-center gap-4 hover:bg-[#f8f9ff] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0756A3]"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#0756A3] text-white' : 'bg-[#eef4ff] text-[#0756A3]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#44474d] leading-relaxed border-t border-[#dae3f1]/50 bg-[#f8f9ff]/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions Hook */}
      <div className="mt-12 p-6 bg-[#eef4ff] rounded-2xl border border-[#dae3f1] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#091c35]">
            Have a custom inquiry or partnership question?
          </h4>
          <p className="text-xs text-[#44474d] mt-1">
            Our customer concierge and leadership directors are on standby to assist you.
          </p>
        </div>

        <button
          onClick={onOpenWhatsApp}
          className="shrink-0 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat via WhatsApp</span>
        </button>
      </div>

    </section>
  );
};
