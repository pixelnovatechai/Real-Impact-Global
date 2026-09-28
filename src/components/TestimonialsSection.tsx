import React, { useState } from 'react';
import { Quote, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [filter, setFilter] = useState<'all' | 'products' | 'business'>('all');

  const filtered = testimonials.filter((t) => {
    if (filter === 'products') return t.productMentioned !== 'Daily Synergistic Bundle';
    if (filter === 'business') return t.role.includes('Leader') || t.role.includes('Elite');
    return true;
  });

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-[#0756A3] uppercase tracking-widest">
          Testimonials
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl text-[#131c26] mt-2 tracking-tight">
          Real People. Real Stories. Real Impact.
        </h2>
        <p className="text-sm sm:text-base text-[#44474d] mt-3 leading-relaxed">
          Hear firsthand how RiG formulations and the partner opportunity have elevated health and livelihoods.
        </p>

        {/* Filter Controls (Segmented buttons) */}
        <div className="inline-flex items-center gap-1 p-1 bg-[#eef4ff] rounded-xl border border-[#dae3f1] mt-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-white text-[#071A33] shadow-sm'
                : 'text-[#44474d] hover:text-[#131c26]'
            }`}
          >
            All Stories
          </button>
          <button
            onClick={() => setFilter('products')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'products'
                ? 'bg-white text-[#071A33] shadow-sm'
                : 'text-[#44474d] hover:text-[#131c26]'
            }`}
          >
            Product Experiences
          </button>
          <button
            onClick={() => setFilter('business')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'business'
                ? 'bg-white text-[#071A33] shadow-sm'
                : 'text-[#44474d] hover:text-[#131c26]'
            }`}
          >
            Partner Growth
          </button>
        </div>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(7,26,51,0.04)] border border-[#dae3f1] flex flex-col justify-between hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-[#0756A3]/30" />
                <div className="flex items-center gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C99A24] text-[#C99A24]" />
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#131c26] leading-relaxed italic">
                "{item.quote}"
              </p>

              <div className="mt-4 inline-block text-[11px] font-semibold text-[#0756A3] bg-[#eef4ff] px-2.5 py-1 rounded">
                Product: {item.productMentioned}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#dae3f1] flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#071A33] text-white flex items-center justify-center font-bold text-sm tracking-wider shrink-0">
                {item.initials}
              </div>
              <div className="overflow-hidden">
                <div className="flex items-center gap-1.5">
                  <p className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#131c26] truncate">
                    {item.name}
                  </p>
                  <CheckCircle className="w-3.5 h-3.5 text-[#0756A3] shrink-0" />
                </div>
                <p className="text-xs text-[#44474d] truncate">
                  {item.role}, {item.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
