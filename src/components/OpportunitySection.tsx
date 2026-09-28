import React, { useState } from 'react';
import { Flag, Share2, TrendingUp, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

interface OpportunitySectionProps {
  onSelectTier: (packageName: string) => void;
}

export const OpportunitySection: React.FC<OpportunitySectionProps> = ({ onSelectTier }) => {
  // Calculator state
  const [personalReferrals, setPersonalReferrals] = useState<number>(4);
  const [teamMembers, setTeamMembers] = useState<number>(6);
  const [selectedTier, setSelectedTier] = useState<'A' | 'B' | 'C'>('B');

  // Realistic commission calculations based on RiG packages
  const tierConfig = {
    A: { name: 'Package A (RM 150)', price: 150, directRate: 0.10, teamRate: 0.03, bonusCap: 1200 },
    B: { name: 'Package B (RM 900)', price: 900, directRate: 0.18, teamRate: 0.06, bonusCap: 8000 },
    C: { name: 'Package C (RM 1,800)', price: 1800, directRate: 0.25, teamRate: 0.09, bonusCap: 25000 },
  };

  const current = tierConfig[selectedTier];
  const directIncome = Math.round(personalReferrals * current.price * current.directRate);
  const teamIncome = Math.round(teamMembers * (current.price * 0.75) * current.teamRate);
  const totalMonthlyProjected = Math.min(directIncome + teamIncome, current.bonusCap);

  return (
    <section id="opportunity" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-[#0756A3] uppercase tracking-widest">
          The Opportunity
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl text-[#131c26] mt-2 tracking-tight">
          Start Your Journey in 3 Simple Steps
        </h2>
        <p className="text-sm sm:text-base text-[#44474d] mt-3 leading-relaxed">
          A frictionless pathway designed to take you from a curious beginner to a thriving wellness entrepreneur.
        </p>
      </div>

      {/* 3 Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Step 1 */}
        <div className="bg-[#eef4ff] p-8 rounded-2xl border border-[#dae3f1] relative shadow-sm hover:shadow-md transition-shadow">
          <span className="absolute top-6 right-6 font-['Plus_Jakarta_Sans'] font-extrabold text-4xl text-[#0756A3]/15">
            01
          </span>
          <div className="w-12 h-12 rounded-xl bg-[#0756A3] text-white flex items-center justify-center mb-6">
            <Flag className="w-6 h-6" />
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#131c26]">
            START
          </h3>
          <p className="text-sm text-[#44474d] mt-3 leading-relaxed">
            Choose your preferred smart partner package (Package A, B, or C) and gain instant access to your product inventory, back-office portal, and onboarding kit.
          </p>
          <div className="mt-4 text-xs font-semibold text-[#0756A3] flex items-center gap-1">
            <span>Low barrier entry at RM 150</span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-[#eef4ff] p-8 rounded-2xl border border-[#dae3f1] relative shadow-sm hover:shadow-md transition-shadow">
          <span className="absolute top-6 right-6 font-['Plus_Jakarta_Sans'] font-extrabold text-4xl text-[#0756A3]/15">
            02
          </span>
          <div className="w-12 h-12 rounded-xl bg-[#0756A3] text-white flex items-center justify-center mb-6">
            <Share2 className="w-6 h-6" />
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#131c26]">
            SHARE
          </h3>
          <p className="text-sm text-[#44474d] mt-3 leading-relaxed">
            Experience the genuine health transformation yourself and recommend our natural wellness solutions using our turnkey social scripts and digital materials.
          </p>
          <div className="mt-4 text-xs font-semibold text-[#0756A3] flex items-center gap-1">
            <span>Done-for-you presentation decks</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-[#eef4ff] p-8 rounded-2xl border border-[#dae3f1] relative shadow-sm hover:shadow-md transition-shadow">
          <span className="absolute top-6 right-6 font-['Plus_Jakarta_Sans'] font-extrabold text-4xl text-[#0756A3]/15">
            03
          </span>
          <div className="w-12 h-12 rounded-xl bg-[#0756A3] text-white flex items-center justify-center mb-6">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#131c26]">
            GROW
          </h3>
          <p className="text-sm text-[#44474d] mt-3 leading-relaxed">
            Build and mentor your team, unlock tiered matching commissions, and qualify for luxury incentive retreats like the Pangkor Qualifier 2026.
          </p>
          <div className="mt-4 text-xs font-semibold text-[#0756A3] flex items-center gap-1">
            <span>International leadership pools</span>
          </div>
        </div>

      </div>

      {/* Interactive Partner Earnings Calculator */}
      <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-[#dae3f1] shadow-[0_8px_30px_rgba(7,26,51,0.06)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#dae3f1]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0756A3] uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              Interactive Simulation
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl text-[#131c26] mt-1">
              Estimate Your Monthly Partner Earnings
            </h3>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Adjust your monthly activity to simulate potential commission returns based on RiG's compensation structure.
            </p>
          </div>

          {/* Tier Switcher in Calculator */}
          <div className="flex items-center gap-1.5 p-1 bg-[#eef4ff] rounded-xl border border-[#dae3f1] self-start md:self-center">
            {(['A', 'B', 'C'] as const).map((tierKey) => (
              <button
                key={tierKey}
                onClick={() => setSelectedTier(tierKey)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedTier === tierKey
                    ? 'bg-[#071A33] text-white shadow-sm'
                    : 'text-[#44474d] hover:text-[#131c26]'
                }`}
              >
                Package {tierKey}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Controls & Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
          
          {/* Sliders Area */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Slider 1: Direct packages */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#131c26] mb-2">
                <span>Direct New Partners / Customers per Month</span>
                <span className="font-mono text-[#0756A3] text-base tabular-nums bg-[#eef4ff] px-2.5 py-0.5 rounded">
                  {personalReferrals} packages
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={personalReferrals}
                onChange={(e) => setPersonalReferrals(Number(e.target.value))}
                className="w-full h-2 bg-[#dae3f1] rounded-lg appearance-none cursor-pointer accent-[#0756A3]"
              />
              <div className="flex justify-between text-[11px] text-[#44474d] mt-1">
                <span>1 package</span>
                <span>8 packages</span>
                <span>15 packages</span>
              </div>
            </div>

            {/* Slider 2: Team members */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-[#131c26] mb-2">
                <span>Active Team Members in Organization</span>
                <span className="font-mono text-[#0756A3] text-base tabular-nums bg-[#eef4ff] px-2.5 py-0.5 rounded">
                  {teamMembers} members
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="1"
                value={teamMembers}
                onChange={(e) => setTeamMembers(Number(e.target.value))}
                className="w-full h-2 bg-[#dae3f1] rounded-lg appearance-none cursor-pointer accent-[#0756A3]"
              />
              <div className="flex justify-between text-[11px] text-[#44474d] mt-1">
                <span>0 members (Solo)</span>
                <span>15 members</span>
                <span>30 members (Leader)</span>
              </div>
            </div>

            {/* Selected package quick summary */}
            <div className="p-4 bg-[#f8f9ff] rounded-xl border border-[#dae3f1] text-xs text-[#44474d] flex items-center justify-between">
              <div>
                <span className="font-semibold text-[#131c26] block">Selected: {current.name}</span>
                <span>Direct Bonus Rate: {(current.directRate * 100)}% · Team Override: {(current.teamRate * 100)}%</span>
              </div>
              <span className="text-[#0756A3] font-semibold text-right">
                RM {current.price} Entry
              </span>
            </div>

          </div>

          {/* Outcome Card */}
          <div className="lg:col-span-5 bg-[#091c35] text-white p-6 sm:p-8 rounded-2xl border border-[#172b47] flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C99A24] font-bold">
                Projected Monthly Return
              </span>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl text-white tabular-nums tracking-tight">
                  RM {totalMonthlyProjected.toLocaleString()}
                </span>
                <span className="text-xs text-[#a7c8ff]">/ month</span>
              </div>

              <div className="mt-6 space-y-2.5 text-xs text-[#d5e3ff]/90 border-t border-white/10 pt-4">
                <div className="flex justify-between">
                  <span>Direct Sales Bonus:</span>
                  <span className="font-mono font-semibold text-white tabular-nums">RM {directIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Team Performance Match:</span>
                  <span className="font-mono font-semibold text-white tabular-nums">RM {teamIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#C99A24]">
                  <span>Pangkor Incentive Points:</span>
                  <span className="font-mono font-semibold tabular-nums">~{personalReferrals * 150 + teamMembers * 80} pts</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={() => onSelectTier(`Package ${selectedTier}`)}
                className="w-full bg-[#C99A24] hover:bg-[#b3881e] text-[#091c35] font-['Plus_Jakarta_Sans'] font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Inquire for {current.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
