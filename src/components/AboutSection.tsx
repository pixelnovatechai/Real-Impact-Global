import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, HeartHandshake, Compass, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillars = [
    {
      num: "01",
      title: "QUALITY",
      subtitle: "Uncompromising Formulations",
      desc: "Uncompromising standards in every formulation, ensuring bioavailable, clinically sound and maximum efficacy.",
      icon: Shield,
      expanded: "Every batch of RiG minerals is harvested from protected oceanic reserves and natural brines. We subject every lot to dual independent laboratory validation for purity, elemental concentration, and safety."
    },
    {
      num: "02",
      title: "COMMUNITY",
      subtitle: "Collaborative Ecosystem",
      desc: "A vibrant network of like-minded individuals lifting each other to new heights across borders.",
      icon: HeartHandshake,
      expanded: "We believe wealth and health are communal. Our members support one another through mastermind circles, localized wellness meetups, and international recognition celebrations."
    },
    {
      num: "03",
      title: "OPPORTUNITY",
      subtitle: "Frictionless Pathways",
      desc: "Accessible business pathways starting at just RM 150, designed for swift momentum and sustainable rewards.",
      icon: Compass,
      expanded: "No exorbitant franchise costs or complex inventories. We remove the barriers of entry so everyday individuals, moms, and professionals can establish a reliable second stream of income."
    },
    {
      num: "04",
      title: "GROWTH",
      subtitle: "Holistic Development",
      desc: "Continuous personal, financial, and leadership development through dedicated mentorship and playbooks.",
      icon: Sparkles,
      expanded: "Success at RiG is more than commissions. Our partners receive structured leadership training, public speaking mastery, digital marketing expertise, and wellness education."
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Mission & Vision */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
          <div>
            <span className="text-xs font-bold text-[#0756A3] uppercase tracking-widest">
              About RiG
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl text-[#131c26] mt-2 tracking-tight">
              Building a Legacy of Health & Abundance
            </h2>
          </div>

          <p className="text-base text-[#44474d] leading-relaxed">
            Real Impact Global (RiG) was founded on the conviction that true success encompasses physical vitality and financial empowerment. We source the planet's purest trace minerals and pair them with an intuitive, supportive digital business model.
          </p>

          <p className="text-sm text-[#44474d] leading-relaxed">
            Whether you are here to alleviate muscle fatigue, restore essential cellular hydration, or embark on a transformative entrepreneurial voyage, RiG provides the foundation for real, measurable impact.
          </p>

          <div className="pt-2">
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0756A3] hover:text-[#054585] transition-colors group focus:outline-none"
            >
              <span>Connect with our leadership team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Credibility Markers */}
          <div className="p-5 bg-[#eef4ff] rounded-xl border border-[#dae3f1] mt-2">
            <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#091c35] mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0756A3]" />
              The RiG Guarantee
            </h4>
            <p className="text-xs text-[#44474d] leading-relaxed">
              100% genuine trace elements, zero synthetic binders, ethical sourcing, and clear transparent partner compensation.
            </p>
          </div>
        </div>

        {/* Right Column: 4 Pillars Interactive Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isExpanded = selectedPillar === idx;

            return (
              <div
                key={pillar.num}
                onClick={() => setSelectedPillar(isExpanded ? null : idx)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-[#091c35] text-white border-[#0756A3] shadow-lg -translate-y-1'
                    : 'bg-white hover:bg-[#f8f9ff] text-[#131c26] border-[#dae3f1] shadow-sm hover:shadow-md'
                }`}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#C99A24] tabular-nums">
                      {pillar.num}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isExpanded ? 'bg-[#C99A24]/20 text-[#ffdcc3]' : 'bg-[#eef4ff] text-[#0756A3]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`font-['Plus_Jakarta_Sans'] font-bold text-lg tracking-tight ${
                      isExpanded ? 'text-white' : 'text-[#131c26]'
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className={`text-xs font-medium mt-0.5 ${
                      isExpanded ? 'text-[#a7c8ff]' : 'text-[#0756A3]'
                    }`}
                  >
                    {pillar.subtitle}
                  </p>

                  <p
                    className={`text-sm mt-3 leading-relaxed ${
                      isExpanded ? 'text-white/80' : 'text-[#44474d]'
                    }`}
                  >
                    {pillar.desc}
                  </p>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/10 text-xs text-[#e0e9f7] leading-relaxed">
                      {pillar.expanded}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold">
                  <span className={isExpanded ? 'text-[#C99A24]' : 'text-[#0756A3]'}>
                    {isExpanded ? 'Tap to close' : 'Explore principle'}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isExpanded ? 'rotate-90 text-[#C99A24]' : 'text-[#0756A3]'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
