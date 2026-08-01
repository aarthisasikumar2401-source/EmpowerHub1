// EMPOWER HUB - Comprehensive Learner Portal & 10-Feature Suite Page

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useVoice } from '../context/VoiceContext';
import { useTranslation } from 'react-i18next';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  UserCheck,
  ShoppingBag,
  Briefcase,
  DollarSign,
  Award,
  Bell,
  Settings,
  ArrowRight,
  CheckCircle2,
  Volume2,
  Download,
  Calendar,
  Plus,
  Search,
  Video,
  Star,
  Globe,
  MapPin,
  TrendingUp
} from 'lucide-react';
import toast from 'react-hot-toast';

export const LearnerPage: React.FC = () => {
  const { user } = useAuth();
  const { speakText } = useVoice();
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<'profile' | 'forge' | 'tutor' | 'mentors' | 'marketplace' | 'builder' | 'finance' | 'certs' | 'notifs' | 'settings'>('forge');

  // Feature 1: Registration & Profile State
  const [profileData, setProfileData] = useState({
    name: user?.name || 'Ananya Sharma',
    email: user?.email || 'ananya@example.com',
    language: 'Tamil (தமிழ்)',
    skills: 'Tailoring, Embroidery, Blouse Alteration',
    interests: 'Sustainable Fashion, Organic Soaps',
    education: 'Diploma in Textile Design',
    experience: '2 Years Home Stitching',
    location: 'Chennai, Tamil Nadu',
    budget: '₹15,000',
    careerGoals: 'Launch a Boutique and sell online via EMPOWER Marketplace'
  });

  // Feature 2: Opportunity Forge State
  const [forgeSkill, setForgeSkill] = useState('Tailoring & Stitching');
  const [forgeBudget, setForgeBudget] = useState('₹15,000');
  const [forgeLocation, setForgeLocation] = useState('Chennai, Tamil Nadu');
  const [forgeResult, setForgeResult] = useState<any | null>({
    title: 'Boutique & Custom Alteration Studio',
    estIncome: '₹35,000 - ₹65,000 / month',
    capital: '₹12,000 (Sewing machine & thread supplies)',
    ideas: [
      'Custom Blouse & Ethnic Wear Alterations',
      'Online Clothing Store on EMPOWER Marketplace',
      'Local Blouse Stitching Classes for Women'
    ],
    schemes: [
      'PM Mudra Shishu Scheme (₹50,000 Collateral-Free Loan)',
      'PMEGP 35% Capital Subsidy for Micro-Manufacturing'
    ]
  });

  const handleRunForge = (e: React.FormEvent) => {
    e.preventDefault();
    setForgeResult({
      title: `Custom ${forgeSkill} Studio`,
      estIncome: '₹40,000 - ₹70,000 / month',
      capital: forgeBudget,
      ideas: [
        `Online Store for ${forgeSkill}`,
        `Local Skill Workshops in ${forgeLocation}`,
        'Digital Service Marketplace Listings'
      ],
      schemes: [
        'PM Mudra Shishu Scheme (₹50,000 Collateral-Free Loan)',
        'Stand-Up India Scheme for Women Entrepreneurs'
      ]
    });
    toast.success('AI Opportunity Forge analyzed your profile!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-10">
      
      {/* Learner Header Banner with Official Logo */}
      <div className="glass-card p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-900/40 border border-blue-500/30 flex flex-wrap items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Empower Hub Logo" className="h-14 w-auto object-contain bg-white/10 p-1.5 rounded-xl" />
            <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-extrabold uppercase tracking-wider">
              Learner Portal & Skill Passport
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            From Talent to Empowerment
          </h1>
          <p className="text-xs text-gray-300 max-w-3xl leading-relaxed">
            <strong>Who is a Learner?</strong> Anyone who wants to learn a new skill, improve an existing skill, start a micro-business, find income opportunities, receive AI guidance, or connect with experienced mentors.
          </p>

          {/* Learner Persona Examples */}
          <div className="flex flex-wrap gap-2 text-[11px] font-bold text-amber-300 pt-1">
            <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">• College Students</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">• Homemakers</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">• Job Seekers</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">• Artisans</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">• Farmers</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">• Freelancers</span>
          </div>
        </div>

        <button
          onClick={() => speakText("Welcome to the Learner Portal. Explore your profile, AI Opportunity Forge, 24/7 AI Tutor, Human Mentor booking, Marketplace, and Financial Dashboard.")}
          className="px-4 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-lg flex items-center gap-2"
        >
          <Volume2 className="w-4 h-4" /> Listen Audio Overview
        </button>
      </div>

      {/* 10 Learner Features Navigation Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 text-xs font-bold">
        {[
          { id: 'forge', label: '1. AI Opportunity Forge', icon: Sparkles },
          { id: 'tutor', label: '2. 24/7 AI Tutor', icon: BookOpen },
          { id: 'mentors', label: '3. Human Mentor Booking', icon: UserCheck },
          { id: 'marketplace', label: '4. Marketplace', icon: ShoppingBag },
          { id: 'builder', label: '5. Business Builder', icon: Briefcase },
          { id: 'finance', label: '6. Financial Dashboard', icon: DollarSign },
          { id: 'certs', label: '7. Certificates & Badges', icon: Award },
          { id: 'profile', label: '8. Registration & Profile', icon: GraduationCap },
          { id: 'notifs', label: '9. Notifications', icon: Bell },
          { id: 'settings', label: '10. Settings', icon: Settings },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-2xl transition whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white font-extrabold shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500'
              }`}
            >
              <Icon className="w-4 h-4" /> {tab.label}
            </button>
          );
        })}
      </div>

      {/* Feature 1: Registration & Profile */}
      {activeTab === 'profile' && (
        <div className="glass-card p-8 rounded-3xl space-y-6 border border-blue-500/20 shadow-xl">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Learner Feature 1</span>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mt-1">Registration & Learner Profile</h2>
              <p className="text-xs text-gray-400">Personal details, 10 language preferences, skills, education, budget, and career goals.</p>
            </div>
            <button onClick={() => toast.success('Profile updated successfully!')} className="px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-md">
              Save Profile Changes
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-4">
              <div>
                <label className="block font-bold mb-1">Full Name</label>
                <input type="text" value={profileData.name} onChange={(e) => setProfileData({...profileData, name: e.target.value})} className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" />
              </div>
              <div>
                <label className="block font-bold mb-1">Language Preference (10 Languages)</label>
                <select value={profileData.language} onChange={(e) => setProfileData({...profileData, language: e.target.value})} className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                  <option value="Tamil (தமிழ்)">Tamil (தமிழ்)</option>
                  <option value="English">English</option>
                  <option value="Hindi (हिंदी)">Hindi (हिंदी)</option>
                  <option value="Telugu (తెలుగు)">Telugu (తెలుగు)</option>
                  <option value="Kannada (ಕನ್ನಡ)">Kannada (ಕನ್ನಡ)</option>
                  <option value="Malayalam (മലയാളം)">Malayalam (മലയാളം)</option>
                  <option value="Marathi (मराठी)">Marathi (मराठी)</option>
                  <option value="Gujarati (ગુજરાતી)">Gujarati (ગુજરાતી)</option>
                  <option value="Bengali (বাংলা)">Bengali (বাংলা)</option>
                  <option value="Urdu (اردو)">Urdu (اردو)</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-1">Current Skills</label>
                <input type="text" value={profileData.skills} onChange={(e) => setProfileData({...profileData, skills: e.target.value})} className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" />
              </div>
              <div>
                <label className="block font-bold mb-1">Location</label>
                <input type="text" value={profileData.location} onChange={(e) => setProfileData({...profileData, location: e.target.value})} className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-bold mb-1">Startup Budget</label>
                <input type="text" value={profileData.budget} onChange={(e) => setProfileData({...profileData, budget: e.target.value})} className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" />
              </div>
              <div>
                <label className="block font-bold mb-1">Education & Qualifications</label>
                <input type="text" value={profileData.education} onChange={(e) => setProfileData({...profileData, education: e.target.value})} className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" />
              </div>
              <div>
                <label className="block font-bold mb-1">Career Goals & Vision</label>
                <textarea rows={3} value={profileData.careerGoals} onChange={(e) => setProfileData({...profileData, careerGoals: e.target.value})} className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feature 2: AI Opportunity Forge */}
      {activeTab === 'forge' && (
        <div className="glass-card p-8 rounded-3xl space-y-6 border border-blue-500/20 shadow-xl">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Learner Feature 2</span>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mt-1">AI Opportunity Forge</h2>
              <p className="text-xs text-gray-400">AI analyzes your skills, interests, budget, and location to suggest micro-businesses, freelancing, and government schemes.</p>
            </div>
            <a href="/forge" className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md">Open Forge Page →</a>
          </div>

          <form onSubmit={handleRunForge} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold mb-1">Your Skill</label>
              <input type="text" value={forgeSkill} onChange={(e) => setForgeSkill(e.target.value)} className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" />
            </div>
            <div>
              <label className="block font-bold mb-1">Available Budget</label>
              <input type="text" value={forgeBudget} onChange={(e) => setForgeBudget(e.target.value)} className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" />
            </div>
            <div className="flex items-end">
              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md">
                Forge AI Business Plan →
              </button>
            </div>
          </form>

          {forgeResult && (
            <div className="p-6 rounded-2xl bg-blue-950/30 border border-blue-500/30 text-xs space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-base text-white">{forgeResult.title}</h3>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 font-bold rounded-full">Est. Income: {forgeResult.estIncome}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-blue-300">Recommended Micro-Business Ideas:</h4>
                  <ul className="space-y-1 text-gray-300">
                    {forgeResult.ideas.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-amber-300">Government Loan & Scheme Eligibility:</h4>
                  <ul className="space-y-1 text-gray-300">
                    {forgeResult.schemes.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Feature 3: 24/7 AI Tutor */}
      {activeTab === 'tutor' && (
        <div className="glass-card p-8 rounded-3xl space-y-6 border border-purple-500/20 shadow-xl">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-4">
            <div>
              <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">Learner Feature 3</span>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mt-1">24/7 AI Tutor</h2>
              <p className="text-xs text-gray-400">Step-by-step learning lessons, audio notes, quizzes, assignments, and progress tracking.</p>
            </div>
            <a href="/tutor" className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold shadow-md">Open AI Tutor →</a>
          </div>

          <div className="p-6 rounded-2xl bg-purple-950/30 border border-purple-500/30 text-xs space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-extrabold text-base text-purple-200">Digital Marketing & E-Commerce Masterclass</h3>
                <p className="text-gray-400 text-[11px]">Module 2 of 3: Product Photography, Social Selling & Pricing Formula</p>
              </div>
              <button onClick={() => speakText("Product photography, social selling, and pricing formulas are key steps to launch your boutique.")} className="px-3.5 py-2 bg-purple-600 text-white rounded-xl font-bold flex items-center gap-1.5">
                <Volume2 className="w-4 h-4" /> Listen Lesson
              </button>
            </div>

            <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
              <div className="bg-purple-500 h-full w-[66%]" />
            </div>
            <p className="text-[11px] text-gray-400">Course Progress: 66% Completed</p>
          </div>
        </div>
      )}

      {/* Feature 4: Human Mentor Booking */}
      {activeTab === 'mentors' && (
        <div className="glass-card p-8 rounded-3xl space-y-6 border border-emerald-500/20 shadow-xl">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Learner Feature 4</span>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mt-1">Human Mentor Booking</h2>
              <p className="text-xs text-gray-400">Search verified human mentors, view ratings, book 1-on-1 sessions, and join live video meetings.</p>
            </div>
            <a href="/mentor" className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md">View All Mentors →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" className="w-14 h-14 rounded-full object-cover border border-purple-500" />
                <div>
                  <h4 className="font-extrabold text-gray-900 dark:text-gray-100 text-sm">Priya Sundaram</h4>
                  <p className="text-gray-400 text-[11px]">Craft & Textile Specialist • 5.0 ★ (68 Reviews)</p>
                  <p className="text-emerald-400 font-bold text-[11px]">Rate: ₹599 / session</p>
                </div>
              </div>
              <button onClick={() => toast.success('1-on-1 Mentor Session Booked! Google Meet join link generated.')} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs shadow-md">
                Book Session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feature 5: Marketplace */}
      {activeTab === 'marketplace' && (
        <div className="glass-card p-8 rounded-3xl space-y-4 border border-blue-500/20">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Learner Feature 5</span>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mt-1">EMPOWER Artisan Marketplace</h2>
              <p className="text-xs text-gray-400">Buy and sell handmade crafts, apparel, digital templates, and local services.</p>
            </div>
            <a href="/marketplace" className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl text-xs shadow-md">Explore Marketplace →</a>
          </div>
        </div>
      )}

      {/* Feature 6: Business Builder */}
      {activeTab === 'builder' && (
        <div className="glass-card p-8 rounded-3xl space-y-4 border border-blue-500/20">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Learner Feature 6</span>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mt-1">AI Business Builder & Pricing Formula</h2>
              <p className="text-xs text-gray-400">AI business name generator, pricing calculator, and marketing strategy.</p>
            </div>
            <a href="/business-builder" className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl text-xs shadow-md">Open Business Builder →</a>
          </div>
        </div>
      )}

      {/* Feature 7: Financial Dashboard */}
      {activeTab === 'finance' && (
        <div className="glass-card p-8 rounded-3xl space-y-6 border border-emerald-500/20">
          <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Learner Feature 7</span>
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mt-1">Financial Dashboard & Wallet</h2>
            <p className="text-xs text-gray-400">Real-time income, sales, wallet balance, and payout history.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold">
            <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30">
              <span className="text-gray-400">Wallet Balance</span>
              <p className="text-2xl text-emerald-400 mt-1">₹3,450</p>
            </div>
            <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/30">
              <span className="text-gray-400">Monthly Sales</span>
              <p className="text-2xl text-blue-400 mt-1">₹35,000</p>
            </div>
            <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/30">
              <span className="text-gray-400">Marketplace Earnings</span>
              <p className="text-2xl text-purple-400 mt-1">₹18,200</p>
            </div>
            <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/30">
              <span className="text-gray-400">Pending Payouts</span>
              <p className="text-2xl text-amber-400 mt-1">₹2,800</p>
            </div>
          </div>
        </div>
      )}

      {/* Feature 8: Certificates */}
      {activeTab === 'certs' && (
        <div className="glass-card p-8 rounded-3xl space-y-6 border border-amber-500/20">
          <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Learner Feature 8</span>
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mt-1">Skill Certificates & Badges</h2>
            <p className="text-xs text-gray-400">Verified credentials downloadable as PDF certificates.</p>
          </div>

          <div className="p-5 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex justify-between items-center text-xs">
            <div>
              <h4 className="font-extrabold text-amber-300 text-sm">Certified Textile Design & Boutique Specialist</h4>
              <p className="text-gray-400 text-[11px]">Issued by EMPOWER HUB AI Engine • Score: 96%</p>
            </div>
            <button onClick={() => toast.success('Certificate PDF Downloaded!')} className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs shadow-md">
              Download PDF Certificate
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
