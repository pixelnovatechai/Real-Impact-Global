import React from 'react';
import { Award, Truck, Users, TrendingUp } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustPoints = [
    {
      icon: Award,
      title: "Certified Quality",
      desc: "Strict purity standards & ISO/GMP facility manufacturing",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      desc: "Nationwide reliable logistics & doorstep fulfillment",
    },
    {
      icon: Users,
      title: "Active Community",
      desc: "Supportive network with weekly leadership mentorship",
    },
    {
      icon: TrendingUp,
      title: "Proven Growth",
      desc: "Sustainable compensation plan & lucrative rewards",
    },
  ];

  return (
    <section className="bg-[#091c35] text-white py-10 border-y border-[#172b47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-2 rounded-xl transition-colors hover:bg-white/[0.03]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C99A24]/15 border border-[#C99A24]/30 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#C99A24]" />
                </div>
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-base text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#a7c8ff]/80 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
