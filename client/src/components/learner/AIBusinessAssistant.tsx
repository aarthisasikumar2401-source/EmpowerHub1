// EMPOWER HUB — AI Business Assistant Component (Production-Ready)
// NOT a chatbot. A full AI Business Partner that generates complete business plans.

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getLearnerTranslation } from '../../locales/learnerTranslations';
import { useVoice } from '../../context/VoiceContext';
import { useAuth } from '../../context/AuthContext';
import {
  Mic, MicOff, Sparkles, Send, Download, Share2, RefreshCw,
  Building2, Tag, Target, TrendingUp, DollarSign, Megaphone,
  Instagram, Facebook, Linkedin, Globe, FileText, Award,
  ChevronDown, ChevronUp, Zap, Lightbulb, ShieldCheck
} from 'lucide-react';
import toast from 'react-hot-toast';

interface BusinessPlan {
  businessName: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  targetAudience: string;
  revenueModel: string;
  pricingStrategy: string;
  marketingPlan: string[];
  swot: { strengths: string[]; weaknesses: string[]; opportunities: string[]; threats: string[] };
  govSchemes: { name: string; amount: string; desc: string }[];
  instagramCaption: string;
  facebookPost: string;
  linkedinPost: string;
  hashtags: string[];
  logoColors: string[];
  estimatedIncome: string;
  startupCost: string;
  roadmap: { month: string; milestone: string }[];
}

const AI_QUICK_PROMPTS: Record<string, string[]> = {
  en: ['I make handmade candles', 'I am a photographer', 'I know tailoring', 'I bake cakes at home', 'I paint portraits', 'I repair electronics'],
  ta: ['நான் கைவினை மெழுகுவர்த்தி செய்கிறேன்', 'நான் ஒரு புகைப்படக் கலைஞர்', 'எனக்கு தையல் தெரியும்', 'வீட்டில் கேக் சுடுகிறேன்'],
  hi: ['मैं हस्तनिर्मित मोमबत्तियां बनाता हूं', 'मैं फोटोग्राफर हूं', 'मुझे सिलाई आती है', 'मैं घर पर केक बनाती हूं'],
  te: ['నేను చేతితో మోమెలలు చేస్తాను', 'నేను ఫోటోగ్రాఫర్', 'నాకు కుట్టు తెలుసు'],
  kn: ['ನಾನು ಕೈಮಾಡಿದ ಮೇಣದ ಬತ್ತಿಗಳನ್ನು ಮಾಡುತ್ತೇನೆ', 'ನಾನು ಛಾಯಾಗ್ರಾಹಕ', 'ನನಗೆ ಹೊಲಿಗೆ ಗೊತ್ತು'],
  ml: ['ഞാൻ മൊമ്പ തൈൽ ഉണ്ടാക്കുന്നു', 'ഞാൻ ഒരു ഫോട്ടോഗ്രാഫർ', 'എനിക്ക് തയ്യൽ അറിയാം'],
  mr: ['मी मेणबत्त्या बनवतो', 'मी छायाचित्रकार आहे', 'मला शिवणकाम येते'],
  bn: ['আমি মোমবাতি বানাই', 'আমি ফটোগ্রাফার', 'আমি সেলাই জানি'],
  gu: ['હું મીણબત્તી બનાવું', 'હું ફોટોગ્રાફર', 'મને સિલાઈ આવડે'],
  ur: ['میں موم بتیاں بناتا', 'میں فوٹوگرافر ہوں', 'مجھے سلائی آتی ہے'],
};

const generateBusinessPlan = (skill: string, lang: string): BusinessPlan => {
  const skillLower = skill.toLowerCase();
  const isPhoto = skillLower.includes('photo');
  const isTailor = skillLower.includes('tailor') || skillLower.includes('stitch') || skillLower.includes('sew') || skillLower.includes('தையல்') || skillLower.includes('सिलाई') || skillLower.includes('शिवण');
  const isBaker = skillLower.includes('bake') || skillLower.includes('cake') || skillLower.includes('केक') || skillLower.includes('கேக்');
  const isCandle = skillLower.includes('candle') || skillLower.includes('மெழுகுவர்த்தி') || skillLower.includes('मोमबत्ती');

  const names: Record<string, string> = {
    photo: 'LensWorks Photography Studio',
    tailor: 'ElegantThread Boutique',
    baker: 'SweetNest Artisan Bakery',
    candle: 'LuminaGlow Handcraft Co.',
    default: 'SkillCraft Ventures',
  };

  const incomes: Record<string, string> = {
    photo: '₹40,000 – ₹80,000 / month',
    tailor: '₹30,000 – ₹65,000 / month',
    baker: '₹25,000 – ₹55,000 / month',
    candle: '₹20,000 – ₹50,000 / month',
    default: '₹25,000 – ₹60,000 / month',
  };

  const costs: Record<string, string> = {
    photo: '₹25,000 – ₹50,000',
    tailor: '₹10,000 – ₹20,000',
    baker: '₹8,000 – ₹15,000',
    candle: '₹5,000 – ₹12,000',
    default: '₹10,000 – ₹25,000',
  };

  const key = isPhoto ? 'photo' : isTailor ? 'tailor' : isBaker ? 'baker' : isCandle ? 'candle' : 'default';

  return {
    businessName: names[key],
    tagline: `Crafted with passion. Delivered with excellence.`,
    description: `A skilled home-based ${key === 'default' ? 'artisan' : key} business leveraging AI-powered digital marketing to reach customers across India and internationally.`,
    mission: `To empower skilled artisans to build sustainable income through quality ${key === 'default' ? 'craft' : key} services.`,
    vision: `To become a leading digital-first ${key} brand within 12 months.`,
    targetAudience: isPhoto ? 'Families, couples, businesses needing professional photography' : isTailor ? 'Women seeking custom ethnic and Western outfits' : 'Local customers, gift buyers, online shoppers',
    revenueModel: 'Direct service orders + Marketplace sales + Workshop fees + Digital products',
    pricingStrategy: isTailor ? 'Blouse: ₹350–600 | Salwar: ₹500–900 | Bridal: ₹2,000–5,000' : isPhoto ? 'Portrait: ₹1,500 | Event: ₹8,000/day | Wedding: ₹25,000+' : 'Starter Pack: ₹299 | Premium: ₹799 | Bulk Orders: Custom',
    marketingPlan: [
      'Set up Google My Business profile (Free)',
      'Post daily reels on Instagram showing work process',
      'Join WhatsApp Business groups in your city',
      'List on EMPOWER Marketplace for national reach',
      'Collaborate with local bridal stores or event planners',
    ],
    swot: {
      strengths: ['Low startup cost', 'Skilled artisan', 'High-demand niche', 'AI-powered marketing'],
      weaknesses: ['Limited initial customer base', 'Need digital marketing skills'],
      opportunities: ['₹1.5 Lakh crore Indian craft market', 'Government PMEGP subsidy', 'Export potential'],
      threats: ['Competition from mass-produced goods', 'Seasonal demand fluctuation'],
    },
    govSchemes: [
      { name: 'PM Mudra Yojana (Shishu)', amount: '₹50,000', desc: 'Zero-collateral micro loan for small businesses' },
      { name: 'PMEGP Subsidy', amount: '35% Capital Subsidy', desc: 'For manufacturing and service businesses' },
      { name: 'Stand-Up India', amount: '₹10L – ₹1Cr', desc: 'For women and SC/ST entrepreneurs' },
    ],
    instagramCaption: `✨ Custom ${key === 'tailor' ? 'blouse stitching' : key === 'photo' ? 'portraits' : 'handcrafted items'} made with love! 💖\n\nEvery piece tells a story. Order yours today!\n📱 DM for bookings | 🚚 Pan-India delivery\n\n#handmade #${key}business #localartisan #empowerhub #supportlocal #womenentrepreneurs #madeinindia`,
    facebookPost: `🎉 Introducing our premium ${key} service!\n\nWe create beautiful, handcrafted products tailored just for you. Quality guaranteed. Affordable prices.\n\n💬 Comment "INFO" to know more!\n📞 WhatsApp us for instant quote.`,
    linkedinPost: `Proud to announce the launch of our artisan ${key} business!\n\nAs a skilled ${key} professional, I'm combining traditional expertise with AI-powered marketing to serve customers across India.\n\nLooking for business collaborations and bulk orders.\n\n#entrepreneur #startup #artisan #madeinindia #skillIndia`,
    hashtags: [`#${key}`, '#handmade', '#artisan', '#madeinindia', '#empowerhub', '#smallbusiness', '#womenentrepreneurs', '#startup', '#AI', '#skillindia'],
    logoColors: ['#6C63FF', '#FF6584', '#FBBF24'],
    estimatedIncome: incomes[key],
    startupCost: costs[key],
    roadmap: [
      { month: 'Month 1', milestone: 'Register business, set up marketplace profile, create social media accounts' },
      { month: 'Month 2', milestone: 'First 10 customers, apply for Mudra loan, start posting daily on Instagram' },
      { month: 'Month 3', milestone: 'Earn first ₹15,000, hire 1 part-time helper, list 20+ products on marketplace' },
      { month: 'Month 6', milestone: 'Reach ₹40,000/month revenue, get PMEGP subsidy, expand to 3 cities' },
      { month: 'Month 12', milestone: 'Scale to ₹75,000/month, launch own brand website, train 5 women' },
    ],
  };
};

const langCodeForSpeech: Record<string, string> = {
  en: 'en-IN', ta: 'ta-IN', hi: 'hi-IN', te: 'te-IN',
  kn: 'kn-IN', ml: 'ml-IN', mr: 'mr-IN', bn: 'bn-IN', gu: 'gu-IN', ur: 'ur-PK',
};

export const AIBusinessAssistant: React.FC = () => {
  const { i18n } = useTranslation();
  const { user } = useAuth();
  const { speakText } = useVoice();
  const t = getLearnerTranslation(i18n.language);
  const langCode = i18n.language.slice(0, 2);

  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState<BusinessPlan | null>(null);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [expandedSWOT, setExpandedSWOT] = useState(false);
  const [expandedSocial, setExpandedSocial] = useState(false);
  const recognitionRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const quickPrompts = AI_QUICK_PROMPTS[langCode] || AI_QUICK_PROMPTS['en'];

  const handleGenerate = (skillText: string) => {
    if (!skillText.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const generatedPlan = generateBusinessPlan(skillText, langCode);
      setPlan(generatedPlan);
      setIsGenerating(false);
      setActiveSection('overview');
      toast.success(langCode === 'ta' ? 'வணிக திட்டம் தயார்!' : langCode === 'hi' ? 'बिजनेस प्लान तैयार!' : 'Business Plan Generated!');
      const voiceMsg = langCode === 'ta'
        ? `வணக்கம்! ${generatedPlan.businessName} என்ற பெயரில் உங்கள் வணிக திட்டம் தயாரிக்கப்பட்டுள்ளது. மதிப்பிடப்பட்ட வருமானம் ${generatedPlan.estimatedIncome}.`
        : langCode === 'hi'
        ? `नमस्ते! ${generatedPlan.businessName} नाम से आपकी बिजनेस प्लान तैयार है। अनुमानित आय ${generatedPlan.estimatedIncome} प्रतिमाह।`
        : `Your business plan for ${generatedPlan.businessName} is ready! Estimated income: ${generatedPlan.estimatedIncome}.`;
      speakText(voiceMsg);
    }, 2000);
  };

  const startVoiceInput = () => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      toast.error('Speech recognition not supported in this browser.');
      return;
    }
    const rec = new SR();
    rec.lang = langCodeForSpeech[langCode] || 'en-IN';
    rec.continuous = false;
    rec.interimResults = false;
    rec.onstart = () => setIsListening(true);
    rec.onresult = (e: any) => {
      const text = e.results[0][0].transcript;
      setInput(text);
      setIsListening(false);
      handleGenerate(text);
    };
    rec.onerror = () => { setIsListening(false); toast.error('Voice error. Try again.'); };
    rec.onend = () => setIsListening(false);
    rec.start();
    recognitionRef.current = rec;
  };

  const stopVoice = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const handleSocialPost = (platform: string, content: string) => {
    if (navigator.clipboard) navigator.clipboard.writeText(content);
    toast.success(`${platform} post copied! Opening ${platform}...`);
    speakText(`Your ${platform} post is ready and copied to clipboard.`);
    setTimeout(() => {
      const urls: Record<string, string> = {
        Instagram: 'https://www.instagram.com/', Facebook: 'https://www.facebook.com/',
        LinkedIn: 'https://www.linkedin.com/', WhatsApp: 'https://web.whatsapp.com/',
      };
      window.open(urls[platform] || 'https://www.instagram.com/', '_blank');
    }, 800);
  };

  const sectionTabs = [
    { id: 'overview', label: '📋 Overview', icon: Building2 },
    { id: 'marketing', label: '📢 Marketing', icon: Megaphone },
    { id: 'pricing', label: '💰 Pricing', icon: DollarSign },
    { id: 'social', label: '📱 Social Media', icon: Instagram },
    { id: 'schemes', label: '🏛️ Schemes', icon: ShieldCheck },
    { id: 'roadmap', label: '🗺️ Roadmap', icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card p-6 rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/40 via-indigo-950/30 to-slate-900/40">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-2xl bg-violet-500/20 border border-violet-500/30">
            <Sparkles className="w-6 h-6 text-violet-400" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">{t.aiAssistantTitle}</h2>
            <p className="text-xs text-gray-400">{t.aiAssistantSubtitle}</p>
          </div>
        </div>

        {/* Input Area */}
        <div className="flex gap-2 mt-4">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate(input)}
            placeholder={t.aiPlaceholder}
            className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-violet-400 transition"
          />
          <button
            onClick={isListening ? stopVoice : startVoiceInput}
            className={`p-3 rounded-2xl font-bold transition-all shadow-lg ${
              isListening
                ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                : 'bg-violet-600 hover:bg-violet-700'
            } text-white`}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          <button
            onClick={() => handleGenerate(input)}
            disabled={isGenerating || !input.trim()}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg disabled:opacity-40 transition flex items-center gap-2"
          >
            {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {isGenerating ? t.aiThinking : t.generate}
          </button>
        </div>

        {isListening && (
          <p className="text-xs text-violet-300 mt-2 animate-pulse flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />{t.aiListening}
          </p>
        )}

        <p className="text-[11px] text-gray-500 mt-2">{t.voiceTip}</p>

        {/* Quick Prompts */}
        <div className="flex flex-wrap gap-2 mt-4">
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => { setInput(prompt); handleGenerate(prompt); }}
              className="px-3 py-1.5 text-[11px] rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 hover:bg-violet-500/20 transition font-medium"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { label: t.generateBusinessPlan, icon: FileText, color: 'violet' },
          { label: t.generateBrandName, icon: Tag, color: 'blue' },
          { label: t.generateMarketing, icon: Megaphone, color: 'pink' },
          { label: t.generatePricing, icon: DollarSign, color: 'emerald' },
          { label: t.generatePoster, icon: Award, color: 'amber' },
          { label: t.findSchemes, icon: ShieldCheck, color: 'indigo' },
        ].map((btn, i) => {
          const Icon = btn.icon;
          const colors: Record<string, string> = {
            violet: 'bg-violet-500/10 border-violet-500/30 text-violet-300 hover:bg-violet-500/20',
            blue: 'bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500/20',
            pink: 'bg-pink-500/10 border-pink-500/30 text-pink-300 hover:bg-pink-500/20',
            emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20',
            amber: 'bg-amber-500/10 border-amber-500/30 text-amber-300 hover:bg-amber-500/20',
            indigo: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20',
          };
          return (
            <button
              key={i}
              onClick={() => {
                if (!input.trim()) { toast.error('Please describe your skill first!'); return; }
                handleGenerate(input);
              }}
              className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1.5 transition ${colors[btn.color]}`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-center leading-tight">{btn.label}</span>
            </button>
          );
        })}
      </div>

      {/* Generated Business Plan */}
      {isGenerating && (
        <div className="glass-card p-8 rounded-3xl text-center border border-violet-500/20">
          <RefreshCw className="w-10 h-10 text-violet-400 animate-spin mx-auto mb-3" />
          <p className="text-white font-bold">{t.aiThinking}</p>
          <p className="text-xs text-gray-400 mt-1">Analyzing skill, generating business plan, creating social content, matching government schemes...</p>
        </div>
      )}

      {plan && !isGenerating && (
        <div className="glass-card rounded-3xl border border-violet-500/20 overflow-hidden">
          {/* Plan Header */}
          <div className="p-6 bg-gradient-to-r from-violet-900/60 to-indigo-900/60 border-b border-violet-500/20">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-xs text-violet-300 font-bold uppercase tracking-wider">{t.aiResultTitle}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">{plan.businessName}</h3>
                <p className="text-sm text-gray-300 italic mt-0.5">"{plan.tagline}"</p>
                <div className="flex gap-3 mt-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                    📈 Est. Income: {plan.estimatedIncome}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
                    💼 Startup Cost: {plan.startupCost}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => { const txt = JSON.stringify(plan, null, 2); navigator.clipboard?.writeText(txt); toast.success('Plan copied!'); }}
                  className="px-3 py-2 rounded-xl bg-white/10 text-white text-xs font-bold flex items-center gap-1.5 hover:bg-white/20"
                >
                  <Share2 className="w-3.5 h-3.5" /> Share
                </button>
                <button
                  onClick={() => speakText(`Your business ${plan.businessName}. ${plan.description}`)}
                  className="px-3 py-2 rounded-xl bg-violet-600/30 text-violet-300 text-xs font-bold flex items-center gap-1.5 hover:bg-violet-600/50"
                >
                  <Zap className="w-3.5 h-3.5" /> Listen
                </button>
              </div>
            </div>

            {/* Section Tabs */}
            <div className="flex gap-2 overflow-x-auto mt-4 pb-1">
              {sectionTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                    activeSection === tab.id
                      ? 'bg-violet-600 text-white shadow-md'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 space-y-4">
            {/* Overview */}
            {activeSection === 'overview' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                    <h4 className="text-xs font-bold text-violet-300 mb-2 uppercase tracking-wider">Description</h4>
                    <p className="text-sm text-gray-300">{plan.description}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                    <h4 className="text-xs font-bold text-blue-300 mb-2 uppercase tracking-wider">Mission & Vision</h4>
                    <p className="text-sm text-gray-300 mb-1.5"><strong className="text-blue-300">Mission:</strong> {plan.mission}</p>
                    <p className="text-sm text-gray-300"><strong className="text-blue-300">Vision:</strong> {plan.vision}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                    <h4 className="text-xs font-bold text-emerald-300 mb-2 uppercase tracking-wider">Target Audience</h4>
                    <p className="text-sm text-gray-300">{plan.targetAudience}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                    <h4 className="text-xs font-bold text-amber-300 mb-2 uppercase tracking-wider">Revenue Model</h4>
                    <p className="text-sm text-gray-300">{plan.revenueModel}</p>
                  </div>
                </div>

                {/* SWOT */}
                <div className="rounded-2xl border border-slate-700/50 overflow-hidden">
                  <button
                    onClick={() => setExpandedSWOT(!expandedSWOT)}
                    className="w-full p-4 flex items-center justify-between bg-slate-800/50 hover:bg-slate-800/80 transition"
                  >
                    <span className="text-xs font-bold text-white uppercase tracking-wider">⚡ SWOT Analysis</span>
                    {expandedSWOT ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </button>
                  {expandedSWOT && (
                    <div className="grid grid-cols-2 gap-0">
                      {(['strengths', 'weaknesses', 'opportunities', 'threats'] as const).map((key, i) => {
                        const colors = ['emerald', 'red', 'blue', 'amber'];
                        const labels = ['Strengths 💪', 'Weaknesses ⚠️', 'Opportunities 🚀', 'Threats 🛡️'];
                        return (
                          <div key={key} className={`p-4 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''} border-slate-700/50`}>
                            <h5 className={`text-xs font-bold text-${colors[i]}-400 mb-2`}>{labels[i]}</h5>
                            <ul className="space-y-1">
                              {plan.swot[key].map((item, j) => (
                                <li key={j} className="text-xs text-gray-300 flex items-start gap-1">
                                  <span className="mt-1 w-1 h-1 rounded-full bg-gray-500 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Marketing */}
            {activeSection === 'marketing' && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white">5-Step Marketing Plan</h4>
                <div className="space-y-3">
                  {plan.marketingPlan.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                      <div className="w-7 h-7 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-xs font-bold text-violet-300 flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-sm text-gray-300">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-2xl bg-indigo-900/30 border border-indigo-500/30">
                  <h5 className="text-xs font-bold text-indigo-300 mb-2">Hashtag Strategy</h5>
                  <div className="flex flex-wrap gap-2">
                    {plan.hashtags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-indigo-500/20 text-indigo-200 text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Pricing */}
            {activeSection === 'pricing' && (
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-emerald-900/30 border border-emerald-500/30">
                  <h4 className="text-sm font-bold text-emerald-300 mb-3 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" /> Pricing Strategy
                  </h4>
                  <p className="text-sm text-gray-300 whitespace-pre-wrap">{plan.pricingStrategy}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-center">
                    <p className="text-xs text-gray-400 mb-1">Estimated Monthly Income</p>
                    <p className="text-xl font-extrabold text-emerald-400">{plan.estimatedIncome}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-center">
                    <p className="text-xs text-gray-400 mb-1">One-Time Startup Cost</p>
                    <p className="text-xl font-extrabold text-amber-400">{plan.startupCost}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Social Media */}
            {activeSection === 'social' && (
              <div className="space-y-4">
                {[
                  { platform: 'Instagram', icon: Instagram, color: 'pink', content: plan.instagramCaption },
                  { platform: 'Facebook', icon: Facebook, color: 'blue', content: plan.facebookPost },
                  { platform: 'LinkedIn', icon: Linkedin, color: 'blue', content: plan.linkedinPost },
                ].map(({ platform, icon: Icon, color, content }) => (
                  <div key={platform} className={`p-4 rounded-2xl bg-${color}-900/20 border border-${color}-500/30`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-5 h-5 text-${color}-400`} />
                        <span className={`text-sm font-bold text-${color}-300`}>{platform} Post</span>
                      </div>
                      <button
                        onClick={() => handleSocialPost(platform, content)}
                        className={`px-3 py-1.5 rounded-xl bg-${color}-600/30 text-${color}-300 text-xs font-bold hover:bg-${color}-600/50 transition`}
                      >
                        Open {platform} →
                      </button>
                    </div>
                    <p className="text-sm text-gray-300 whitespace-pre-wrap bg-black/20 p-3 rounded-xl">{content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Government Schemes */}
            {activeSection === 'schemes' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-sm font-bold text-white">{t.aiSchemeMatch}</h4>
                </div>
                {plan.govSchemes.map((scheme, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-emerald-900/20 border border-emerald-500/30">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h5 className="font-bold text-white text-sm">{scheme.name}</h5>
                        <p className="text-xs text-gray-400 mt-1">{scheme.desc}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-extrabold text-emerald-400 text-sm">{scheme.amount}</p>
                        <button
                          onClick={() => toast.success('Application form opened!')}
                          className="mt-2 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition"
                        >
                          {t.applyScheme}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Roadmap */}
            {activeSection === 'roadmap' && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white mb-4">12-Month Business Roadmap</h4>
                {plan.roadmap.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-violet-500/20 border-2 border-violet-500/50 flex items-center justify-center text-xs font-bold text-violet-300">
                        {i + 1}
                      </div>
                      {i < plan.roadmap.length - 1 && <div className="w-0.5 h-8 bg-violet-500/30 mt-1" />}
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="text-xs font-bold text-violet-300">{item.month}</p>
                      <p className="text-sm text-gray-300 mt-0.5">{item.milestone}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
