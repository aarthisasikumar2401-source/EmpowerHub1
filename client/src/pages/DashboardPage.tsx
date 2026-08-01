// EMPOWER HUB - Multi-Role Enterprise Dashboard View

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Sparkles,
  TrendingUp,
  Award,
  Wallet,
  ShoppingBag,
  Users,
  BookOpen,
  Calendar,
  DollarSign,
  Plus,
  CheckCircle,
  Clock,
  ShieldCheck,
  Building,
  UserCheck,
  ChevronRight,
  FileText,
  AlertCircle
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import toast from 'react-hot-toast';

const revenueData = [
  { month: 'Jan', revenue: 12000, learners: 340 },
  { month: 'Feb', revenue: 18500, learners: 520 },
  { month: 'Mar', revenue: 27000, learners: 780 },
  { month: 'Apr', revenue: 34500, learners: 1100 },
  { month: 'May', revenue: 42800, learners: 1450 }
];

export const DashboardPage: React.FC = () => {
  const { user, role } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) return null;

  // --- 1. LEARNER DASHBOARD ---
  if (role === 'learner') {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
        
        {/* Welcome Section */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-slate-900/30 border border-blue-500/20 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Learner Passport Active
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              Welcome back, {user.name}! 👋
            </h1>
            <p className="text-xs text-gray-400">
              Target Income: <span className="text-emerald-400 font-bold">₹35,000/month</span> • City: {user.city}, {user.state}
            </p>
          </div>

          <div className="flex gap-4 text-center">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl font-extrabold text-blue-400">{user.opportunityScore}%</div>
              <div className="text-[10px] text-gray-400 uppercase">Opportunity Score</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl font-extrabold text-emerald-400">{user.businessReadinessScore}%</div>
              <div className="text-[10px] text-gray-400 uppercase">Business Readiness</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl font-extrabold text-amber-400">₹{user.walletBalance.toLocaleString()}</div>
              <div className="text-[10px] text-gray-400 uppercase">Wallet Balance</div>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/forge" className="p-4 rounded-2xl glass-card hover:bg-blue-600/10 transition border border-blue-500/20 flex items-center gap-3 text-xs font-bold text-gray-800 dark:text-gray-200">
            <Sparkles className="w-5 h-5 text-blue-500" /> AI Opportunity Forge
          </a>
          <a href="/tutor" className="p-4 rounded-2xl glass-card hover:bg-purple-600/10 transition border border-purple-500/20 flex items-center gap-3 text-xs font-bold text-gray-800 dark:text-gray-200">
            <BookOpen className="w-5 h-5 text-purple-500" /> Start AI Learning
          </a>
          <a href="/marketplace" className="p-4 rounded-2xl glass-card hover:bg-emerald-600/10 transition border border-emerald-500/20 flex items-center gap-3 text-xs font-bold text-gray-800 dark:text-gray-200">
            <ShoppingBag className="w-5 h-5 text-emerald-500" /> Sell Product / Service
          </a>
          <a href="/funding" className="p-4 rounded-2xl glass-card hover:bg-amber-600/10 transition border border-amber-500/20 flex items-center gap-3 text-xs font-bold text-gray-800 dark:text-gray-200">
            <Award className="w-5 h-5 text-amber-500" /> Government Schemes
          </a>
        </div>

        {/* AI Opportunity Passport & Growth Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-card p-6 rounded-3xl space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" /> Monthly Revenue Projection & Progress
              </h3>
              <span className="text-xs text-blue-500 font-bold">Updated Live</span>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="month" stroke="#888888" fontSize={10} />
                  <YAxis stroke="#888888" fontSize={10} />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* User Profile Skills & Achievements */}
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100">Verified Skill Matrix</h3>
            <div className="space-y-3 text-xs">
              {user.skills.map((skill, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800/80 flex items-center justify-between">
                  <span className="font-bold text-gray-800 dark:text-gray-200">{skill}</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">Verified</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
              <h4 className="font-bold text-xs text-gray-400 uppercase">Upcoming Mentor Booking</h4>
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold">Dr. Rajesh Varma</p>
                  <p className="text-[10px]">Tomorrow at 4:00 PM (Google Meet)</p>
                </div>
                <button onClick={() => toast.success('Join link active 10 mins before session!')} className="px-2.5 py-1 bg-blue-600 text-white rounded-lg text-[10px] font-bold">Join</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // --- 2. MENTOR DASHBOARD ---
  if (role === 'mentor') {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
        <div className="glass-card p-6 rounded-3xl bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20 flex justify-between items-center">
          <div>
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold">Verified Senior Mentor</span>
            <h1 className="text-2xl font-extrabold mt-1 text-gray-100">{user.name}</h1>
            <p className="text-xs text-gray-400">Expertise: E-Commerce Strategy & Startup Advisory</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-extrabold text-emerald-400">₹{user.walletBalance.toLocaleString()}</div>
            <div className="text-[10px] text-gray-400 uppercase">Monthly Earnings</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="glass-card p-5 rounded-2xl space-y-3">
            <h3 className="font-bold text-gray-100 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-400" /> Today's Sessions (2)
            </h3>
            <div className="p-3 bg-gray-800 rounded-xl space-y-1">
              <p className="font-bold">Ananya Sharma — Tailoring Pricing Strategy</p>
              <p className="text-[10px] text-gray-400">4:00 PM - 5:00 PM • ₹499 Earned</p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl space-y-3">
            <h3 className="font-bold text-gray-100 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" /> Total Students Taught
            </h3>
            <div className="text-3xl font-extrabold text-blue-400">185 Learners</div>
            <p className="text-[10px] text-gray-400">Completion Rate: 96%</p>
          </div>

          <div className="glass-card p-5 rounded-2xl space-y-3">
            <h3 className="font-bold text-gray-100 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" /> Rating & Reviews
            </h3>
            <div className="text-3xl font-extrabold text-amber-400">4.9 ★ (42)</div>
            <p className="text-[10px] text-gray-400">100% Positive Feedback</p>
          </div>
        </div>
      </div>
    );
  }

  // --- 3. BUSINESS DASHBOARD ---
  if (role === 'business') {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
        <div className="glass-card p-6 rounded-3xl bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/20 flex justify-between items-center">
          <div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">Enterprise Business Partner</span>
            <h1 className="text-2xl font-extrabold mt-1 text-gray-100">{user.name}</h1>
            <p className="text-xs text-gray-400">Industry: Ethical Craft & Bulk Sourcing Collective</p>
          </div>
          <button onClick={() => toast.success('Job Posting Modal Opened!')} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-lg">
            + Post New Talent Job
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-5 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-gray-400 uppercase">Artisan Talent Matched</h4>
            <div className="text-3xl font-extrabold text-emerald-400">48 Artisans</div>
          </div>
          <div className="glass-card p-5 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-gray-400 uppercase">Bulk Orders Processed</h4>
            <div className="text-3xl font-extrabold text-blue-400">124 Orders</div>
          </div>
          <div className="glass-card p-5 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-gray-400 uppercase">Marketplace Revenue</h4>
            <div className="text-3xl font-extrabold text-purple-400">₹4,85,000</div>
          </div>
        </div>
      </div>
    );
  }

  // --- 4. ADMIN DASHBOARD ---
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
      <div className="glass-card p-6 rounded-3xl bg-gradient-to-r from-rose-900/30 to-slate-900/30 border border-rose-500/20 flex justify-between items-center">
        <div>
          <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold">Platform Governance</span>
          <h1 className="text-2xl font-extrabold mt-1 text-gray-100">System Admin Control Center</h1>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-xs font-bold">API Status: Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
        <div className="glass-card p-5 rounded-2xl space-y-1">
          <p className="text-gray-400 uppercase font-bold">Total Platform Users</p>
          <p className="text-2xl font-extrabold text-blue-400">14,850</p>
        </div>
        <div className="glass-card p-5 rounded-2xl space-y-1">
          <p className="text-gray-400 uppercase font-bold">Verified Mentors</p>
          <p className="text-2xl font-extrabold text-purple-400">320</p>
        </div>
        <div className="glass-card p-5 rounded-2xl space-y-1">
          <p className="text-gray-400 uppercase font-bold">Marketplace Listings</p>
          <p className="text-2xl font-extrabold text-emerald-400">1,240</p>
        </div>
        <div className="glass-card p-5 rounded-2xl space-y-1">
          <p className="text-gray-400 uppercase font-bold">Platform Gross Revenue</p>
          <p className="text-2xl font-extrabold text-amber-400">₹42.85 Lakhs</p>
        </div>
      </div>
    </div>
  );
};
