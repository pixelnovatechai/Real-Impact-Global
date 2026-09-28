import React from 'react';
import { ShieldCheck, Zap, Clock, Users, GraduationCap, Smartphone } from 'lucide-react';

export const CorePillarsSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "QUALITY",
      desc: "Uncompromising product standards backed by clinical trace mineral research and pristine deep-sea harvesting."
    },
    {
      icon: Zap,
      title: "SIMPLICITY",
      desc: "Streamlined business operations, transparent payouts, and easy-to-understand partner compensation structures."
    },
    {
      icon: Clock,
      title: "FLEXIBILITY",
      desc: "Work from anywhere, on your own terms, fitting seamlessly into your personal schedule and daily lifestyle."
    },
    {
      icon: Users,
      title: "COMMUNITY",
      desc: "A supportive, collaborative global network of leaders and entrepreneurs lifting each other toward shared goals."
    },
    {
      icon: GraduationCap,
      title: "TRAINING",
      desc: "Comprehensive weekly masterclasses, launch playbooks, and dedicated 1-on-1 mentorship to sharpen your skills."
    },
    {
      icon: Smartphone,
      title: "DIGITAL",
      desc: "Cutting-edge digital member portals, turn-key referral assets, and automated order tracking at your fingertips."
    },
  ];

  return (
    <section className="bg-[#131c26] text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C99A24] uppercase tracking-widest">
            Our Core Pillars
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl text-white mt-2 tracking-tight">
            Why Choose Real Impact Global
          </h2>
          <p className="text-sm sm:text-base text-[#a7c8ff]/80 mt-3 leading-relaxed">
            Engineered for absolute product reliability, operational clarity, and personal empowerment.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#C99A24]/40 p-6 sm:p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#C99A24]/15 border border-[#C99A24]/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-[#C99A24]" />
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#d5e3ff]/75 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#C99A24]">
                  <span>Pillar {index + 1} of 6</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
