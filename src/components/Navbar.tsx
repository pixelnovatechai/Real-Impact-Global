import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { LOGO_URL } from '../data/content';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'opportunity', label: 'Opportunity' },
    { id: 'community', label: 'Community' },
    { id: 'qualifier', label: 'Campaign' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    const phone = "60123456789";
    const text = encodeURIComponent("Hello Real Impact Global, I would like to learn more about RiG wellness products and the partner opportunity.");
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_2px_12px_rgba(7,26,51,0.06)] border-b border-[#dae3f1]/60'
            : 'bg-[#f8f9ff]/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Brand Mark (Clean single element with profile icon) */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0756A3] rounded-lg p-1"
            aria-label="Real Impact Global Home"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#071A33]/15 shadow-sm group-hover:scale-105 transition-transform">
              <img
                src={LOGO_URL}
                alt="RiG Brand Icon"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-xl tracking-tight text-[#131c26] group-hover:text-[#0756A3] transition-colors leading-none">
                RiG
              </span>
              <span className="text-[10px] tracking-widest text-[#44474d] font-semibold uppercase leading-none mt-1">
                Real Impact Global
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Text with subtle active indicator) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-1.5 text-sm font-medium transition-all rounded-md relative ${
                    isActive
                      ? 'text-[#0756A3] font-semibold bg-[#eef4ff]'
                      : 'text-[#44474d] hover:text-[#131c26] hover:bg-[#eef4ff]/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0756A3] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={openWhatsApp}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0756A3] hover:bg-[#054585] rounded-lg shadow-sm transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0756A3]"
            >
              <MessageCircle className="w-4 h-4 text-[#76acff]" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#071A33] hover:bg-[#0756A3] rounded-lg shadow-sm transition-all whitespace-nowrap"
            >
              <span>Join RiG</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#131c26] hover:bg-[#dae3f1]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0756A3]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="fixed inset-0 bg-[#071A33]/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 right-0 left-0 bg-[#f8f9ff] border-b border-[#dae3f1] shadow-xl p-6 transition-transform">
            <div className="grid grid-cols-2 gap-2 mb-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#071A33] text-white font-semibold'
                        : 'text-[#44474d] hover:bg-[#eef4ff] hover:text-[#131c26]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-[#dae3f1]">
              <button
                onClick={openWhatsApp}
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 px-4 bg-[#071A33] hover:bg-[#0756A3] text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2"
              >
                <span>Partner Inquiry Form</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
