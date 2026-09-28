export interface Product {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  price: string;
  image: string;
  alt: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  specs: {
    origin: string;
    volume: string;
    keyIngredients: string;
    application: string;
    purityStandard: string;
  };
  mineralProfile: {
    mineral: string;
    amount: string;
    function: string;
  }[];
  directions: string[];
  faqs: { q: string; a: string }[];
}

export interface PartnerPackage {
  id: string;
  name: string;
  tier: string;
  price: number;
  currency: string;
  description: string;
  popular?: boolean;
  productAllocation: string;
  commissionRate: string;
  pvPoints: number;
  features: string[];
  idealFor: string;
  projectedMonthlyReturn: string;
}

export interface CommunityHighlight {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  date: string;
  location: string;
  recap: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  initials: string;
  productMentioned: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'all' | 'products' | 'business' | 'qualifier' | 'support';
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}
