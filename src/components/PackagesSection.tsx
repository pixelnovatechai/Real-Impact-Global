import React from 'react';
import { Check, Star, ArrowRight, ShieldCheck } from 'lucide-react';
import { PartnerPackage } from '../types';

interface PackagesSectionProps {
  packages: PartnerPackage[];
  onSelectPackage: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  packages,
  onSelectPackage,
}) => {
  return (
    <section className="bg-[#eef4ff] py-20 lg:py-28 border-y border-[#dae3f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0756A3] uppercase tracking-widest">
            Partnership Tiers
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl text-[#131c26] mt-2 tracking-tight">
            Choose Your Smart Partner Package
          </h2>
          <p className="text-sm sm:text-base text-[#44474d] mt-3 leading-relaxed">
            Flexible entry options tailored to your personal wellness routine and entrepreneurial ambition.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            const isPopular = pkg.popular;

            if (isPopular) {
              return (
                <div
                  key={pkg.id}
                  className="bg-[#091c35] text-white p-8 rounded-3xl shadow-2xl flex flex-col justify-between relative transform md:-translate-y-3 border-2 border-[#C99A24]"
                >
                  {/* Popular pill */}
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#C99A24] text-[#091c35] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#C99A24] uppercase font-bold tracking-wider">
                        {pkg.tier}
                      </span>
                      <span className="text-xs text-[#a7c8ff] font-mono tabular-nums">
                        {pkg.pvPoints} PV
                      </span>
                    </div>

                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl text-white mt-1">
                      {pkg.name}
                    </h3>

                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl text-white tabular-nums">
                        RM {pkg.price}
                      </span>
                      <span className="text-xs text-[#d5e3ff]/70">/ one-time entry</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#d5e3ff]/90 mt-3 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/10 text-xs">
                      <span className="text-[#C99A24] font-semibold block mb-0.5">Allocation:</span>
                      <span className="text-white/80">{pkg.productAllocation}</span>
                    </div>

                    {/* Features list */}
                    <ul className="mt-6 space-y-3 text-xs sm:text-sm text-[#d5e3ff]/90">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#C99A24] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button
                      onClick={() => onSelectPackage(pkg.name)}
                      className="w-full text-center bg-[#C99A24] hover:bg-[#b3881e] text-[#091c35] font-['Plus_Jakarta_Sans'] font-bold text-sm py-3.5 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <span>Select {pkg.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            }

            // Normal Packages (A & C)
            return (
              <div
                key={pkg.id}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-[#dae3f1]"
              >
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#0756A3] uppercase font-bold tracking-wider">
                      {pkg.tier}
                    </span>
                    <span className="text-xs text-[#44474d] font-mono tabular-nums">
                      {pkg.pvPoints} PV
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl text-[#131c26] mt-1">
                    {pkg.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl text-[#131c26] tabular-nums">
                      RM {pkg.price}
                    </span>
                    <span className="text-xs text-[#44474d]">/ one-time entry</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#44474d] mt-3 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mt-4 p-3 bg-[#f8f9ff] rounded-xl border border-[#dae3f1] text-xs">
                    <span className="text-[#0756A3] font-semibold block mb-0.5">Allocation:</span>
                    <span className="text-[#44474d]">{pkg.productAllocation}</span>
                  </div>

                  {/* Features list */}
                  <ul className="mt-6 space-y-3 text-xs sm:text-sm text-[#44474d]">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#0756A3] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#dae3f1]">
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className="w-full text-center bg-[#0756A3] hover:bg-[#054585] text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm py-3.5 px-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0756A3]"
                  >
                    <span>Select {pkg.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#44474d] max-w-2xl mx-auto mt-12 leading-relaxed">
          *Disclaimer: Earnings, compensation, and business results vary based on individual sales aptitude, effort, and team growth. RiG does not guarantee specific monetary outcomes. All partner registrations are subject to code of ethics and official distributor agreements.
        </p>

      </div>
    </section>
  );
};
