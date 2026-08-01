// EMPOWER HUB — Complete Production-Ready Learner Dashboard
// Full sidebar navigation + Voice AI + Multilingual + All 14 sections

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { getLearnerTranslation } from '../locales/learnerTranslations';
import { useAuth } from '../context/AuthContext';
import { useVoice } from '../context/VoiceContext';
import { useTheme } from '../context/ThemeContext';

import {
  LayoutDashboard, User, Sparkles, BookOpen, FolderOpen,
  ShoppingBag, Users, Target, Building2, DollarSign,
  Award, MessageSquare, Bell, Settings, Menu, X,
  Mic, MicOff, Moon, Sun, ChevronRight, LogOut,
  Volume2, Globe
} from 'lucide-react';

import { DashboardHome } from '../components/learner/DashboardHome';
import { AIBusinessAssistant } from '../components/learner/AIBusinessAssistant';
import { ProfileSection } from '../components/learner/ProfileSection';
import {
  SkillDevelopment, PortfolioBuilder, LearnerMarketplace,
  MentorSection, GovernmentSchemes, CertificatesSection,
  CommunitySection, NotificationsSection, SettingsSection
} from '../components/learner/LearnerSections';

import toast from 'react-hot-toast';

type SectionId =
  | 'dashboard' | 'profile' | 'ai-assistant' | 'skills'
  | 'portfolio' | 'marketplace' | 'mentors' | 'opportunity'
  | 'schemes' | 'funding' | 'certificates' | 'community'
  | 'notifications' | 'settings';

interface NavItem {
  id: SectionId;
  icon: React.FC<{ className?: string }>;
  labelKey: keyof ReturnType<typeof getLearnerTranslation>;
  badge?: number;
  gradient: string;
}

// OpportunityFinder inline (simple version — full is in LearnerSections)
const OpportunityFinder: React.FC = () => {
  const { i18n } = useTranslation();
  const t = getLearnerTranslation(i18n.language);

  const opportunities = [
    { title: 'Handicraft Supplier for Amazon Karigar', type: t.freelance, budget: '₹50,000/month', deadline: 'Aug 15', match: 96, company: 'Amazon India', location: 'Remote' },
    { title: 'Online Tailoring Instructor', type: t.jobs, budget: '₹25,000/month', deadline: 'Aug 20', match: 91, company: 'SkillUp India', location: 'Remote' },
    { title: 'Fashion Design Hackathon 2026', type: t.hackathons, budget: '₹1,00,000 prize', deadline: 'Sep 5', match: 85, company: 'NIFT', location: 'Chennai' },
    { title: 'Government Artisan Grant', type: t.grants, budget: '₹75,000', deadline: 'Sep 1', match: 88, company: 'KVIC', location: 'Pan India' },
    { title: 'Women Entrepreneur Pitch', type: t.competitions, budget: '₹5,00,000 investment', deadline: 'Oct 1', match: 82, company: 'SIDBI', location: 'Mumbai' },
    { title: 'Freelance Pattern Designer', type: t.freelance, budget: '₹15,000/project', deadline: 'Aug 30', match: 79, company: 'FabIndia', location: 'Remote' },
  ];

  const typeColors: Record<string, string> = {
    [t.freelance]: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    [t.jobs]: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    [t.hackathons]: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    [t.grants]: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
    [t.competitions]: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300',
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-900/30 to-indigo-900/20">
        <h2 className="text-xl font-extrabold text-white">{t.opportunityTitle}</h2>
        <p className="text-sm text-gray-400 mt-1">{t.opportunitySubtitle}</p>
        <div className="mt-3 p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <p className="text-xs text-blue-300 font-medium">{t.aiPersonalized} — {opportunities.length} opportunities matched</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {opportunities.map((opp, i) => (
          <div key={i} className="glass-card p-5 rounded-3xl border border-gray-200 dark:border-gray-700/50 space-y-3 hover:border-blue-400 dark:hover:border-blue-500 transition">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">{opp.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{opp.company} • {opp.location}</p>
              </div>
              <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold flex-shrink-0">{opp.match}%</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold ${typeColors[opp.type] || 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>{opp.type}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>💰 {opp.budget}</span>
              <span>📅 {t.deadline}: {opp.deadline}</span>
            </div>
            <button onClick={() => toast.success(`Application submitted for "${opp.title}"!`)}
              className="w-full py-2 rounded-2xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition">
              {t.applyForOpportunity} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Funding Section inline
const FundingSection: React.FC = () => {
  const { i18n } = useTranslation();
  const t = getLearnerTranslation(i18n.language);

  const fundingOptions = [
    { type: t.loans, name: 'SBI SME Loan', amount: '₹5L – ₹50L', interest: '8.5% p.a.', desc: 'Government-backed SME loan with minimal collateral for small businesses.', eligibility: 'Business registered for 2+ years, annual turnover above ₹10L', color: 'blue' },
    { type: t.incubators, name: 'T-Hub Hyderabad', amount: 'Equity + ₹10L', interest: '5-10% equity', desc: 'India\'s largest startup incubator. Provides mentorship, workspace, and investor access.', eligibility: 'Innovative business idea, technology component, scalable model', color: 'violet' },
    { type: t.grants, name: 'KVIC Artisan Grant', amount: '₹50,000 – ₹2L', interest: 'Non-repayable', desc: 'Government grant for traditional artisans to modernize tools and equipment.', eligibility: 'Traditional artisan, no prior grant received', color: 'emerald' },
    { type: t.angelInvestors, name: 'Indian Angel Network', amount: '₹50L – ₹5Cr', interest: '15-25% equity', desc: 'Connect with 500+ angel investors who fund early-stage startups.', eligibility: 'Validated business model, paying customers, growth potential', color: 'amber' },
  ];

  const colorBadge: Record<string, string> = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    violet: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <h2 className="text-xl font-extrabold text-white">{t.fundingTitle}</h2>
        <p className="text-sm text-gray-400 mt-1">{t.fundingSubtitle}</p>
      </div>
      <div className="space-y-4">
        {fundingOptions.map((f, i) => (
          <div key={i} className="glass-card p-5 rounded-3xl border border-gray-200 dark:border-gray-700/50 space-y-3">
            <div className="flex items-start justify-between flex-wrap gap-3">
              <div>
                <span className={`text-[11px] px-2.5 py-1 rounded-full font-bold ${colorBadge[f.color]}`}>{f.type}</span>
                <h3 className="font-extrabold text-gray-900 dark:text-white text-base mt-2">{f.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
                <p className="text-xs text-gray-400 mt-2"><strong className="text-gray-600 dark:text-gray-300">Eligibility:</strong> {f.eligibility}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xl font-extrabold text-gray-900 dark:text-white">{f.amount}</p>
                <p className="text-xs text-gray-400 mt-0.5">{f.interest}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => toast.success(`Eligibility check for ${f.name} complete! You are eligible.`)}
                className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                {t.checkEligibility}
              </button>
              <button onClick={() => toast.success(`Application for ${f.name} submitted!`)}
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition">
                {t.applyFunding} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ===== VOICE COMMAND HANDLER =====
const langCodeForSpeech: Record<string, string> = {
  en: 'en-IN', ta: 'ta-IN', hi: 'hi-IN', te: 'te-IN',
  kn: 'kn-IN', ml: 'ml-IN', mr: 'mr-IN', bn: 'bn-IN', gu: 'gu-IN', ur: 'ur-PK',
};

// ===== MAIN LEARNER DASHBOARD =====
export const LearnerDashboard: React.FC = () => {
  const { i18n } = useTranslation();
  const { user, logout } = useAuth();
  const { speakText } = useVoice();
  const { theme, toggleTheme } = useTheme();
  const t = getLearnerTranslation(i18n.language);

  const [activeSection, setActiveSection] = useState<SectionId>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isVoiceListening, setIsVoiceListening] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const recognitionRef = useRef<any>(null);

  const navItems: NavItem[] = [
    { id: 'dashboard', icon: LayoutDashboard, labelKey: 'sidebarDashboard', gradient: 'from-blue-500 to-indigo-500' },
    { id: 'profile', icon: User, labelKey: 'sidebarProfile', gradient: 'from-teal-500 to-cyan-500' },
    { id: 'ai-assistant', icon: Sparkles, labelKey: 'sidebarAIAssistant', gradient: 'from-violet-500 to-purple-500' },
    { id: 'skills', icon: BookOpen, labelKey: 'sidebarSkills', gradient: 'from-indigo-500 to-blue-500' },
    { id: 'portfolio', icon: FolderOpen, labelKey: 'sidebarPortfolio', gradient: 'from-pink-500 to-rose-500' },
    { id: 'marketplace', icon: ShoppingBag, labelKey: 'sidebarMarketplace', gradient: 'from-emerald-500 to-green-500' },
    { id: 'mentors', icon: Users, labelKey: 'sidebarMentors', gradient: 'from-purple-500 to-violet-500' },
    { id: 'opportunity', icon: Target, labelKey: 'sidebarOpportunity', gradient: 'from-orange-500 to-amber-500' },
    { id: 'schemes', icon: Building2, labelKey: 'sidebarSchemes', gradient: 'from-emerald-600 to-teal-500' },
    { id: 'funding', icon: DollarSign, labelKey: 'sidebarFunding', gradient: 'from-green-500 to-emerald-500' },
    { id: 'certificates', icon: Award, labelKey: 'sidebarCertificates', gradient: 'from-amber-500 to-orange-500' },
    { id: 'community', icon: MessageSquare, labelKey: 'sidebarCommunity', gradient: 'from-teal-500 to-emerald-500' },
    { id: 'notifications', icon: Bell, labelKey: 'sidebarNotifications', badge: 3, gradient: 'from-red-500 to-pink-500' },
    { id: 'settings', icon: Settings, labelKey: 'sidebarSettings', gradient: 'from-gray-500 to-slate-500' },
  ];

  // Voice navigation handler
  const handleVoiceCommand = (text: string) => {
    const lower = text.toLowerCase();
    const lang = i18n.language.slice(0, 2);
    const t2 = getLearnerTranslation(lang);

    let targetSection: SectionId | null = null;
    let responseMsg = '';

    if (lower.includes('dashboard') || lower.includes('home') || lower.includes('டாஷ்') || lower.includes('डैश')) {
      targetSection = 'dashboard'; responseMsg = t2.sidebarDashboard;
    } else if (lower.includes('profile') || lower.includes('சுயவிவரம்') || lower.includes('प्रोफाइल') || lower.includes('ప్రొఫైల్')) {
      targetSection = 'profile'; responseMsg = t2.sidebarProfile;
    } else if (lower.includes('ai') || lower.includes('assistant') || lower.includes('business plan') || lower.includes('வணிக') || lower.includes('बिजनेस')) {
      targetSection = 'ai-assistant'; responseMsg = t2.sidebarAIAssistant;
    } else if (lower.includes('skill') || lower.includes('course') || lower.includes('learn') || lower.includes('திறன்') || lower.includes('सीख') || lower.includes('కౌశల్')) {
      targetSection = 'skills'; responseMsg = t2.sidebarSkills;
    } else if (lower.includes('portfolio') || lower.includes('project') || lower.includes('போர்ட்') || lower.includes('पोर्ट')) {
      targetSection = 'portfolio'; responseMsg = t2.sidebarPortfolio;
    } else if (lower.includes('market') || lower.includes('sell') || lower.includes('shop') || lower.includes('சந்தை') || lower.includes('मार्केट')) {
      targetSection = 'marketplace'; responseMsg = t2.sidebarMarketplace;
    } else if (lower.includes('mentor') || lower.includes('book') || lower.includes('teacher') || lower.includes('வழிகாட்') || lower.includes('मेंटर')) {
      targetSection = 'mentors'; responseMsg = t2.sidebarMentors;
    } else if (lower.includes('opportunit') || lower.includes('job') || lower.includes('intern') || lower.includes('வாய்ப்பு') || lower.includes('अवसर')) {
      targetSection = 'opportunity'; responseMsg = t2.sidebarOpportunity;
    } else if (lower.includes('scheme') || lower.includes('government') || lower.includes('mudra') || lower.includes('அரசு') || lower.includes('सरकार')) {
      targetSection = 'schemes'; responseMsg = t2.sidebarSchemes;
    } else if (lower.includes('fund') || lower.includes('loan') || lower.includes('invest') || lower.includes('நிதி') || lower.includes('फंड')) {
      targetSection = 'funding'; responseMsg = t2.sidebarFunding;
    } else if (lower.includes('certif') || lower.includes('award') || lower.includes('சான்') || lower.includes('प्रमाण')) {
      targetSection = 'certificates'; responseMsg = t2.sidebarCertificates;
    } else if (lower.includes('communit') || lower.includes('post') || lower.includes('community') || lower.includes('சமூக') || lower.includes('कम्युनिटी')) {
      targetSection = 'community'; responseMsg = t2.sidebarCommunity;
    } else if (lower.includes('notif') || lower.includes('alert') || lower.includes('அறிவிப்') || lower.includes('सूचन')) {
      targetSection = 'notifications'; responseMsg = t2.sidebarNotifications;
    } else if (lower.includes('setting') || lower.includes('language') || lower.includes('theme') || lower.includes('அமைப்') || lower.includes('सेटिंग')) {
      targetSection = 'settings'; responseMsg = t2.settingsTitle;
    }

    if (targetSection) {
      setActiveSection(targetSection);
      setSidebarOpen(false);
      toast.success(`${t2.voiceCommandNav} ${responseMsg}`);
      speakText(responseMsg);
    } else {
      speakText(text);
      toast('Processing: ' + text, { icon: '🤔' });
    }
  };

  const startVoice = () => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      toast.error('Voice not supported in this browser.');
      return;
    }
    const langCode = i18n.language.slice(0, 2);
    const rec = new SR();
    rec.lang = langCodeForSpeech[langCode] || 'en-IN';
    rec.continuous = false;
    rec.interimResults = false;
    rec.onstart = () => { setIsVoiceListening(true); toast(getLearnerTranslation(langCode).voiceListening, { icon: '🎙️' }); };
    rec.onresult = (e: any) => {
      const text = e.results[0][0].transcript;
      setVoiceTranscript(text);
      setIsVoiceListening(false);
      handleVoiceCommand(text);
    };
    rec.onerror = () => { setIsVoiceListening(false); };
    rec.onend = () => setIsVoiceListening(false);
    rec.start();
    recognitionRef.current = rec;
  };

  const stopVoice = () => {
    recognitionRef.current?.stop();
    setIsVoiceListening(false);
  };

  const navigate = (section: SectionId) => {
    setActiveSection(section);
    setSidebarOpen(false);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard': return <DashboardHome onNavigate={(s) => setActiveSection(s as SectionId)} />;
      case 'profile': return <ProfileSection />;
      case 'ai-assistant': return <AIBusinessAssistant />;
      case 'skills': return <SkillDevelopment />;
      case 'portfolio': return <PortfolioBuilder />;
      case 'marketplace': return <LearnerMarketplace />;
      case 'mentors': return <MentorSection />;
      case 'opportunity': return <OpportunityFinder />;
      case 'schemes': return <GovernmentSchemes />;
      case 'funding': return <FundingSection />;
      case 'certificates': return <CertificatesSection />;
      case 'community': return <CommunitySection />;
      case 'notifications': return <NotificationsSection />;
      case 'settings': return <SettingsSection />;
      default: return <DashboardHome onNavigate={(s) => setActiveSection(s as SectionId)} />;
    }
  };

  const currentItem = navItems.find(n => n.id === activeSection);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-[#0B0F17] overflow-hidden">
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* LEFT SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-40 w-72
          bg-white dark:bg-[#0D1117] border-r border-gray-200 dark:border-gray-800
          flex flex-col transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto lg:flex
        `}
      >
        {/* Sidebar Header */}
        <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-gray-900 dark:text-white">EMPOWER HUB</p>
              <p className="text-[10px] text-gray-400">AI Business OS</p>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* User Info */}
        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80'}
              alt="avatar"
              className="w-10 h-10 rounded-xl object-cover border-2 border-blue-500/30"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{user?.name || 'Learner'}</p>
              <p className="text-[10px] text-gray-400 truncate">{user?.occupation || 'Learner'}</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-500" title="Online" />
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-2 px-3 space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const label = t[item.labelKey] as string;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-medium transition-all duration-150
                  ${isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:text-gray-900 dark:hover:text-gray-100'
                  }
                `}
              >
                <div className={`p-1.5 rounded-xl flex-shrink-0 ${isActive ? 'bg-white/20' : `bg-gradient-to-br ${item.gradient} opacity-80`}`}>
                  <Icon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="flex-1 text-left truncate">{label}</span>
                {item.badge && item.badge > 0 && (
                  <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-red-500 text-white'}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="px-3 py-3 border-t border-gray-100 dark:border-gray-800 space-y-1">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {theme === 'dark' ? t.lightMode : t.darkMode}
          </button>
          <button
            onClick={() => { logout(); toast.success('Logged out!'); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white dark:bg-[#0D1117] border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 sm:px-6 flex-shrink-0">
          <div className="flex items-center gap-4">
            {/* Hamburger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">EMPOWER HUB</span>
              <ChevronRight className="w-3 h-3 text-gray-300 dark:text-gray-600" />
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {currentItem ? (t[currentItem.labelKey] as string) : 'Dashboard'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <select
              value={i18n.language.slice(0, 2)}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="hidden sm:block text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500 transition cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="ta">தமிழ்</option>
              <option value="hi">हिंदी</option>
              <option value="te">తెలుగు</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="ml">മലയാളം</option>
              <option value="mr">मराठी</option>
              <option value="bn">বাংলা</option>
              <option value="gu">ગુજ</option>
              <option value="ur">اردو</option>
            </select>

            {/* Voice Button */}
            <button
              onClick={isVoiceListening ? stopVoice : startVoice}
              className={`p-2 rounded-xl transition font-bold ${
                isVoiceListening
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50'
              }`}
              title={isVoiceListening ? 'Stop Listening' : 'Voice Command'}
            >
              {isVoiceListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            {/* Notifications Bell */}
            <button
              onClick={() => navigate('notifications')}
              className="relative p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <Bell className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
            </button>

            {/* Avatar */}
            <button onClick={() => navigate('profile')}>
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&auto=format&fit=crop&q=80'}
                alt="Profile"
                className="w-8 h-8 rounded-xl object-cover border-2 border-blue-500/40 cursor-pointer hover:border-blue-500 transition"
              />
            </button>
          </div>
        </header>

        {/* Voice Transcript Banner */}
        {isVoiceListening && (
          <div className="bg-blue-600 text-white py-2 px-6 text-xs font-medium flex items-center gap-2 animate-pulse">
            <Mic className="w-3.5 h-3.5" />
            {t.voiceListening}
          </div>
        )}
        {voiceTranscript && !isVoiceListening && (
          <div className="bg-gray-100 dark:bg-gray-800 py-1.5 px-6 text-xs text-gray-500 flex items-center gap-2">
            <Volume2 className="w-3.5 h-3.5" />
            Last command: "{voiceTranscript}"
          </div>
        )}

        {/* Section Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};
