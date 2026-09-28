import React, { useState } from 'react';
import { Compass, Sparkles, HeartHandshake, Users2, Trophy } from 'lucide-react';

export const ProcessFlowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: 1,
      title: "DISCOVER",
      desc: "Explore our natural deep sea and transdermal formulations.",
      icon: Compass,
      detail: "Learn about the mineral deficiency crisis and how RiG restores human vitality."
    },
    {
      num: 2,
      title: "EXPERIENCE",
      desc: "Feel the profound physical benefits in your sleep and hydration.",
      icon: Sparkles,
      detail: "Daily adherence delivers noticeable cellular recovery within 72 hours."
    },
    {
      num: 3,
      title: "SHARE",
      desc: "Recommend authentic products to your family, gym peers, and friends.",
      icon: HeartHandshake,
      detail: "Earn immediate retail margin and direct introductory bonuses upon purchase."
    },
    {
      num: 4,
      title: "BUILD",
      desc: "Mentor emerging partners and scale your organization regionally.",
      icon: Users2,
      detail: "Leverage team matching commissions and digital automated onboarding funnels."
    },
    {
      num: 5,
      title: "GROW",
      desc: "Attain financial independence, luxury retreats, and global recognition.",
      icon: Trophy,
      detail: "Qualify for VIP leadership incentives such as our Pangkor Island Qualifier."
    },
  ];

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-[#0756A3] uppercase tracking-widest">
          Process Flow
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl text-[#131c26] mt-2 tracking-tight">
          How It Works
        </h2>
        <p className="text-sm sm:text-base text-[#44474d] mt-3 leading-relaxed">
          Your clear, repeatable roadmap to sustained health and entrepreneurial momentum with RiG.
        </p>
      </div>

      {/* 5-Step Horizontal Grid / Responsive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === idx;

          return (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col items-center text-center justify-between ${
                isSelected
                  ? 'bg-[#091c35] text-white border-[#0756A3] shadow-lg -translate-y-1'
                  : 'bg-[#eef4ff] hover:bg-[#e0e9f7] text-[#131c26] border-[#dae3f1]'
              }`}
              role="button"
              tabIndex={0}
            >
              <div className="flex flex-col items-center">
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-4 transition-colors ${
                    isSelected
                      ? 'bg-[#C99A24] text-[#091c35]'
                      : 'bg-[#0756A3] text-white'
                  }`}
                >
                  {step.num}
                </span>

                <Icon
                  className={`w-5 h-5 mb-2 ${
                    isSelected ? 'text-[#C99A24]' : 'text-[#0756A3]'
                  }`}
                />

                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base tracking-tight">
                  {step.title}
                </h3>

                <p
                  className={`text-xs mt-2 leading-relaxed ${
                    isSelected ? 'text-white/80' : 'text-[#44474d]'
                  }`}
                >
                  {step.desc}
                </p>
              </div>

              <div
                className={`mt-4 pt-3 w-full border-t text-[11px] font-medium leading-normal ${
                  isSelected
                    ? 'border-white/10 text-[#d5e3ff]'
                    : 'border-[#dae3f1] text-[#0756A3]'
                }`}
              >
                {step.detail}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
