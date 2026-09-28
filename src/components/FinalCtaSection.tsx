import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCtaSectionProps {
  onGetStarted: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="bg-[#091c35] text-white py-20 lg:py-24 relative overflow-hidden border-t border-[#172b47]">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#0756A3]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#C99A24]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Create Your Real Impact.
        </h2>
        <p className="text-sm sm:text-base text-[#d5e3ff]/90 max-w-xl mx-auto mt-4 leading-relaxed">
          Take the first step toward superior cellular vitality, holistic health, and scalable financial freedom today. Your journey starts here.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={onGetStarted}
            className="bg-[#C99A24] hover:bg-[#b3881e] text-[#091c35] font-['Plus_Jakarta_Sans'] font-bold text-sm sm:text-base px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
