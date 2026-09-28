import React, { useState } from 'react';
import { ArrowRight, Sun, Moon, Sparkles, CheckCircle2 } from 'lucide-react';

interface SynergyProtocolSectionProps {
  onGetBundle: () => void;
}

export const SynergyProtocolSection: React.FC<SynergyProtocolSectionProps> = ({ onGetBundle }) => {
  const [activeStep, setActiveStep] = useState<'morning' | 'evening'>('morning');

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#091c35] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[#1a3760] shadow-2xl">
        
        {/* Glow ambient background elements */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#0756A3]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#C99A24]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column: Copy & Interactive Steps */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold text-[#C99A24] uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Synergistic Duo
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl text-white mt-2 tracking-tight">
                The Ultimate Daily Health Protocol
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#d5e3ff]/90 leading-relaxed">
              Combine the internal cellular replenishment of our Deep Sea Water Concentrate with the external restorative power of our Transdermal Magnesium Spray for complete 24-hour neuromuscular harmony.
            </p>

            {/* Interactive Step Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#040f1f]/60 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveStep('morning')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  activeStep === 'morning'
                    ? 'bg-[#C99A24] text-[#091c35] shadow-sm'
                    : 'text-[#a7c8ff] hover:text-white'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span>Morning Hydration</span>
              </button>

              <button
                onClick={() => setActiveStep('evening')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  activeStep === 'evening'
                    ? 'bg-[#0756A3] text-white shadow-sm'
                    : 'text-[#a7c8ff] hover:text-white'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span>Evening Restorative</span>
              </button>
            </div>

            {/* Protocol description card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-[#e0e9f7] space-y-3">
              {activeStep === 'morning' ? (
                <>
                  <div className="flex items-center gap-2 text-[#C99A24] font-semibold text-xs uppercase tracking-wider">
                    <Sun className="w-4 h-4" />
                    <span>Phase 1: Deep Sea Mineral Infusion (AM)</span>
                  </div>
                  <p className="leading-relaxed text-white/90">
                    Add 5 drops of Deep Sea Water Concentrate to your morning water. Awakens cellular metabolism, replenishes vital electrolytes depleted during overnight fasting, and provides sustained mental clarity without caffeine crashes.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs text-[#a7c8ff]">
                    <span>• 70+ Ionic Minerals</span>
                    <span>• Cellular Bio-Hydration</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-[#76acff] font-semibold text-xs uppercase tracking-wider">
                    <Moon className="w-4 h-4" />
                    <span>Phase 2: Transdermal Magnesium Calm (PM)</span>
                  </div>
                  <p className="leading-relaxed text-white/90">
                    Apply 6 to 8 sprays of Transdermal Magnesium onto your shoulders and calves 20 minutes before sleep. Relaxes constricted muscular fibers, downregulates nervous system tension, and promotes restorative slow-wave sleep.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs text-[#a7c8ff]">
                    <span>• Rapid Muscle Recovery</span>
                    <span>• Deeper Sleep Cycles</span>
                  </div>
                </>
              )}
            </div>

            {/* CTA action */}
            <div className="pt-2">
              <button
                onClick={onGetBundle}
                className="bg-[#C99A24] hover:bg-[#b3881e] text-[#091c35] font-['Plus_Jakarta_Sans'] font-bold text-sm px-6 py-3.5 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Get The Synergistic Bundle</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Res Dual Product Showcase */}
          <div className="lg:col-span-6 flex justify-center items-center gap-4 sm:gap-6 relative">
            
            {/* Deep Sea Water card */}
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15 shadow-xl flex flex-col items-center w-40 sm:w-52">
              <div className="h-52 sm:h-64 flex items-center justify-center overflow-hidden">
                <img
                  src="/products/deep_sea_water_showcase.png"
                  alt="Deep Sea Water"
                  className="max-h-full w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="mt-3 font-semibold text-xs sm:text-sm text-center text-white">
                Deep Sea Water
              </p>
              <span className="text-[10px] text-[#a7c8ff]">Internal Cellular Health</span>
            </div>

            {/* Magnesium Spray card */}
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15 shadow-xl flex flex-col items-center w-40 sm:w-52 mt-8 sm:mt-12">
              <div className="h-52 sm:h-64 flex items-center justify-center overflow-hidden">
                <img
                  src="/products/magnesium_spray_showcase.png"
                  alt="Magnesium Spray"
                  className="max-h-full w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="mt-3 font-semibold text-xs sm:text-sm text-center text-white">
                Magnesium Spray
              </p>
              <span className="text-[10px] text-[#ffdcc3]">External Muscle Relief</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
