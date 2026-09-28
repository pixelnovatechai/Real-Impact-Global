import { Product, PartnerPackage, CommunityHighlight, Testimonial, FaqItem } from '../types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1Uc4yW5K2QtyAYPnLVbo8eG3GXKpoD6ArD6gg3DKD6TvozdbC6C5cQyOV47wdeiM7RkcLvRXIOxY7AKpFZ53kCNvtfxbs9pt3Vhm1bhJbSFQNVCMMEKTPfRVQgoxM4LrMVOdZ-ZAE7tFkwK6USEVOOeIrVet61qbtK92t9DL-ikQRXg-I3fuT3kMC7KT6TS3d-u-fA4HtOLfOZQZuu0QfbMvAJjAUw-WkHo--2IprStFfYnJYQPghzpgfC5zFTvYazNFW-dr2JElaU";

export const PRODUCTS: Product[] = [
  {
    id: "deep-sea-water",
    name: "Deep Sea Water Concentrate",
    subtitle: "Mineral Concentrate",
    tag: "Mineral Rich",
    price: "RM 120",
    image: "/products/deep_sea_water_product.png",
    alt: "Deep Sea Water Concentrate bottle with pure ocean minerals",
    shortDescription: "Extracted from pristine deep ocean depths, delivering essential trace minerals and electrolytes for optimal cellular hydration.",
    fullDescription: "Our Deep Sea Water Concentrate is harvested from depths over 600 meters in pristine, cold deep-sea oceanic currents untouched by modern pollution. Naturally micro-filtered and hyper-concentrated, it contains 70+ essential trace minerals and ionic electrolytes in bioavailable ratios matching human blood plasma.",
    highlights: [
      "Enhances daily cellular hydration and nutrient absorption",
      "Packed with 70+ ionic trace minerals and electrolytes",
      "Supports natural metabolic balance and sustained energy",
      "Alkalizing pH balance to neutralize bodily acidity",
      "100% natural with zero artificial additives or heavy metals"
    ],
    specs: {
      origin: "Pristine Deep Oceanic Trench (>600m depth)",
      volume: "60 ml Dropper Bottle (Approx. 60-day supply)",
      keyIngredients: "100% Concentrated Deep Sea Ionic Minerals & Electrolytes",
      application: "Daily oral drop infusion into filtered water, juice, or broth",
      purityStandard: "Heavy metal tested, sterile bottled, ISO/GMP certified"
    },
    mineralProfile: [
      { mineral: "Magnesium (Mg)", amount: "380 mg / 10 drops", function: "Muscle relaxation, cellular ATP energy, enzymatic catalysis" },
      { mineral: "Potassium (K)", amount: "120 mg / 10 drops", function: "Electrolyte conduction and intracellular water balance" },
      { mineral: "Calcium (Ca)", amount: "65 mg / 10 drops", function: "Bone density maintenance and neuromuscular signaling" },
      { mineral: "Trace Elements", amount: "Zinc, Selenium, Boron, Silica", function: "Immune defense, connective tissue repair, antioxidants" }
    ],
    directions: [
      "Add 3 to 5 drops into a glass of drinking water (250ml - 500ml) twice daily.",
      "Can also be added to morning lemon water, green smoothies, or herbal infusions.",
      "Do not consume directly undiluted without water.",
      "Store at room temperature away from direct sunlight."
    ],
    faqs: [
      {
        q: "What does it taste like?",
        a: "When diluted in water, it gives a smooth, subtly crisp mineral taste similar to mountain spring water."
      },
      {
        q: "How fast do I feel the benefits?",
        a: "Most users notice heightened energy and hydration within the first 3 to 5 days of regular morning use."
      }
    ]
  },
  {
    id: "magnesium-spray",
    name: "Transdermal Magnesium Spray",
    subtitle: "Transdermal Relief",
    tag: "Fast Absorption",
    price: "RM 95",
    image: "/products/magnesium_spray_product.png",
    alt: "Transdermal Magnesium Spray bottle for rapid muscle recovery",
    shortDescription: "Fast-absorbing topical magnesium designed to soothe tired muscles, improve sleep quality, and relieve daily tension effortlessly.",
    fullDescription: "Over 75% of modern adults suffer from magnesium deficiency, leading to tight muscles, restless legs, and poor sleep. RiG Transdermal Magnesium Spray bypasses the digestive tract entirely, delivering pure magnesium chloride directly through the skin into the bloodstream and muscular tissues in minutes.",
    highlights: [
      "Rapid topical muscle relaxation and relief from tightness",
      "Promotes deeper, more restorative REM and deep sleep cycles",
      "Eases nocturnal leg cramps, stiffness, and tension headaches",
      "Bypasses the gastrointestinal tract (no laxative effect)",
      "High concentration pharmaceutical-grade magnesium chloride"
    ],
    specs: {
      origin: "Ancient seabed mineral brine deposits",
      volume: "100 ml Fine Mist Spray (Approx. 800 sprays)",
      keyIngredients: "Purified Water, Zechstein-standard Magnesium Chloride Brine",
      application: "Topical spray onto shoulders, back, legs, or soles of feet",
      purityStandard: "100% natural, non-greasy, cruelty-free, fragrance-free"
    },
    mineralProfile: [
      { mineral: "Elemental Magnesium", amount: "~68 mg per 4 sprays", function: "Direct cellular uptake into neuromuscular junctions" },
      { mineral: "Natural Chloride Ions", amount: "Ionic balance", function: "Maintains optimal skin permeability and transdermal transfer" }
    ],
    directions: [
      "Spray 4 to 8 mists directly onto clean skin (shoulders, neck, lower back, calves, or abdomen).",
      "Gently massage into the skin until absorbed. A mild tingling sensation during initial use indicates active cellular absorption.",
      "Apply 20 minutes before bedtime to induce deep muscle and nervous system calm.",
      "Can be rinsed off after 20 minutes if desired, or left on overnight."
    ],
    faqs: [
      {
        q: "Why do I feel a slight tingling sensation?",
        a: "A temporary tingling sensation is completely normal for first-time users and is an indicator that your body's magnesium reserves are low. It subsides with regular use as magnesium levels normalize."
      },
      {
        q: "Can athletes use this after intense training?",
        a: "Yes! Many athletes spray it directly onto fatigued hamstrings, calves, and shoulders immediately post-shower for accelerated recovery."
      }
    ]
  }
];

export const PACKAGES: PartnerPackage[] = [
  {
    id: "package-a",
    name: "Package A",
    tier: "Starter Tier",
    price: 150,
    currency: "RM",
    description: "Ideal for personal wellness adoption, first-time experience, and casual sharing with family and friends.",
    productAllocation: "1x Deep Sea Water Concentrate OR 1x Magnesium Spray + Welcome Kit",
    commissionRate: "10% Direct Bonus",
    pvPoints: 50,
    idealFor: "Health seekers & beginner affiliates",
    projectedMonthlyReturn: "RM 300 - RM 800",
    features: [
      "Essential product allocation for personal trial",
      "Full digital member portal access & order dashboard",
      "Standard community chat & onboarding guide",
      "Personalized referral link for direct sharing",
      "Access to weekly virtual product masterclasses"
    ]
  },
  {
    id: "package-b",
    name: "Package B",
    tier: "Pro Tier",
    price: 900,
    currency: "RM",
    description: "Our most popular package designed for aspiring entrepreneurs ready to build serious momentum and scale.",
    popular: true,
    productAllocation: "Full Flagship Product Bundle (4x Deep Sea Water + 4x Magnesium Spray)",
    commissionRate: "18% Direct Bonus + Team Matching",
    pvPoints: 300,
    idealFor: "Active builders & wellness ambassadors",
    projectedMonthlyReturn: "RM 1,800 - RM 4,500",
    features: [
      "Comprehensive product bundle for personal use & demo",
      "Advanced distributor rewards & tiered matching bonus",
      "Priority access to leadership development masterclasses",
      "Ready-to-use digital marketing assets & social templates",
      "Dedicated mentor pairing for fast 30-day launch",
      "Fast-track eligibility for Pangkor Qualifier points"
    ]
  },
  {
    id: "package-c",
    name: "Package C",
    tier: "Elite Tier",
    price: 1800,
    currency: "RM",
    description: "Maximum financial leverage, highest commission tier, and VIP leadership benefits for global builders.",
    productAllocation: "Complete Executive Inventory (10x Deep Sea Water + 10x Magnesium Spray + Promo Kits)",
    commissionRate: "25% Direct Bonus + VIP Leadership Pool",
    pvPoints: 600,
    idealFor: "Experienced team leaders & regional builders",
    projectedMonthlyReturn: "RM 5,000 - RM 15,000+",
    features: [
      "Full flagship product inventory with best wholesale margins",
      "Maximum commission tiers and international override pool",
      "Direct 1-on-1 mentorship with Top RiG Founders",
      "VIP access to annual galas, retreat seats, and recognition",
      "Accelerated points for the Pangkor Island Qualifier 2026",
      "Regional distributor rights and expansion support"
    ]
  }
];

export const COMMUNITY_GALLERY: CommunityHighlight[] = [
  {
    id: "training",
    title: "TRAINING",
    category: "Masterclasses & Workshops",
    description: "Empowering masterclasses & skill-building sessions designed to foster leadership.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbsL0ZtM9Ar26hG9iU-XxKSKvtkXDXi05auOsR6z-X4SgdMZSuu9xmYct2WmnXtC22Htb_7jOW_SjOMN05YjhVUkPH5og4LcPFNepOCspJ-SSjIQvhsZjY5tp5lY-oV_LnQFG4Ol-C7xoC950xzd1kHY5jkafbmPTainH7Hn3aUnR3xFhHxlOgQ5FmxfD1qV2w-mPIoODxBv-KIIbr0cbayVyyomZyU4zPrDgfZY1SKV1ng2hdDbqrEw",
    alt: "RiG professional leadership training seminar in modern convention hall",
    date: "Monthly Sessions",
    location: "Kuala Lumpur Convention Center",
    recap: "Interactive tactical masterclasses where emerging leaders master digital brand positioning, wellness science, and scalable community outreach."
  },
  {
    id: "events",
    title: "EVENTS",
    category: "Galas & Celebrations",
    description: "Exclusive galas, achievement nights, and celebratory gatherings.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs81tg27xg9Wf1HmsDUF1rYyoM7GW0to8AhudXtwpkAwaNr6HWt952jyLli_BHrrBKYBxaaZKtcMZj-61lTcTjJ5Y1Etxyjm8Yc_2PQCxOYvZJcMcMd-SNUgFl1GtbQQ1PxMgyK2z6kvvxLamhin51dQUSpXen9JB1Y2Z3rKV7QaakqKmad_p2U4g3Ovf7anTIOhC2Tu4AcGtJ4Z93ZxgzknHG6JE92fLtaZE-QMJMquQcejS0AFO9XA",
    alt: "RiG corporate recognition gala event under warm ambient lighting",
    date: "Quarterly Awards",
    location: "Grand Hyatt Ballroom",
    recap: "A glamorous evening celebrating milestones, rank advancements, and life-changing health transformations across our global network."
  },
  {
    id: "mentorship",
    title: "MENTORSHIP",
    category: "1-on-1 & Small Group Coaching",
    description: "Direct guidance and strategy from top-tier industry pioneers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEcP8E1OdbLGIsUbh7IJLcWTJ22ep5HgX_ur1H7Z271CCImLem-6s-v7YpeP-wwJIHN28wypOvEhQUxzvnuB_lkqlfMuXHOTMawbwKYmIThmrAKL0UPXUahYchR2Yn83LmC2bGjIUIFVSD4ZXDZ0rjsqcjGQRh_01cN3DCv07sW-O8AkRMzp9gz0qdd-ysbmScJdXyYLUHIzqaD0R-PtL4BjeTr3kirCMbCIU9DgQIO56f-RZhVgifAg",
    alt: "Entrepreneurs having strategic mentorship discussion over coffee in sunlit lounge",
    date: "Weekly Strategy Circles",
    location: "Regional Hubs & Private Lounges",
    recap: "Intimate mastermind sessions with seasoned 7-figure mentors breaking down weekly execution playbooks and mindset alignment."
  },
  {
    id: "community",
    title: "COMMUNITY",
    category: "Culture & Connection",
    description: "Lifelong friendships, mutual elevation, and global connections.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkaFPnF8a2FvGDgiz_hmTOvaDFoT1jK-fX3hUjDyIBN3Og08BrW05U_8GsDjWUBKrEhkC5CVfs3WgjHkiyXmo04qekTaLsozpJ9s_ozGvxt5UrrgZ0cYozKz1SvRfEuKcOdRLTd7IqqqrjFsVKWCR_aSomrAE1iu5x8Lzm1Hwg0IyvyfWozEj1MSoIUrlixQGExtnZp9ypuamrFu-1PgP1yiCzcXk-uMGDPCnVtwNjko8MrSMg-FmjTg",
    alt: "Diverse group of smiling community members collaborating together outdoors",
    date: "Active 24/7 Global Family",
    location: "Malaysia, Singapore, Indonesia & Beyond",
    recap: "A genuine, supportive brotherhood and sisterhood celebrating every win, empowering mothers, working professionals, and seasoned entrepreneurs alike."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "jasmine",
    name: "Jasmine S.",
    role: "Elite Partner",
    location: "Kuala Lumpur",
    quote: "The transdermal magnesium spray has completely changed my post-workout recovery and sleep quality. Joining RiG was the best decision I've made.",
    initials: "JS",
    productMentioned: "Transdermal Magnesium Spray",
    rating: 5
  },
  {
    id: "david",
    name: "David L.",
    role: "Pro Partner",
    location: "Penang",
    quote: "The Deep Sea Water Concentrate is part of my daily routine. My energy levels are through the roof, and the business model is remarkably simple to share.",
    initials: "DL",
    productMentioned: "Deep Sea Water Concentrate",
    rating: 5
  },
  {
    id: "aisha",
    name: "Aisha N.",
    role: "Global Leader",
    location: "Singapore",
    quote: "The mentorship and community support at RiG are unmatched. I've built a thriving international team within just a few months.",
    initials: "AN",
    productMentioned: "Daily Synergistic Bundle",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "all",
    question: "What is Real Impact Global (RiG)?",
    answer: "Real Impact Global is an innovative wellness and business ecosystem that delivers premium natural health products alongside a rewarding digital entrepreneurship opportunity. We focus on bioavailable deep sea minerals and pure transdermal wellness solutions paired with a high-integrity partner model."
  },
  {
    id: "faq-2",
    category: "business",
    question: "How do I get started with RiG?",
    answer: "You can get started by choosing one of our Smart Partner packages: Package A at RM 150 for personal use, Package B at RM 900 for growth builders, or Package C at RM 1,800 for elite leaders. Submit your inquiry below or reach out via WhatsApp to activate your partner credentials."
  },
  {
    id: "faq-3",
    category: "products",
    question: "What are the key benefits of the Transdermal Magnesium Spray?",
    answer: "It provides fast muscle relaxation, supports deep and restful REM sleep, relieves everyday muscular tension, and replenishes cellular magnesium directly through the skin—bypassing digestive degradation entirely."
  },
  {
    id: "faq-4",
    category: "products",
    question: "How is the Deep Sea Water Concentrate used?",
    answer: "Add 3 to 5 drops into a glass of drinking water (250ml - 500ml) twice daily. It infuses your water with over 70 essential ionic trace minerals and electrolytes for enhanced cellular hydration, alkaline balance, and stamina."
  },
  {
    id: "faq-5",
    category: "business",
    question: "What is included in Package A (RM 150)?",
    answer: "Package A includes essential product allocation, full member portal access, standard community support, and a personal referral link, making it an accessible, low-barrier pathway to experience the products and begin sharing."
  },
  {
    id: "faq-6",
    category: "business",
    question: "What are the perks of Package B and C?",
    answer: "Package B (RM 900) and Package C (RM 1,800) offer comprehensive product inventories at significant wholesale advantage, higher commission percentages (up to 25%), team matching bonuses, advanced digital marketing funnels, and priority qualification for incentive trips."
  },
  {
    id: "faq-7",
    category: "business",
    question: "Is prior business experience required?",
    answer: "Not at all! RiG provides comprehensive onboarding masterclasses, step-by-step digital blueprints, scripts, and dedicated 1-on-1 mentorship to help beginners build confidence and generate sales."
  },
  {
    id: "faq-8",
    category: "business",
    question: "How do I earn commissions with RiG?",
    answer: "You earn through retail customer profits, direct recommendation bonuses on new partner packages, team performance volume overrides, and quarterly leadership reward pools. Payouts are transparent and processed regularly."
  },
  {
    id: "faq-9",
    category: "qualifier",
    question: "What is the Pangkor Qualifier campaign?",
    answer: "It is an exclusive incentive promotion running from 1 August to 30 September 2026. Qualifying partners earn an all-expenses-paid luxury leadership getaway to Pangkor Island, complete with beachfront banquets, VIP training, and networking."
  },
  {
    id: "faq-10",
    category: "products",
    question: "Are RiG products certified safe?",
    answer: "Yes, all RiG formulations undergo stringent independent laboratory testing for heavy metals, microbial contaminants, and chemical residues, produced strictly in GMP and ISO-certified manufacturing facilities."
  },
  {
    id: "faq-11",
    category: "support",
    question: "How can I contact customer support?",
    answer: "You can submit an inquiry through the contact form on this page, email our support desk at support@realimpactglobal.com, or tap the floating WhatsApp button at the bottom-right corner for direct assistance from our concierge team."
  }
];
