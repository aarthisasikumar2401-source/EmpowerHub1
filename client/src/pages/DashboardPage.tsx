// EMPOWER HUB - Comprehensive Multi-Role Enterprise Dashboards (Admin, Learner, Mentor, Business)

import React, { useState } from 'react';
import { useAuth, UserRole } from '../context/AuthContext';
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
  AlertCircle,
  Video,
  XCircle,
  MessageSquare,
  Search,
  Filter,
  Download,
  Settings,
  Star,
  Check,
  Layers,
  ArrowRight,
  Briefcase
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
  { month: 'Jan', revenue: 12000, learners: 340, sales: 85 },
  { month: 'Feb', revenue: 18500, learners: 520, sales: 140 },
  { month: 'Mar', revenue: 27000, learners: 780, sales: 210 },
  { month: 'Apr', revenue: 34500, learners: 1100, sales: 310 },
  { month: 'May', revenue: 42800, learners: 1450, sales: 420 }
];

export const DashboardPage: React.FC = () => {
  const { user, role, switchRole } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [adminNav, setAdminNav] = useState<'learners' | 'mentors' | 'businesses' | 'stats'>('learners');

  // Business Post Job state
  const [showPostJob, setShowPostJob] = useState(false);
  const [jobTitle, setJobTitle] = useState('Skilled Blouse Tailor & Pattern Designer');
  const [jobType, setJobType] = useState('Part-Time Job');
  const [reqSkill, setReqSkill] = useState('Tailoring, Pattern Making');

  // Mentor Course Upload state
  const [showCourseUpload, setShowCourseUpload] = useState(false);
  const [cTitle, setCTitle] = useState('Mastering Boutique Alterations & Fabric Selection');

  if (!user) return null;

  // =========================================================================
  // 1. ADMIN DASHBOARD - Central Control Panel with Learner, Mentor, Business Views
  // =========================================================================
  if (role === 'admin') {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
        
        {/* Admin Header */}
        <div className="glass-card p-6 rounded-3xl bg-gradient-to-r from-rose-900/40 via-slate-900/60 to-indigo-900/40 border border-rose-500/30 flex flex-wrap items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Empower Hub Logo" className="h-14 w-auto object-contain bg-white/10 p-1 rounded-xl" />
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-[10px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> Platform Governance Console
              </div>
              <h1 className="text-2xl font-extrabold text-white mt-1">EMPOWER HUB Master Control</h1>
              <p className="text-xs text-gray-400">Overseeing Learners, Verified Mentors, Businesses, and AI Orchestration</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-gray-400">Gross Platform Revenue</p>
              <p className="text-xl font-extrabold text-amber-400">₹42.85 Lakhs</p>
            </div>
          </div>
        </div>

        {/* Master Navigation Bar to Switch between Roles Management */}
        <div className="flex gap-2 p-1.5 bg-gray-200 dark:bg-gray-800/80 rounded-2xl text-xs font-bold">
          <button
            onClick={() => setAdminNav('learners')}
            className={`flex-1 py-2.5 rounded-xl transition flex items-center justify-center gap-2 ${adminNav === 'learners' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400'}`}
          >
            <Users className="w-4 h-4" /> Learner Management (9,420)
          </button>
          <button
            onClick={() => setAdminNav('mentors')}
            className={`flex-1 py-2.5 rounded-xl transition flex items-center justify-center gap-2 ${adminNav === 'mentors' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400'}`}
          >
            <UserCheck className="w-4 h-4" /> Mentor Verification (320)
          </button>
          <button
            onClick={() => setAdminNav('businesses')}
            className={`flex-1 py-2.5 rounded-xl transition flex items-center justify-center gap-2 ${adminNav === 'businesses' ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400'}`}
          >
            <Building className="w-4 h-4" /> Business Partners (1,240)
          </button>
          <button
            onClick={() => setAdminNav('stats')}
            className={`flex-1 py-2.5 rounded-xl transition flex items-center justify-center gap-2 ${adminNav === 'stats' ? 'bg-rose-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400'}`}
          >
            <TrendingUp className="w-4 h-4" /> Platform Analytics
          </button>
        </div>

        {/* Admin Navigation View: Learners */}
        {adminNav === 'learners' && (
          <div className="glass-card p-6 rounded-3xl space-y-4 border border-blue-500/20">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-800 text-xs">
              <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100">Learner User Profiles & Opportunity Passport Scores</h3>
              <span className="text-gray-400">Total Active Learners: 9,420</span>
            </div>
            <div className="overflow-x-auto text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800 text-gray-400 uppercase text-[10px]">
                    <th className="py-2">Learner Name</th>
                    <th className="py-2">Location</th>
                    <th className="py-2">Skills</th>
                    <th className="py-2">Opportunity Score</th>
                    <th className="py-2">Business Readiness</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr>
                    <td className="py-3 font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" className="w-7 h-7 rounded-full object-cover" />
                      Ananya Sharma
                    </td>
                    <td>Chennai, Tamil Nadu</td>
                    <td><span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-[10px]">Tailoring, Crafts</span></td>
                    <td className="font-bold text-emerald-400">88%</td>
                    <td className="font-bold text-blue-400">74%</td>
                    <td>
                      <button onClick={() => switchRole('learner')} className="px-2.5 py-1 bg-blue-600 text-white rounded text-[10px] font-bold">Inspect Dashboard</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" className="w-7 h-7 rounded-full object-cover" />
                      Karthik Raja
                    </td>
                    <td>Coimbatore, Tamil Nadu</td>
                    <td><span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-[10px]">Organic Farming, Marketing</span></td>
                    <td className="font-bold text-emerald-400">91%</td>
                    <td className="font-bold text-blue-400">82%</td>
                    <td>
                      <button onClick={() => toast.success('Learner profile inspected')} className="px-2.5 py-1 bg-gray-700 text-white rounded text-[10px]">Inspect Profile</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Admin Navigation View: Mentors */}
        {adminNav === 'mentors' && (
          <div className="glass-card p-6 rounded-3xl space-y-4 border border-purple-500/20">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-800 text-xs">
              <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100">Mentor Verifications & Approvals Queue</h3>
              <span className="text-purple-400 font-bold">3 Pending Verification</span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100">Priya Sundaram</h4>
                    <p className="text-[11px] text-gray-400">Craft & Textile Specialist • 14 Yrs Exp • Rate: ₹599/hr</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => toast.success('Mentor Priya Sundaram Approved & Verified!')} className="px-4 py-1.5 bg-emerald-600 text-white font-bold rounded-xl text-[11px]">Approve Mentor</button>
                  <button onClick={() => switchRole('mentor')} className="px-3 py-1.5 bg-purple-600 text-white font-bold rounded-xl text-[11px]">View Portal</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Admin Navigation View: Businesses */}
        {adminNav === 'businesses' && (
          <div className="glass-card p-6 rounded-3xl space-y-4 border border-emerald-500/20">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-800 text-xs">
              <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100">Verified Business Entities & Opportunity Listings</h3>
              <span className="text-emerald-400 font-bold">1,240 Verified Companies</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 space-y-2">
                <div className="flex justify-between items-center font-bold">
                  <span className="text-gray-900 dark:text-gray-100">Apex Artisan Collective</span>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-[10px]">GST Verified</span>
                </div>
                <p className="text-[11px] text-gray-400">Industry: Ethical Craft & Export Sourcing</p>
                <div className="pt-2 flex justify-between">
                  <span className="text-blue-400 font-bold">Active Jobs: 5</span>
                  <button onClick={() => switchRole('business')} className="text-xs text-emerald-400 underline font-bold">Manage Business →</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Admin Navigation View: Stats */}
        {adminNav === 'stats' && (
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100">Platform Financial Growth & Active User Metrics</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="month" stroke="#888888" fontSize={10} />
                  <YAxis stroke="#888888" fontSize={10} />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#ec4899" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="sales" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

      </div>
    );
  }

  // =========================================================================
  // 2. LEARNER DASHBOARD - 10-Feature Suite
  // =========================================================================
  if (role === 'learner') {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
        
        {/* Official Header Banner */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-900/40 border border-blue-500/30 flex flex-wrap items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Empower Hub Logo" className="h-12 w-auto object-contain bg-white/10 p-1 rounded-xl" />
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">Learner Dashboard</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-100">
              Welcome back, {user.name}! 👋
            </h1>
            <p className="text-xs text-gray-400">
              Preferred Language: <strong className="text-amber-300">English / தமிழ்</strong> • Budget: <strong className="text-emerald-400">₹15,000 Starting Capital</strong>
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

        {/* Learner 10-Feature Quick Action Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-xs font-bold">
          <a href="/forge" className="p-3.5 rounded-2xl glass-card hover:bg-blue-600/10 transition border border-blue-500/20 flex flex-col items-center gap-1.5 text-center text-gray-800 dark:text-gray-200">
            <Sparkles className="w-5 h-5 text-blue-500" /> 1. AI Forge
          </a>
          <a href="/tutor" className="p-3.5 rounded-2xl glass-card hover:bg-purple-600/10 transition border border-purple-500/20 flex flex-col items-center gap-1.5 text-center text-gray-800 dark:text-gray-200">
            <BookOpen className="w-5 h-5 text-purple-500" /> 2. AI Tutor
          </a>
          <a href="/tutor" className="p-3.5 rounded-2xl glass-card hover:bg-emerald-600/10 transition border border-emerald-500/20 flex flex-col items-center gap-1.5 text-center text-gray-800 dark:text-gray-200">
            <UserCheck className="w-5 h-5 text-emerald-500" /> 3. Book Mentor
          </a>
          <a href="/marketplace" className="p-3.5 rounded-2xl glass-card hover:bg-amber-600/10 transition border border-amber-500/20 flex flex-col items-center gap-1.5 text-center text-gray-800 dark:text-gray-200">
            <ShoppingBag className="w-5 h-5 text-amber-500" /> 4. Marketplace
          </a>
          <a href="/business-builder" className="p-3.5 rounded-2xl glass-card hover:bg-rose-600/10 transition border border-rose-500/20 flex flex-col items-center gap-1.5 text-center text-gray-800 dark:text-gray-200">
            <Briefcase className="w-5 h-5 text-rose-500" /> 5. Business Builder
          </a>
        </div>

        {/* Feature 2 & 5: AI Opportunity Forge Output & Marketplace Quick Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            
            {/* AI Suggested Career & Micro-Business Ideas */}
            <div className="glass-card p-6 rounded-3xl space-y-4 border border-blue-500/20">
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-3">
                <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" /> AI Suggested Businesses Based on Your Skills
                </h3>
                <span className="text-xs text-emerald-400 font-bold">92% Match</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/40 space-y-2">
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-900 dark:text-gray-100">Custom Apparel Boutique</span>
                    <span className="text-emerald-500">₹35,000/mo</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Design custom blouse alterations & eco tote bags for regional buyers.</p>
                  <a href="/business-builder" className="inline-block text-blue-500 font-bold text-[11px] underline">Launch Business Plan →</a>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 space-y-2">
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-900 dark:text-gray-100">Artisanal Soap & Skincare</span>
                    <span className="text-emerald-500">₹28,000/mo</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Formulate herbal cold-pressed soaps with zero-chemical packaging.</p>
                  <a href="/business-builder" className="inline-block text-purple-500 font-bold text-[11px] underline">Launch Business Plan →</a>
                </div>
              </div>
            </div>

            {/* Feature 7: Financial Dashboard & Sales */}
            <div className="glass-card p-6 rounded-3xl space-y-4">
              <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-500" /> Learner Financial Growth & Sales
              </h3>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="month" stroke="#888888" fontSize={10} />
                    <YAxis stroke="#888888" fontSize={10} />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

          {/* Right Column: Feature 4, 8 & 10 (Mentors, Certificates, Profile Settings) */}
          <div className="space-y-6">
            
            {/* Feature 4: Human Mentor Booking Card */}
            <div className="glass-card p-6 rounded-3xl space-y-4 border border-purple-500/20">
              <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-purple-500" /> Book Human Mentor
              </h3>
              <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-900/30 text-xs space-y-2 border border-purple-500/30">
                <div className="flex gap-3 items-center">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100">Priya Sundaram</h4>
                    <p className="text-[10px] text-gray-400">Craft & Textile Specialist • 5.0 ★</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-extrabold text-purple-400">₹599 / session</span>
                  <button onClick={() => toast.success('Mentor booking confirmed!')} className="px-3 py-1 bg-purple-600 text-white font-bold rounded-lg text-[10px]">Book Slot</button>
                </div>
              </div>
            </div>

            {/* Feature 8: Certificates & Badges */}
            <div className="glass-card p-6 rounded-3xl space-y-3">
              <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" /> Earned Certificates
              </h3>
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs flex justify-between items-center">
                <div>
                  <p className="font-bold text-amber-300">Digital Marketing & E-Commerce</p>
                  <p className="text-[10px] text-gray-400">Issued by EMPOWER HUB AI Engine</p>
                </div>
                <button onClick={() => toast.success('Certificate PDF Downloaded!')} className="p-1.5 text-amber-400 hover:text-white"><Download className="w-4 h-4" /></button>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }

  // =========================================================================
  // 3. MENTOR DASHBOARD - 10-Feature Suite with AI vs Human Mentor Comparison
  // =========================================================================
  if (role === 'mentor') {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
        
        {/* Mentor Header */}
        <div className="glass-card p-6 rounded-3xl bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-slate-900/40 border border-purple-500/30 flex flex-wrap items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Empower Hub Logo" className="h-14 w-auto object-contain bg-white/10 p-1 rounded-xl" />
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                <CheckCircle className="w-3.5 h-3.5" /> Admin Verified Senior Mentor
              </div>
              <h1 className="text-2xl font-extrabold text-white mt-1">{user.name}</h1>
              <p className="text-xs text-gray-400">Expertise: E-Commerce Strategy, Craft Scaling & Startup Advisory</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => setShowCourseUpload(true)} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-lg flex items-center gap-1">
              <Plus className="w-4 h-4" /> Upload New Course
            </button>
          </div>
        </div>

        {/* AI vs Human Mentor Distinction Innovation Card */}
        <div className="glass-card p-6 rounded-3xl bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-amber-900/20 border border-purple-500/30 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
            <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" /> Platform Innovation: AI Tutor vs Human Mentor
            </h3>
            <span className="text-xs text-amber-300 font-bold">Hybrid Learning Ecosystem</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/40 border border-blue-500/30 space-y-2">
              <div className="font-extrabold text-sm text-blue-400 flex items-center gap-1.5">
                🤖 AI Tutor (Free Mode)
              </div>
              <ul className="space-y-1 text-[11px] text-gray-300">
                <li>• Available 24×7 Instant Responses</li>
                <li>• Generates step-by-step notes, quizzes & assignments</li>
                <li>• Multilingual Voice STT & TTS in 10 languages</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-500/30 space-y-2">
              <div className="font-extrabold text-sm text-purple-400 flex items-center gap-1.5">
                👨‍🏫 Human Mentor (Paid Session)
              </div>
              <ul className="space-y-1 text-[11px] text-gray-300">
                <li>• 1-on-1 personalized strategic consultation</li>
                <li>• Live video interaction & direct feedback</li>
                <li>• Industry expert business & career guidance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mentor 10 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          
          {/* Feature 3: Session Management */}
          <div className="glass-card p-6 rounded-3xl space-y-3 border border-purple-500/20">
            <h3 className="font-bold text-gray-100 flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-purple-400" /> Session Management
            </h3>
            <div className="p-3 bg-gray-800/80 rounded-xl space-y-1 border border-gray-700">
              <div className="flex justify-between font-bold text-gray-100">
                <span>Ananya Sharma</span>
                <span className="text-emerald-400 font-mono">₹499 Paid</span>
              </div>
              <p className="text-[10px] text-gray-400">Tailoring Pricing Strategy • Today 4:00 PM</p>
              <div className="flex gap-2 pt-2">
                <button onClick={() => toast.success('Google Meet room launched!')} className="flex-1 py-1 bg-purple-600 text-white rounded text-[10px] font-bold">Start Call</button>
                <button onClick={() => toast.success('Session rescheduled')} className="py-1 px-2 bg-gray-700 text-gray-300 rounded text-[10px]">Reschedule</button>
              </div>
            </div>
          </div>

          {/* Feature 6: Student Management */}
          <div className="glass-card p-6 rounded-3xl space-y-3 border border-blue-500/20">
            <h3 className="font-bold text-gray-100 flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-blue-400" /> Student Management
            </h3>
            <div className="text-3xl font-extrabold text-blue-400">185 Learners Taught</div>
            <p className="text-[10px] text-gray-400">Issued 142 Skill Certificates • Completion Rate: 96%</p>
          </div>

          {/* Feature 7: Earnings & Wallet */}
          <div className="glass-card p-6 rounded-3xl space-y-3 border border-emerald-500/20">
            <h3 className="font-bold text-gray-100 flex items-center gap-2 text-sm">
              <Wallet className="w-4 h-4 text-emerald-400" /> Mentor Earnings
            </h3>
            <div className="text-3xl font-extrabold text-emerald-400">₹14,200</div>
            <button onClick={() => toast.success('Payout request sent to bank account!')} className="w-full py-1.5 bg-emerald-600 text-white font-bold rounded-xl text-[10px]">Withdraw to Bank</button>
          </div>

        </div>

      </div>
    );
  }

  // =========================================================================
  // 4. BUSINESS DASHBOARD - 11-Feature Suite & Ecosystem Connection Flow
  // =========================================================================
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
      
      {/* Business Header */}
      <div className="glass-card p-6 rounded-3xl bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-slate-900/40 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-4 shadow-2xl">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Empower Hub Logo" className="h-14 w-auto object-contain bg-white/10 p-1 rounded-xl" />
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
              <Building className="w-3.5 h-3.5" /> Admin Verified Enterprise Business Partner
            </div>
            <h1 className="text-2xl font-extrabold text-white mt-1">{user.name}</h1>
            <p className="text-xs text-gray-400">Industry: Ethical Craft Sourcing & Bulk Textile Exports</p>
          </div>
        </div>

        <button onClick={() => setShowPostJob(true)} className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5">
          <Plus className="w-4 h-4" /> Post New Job / Internship Opportunity
        </button>
      </div>

      {/* Role Connection Flow Ecosystem Diagram */}
      <div className="glass-card p-6 rounded-3xl space-y-4 border border-emerald-500/20">
        <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-400" /> Platform Ecosystem Workflow: Learner → Mentor → Business
        </h3>
        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/80 grid grid-cols-2 md:grid-cols-6 gap-2 text-center text-[11px] font-bold">
          <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl">1. Learner Learns Skill</div>
          <div className="p-2 bg-purple-500/10 text-purple-400 rounded-xl">2. Books Mentor</div>
          <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">3. Earns Certificate</div>
          <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">4. AI Talent Match</div>
          <div className="p-2 bg-rose-500/10 text-rose-400 rounded-xl">5. Business Hires Talent</div>
          <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">6. Sustainable Revenue</div>
        </div>
      </div>

      {/* Feature 4: AI Talent Matcher */}
      <div className="glass-card p-6 rounded-3xl space-y-4 border border-blue-500/20">
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-3">
          <div>
            <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" /> AI Candidate Talent Matcher
            </h3>
            <p className="text-xs text-gray-400">Automatically ranks certified learners matching your requirements</p>
          </div>
          <span className="text-xs text-emerald-400 font-bold">98% Match Rate</span>
        </div>

        <div className="space-y-3 text-xs">
          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100">Ananya Sharma</h4>
                <p className="text-[11px] text-gray-400">Skills: Tailoring, Handicrafts • Tamil & English • Chennai</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 font-bold rounded-xl text-[11px]">98% AI Match</span>
              <button onClick={() => toast.success('Interview request sent to candidate!')} className="px-4 py-1.5 bg-blue-600 text-white font-bold rounded-xl text-[11px]">Hire / Interview</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
