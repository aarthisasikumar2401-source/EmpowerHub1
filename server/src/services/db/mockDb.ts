// EMPOWER HUB - Seed Database & Storage Engine

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'learner' | 'mentor' | 'business' | 'admin';
  phone?: string;
  country?: string;
  state?: string;
  city?: string;
  preferredLanguage: string;
  skills: string[];
  education?: string;
  occupation?: string;
  opportunityScore: number;
  businessReadinessScore: number;
  financialReadinessScore: number;
  walletBalance: number;
  avatar: string;
}

export interface OpportunityItem {
  id: string;
  title: string;
  type: string;
  category: string;
  estimatedIncome: string;
  skillMatchPercentage: number;
  investmentNeeded: string;
  riskLevel: string;
  description: string;
  requiredSkills: string[];
  missingSkills: string[];
  timeline: string;
}

export interface ProductItem {
  id: string;
  title: string;
  sellerName: string;
  category: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  tags: string[];
  description: string;
}

export interface MentorItem {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  rating: number;
  reviewsCount: number;
  hourlyRate: number;
  avatar: string;
  languages: string[];
  bio: string;
}

export interface SchemeItem {
  id: string;
  title: string;
  ministry: string;
  subsidyAmount: string;
  category: string;
  eligibility: string;
  link: string;
}

export class MockDatabase {
  public static users: UserProfile[] = [
    {
      id: 'usr-learner-01',
      name: 'Ananya Sharma',
      email: 'learner@empowerhub.io',
      role: 'learner',
      phone: '+91 9876543210',
      country: 'India',
      state: 'Tamil Nadu',
      city: 'Chennai',
      preferredLanguage: 'en',
      skills: ['Tailoring', 'Handicrafts', 'Basic Accounting', 'Social Media'],
      education: 'Higher Secondary',
      occupation: 'Aspiring Artisan & Entrepreneur',
      opportunityScore: 88,
      businessReadinessScore: 74,
      financialReadinessScore: 80,
      walletBalance: 3450.00,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 'usr-mentor-01',
      name: 'Dr. Rajesh Varma',
      email: 'mentor@empowerhub.io',
      role: 'mentor',
      phone: '+91 9812345678',
      country: 'India',
      state: 'Karnataka',
      city: 'Bengaluru',
      preferredLanguage: 'en',
      skills: ['E-Commerce Strategy', 'Digital Marketing', 'Financial Management'],
      education: 'Ph.D. in Business Administration',
      occupation: 'Senior Startup Advisor & Mentor',
      opportunityScore: 96,
      businessReadinessScore: 98,
      financialReadinessScore: 95,
      walletBalance: 14200.00,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 'usr-business-01',
      name: 'Apex Artisan Collective',
      email: 'business@empowerhub.io',
      role: 'business',
      phone: '+91 9765432109',
      country: 'India',
      state: 'Maharashtra',
      city: 'Mumbai',
      preferredLanguage: 'en',
      skills: ['Bulk Export', 'Brand Development', 'Supply Chain Management'],
      education: 'Corporate Entity',
      occupation: 'Ethical Craft Enterprise',
      opportunityScore: 92,
      businessReadinessScore: 94,
      financialReadinessScore: 90,
      walletBalance: 48500.00,
      avatar: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 'usr-admin-01',
      name: 'Platform Administrator',
      email: 'admin@empowerhub.io',
      role: 'admin',
      phone: '+91 9000000000',
      country: 'India',
      state: 'Delhi',
      city: 'New Delhi',
      preferredLanguage: 'en',
      skills: ['System Governance', 'AI Monitoring', 'Security Audit'],
      education: 'Master of Technology',
      occupation: 'Head of Platform Operations',
      opportunityScore: 99,
      businessReadinessScore: 99,
      financialReadinessScore: 99,
      walletBalance: 250000.00,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    }
  ];

  public static opportunities: OpportunityItem[] = [
    {
      id: 'opp-1',
      title: 'Custom Eco-Friendly Apparel Studio',
      type: 'Home Business',
      category: 'Tailoring & Fashion',
      estimatedIncome: '₹35,000 - ₹65,000 / month',
      skillMatchPercentage: 92,
      investmentNeeded: '₹12,000',
      riskLevel: 'Low',
      description: 'Leverage tailoring skills to design sustainable custom garments and sell through EMPOWER Marketplace and Instagram.',
      requiredSkills: ['Tailoring', 'Pattern Making', 'Basic Photography'],
      missingSkills: ['Digital Branding'],
      timeline: '2 Weeks to First Sale'
    },
    {
      id: 'opp-2',
      title: 'Handmade Organic Soaps & Skincare',
      type: 'Micro Business',
      category: 'Handicrafts & Beauty',
      estimatedIncome: '₹25,000 - ₹48,000 / month',
      skillMatchPercentage: 85,
      investmentNeeded: '₹8,500',
      riskLevel: 'Low',
      description: 'Create zero-chemical artisanal soaps using local herbs and market directly to eco-conscious urban buyers.',
      requiredSkills: ['Formulation', 'Packaging', 'Social Selling'],
      missingSkills: ['GST Compliance'],
      timeline: '10 Days to Launch'
    },
    {
      id: 'opp-3',
      title: 'Regional Home Kitchen & Catering',
      type: 'Side Hustle',
      category: 'Food & Bakery',
      estimatedIncome: '₹30,000 - ₹75,000 / month',
      skillMatchPercentage: 89,
      investmentNeeded: '₹15,000',
      riskLevel: 'Medium',
      description: 'Supply authentic homemade snacks, spices, and pre-booked meals for corporate lunches and local events.',
      requiredSkills: ['Culinary Arts', 'Food Safety', 'Order Management'],
      missingSkills: ['FSSAI Registration Assistant'],
      timeline: '3 Weeks to Scale'
    }
  ];

  public static products: ProductItem[] = [
    {
      id: 'prod-1',
      title: 'Handcrafted Kantha Embroidery Tote Bag',
      sellerName: 'Ananya Sharma',
      category: 'Handicrafts',
      price: 899,
      discountPrice: 699,
      rating: 4.9,
      reviewsCount: 38,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80',
      tags: ['Handmade', 'Eco-Friendly', 'Cotton', 'Embroidery'],
      description: '100% organic cotton tote bag with traditional hand-embroidered motifs. Durable and elegant.'
    },
    {
      id: 'prod-2',
      title: 'Artisanal Cold-Pressed Neem & Turmeric Soap Pack',
      sellerName: 'GreenLeaf Organics',
      category: 'Beauty',
      price: 499,
      discountPrice: 399,
      rating: 4.8,
      reviewsCount: 54,
      image: 'https://images.unsplash.com/photo-1607006482602-76ca0fd2f47d?w=500&auto=format&fit=crop&q=80',
      tags: ['Organic', 'Skincare', 'Ayurvedic', 'Zero Waste'],
      description: 'Handmade cold-pressed soap free from parabens and sulfates, enriched with pure essential oils.'
    },
    {
      id: 'prod-3',
      title: 'Terracotta Hand-Painted Home Decor Pot',
      sellerName: 'Clay Craft Studio',
      category: 'Home Decor',
      price: 1250,
      discountPrice: 999,
      rating: 5.0,
      reviewsCount: 19,
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&auto=format&fit=crop&q=80',
      tags: ['Terracotta', 'Handpainted', 'Indoor Plant', 'Art'],
      description: 'Vibrant hand-painted earthen pot suitable for succulents and indoor aesthetics.'
    }
  ];

  public static mentors: MentorItem[] = [
    {
      id: 'men-1',
      name: 'Dr. Rajesh Varma',
      title: 'E-Commerce Growth & Startup Strategist',
      expertise: ['Marketplace Strategy', 'Pricing', 'Digital Marketing'],
      rating: 4.9,
      reviewsCount: 42,
      hourlyRate: 499,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      languages: ['English', 'Hindi', 'Tamil'],
      bio: 'Ex-Amazon Strategist helping rural & women entrepreneurs launch digital brands.'
    },
    {
      id: 'men-2',
      name: 'Priya Sundaram',
      title: 'Craft & Textile Business Specialist',
      expertise: ['Apparel Design', 'Quality Control', 'Export Strategy'],
      rating: 5.0,
      reviewsCount: 68,
      hourlyRate: 599,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      languages: ['English', 'Tamil', 'Telugu'],
      bio: 'Master artisan trainer with 14 years experience scaling handicraft businesses globally.'
    }
  ];

  public static schemes: SchemeItem[] = [
    {
      id: 'sch-1',
      title: 'PM Mudra Yojana (PMMY) Shishu / Kishore Loan',
      ministry: 'Ministry of Finance',
      subsidyAmount: 'Up to ₹5,000,000 Collateral Free',
      category: 'Micro Enterprises & Entrepreneurs',
      eligibility: 'Any Indian citizen initiating micro-business or expanding artisan unit.',
      link: 'https://www.mudra.org.in'
    },
    {
      id: 'sch-2',
      title: 'Stand-Up India Scheme for Women Entrepreneurs',
      ministry: 'Ministry of Financial Services',
      subsidyAmount: '₹10 Lakh to ₹1 Crore Loan',
      category: 'Women & SC/ST Entrepreneurs',
      eligibility: 'Women entrepreneurs starting greenfield micro or manufacturing enterprises.',
      link: 'https://www.standupmitra.in'
    },
    {
      id: 'sch-3',
      title: 'PMEGP (Prime Minister Employment Generation Programme)',
      ministry: 'MSME',
      subsidyAmount: 'Up to 35% Capital Subsidy',
      category: 'Self-Employment Generation',
      eligibility: 'Individuals above 18 years establishing manufacturing or service units.',
      link: 'https://www.kviconline.gov.in'
    }
  ];
}
