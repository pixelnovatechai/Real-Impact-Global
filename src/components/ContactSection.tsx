import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageCircle, RefreshCw, AlertCircle, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  selectedInterest: string;
  onInterestChange: (interest: string) => void;
  onOpenWhatsAppWithMessage: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedInterest,
  onInterestChange,
  onOpenWhatsAppWithMessage,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    interest: selectedInterest || 'Smart Partner Package B (RM 900)',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [ticketNumber, setTicketNumber] = useState<string>('');

  useEffect(() => {
    if (selectedInterest) {
      setFormData((prev) => ({ ...prev, interest: selectedInterest }));
    }
  }, [selectedInterest]);

  const interestOptions = [
    'Smart Partner Package A (RM 150)',
    'Smart Partner Package B (RM 900)',
    'Smart Partner Package C (RM 1,800)',
    'Product Inquiry (Magnesium Spray / Deep Sea Water)',
    'Daily Synergistic Health Bundle',
    'Pangkor Qualifier Campaign 2026',
    'General Partner Inquiry',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      const generatedTicket = 'RIG-' + Math.floor(100000 + Math.random() * 900000);
      setTicketNumber(generatedTicket);
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 700);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hi RiG Team! I just submitted an inquiry on the website.\nReference: ${ticketNumber || 'New Inquiry'}\nName: ${formData.name}\nInterest: ${formData.interest}\nMessage: ${formData.message || 'I would like to activate my registration.'}`;
    onOpenWhatsAppWithMessage(text);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: 'Smart Partner Package B (RM 900)',
      message: '',
    });
    setErrors({});
    setSubmissionSuccess(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold text-[#0756A3] uppercase tracking-widest">
          Get In Touch
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl text-[#131c26] mt-2 tracking-tight">
          Start Your Inquiry
        </h2>
        <p className="text-sm sm:text-base text-[#44474d] mt-3 leading-relaxed">
          Fill out the secure form below and our certified wellness & business advisors will get back to you promptly.
        </p>
      </div>

      {submissionSuccess ? (
        /* Success Confirmation Panel */
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#dae3f1] shadow-[0_12px_36px_rgba(7,26,51,0.06)] text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#eef4ff] text-[#0756A3] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-[#0756A3]" />
          </div>

          <div>
            <span className="text-xs font-bold text-[#C99A24] uppercase tracking-wider">
              Inquiry Registered
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl text-[#131c26] mt-1">
              Thank You, {formData.name}!
            </h3>
            <p className="text-sm text-[#44474d] mt-2 max-w-md mx-auto leading-relaxed">
              Your inquiry regarding <strong className="text-[#0756A3]">{formData.interest}</strong> has been logged into our distributor concierge system.
            </p>
          </div>

          {/* Ticket ID Box */}
          <div className="p-4 bg-[#f8f9ff] rounded-2xl border border-[#dae3f1] inline-block text-left">
            <span className="text-[11px] text-[#44474d] uppercase font-semibold block">
              Reference Ticket ID
            </span>
            <span className="font-mono text-lg font-bold text-[#091c35] tracking-wider">
              {ticketNumber}
            </span>
          </div>

          {/* Fast-track WhatsApp action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleSendToWhatsApp}
              className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fast-Track via WhatsApp Now</span>
            </button>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-3 bg-[#F5F8FC] hover:bg-[#eef4ff] text-[#131c26] text-xs sm:text-sm font-semibold rounded-xl border border-[#dae3f1] transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4 text-[#44474d]" />
              <span>Submit Another Inquiry</span>
            </button>
          </div>
        </div>
      ) : (
        /* Real Form */
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white p-8 sm:p-10 rounded-3xl border border-[#dae3f1] shadow-[0_8px_30px_rgba(7,26,51,0.06)] space-y-6"
        >
          {/* Two Columns: Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-[#131c26] mb-1.5 uppercase tracking-wide">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                placeholder="e.g. Jasmine Tan"
                className={`w-full bg-[#f8f9ff] border rounded-xl p-3.5 text-sm text-[#131c26] focus:outline-none focus:ring-2 focus:ring-[#0756A3] transition-all ${
                  errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#dae3f1]'
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#131c26] mb-1.5 uppercase tracking-wide">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                placeholder="e.g. jasmine@example.com"
                className={`w-full bg-[#f8f9ff] border rounded-xl p-3.5 text-sm text-[#131c26] focus:outline-none focus:ring-2 focus:ring-[#0756A3] transition-all ${
                  errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#dae3f1]'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-[#131c26] mb-1.5 uppercase tracking-wide">
              Phone / WhatsApp Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
              placeholder="e.g. +60 12-345 6789"
              className={`w-full bg-[#f8f9ff] border rounded-xl p-3.5 text-sm text-[#131c26] focus:outline-none focus:ring-2 focus:ring-[#0756A3] transition-all ${
                errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#dae3f1]'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Interest Selector */}
          <div>
            <label className="block text-xs font-semibold text-[#131c26] mb-1.5 uppercase tracking-wide">
              Select Your Interest
            </label>
            <select
              value={formData.interest}
              onChange={(e) => {
                setFormData({ ...formData, interest: e.target.value });
                onInterestChange(e.target.value);
              }}
              className="w-full bg-[#f8f9ff] border border-[#dae3f1] rounded-xl p-3.5 text-sm text-[#131c26] focus:outline-none focus:ring-2 focus:ring-[#0756A3] transition-all"
            >
              {interestOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-xs font-semibold text-[#131c26] mb-1.5 uppercase tracking-wide">
              Your Message or Questions (Optional)
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us what you'd like to achieve with RiG, questions about products or partner tier requirements..."
              className="w-full bg-[#f8f9ff] border border-[#dae3f1] rounded-xl p-3.5 text-sm text-[#131c26] focus:outline-none focus:ring-2 focus:ring-[#0756A3] transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0756A3] hover:bg-[#054585] disabled:bg-[#0756A3]/60 text-white font-['Plus_Jakarta_Sans'] font-bold text-sm py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0756A3]"
          >
            {isSubmitting ? (
              <span>Submitting Your Inquiry...</span>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-center text-[11px] text-[#44474d]">
            By submitting, you agree to receive communications from Real Impact Global. We respect your privacy.
          </p>
        </form>
      )}

    </section>
  );
};
