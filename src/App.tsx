import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SynergyProtocolSection } from './components/SynergyProtocolSection';
import { CorePillarsSection } from './components/CorePillarsSection';
import { OpportunitySection } from './components/OpportunitySection';
import { PackagesSection } from './components/PackagesSection';
import { ProcessFlowSection } from './components/ProcessFlowSection';
import { CommunitySection } from './components/CommunitySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CampaignSection } from './components/CampaignSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

import {
  PRODUCTS,
  PACKAGES,
  COMMUNITY_GALLERY,
  TESTIMONIALS,
  FAQS,
} from './data/content';
import { Product } from './types';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedInterest, setSelectedInterest] = useState<string>('Smart Partner Package B (RM 900)');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Show transient toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // When a user selects a package
  const handleSelectPackage = (packageName: string) => {
    let interestString = 'Smart Partner Package B (RM 900)';
    if (packageName.includes('Package A')) {
      interestString = 'Smart Partner Package A (RM 150)';
    } else if (packageName.includes('Package B')) {
      interestString = 'Smart Partner Package B (RM 900)';
    } else if (packageName.includes('Package C')) {
      interestString = 'Smart Partner Package C (RM 1,800)';
    }
    setSelectedInterest(interestString);
    showToast(`Selected ${interestString} — form updated!`);
    handleNavigate('contact');
  };

  // When a user selects a product for inquiry
  const handleSelectProductForInquiry = (productName: string) => {
    const interestString = `Product Inquiry (${productName})`;
    setSelectedInterest(interestString);
    showToast(`Selected ${productName} for inquiry!`);
    handleNavigate('contact');
  };

  // Direct WhatsApp dispatch with custom message
  const handleOpenWhatsAppWithMessage = (message: string) => {
    const phone = '60123456789';
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenWhatsAppGeneral = () => {
    const phone = '60123456789';
    const text = encodeURIComponent('Hello Real Impact Global! I would like to get more information on your products and business opportunity.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  // Section observer to update active nav state while scrolling
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'products', 'opportunity', 'community', 'qualifier', 'faq', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#131c26] flex flex-col font-['Inter',sans-serif]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 sm:right-8 z-50 bg-[#091c35] text-white px-4 py-3 rounded-2xl shadow-2xl border border-[#C99A24]/40 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-5 h-5 text-[#C99A24] shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-white/60 hover:text-white ml-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero
          onExploreProducts={() => handleNavigate('products')}
          onJoinBusiness={() => handleNavigate('opportunity')}
          onSelectProduct={(product) => setSelectedProduct(product)}
          products={PRODUCTS}
        />

        {/* Trust Strip */}
        <TrustStrip />

        {/* About RiG Section */}
        <AboutSection
          onLearnMore={() => handleNavigate('contact')}
        />

        {/* Flagship Products Section */}
        <ProductsSection
          products={PRODUCTS}
          onOpenProductModal={(product) => setSelectedProduct(product)}
          onSelectForInquiry={handleSelectProductForInquiry}
        />

        {/* Synergistic Health Protocol Showcase */}
        <SynergyProtocolSection
          onGetBundle={() => {
            setSelectedInterest('Daily Synergistic Health Bundle');
            showToast('Selected Daily Synergistic Health Bundle!');
            handleNavigate('contact');
          }}
        />

        {/* Why RiG: Core Pillars */}
        <CorePillarsSection />

        {/* Business Opportunity & Interactive Calculator */}
        <OpportunitySection
          onSelectTier={handleSelectPackage}
        />

        {/* Smart Partner Packages */}
        <PackagesSection
          packages={PACKAGES}
          onSelectPackage={handleSelectPackage}
        />

        {/* Process Flow: 5 Steps */}
        <ProcessFlowSection />

        {/* Community Gallery */}
        <CommunitySection
          highlights={COMMUNITY_GALLERY}
        />

        {/* Testimonials */}
        <TestimonialsSection
          testimonials={TESTIMONIALS}
        />

        {/* Active Campaign: Pangkor Qualifier */}
        <CampaignSection
          onClaimQualification={() => {
            setSelectedInterest('Pangkor Qualifier Campaign 2026');
            showToast('Selected Pangkor Qualifier Campaign roadmap!');
            handleNavigate('contact');
          }}
        />

        {/* Comprehensive FAQ Section */}
        <FaqSection
          faqs={FAQS}
          onOpenWhatsApp={handleOpenWhatsAppGeneral}
        />

        {/* Final Conversion CTA */}
        <FinalCtaSection
          onGetStarted={() => handleNavigate('contact')}
        />

        {/* Real Inquiry & Contact Form */}
        <ContactSection
          selectedInterest={selectedInterest}
          onInterestChange={(val) => setSelectedInterest(val)}
          onOpenWhatsAppWithMessage={handleOpenWhatsAppWithMessage}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Interactive Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectForInquiry={handleSelectProductForInquiry}
      />

    </div>
  );
}
