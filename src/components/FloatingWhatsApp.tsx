import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { LOGO_URL } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const phoneNumber = '60123456789';

  const quickPrompts = [
    'I want to know more about the Magnesium Spray & Deep Sea Water.',
    'I want to join as a Smart Partner (Package A / B / C).',
    'How do I qualify for the Pangkor Island Retreat 2026?',
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text || 'Hello RiG, I would like to get more information.');
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Interactive Quick Chat Card */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-3xl shadow-[0_16px_40px_rgba(7,26,51,0.18)] border border-[#dae3f1] w-80 sm:w-96 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Card Header with Brand Profile */}
          <div className="bg-[#091c35] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={LOGO_URL}
                  alt="RiG Advisor"
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#091c35] rounded-full" />
              </div>
              <div>
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-white">
                  RiG Official Concierge
                </h4>
                <p className="text-[11px] text-[#a7c8ff] flex items-center gap-1">
                  <span>Online</span> · Typically replies in minutes
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10"
              aria-label="Close chat card"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 space-y-3 bg-[#f8f9ff]">
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm border border-[#dae3f1] text-xs text-[#131c26] shadow-sm leading-relaxed">
              👋 Welcome to <strong>Real Impact Global</strong>! How can we assist your wellness journey or business inquiry today?
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold text-[#44474d] uppercase tracking-wider block">
                Quick Prompts:
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left p-2.5 bg-white hover:bg-[#eef4ff] text-[#0756A3] border border-[#dae3f1] rounded-xl text-xs font-medium transition-colors line-clamp-1"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2 flex items-center gap-1.5">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend(customMsg);
                }}
                placeholder="Type your message..."
                className="w-full text-xs p-2.5 bg-white border border-[#dae3f1] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#0756A3]"
              />
              <button
                onClick={() => handleSend(customMsg)}
                className="p-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl transition-colors shrink-0"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Open WhatsApp conversation"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};
