import React, { useState, useEffect } from 'react';
import { Palmtree, Clock, Award, ArrowRight, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

interface CampaignSectionProps {
  onClaimQualification: () => void;
}

export const CampaignSection: React.FC<CampaignSectionProps> = ({ onClaimQualification }) => {
  // Real countdown timer to September 30, 2026
  const targetDate = new Date('2026-09-30T23:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="qualifier" className="bg-[#071A33] text-white py-20 lg:py-28 relative overflow-hidden border-y border-[#172b47]">
      {/* Ambient luxury lighting */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#C99A24]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Campaign pill */}
        <div className="inline-flex items-center gap-2 bg-[#C99A24] text-[#091c35] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
          <Palmtree className="w-4 h-4" />
          <span>Active Campaign</span>
        </div>

        {/* Campaign Title */}
        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mt-4 tracking-tight">
          PANGKOR QUALIFIER
        </h2>

        {/* Campaign Dates */}
        <p className="font-['Plus_Jakarta_Sans'] font-semibold text-lg sm:text-xl text-[#C99A24] mt-2 tracking-wide">
          1 AUGUST – 30 SEPTEMBER 2026
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mt-4 leading-relaxed">
          Qualify during this period to earn an exclusive, all-expenses-paid luxury leadership getaway to Pangkor Island. Celebrate your milestones, network with top founders, and enjoy elite beachside banquets.
        </p>

        {/* Real-time Countdown Timer */}
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white/[0.05] rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#a7c8ff] uppercase tracking-wider mb-4">
            <Clock className="w-4 h-4 text-[#C99A24]" />
            <span>Time Remaining to Qualify</span>
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="p-3 bg-white/[0.06] rounded-2xl border border-white/10">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-2xl sm:text-4xl text-white tabular-nums block">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#a7c8ff] uppercase font-semibold mt-1 block">
                Days
              </span>
            </div>

            <div className="p-3 bg-white/[0.06] rounded-2xl border border-white/10">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-2xl sm:text-4xl text-white tabular-nums block">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#a7c8ff] uppercase font-semibold mt-1 block">
                Hours
              </span>
            </div>

            <div className="p-3 bg-white/[0.06] rounded-2xl border border-white/10">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-2xl sm:text-4xl text-white tabular-nums block">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#a7c8ff] uppercase font-semibold mt-1 block">
                Mins
              </span>
            </div>

            <div className="p-3 bg-white/[0.06] rounded-2xl border border-white/10">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-2xl sm:text-4xl text-[#C99A24] tabular-nums block">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#a7c8ff] uppercase font-semibold mt-1 block">
                Secs
              </span>
            </div>
          </div>
        </div>

        {/* Qualification Criteria Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8 text-left">
          <div className="p-4 bg-white/[0.04] rounded-xl border border-white/10 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#C99A24] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">Step 1: Direct Sponsorship</span>
              <span className="text-xs text-white/70">Introduce at least 3 new Pro Partners (Package B or C).</span>
            </div>
          </div>

          <div className="p-4 bg-white/[0.04] rounded-xl border border-white/10 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#C99A24] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">Step 2: Personal Sales Volume</span>
              <span className="text-xs text-white/70">Maintain 400 Personal Volume points in active products.</span>
            </div>
          </div>

          <div className="p-4 bg-white/[0.04] rounded-xl border border-white/10 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#C99A24] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">Step 3: Team Group Volume</span>
              <span className="text-xs text-white/70">Achieve 3,000 Group Volume points across organization.</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={onClaimQualification}
            className="bg-[#C99A24] hover:bg-[#b3881e] text-[#091c35] font-['Plus_Jakarta_Sans'] font-bold text-sm sm:text-base px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Claim Your Qualification Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
