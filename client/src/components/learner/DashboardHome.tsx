// EMPOWER HUB — Learner Dashboard Home (Overview Widgets)

import React from 'react';
import { useTranslation } from 'react-i18next';
import { getLearnerTranslation } from '../../locales/learnerTranslations';
import { useAuth } from '../../context/AuthContext';
import { useVoice } from '../../context/VoiceContext';
import {
  TrendingUp, DollarSign, ShoppingBag, Users, Zap, Award,
  ArrowRight, Star, MapPin, Clock, BookOpen, CheckCircle2,
  Sparkles, AlertCircle, Bell, Target, BarChart2
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import toast from 'react-hot-toast';

interface DashboardHomeProps {
  onNavigate: (section: string) => void;
}

const earningsData = [
  { week: 'W1', earnings: 3200 },
  { week: 'W2', earnings: 5800 },
  { week: 'W3', earnings: 4200 },
  { week: 'W4', earnings: 7600 },
];

const mentorRecommendations = [
  {
    name: 'Priya Sundaram',
    expertise: 'Textile & Fashion Design',
    rating: 4.9, reviews: 124,
    rate: 599,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&auto=format&fit=crop&q=80',
    tags: ['Tailoring', 'Bridal Wear', 'E-Commerce'],
    aiMatch: 98,
  },
  {
    name: 'Dr. Meena Krishnan',
    expertise: 'Business Development & Marketing',
    rating: 4.8, reviews: 89,
    rate: 799,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&auto=format&fit=crop&q=80',
    tags: ['Startup Strategy', 'Digital Marketing', 'Funding'],
    aiMatch: 94,
  },
];

const opportunities = [
  { title: 'Handicraft Supplier — Amazon India', type: 'Business', budget: '₹50,000/month', deadline: 'Aug 15', match: 96 },
  { title: 'Online Tailoring Instructor — Udemy', type: 'Freelance', budget: '₹25,000', deadline: 'Aug 20', match: 91 },
  { title: 'Artisan Community Loan', type: 'Funding', budget: '₹2,00,000', deadline: 'Sep 1', match: 88 },
];

export const DashboardHome: React.FC<DashboardHomeProps> = ({ onNavigate }) => {
  const { i18n } = useTranslation();
  const { user } = useAuth();
  const { speakText } = useVoice();
  const t = getLearnerTranslation(i18n.language);

  const stats = [
    { label: t.walletBalance, value: `₹${user?.walletBalance?.toLocaleString('en-IN') || '3,450'}`, icon: DollarSign, color: 'emerald', change: '+₹1,200 this week' },
    { label: t.totalEarnings, value: '₹18,600', icon: TrendingUp, color: 'blue', change: '+32% this month' },
    { label: t.pendingOrders, value: '3', icon: ShoppingBag, color: 'amber', change: '2 new today' },
    { label: t.activeMentors, value: '2', icon: Users, color: 'violet', change: '1 session today' },
  ];

  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    violet: 'bg-violet-500/10 border-violet-500/30 text-violet-400',
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="glass-card p-6 rounded-3xl bg-gradient-to-r from-blue-900/40 via-violet-900/30 to-indigo-900/40 border border-blue-500/30">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm text-blue-300 font-medium">{t.welcomeBack},</p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {user?.name || 'Ananya Sharma'} 👋
            </h1>
            <p className="text-xs text-gray-400 mt-1.5">
              {user?.occupation || 'Aspiring Artisan & Entrepreneur'} • {user?.city}, {user?.state}
            </p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {(user?.skills || ['Tailoring', 'Handicrafts']).slice(0, 3).map((skill, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-medium border border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Completion */}
          <div className="min-w-[160px]">
            <div className="text-xs text-gray-400 mb-1">{t.profileCompletion}</div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-extrabold text-white">74%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full" style={{ width: '74%' }} />
            </div>
            <button
              onClick={() => onNavigate('profile')}
              className="mt-2 text-xs text-blue-400 hover:text-blue-300 font-medium"
            >
              {t.completeProfile} →
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className={`glass-card p-5 rounded-2xl border ${colorMap[stat.color].split(' ').slice(0,2).join(' ')}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-400 font-medium">{stat.label}</span>
                <div className={`p-2 rounded-xl ${colorMap[stat.color].split(' ').slice(0,2).join(' ')}`}>
                  <Icon className={`w-4 h-4 ${colorMap[stat.color].split(' ')[2]}`} />
                </div>
              </div>
              <p className="text-2xl font-extrabold text-white">{stat.value}</p>
              <p className={`text-[11px] mt-1 font-medium ${colorMap[stat.color].split(' ')[2]}`}>{stat.change}</p>
            </div>
          );
        })}
      </div>

      {/* AI Today's Suggestion */}
      <div className="glass-card p-5 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 to-orange-950/30">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-500/20 flex-shrink-0">
            <Sparkles className="w-5 h-5 text-amber-400" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white text-sm">{t.aiSuggestionTitle}</h3>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">AI</span>
            </div>
            <p className="text-xs text-gray-300 mt-1.5 leading-relaxed">{t.aiSuggestionDesc}</p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => onNavigate('ai-assistant')}
                className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-900 text-xs font-bold hover:bg-amber-400 transition"
              >
                {t.generate} Plan →
              </button>
              <button
                onClick={() => speakText(t.aiSuggestionDesc)}
                className="px-3 py-1.5 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition"
              >
                🔊 Listen
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Earnings Chart */}
        <div className="glass-card p-5 rounded-3xl border border-emerald-500/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-emerald-400" /> Weekly Earnings
            </h3>
            <button onClick={() => onNavigate('marketplace')} className="text-xs text-emerald-400 hover:text-emerald-300">{t.viewAll}</button>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={earningsData}>
              <defs>
                <linearGradient id="earningsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="week" tick={{ fill: '#9ca3af', fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#9ca3af', fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${v}`} />
              <Tooltip
                contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 12, fontSize: 11 }}
                formatter={(v: any) => [`₹${v}`, 'Earnings']}
              />
              <Area type="monotone" dataKey="earnings" stroke="#10b981" strokeWidth={2} fill="url(#earningsGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* AI Opportunities */}
        <div className="glass-card p-5 rounded-3xl border border-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-400" /> {t.aiPersonalized}
            </h3>
            <button onClick={() => onNavigate('opportunity')} className="text-xs text-blue-400 hover:text-blue-300">{t.viewAll}</button>
          </div>
          <div className="space-y-3">
            {opportunities.map((opp, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-blue-900/20 border border-blue-500/20 hover:border-blue-500/40 transition">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{opp.title}</p>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">{opp.type}</span>
                    <span className="text-[10px] text-gray-400 flex items-center gap-0.5">
                      <DollarSign className="w-3 h-3" />{opp.budget}
                    </span>
                    <span className="text-[10px] text-gray-400 flex items-center gap-0.5">
                      <Clock className="w-3 h-3" />{opp.deadline}
                    </span>
                  </div>
                </div>
                <div className="text-right ml-3 flex-shrink-0">
                  <div className="text-xs font-bold text-emerald-400">{opp.match}% match</div>
                  <button
                    onClick={() => toast.success('Application submitted!')}
                    className="mt-1.5 px-3 py-1 rounded-xl bg-blue-600 text-white text-[11px] font-bold hover:bg-blue-700 transition"
                  >
                    {t.applyForOpportunity}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mentor Recommendations */}
      <div className="glass-card p-5 rounded-3xl border border-violet-500/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white text-sm flex items-center gap-2">
            <Zap className="w-4 h-4 text-violet-400" /> {t.aiRecommended} Mentors
          </h3>
          <button onClick={() => onNavigate('mentors')} className="text-xs text-violet-400 hover:text-violet-300">{t.viewAll}</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mentorRecommendations.map((mentor, i) => (
            <div key={i} className="p-4 rounded-2xl bg-violet-900/20 border border-violet-500/20 hover:border-violet-500/40 transition">
              <div className="flex items-start gap-3">
                <img src={mentor.avatar} alt={mentor.name} className="w-12 h-12 rounded-full object-cover border-2 border-violet-500/40" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-bold text-white text-sm">{mentor.name}</h4>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">{mentor.aiMatch}% match</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{mentor.expertise}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs text-amber-300 font-bold">{mentor.rating}</span>
                    <span className="text-xs text-gray-500">({mentor.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {mentor.tags.map((tag, j) => (
                      <span key={j} className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-300">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                <span className="text-sm font-bold text-white">₹{mentor.rate} <span className="text-xs text-gray-400">/ session</span></span>
                <button
                  onClick={() => toast.success(`Session booked with ${mentor.name}! Google Meet link sent.`)}
                  className="px-3 py-1.5 rounded-xl bg-violet-600 text-white text-xs font-bold hover:bg-violet-700 transition"
                >
                  {t.bookSession}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Progress */}
      <div className="glass-card p-5 rounded-3xl border border-indigo-500/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" /> {t.learningProgress}
          </h3>
          <button onClick={() => onNavigate('skills')} className="text-xs text-indigo-400 hover:text-indigo-300">{t.viewAll}</button>
        </div>
        <div className="space-y-3">
          {[
            { name: 'Digital Marketing for Artisans', progress: 66, next: 'Module 3: Instagram Reels Strategy' },
            { name: 'Pricing Formula & Profit Calculation', progress: 40, next: 'Module 2: Market Research' },
            { name: 'GST for Small Businesses', progress: 100, next: 'Completed ✓' },
          ].map((course, i) => (
            <div key={i} className="p-3 rounded-2xl bg-indigo-900/20 border border-indigo-500/20">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-white">{course.name}</p>
                <span className={`text-xs font-bold ${course.progress === 100 ? 'text-emerald-400' : 'text-indigo-300'}`}>{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full ${course.progress === 100 ? 'bg-emerald-500' : 'bg-gradient-to-r from-indigo-500 to-violet-500'}`}
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="text-[11px] text-gray-400 mt-1">{course.next}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
