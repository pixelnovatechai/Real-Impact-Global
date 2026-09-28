import React, { useState } from 'react';
import { X, Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { CommunityHighlight } from '../types';

interface CommunitySectionProps {
  highlights: CommunityHighlight[];
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ highlights }) => {
  const [selectedStory, setSelectedStory] = useState<CommunityHighlight | null>(null);

  return (
    <section id="community" className="bg-[#e5effd]/50 py-20 lg:py-28 border-y border-[#dae3f1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0756A3] uppercase tracking-widest">
            Global Culture
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl text-[#131c26] mt-2 tracking-tight">
            Our Thriving Community
          </h2>
          <p className="text-sm sm:text-base text-[#44474d] mt-3 leading-relaxed">
            More than a business—a supportive global family dedicated to mutual physical elevation and shared abundance.
          </p>
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedStory(item)}
              className="relative rounded-2xl overflow-hidden shadow-md h-88 sm:h-96 group cursor-pointer border border-[#dae3f1] transform hover:-translate-y-1 transition-all duration-300"
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title} gallery and story`}
            >
              {/* Background photography */}
              <img
                src={item.image}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/95 via-[#071A33]/40 to-transparent" />

              {/* Card Bottom Content */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-bold text-[#C99A24] uppercase tracking-wider mb-1">
                  {item.category}
                </span>

                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-white">
                  {item.title}
                </h3>

                <p className="text-xs text-white/80 mt-2 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-[#a7c8ff]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C99A24]" />
                    <span className="truncate max-w-[130px]">{item.location}</span>
                  </span>
                  <span className="underline underline-offset-2 flex items-center gap-1">
                    Read Story <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Story Details Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-[#071A33]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0" onClick={() => setSelectedStory(null)} />

          <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-[#dae3f1] z-10">
            <div className="relative h-64 sm:h-72">
              <img
                src={selectedStory.image}
                alt={selectedStory.alt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-transparent to-transparent opacity-80" />
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Close story"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold text-[#C99A24] uppercase tracking-wider">
                  {selectedStory.category}
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl">
                  {selectedStory.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 text-xs text-[#44474d] border-b border-[#dae3f1] pb-3">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4 text-[#0756A3]" />
                  {selectedStory.date}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-[#0756A3]" />
                  {selectedStory.location}
                </span>
              </div>

              <p className="text-sm text-[#44474d] leading-relaxed">
                {selectedStory.recap}
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-5 py-2.5 bg-[#071A33] hover:bg-[#0756A3] text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
