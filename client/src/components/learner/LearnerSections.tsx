// EMPOWER HUB — All Remaining Learner Dashboard Sections (Skills, Portfolio, Marketplace, Mentors, Opportunity, Schemes, Funding, Certificates, Community, Notifications, Settings)

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getLearnerTranslation } from '../../locales/learnerTranslations';
import { useAuth } from '../../context/AuthContext';
import { useVoice } from '../../context/VoiceContext';
import {
  BookOpen, Play, CheckCircle2, Clock, Award, Star, Plus,
  Package, ShoppingBag, DollarSign, Users, User, Search,
  Filter, Mic, Bell, Settings, Moon, Sun, Globe, Lock,
  Trash2, ExternalLink, Image, Video, FileText, TrendingUp,
  Building2, Briefcase, MapPin, Zap, Share2, Download,
  ArrowRight, Check, AlertCircle, Volume2, MessageSquare,
  Heart, MessageCircle, Send, RefreshCw
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useTheme } from '../../context/ThemeContext';

// ===== SKILL DEVELOPMENT =====
export const SkillDevelopment: React.FC = () => {
  const { i18n } = useTranslation();
  const t = getLearnerTranslation(i18n.language);
  const [activeTab, setActiveTab] = useState<'my-courses' | 'browse' | 'roadmap' | 'assessment'>('my-courses');

  const courses = [
    { id: 1, title: 'Digital Marketing for Artisans', instructor: 'Priya Sundaram', progress: 66, totalLessons: 12, completedLessons: 8, nextLesson: 'Instagram Reels Strategy', thumb: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&auto=format&fit=crop', tags: ['Marketing', 'Instagram', 'Social Media'] },
    { id: 2, title: 'AI Tools for Small Business', instructor: 'Rahul Mehta', progress: 40, totalLessons: 10, completedLessons: 4, nextLesson: 'ChatGPT for Product Descriptions', thumb: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=300&auto=format&fit=crop', tags: ['AI', 'Productivity', 'Tech'] },
    { id: 3, title: 'GST Filing for Small Businesses', instructor: 'CA Meera Iyer', progress: 100, totalLessons: 6, completedLessons: 6, nextLesson: 'Completed ✓', thumb: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&auto=format&fit=crop', tags: ['Finance', 'GST', 'Compliance'] },
  ];

  const browseCourses = [
    { title: 'Pricing Strategy for Handmade Products', duration: '4h 30m', rating: 4.9, students: 2340, price: 'Free' },
    { title: 'Photography for Marketplace Listings', duration: '3h 15m', rating: 4.8, students: 1890, price: '₹299' },
    { title: 'WhatsApp Business for Artisans', duration: '2h 45m', rating: 4.7, students: 3120, price: 'Free' },
    { title: 'Export Business from Home', duration: '6h', rating: 4.9, students: 890, price: '₹499' },
  ];

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-900/30 to-blue-900/20">
        <h2 className="text-xl font-extrabold text-white mb-1">{t.skillsTitle}</h2>
        <p className="text-sm text-gray-400">{t.skillsSubtitle}</p>
      </div>

      <div className="flex gap-2 overflow-x-auto">
        {[
          { id: 'my-courses', label: t.myCourses },
          { id: 'browse', label: t.browseAll },
          { id: 'roadmap', label: t.roadmapTitle },
          { id: 'assessment', label: t.aiSkillAssessment },
        ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${activeTab === tab.id ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'my-courses' && (
        <div className="space-y-4">
          {courses.map(course => (
            <div key={course.id} className="glass-card rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700/50">
              <div className="flex flex-col sm:flex-row">
                <img src={course.thumb} alt={course.title} className="w-full sm:w-48 h-32 sm:h-auto object-cover" />
                <div className="p-5 flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">{course.title}</h3>
                    {course.progress === 100 && <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />}
                  </div>
                  <p className="text-xs text-gray-500">by {course.instructor}</p>
                  <div className="flex flex-wrap gap-1">
                    {course.tags.map((tag, i) => <span key={i} className="px-2 py-0.5 text-[10px] rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">{tag}</span>)}
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">{t.progress}: {course.completedLessons}/{course.totalLessons} lessons</span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className={`h-2 rounded-full ${course.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-500'}`} style={{ width: `${course.progress}%` }} />
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">Next: {course.nextLesson}</p>
                  </div>
                  <button onClick={() => toast.success(`Opening "${course.title}"...`)}
                    className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition flex items-center gap-1.5">
                    <Play className="w-3.5 h-3.5" /> {course.progress === 100 ? 'Review' : t.continueLesson}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'browse' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {browseCourses.map((c, i) => (
            <div key={i} className="glass-card p-5 rounded-3xl border border-gray-200 dark:border-gray-700/50 space-y-3">
              <h3 className="font-bold text-gray-900 dark:text-white text-sm">{c.title}</h3>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{c.duration}</span>
                <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />{c.rating}</span>
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{c.students.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-extrabold ${c.price === 'Free' ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-900 dark:text-white'}`}>{c.price}</span>
                <button onClick={() => toast.success(`Enrolled in "${c.title}"!`)}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition">
                  {t.startCourse}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'roadmap' && (
        <div className="glass-card p-6 rounded-3xl border border-gray-200 dark:border-gray-700/50 space-y-4">
          <h3 className="font-bold text-gray-900 dark:text-white">Your Personalized Learning Roadmap</h3>
          {[
            { skill: 'Basic Tailoring', status: 'completed', time: 'Completed' },
            { skill: 'Social Media Marketing', status: 'in-progress', time: 'In Progress (66%)' },
            { skill: 'AI Tools for Business', status: 'in-progress', time: 'In Progress (40%)' },
            { skill: 'Product Photography', status: 'upcoming', time: 'Recommended Next' },
            { skill: 'GST & Financial Basics', status: 'upcoming', time: 'Month 3' },
            { skill: 'Export Business Setup', status: 'upcoming', time: 'Month 4-6' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                item.status === 'completed' ? 'bg-emerald-500 text-white' :
                item.status === 'in-progress' ? 'bg-indigo-500 text-white' :
                'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                {item.status === 'completed' ? '✓' : i + 1}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.skill}</p>
                <p className={`text-xs ${item.status === 'completed' ? 'text-emerald-500' : item.status === 'in-progress' ? 'text-indigo-400' : 'text-gray-400'}`}>{item.time}</p>
              </div>
              {item.status !== 'completed' && (
                <button onClick={() => toast.success(`Starting ${item.skill}...`)}
                  className="px-3 py-1.5 text-xs rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-bold hover:bg-indigo-200 transition">
                  {item.status === 'in-progress' ? t.continueLesson : t.startCourse}
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'assessment' && (
        <div className="glass-card p-8 rounded-3xl border border-indigo-500/30 text-center space-y-4 bg-gradient-to-b from-indigo-900/20 to-slate-900/20">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto">
            <Zap className="w-8 h-8 text-indigo-400" />
          </div>
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">{t.aiSkillAssessment}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">AI will evaluate your current skill level with 10 practical questions and recommend the perfect learning path.</p>
          <div className="flex justify-center gap-3">
            <button onClick={() => toast.success('AI Assessment starting! Good luck!')}
              className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 transition shadow-lg">
              {t.takeAssessment} →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ===== PORTFOLIO BUILDER =====
export const PortfolioBuilder: React.FC = () => {
  const { i18n } = useTranslation();
  const t = getLearnerTranslation(i18n.language);
  const [projects, setProjects] = useState([
    { id: 1, title: 'Bridal Blouse Collection 2024', desc: 'Custom bridal blouses in silk, cotton, and georgette.', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&auto=format&fit=crop', tags: ['Tailoring', 'Bridal', 'Custom'] },
    { id: 2, title: 'Handloom Saree Alteration Project', desc: 'Professional alteration of 50+ saree blouses.', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&auto=format&fit=crop', tags: ['Saree', 'Alteration', 'Handloom'] },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', desc: '' });

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-pink-500/20 bg-gradient-to-r from-pink-900/20 to-rose-900/20 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white">{t.portfolioTitle}</h2>
          <p className="text-sm text-gray-400">{t.portfolioSubtitle}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => toast.success('Portfolio website generated!')}
            className="px-4 py-2.5 rounded-2xl bg-pink-600 text-white text-xs font-bold hover:bg-pink-700 transition flex items-center gap-2">
            <ExternalLink className="w-4 h-4" /> {t.createPortfolio}
          </button>
          <button onClick={() => setShowAddForm(true)}
            className="px-4 py-2.5 rounded-2xl bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition flex items-center gap-2">
            <Plus className="w-4 h-4" /> {t.addProject}
          </button>
        </div>
      </div>

      {showAddForm && (
        <div className="glass-card p-5 rounded-3xl border border-pink-500/30 space-y-4">
          <h3 className="font-bold text-gray-900 dark:text-white text-sm">Add New Project</h3>
          <input type="text" placeholder={t.projectTitle} value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-pink-500 transition" />
          <textarea rows={2} placeholder={t.projectDesc} value={newProject.desc} onChange={e => setNewProject({ ...newProject, desc: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-pink-500 transition resize-none" />
          <div className="flex gap-2">
            <button onClick={() => {
              if (newProject.title) {
                setProjects([...projects, { id: Date.now(), ...newProject, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&auto=format&fit=crop', tags: ['Portfolio'] }]);
                setNewProject({ title: '', desc: '' });
                setShowAddForm(false);
                toast.success('Project added!');
              }
            }} className="px-4 py-2 rounded-xl bg-pink-600 text-white text-xs font-bold">{t.save}</button>
            <button onClick={() => setShowAddForm(false)} className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 text-xs font-bold">{t.cancel}</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(p => (
          <div key={p.id} className="glass-card rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700/50 group">
            <div className="relative overflow-hidden h-48">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                <button onClick={() => toast.success('AI improved description!')} className="px-3 py-1.5 rounded-xl bg-white/20 text-white text-xs font-bold backdrop-blur-sm">{t.aiImproveDesc}</button>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-gray-900 dark:text-white text-sm">{p.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{p.desc}</p>
              <div className="flex flex-wrap gap-1">
                {p.tags.map((tag, i) => <span key={i} className="px-2 py-0.5 text-[10px] rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300">{tag}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ===== LEARNER MARKETPLACE =====
export const LearnerMarketplace: React.FC = () => {
  const { i18n } = useTranslation();
  const t = getLearnerTranslation(i18n.language);
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'earnings'>('products');
  const [showAddForm, setShowAddForm] = useState(false);

  const products = [
    { id: 1, name: 'Custom Silk Blouse', price: 450, category: 'Tailoring', orders: 23, rating: 4.8, status: 'Active', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100&auto=format&fit=crop' },
    { id: 2, name: 'Embroidered Cotton Salwar', price: 650, category: 'Tailoring', orders: 15, rating: 4.9, status: 'Active', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=100&auto=format&fit=crop' },
    { id: 3, name: 'Online Stitching Workshop', price: 299, category: 'Workshop', orders: 41, rating: 4.7, status: 'Active', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&auto=format&fit=crop' },
  ];

  const orders = [
    { id: 'ORD-001', customer: 'Kavitha R.', product: 'Custom Silk Blouse', amount: 450, status: 'Delivered', date: '28 Jul 2026' },
    { id: 'ORD-002', customer: 'Nandini P.', product: 'Embroidered Cotton Salwar', amount: 650, status: 'Processing', date: '30 Jul 2026' },
    { id: 'ORD-003', customer: 'Deepa M.', product: 'Custom Silk Blouse', amount: 450, status: 'Shipped', date: '01 Aug 2026' },
  ];

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-900/30 to-indigo-900/20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-white">{t.marketplaceTitle}</h2>
            <p className="text-sm text-gray-400">{t.marketplaceSubtitle}</p>
          </div>
          <button onClick={() => setShowAddForm(true)}
            className="px-4 py-2.5 rounded-2xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition flex items-center gap-2">
            <Plus className="w-4 h-4" /> {t.addProduct}
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {[
            { label: t.totalSales, value: '₹18,600', color: 'emerald' },
            { label: t.pendingOrders, value: '3', color: 'amber' },
            { label: t.pendingPayout, value: '₹2,800', color: 'blue' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-3 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-400">{stat.label}</p>
              <p className={`text-xl font-extrabold text-${stat.color}-400 mt-0.5`}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {[{ id: 'products', label: t.myProducts }, { id: 'orders', label: t.myOrders }, { id: 'earnings', label: t.myEarnings }].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'products' && (
        <div className="space-y-3">
          {showAddForm && (
            <div className="glass-card p-5 rounded-3xl border border-blue-500/30 space-y-4">
              <h3 className="font-bold text-gray-900 dark:text-white text-sm">{t.addProduct}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[t.productName, t.productCategory, t.productPrice].map((label, i) => (
                  <div key={i}>
                    <label className="block text-xs font-bold text-gray-500 mb-1">{label}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-500 transition" />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">{t.productDesc}</label>
                <textarea rows={2} className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-500 transition resize-none" />
              </div>
              <div className="flex gap-2">
                <button onClick={() => { setShowAddForm(false); toast.success('Product listed! AI optimized your listing.'); }}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold">{t.save}</button>
                <button onClick={() => toast.success('AI improved description!')}
                  className="px-4 py-2 rounded-xl bg-violet-600 text-white text-xs font-bold flex items-center gap-1"><Zap className="w-3.5 h-3.5" />{t.aiImproveListings}</button>
                <button onClick={() => setShowAddForm(false)} className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 text-xs font-bold">{t.cancel}</button>
              </div>
            </div>
          )}
          {products.map(p => (
            <div key={p.id} className="glass-card p-4 rounded-2xl border border-gray-200 dark:border-gray-700/50 flex items-center gap-4">
              <img src={p.image} alt={p.name} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">{p.name}</h4>
                <div className="flex items-center gap-2 mt-1 flex-wrap text-xs text-gray-500">
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">{p.category}</span>
                  <span>{p.orders} orders</span>
                  <span className="flex items-center gap-0.5"><Star className="w-3 h-3 text-amber-400 fill-amber-400" />{p.rating}</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-extrabold text-emerald-600 dark:text-emerald-400 text-lg">₹{p.price}</p>
                <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full">{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="space-y-3">
          {orders.map(o => (
            <div key={o.id} className="glass-card p-4 rounded-2xl border border-gray-200 dark:border-gray-700/50 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs text-gray-400">{o.id} • {o.date}</p>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mt-0.5">{o.product}</h4>
                <p className="text-xs text-gray-500">Customer: {o.customer}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-gray-900 dark:text-white">₹{o.amount}</span>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                  o.status === 'Delivered' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' :
                  o.status === 'Processing' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' :
                  'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'}`}>
                  {o.status}
                </span>
                <button onClick={() => toast.success('Invoice downloaded!')} className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'earnings' && (
        <div className="glass-card p-6 rounded-3xl border border-gray-200 dark:border-gray-700/50 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Total Earned', value: '₹18,600', color: 'emerald' },
              { label: 'This Month', value: '₹7,200', color: 'blue' },
              { label: 'Pending', value: '₹2,800', color: 'amber' },
              { label: 'Withdrawn', value: '₹8,000', color: 'violet' },
            ].map((s, i) => (
              <div key={i} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 text-center">
                <p className="text-xs text-gray-500">{s.label}</p>
                <p className={`text-xl font-extrabold text-${s.color}-600 dark:text-${s.color}-400 mt-1`}>{s.value}</p>
              </div>
            ))}
          </div>
          <button onClick={() => toast.success('Payout request submitted! ₹2,800 will be credited in 2-3 days.')}
            className="w-full py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition">
            Withdraw ₹2,800 to Bank Account
          </button>
        </div>
      )}
    </div>
  );
};

// ===== MENTOR SECTION =====
export const MentorSection: React.FC = () => {
  const { i18n } = useTranslation();
  const t = getLearnerTranslation(i18n.language);
  const [searchQuery, setSearchQuery] = useState('');

  const mentors = [
    { name: 'Priya Sundaram', expertise: 'Textile & Fashion', bio: 'Ex-designer at NIFT with 12 years experience in fashion and handloom.', rating: 4.9, reviews: 124, rate: 599, tags: ['Tailoring', 'Design', 'E-Commerce'], avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop', availability: 'Mon, Wed, Fri', aiMatch: 98 },
    { name: 'Dr. Meena Krishnan', expertise: 'Business Strategy', bio: 'MBA from IIM-A. Founded 3 startups. Expert in MSME funding and market expansion.', rating: 4.8, reviews: 89, rate: 799, tags: ['Funding', 'Strategy', 'Marketing'], avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop', availability: 'Tue, Thu', aiMatch: 94 },
    { name: 'Suresh Babu', expertise: 'Digital Marketing', bio: 'Google-certified digital marketer. Helped 200+ artisans scale online.', rating: 4.7, reviews: 67, rate: 499, tags: ['Social Media', 'SEO', 'Instagram'], avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop', availability: 'Mon-Sat', aiMatch: 89 },
    { name: 'Lakshmi Devi', expertise: 'Handicraft Business', bio: 'Founded an award-winning handloom cooperative. Expert in craft exports.', rating: 4.9, reviews: 203, rate: 699, tags: ['Handicraft', 'Export', 'Cooperative'], avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=100&auto=format&fit=crop', availability: 'Wed, Sat', aiMatch: 95 },
  ];

  const filtered = mentors.filter(m =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.expertise.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-900/30 to-purple-900/20">
        <h2 className="text-xl font-extrabold text-white">{t.mentorsTitle}</h2>
        <p className="text-sm text-gray-400 mt-1">{t.mentorsSubtitle}</p>
        <div className="relative mt-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder={t.searchMentors}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-violet-400 transition" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((m, i) => (
          <div key={i} className="glass-card p-5 rounded-3xl border border-gray-200 dark:border-gray-700/50 space-y-4 hover:border-violet-400 dark:hover:border-violet-500 transition">
            <div className="flex items-start gap-3">
              <img src={m.avatar} alt={m.name} className="w-14 h-14 rounded-2xl object-cover border-2 border-violet-500/30" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">{m.name}</h4>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded font-bold">{m.aiMatch}% {t.aiRecommended}</span>
                </div>
                <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">{m.expertise}</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-amber-600 dark:text-amber-400">{m.rating}</span>
                  <span>({m.reviews} {t.reviews})</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">{m.bio}</p>
            <div className="flex flex-wrap gap-1">
              {m.tags.map((tag, j) => <span key={j} className="px-2 py-0.5 text-[10px] rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">{tag}</span>)}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-extrabold text-gray-900 dark:text-white">₹{m.rate} <span className="text-xs text-gray-400 font-normal">/ {t.perSession}</span></p>
                <p className="text-[11px] text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" />{m.availability}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => toast.success(`Chat opened with ${m.name}!`)}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  <MessageSquare className="w-4 h-4" />
                </button>
                <button onClick={() => toast.success(`Session booked with ${m.name}! Google Meet link sent to your email.`)}
                  className="px-4 py-2 rounded-xl bg-violet-600 text-white text-xs font-bold hover:bg-violet-700 transition">
                  {t.bookSession}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ===== GOVERNMENT SCHEMES =====
export const GovernmentSchemes: React.FC = () => {
  const { i18n } = useTranslation();
  const t = getLearnerTranslation(i18n.language);

  const schemes = [
    { name: t.mudraSchemeName, ministry: 'Ministry of Finance', amount: '₹50,000', category: 'Micro Loan', desc: t.mudraSchemeDesc, eligibility: '18+ years, Indian citizen starting a micro-business', docs: ['Aadhaar', 'PAN', 'Bank Statement', 'Business Plan'], matchScore: 98, color: 'amber' },
    { name: t.pmegpSchemeName, ministry: 'MSME Ministry', amount: '35% Capital Subsidy', category: 'Subsidy', desc: t.pmegpSchemeDesc, eligibility: '18+ years, manufacturing or service business', docs: ['Aadhaar', 'PAN', 'Project Report', 'Caste Certificate'], matchScore: 92, color: 'emerald' },
    { name: t.standupSchemeName, ministry: 'SIDBI / Ministry of Finance', amount: '₹10L – ₹1Cr', category: 'Bank Loan', desc: t.standupSchemeDesc, eligibility: 'Women or SC/ST entrepreneur, greenfield business', docs: ['Aadhaar', 'PAN', 'Caste/Gender Certificate', 'Business Plan'], matchScore: 88, color: 'blue' },
    { name: 'NMDFC Micro Finance', ministry: 'National Minorities Development', amount: '₹1,00,000', category: 'Minority Loan', desc: 'Low-interest loans for micro-businesses by minority communities.', eligibility: 'Minority community members, income below ₹6 LPA', docs: ['Minority Certificate', 'Income Certificate', 'Aadhaar'], matchScore: 75, color: 'violet' },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    amber: { bg: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-500/30', text: 'text-amber-800 dark:text-amber-200', badge: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' },
    emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'border-emerald-200 dark:border-emerald-500/30', text: 'text-emerald-800 dark:text-emerald-200', badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' },
    blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-500/30', text: 'text-blue-800 dark:text-blue-200', badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' },
    violet: { bg: 'bg-violet-50 dark:bg-violet-900/20', border: 'border-violet-200 dark:border-violet-500/30', text: 'text-violet-800 dark:text-violet-200', badge: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300' },
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <h2 className="text-xl font-extrabold text-white">{t.schemesTitle}</h2>
        <p className="text-sm text-gray-400 mt-1">{t.schemesSubtitle}</p>
        <div className="mt-3 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2">
          <Zap className="w-4 h-4 text-emerald-400" />
          <p className="text-xs text-emerald-300 font-medium">{t.aiSchemeMatch} — 4 schemes matched based on your profile</p>
        </div>
      </div>

      <div className="space-y-4">
        {schemes.map((s, i) => {
          const c = colorMap[s.color];
          return (
            <div key={i} className={`glass-card p-5 rounded-3xl border ${c.border} ${c.bg}`}>
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${c.badge}`}>{s.category}</span>
                    <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold">{s.matchScore}% match</span>
                  </div>
                  <h3 className={`font-extrabold text-base ${c.text}`}>{s.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{s.ministry}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{s.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={`text-2xl font-extrabold ${c.text}`}>{s.amount}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-white/30 dark:bg-black/20">
                  <p className="font-bold text-gray-700 dark:text-gray-300 mb-1">{t.eligibility}</p>
                  <p className="text-gray-600 dark:text-gray-400">{s.eligibility}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/30 dark:bg-black/20">
                  <p className="font-bold text-gray-700 dark:text-gray-300 mb-1">{t.requiredDocs}</p>
                  <ul className="space-y-0.5">
                    {s.docs.map((d, j) => <li key={j} className="text-gray-600 dark:text-gray-400 flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" />{d}</li>)}
                  </ul>
                </div>
              </div>
              <button onClick={() => toast.success(`Application form for ${s.name} opened!`)}
                className={`mt-4 px-5 py-2.5 rounded-2xl ${s.color === 'amber' ? 'bg-amber-500 hover:bg-amber-600' : s.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' : s.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-violet-600 hover:bg-violet-700'} text-white font-bold text-sm transition`}>
                {t.applyScheme} →
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ===== CERTIFICATES =====
export const CertificatesSection: React.FC = () => {
  const { i18n } = useTranslation();
  const t = getLearnerTranslation(i18n.language);

  const certs = [
    { title: 'Certified Digital Marketing Professional', issuer: 'EMPOWER HUB AI Academy', date: '15 Jul 2026', score: '94%', id: 'EH-CERT-2024-001', valid: 'Jul 2028', color: 'blue' },
    { title: 'GST Filing for Small Business', issuer: 'EMPOWER HUB AI Academy', date: '28 Jun 2026', score: '98%', id: 'EH-CERT-2024-002', valid: 'Jun 2028', color: 'emerald' },
  ];

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-900/20 to-orange-900/20">
        <h2 className="text-xl font-extrabold text-white">{t.certificatesTitle}</h2>
        <p className="text-sm text-gray-400 mt-1">{t.certificatesSubtitle}</p>
      </div>

      {certs.length === 0 ? (
        <div className="glass-card p-12 rounded-3xl border border-gray-200 dark:border-gray-700 text-center">
          <Award className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400">{t.noCerts}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {certs.map((c, i) => (
            <div key={i} className={`glass-card p-6 rounded-3xl border ${c.color === 'blue' ? 'border-blue-500/30' : 'border-emerald-500/30'}`}>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${c.color === 'blue' ? 'bg-blue-500/20' : 'bg-emerald-500/20'}`}>
                    <Award className={`w-8 h-8 ${c.color === 'blue' ? 'text-blue-400' : 'text-emerald-400'}`} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 dark:text-white">{c.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{t.issuedBy}: {c.issuer}</p>
                    <div className="flex gap-3 mt-2 text-xs text-gray-400 flex-wrap">
                      <span>{t.issuedOn}: {c.date}</span>
                      <span>{t.certScore}: {c.score}</span>
                      <span>{t.certValid}: {c.valid}</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1 font-mono">ID: {c.id}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button onClick={() => toast.success('Certificate downloaded as PDF!')}
                    className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5" /> {t.downloadCert}
                  </button>
                  <button onClick={() => { navigator.clipboard?.writeText(`Verify at: https://empowerhub.io/verify/${c.id}`); toast.success('Verification link copied!'); }}
                    className={`px-3 py-2 rounded-xl text-white text-xs font-bold transition flex items-center gap-1.5 ${c.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}>
                    <Share2 className="w-3.5 h-3.5" /> {t.shareCert}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ===== COMMUNITY =====
export const CommunitySection: React.FC = () => {
  const { i18n } = useTranslation();
  const t = getLearnerTranslation(i18n.language);
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, author: 'Kavitha R.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&auto=format&fit=crop', content: 'Just completed my first online tailoring workshop! Got 5 new orders this week. EMPOWER HUB AI suggested the right pricing and it worked! 🙌', time: '2 hours ago', likes: 24, comments: 8, tags: ['Tailoring', 'Success'] },
    { id: 2, author: 'Nandini P.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&auto=format&fit=crop', content: 'Question: Has anyone applied for the PM Mudra Shishu loan? What documents do you need? The AI showed me the list but I want to know from real experience.', time: '5 hours ago', likes: 11, comments: 15, tags: ['Mudra Loan', 'Funding'] },
  ]);

  const handlePost = () => {
    if (!newPost.trim()) return;
    setPosts([{ id: Date.now(), author: 'Ananya Sharma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&auto=format&fit=crop', content: newPost, time: 'Just now', likes: 0, comments: 0, tags: [] }, ...posts]);
    setNewPost('');
    toast.success('Post shared with community!');
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-teal-500/20 bg-gradient-to-r from-teal-900/20 to-emerald-900/20">
        <h2 className="text-xl font-extrabold text-white">{t.communityTitle}</h2>
        <p className="text-sm text-gray-400 mt-1">{t.communitySubtitle}</p>
      </div>

      {/* Create Post */}
      <div className="glass-card p-5 rounded-3xl border border-gray-200 dark:border-gray-700/50 space-y-3">
        <textarea rows={3} value={newPost} onChange={e => setNewPost(e.target.value)} placeholder={`${t.createPost}... Ask a question, share your success, or help someone!`}
          className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-teal-500 transition resize-none text-gray-900 dark:text-gray-100" />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image className="w-4 h-4" /></button>
            <button className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Video className="w-4 h-4" /></button>
          </div>
          <button onClick={handlePost} disabled={!newPost.trim()}
            className="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 disabled:opacity-40 transition flex items-center gap-1.5">
            <Send className="w-3.5 h-3.5" /> {t.createPost}
          </button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map(p => (
          <div key={p.id} className="glass-card p-5 rounded-3xl border border-gray-200 dark:border-gray-700/50 space-y-3">
            <div className="flex items-center gap-3">
              <img src={p.avatar} alt={p.author} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">{p.author}</p>
                <p className="text-xs text-gray-400">{p.time}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{p.content}</p>
            {p.tags.length > 0 && (
              <div className="flex gap-1 flex-wrap">
                {p.tags.map((tag, i) => <span key={i} className="px-2 py-0.5 text-[10px] rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">#{tag}</span>)}
              </div>
            )}
            <div className="flex gap-4 pt-2 border-t border-gray-100 dark:border-gray-800">
              <button onClick={() => toast.success('Liked!')} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-500 transition">
                <Heart className="w-4 h-4" /> {p.likes}
              </button>
              <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-500 transition">
                <MessageCircle className="w-4 h-4" /> {p.comments}
              </button>
              <button onClick={() => { navigator.clipboard?.writeText(p.content); toast.success('Post copied!'); }}
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ===== NOTIFICATIONS =====
export const NotificationsSection: React.FC = () => {
  const { i18n } = useTranslation();
  const t = getLearnerTranslation(i18n.language);
  const [notifs, setNotifs] = useState([
    { id: 1, type: 'mentor', icon: Users, title: t.newMentor, desc: 'Priya Sundaram (98% match) is now available for sessions.', time: '10 min ago', read: false, color: 'violet' },
    { id: 2, type: 'order', icon: ShoppingBag, title: t.newOrder, desc: 'Deepa M. ordered "Custom Silk Blouse" — ₹450.', time: '1 hour ago', read: false, color: 'blue' },
    { id: 3, type: 'scheme', icon: Award, title: t.schemeMatch, desc: 'You are now eligible for PMEGP 35% Subsidy.', time: '3 hours ago', read: false, color: 'emerald' },
    { id: 4, type: 'cert', icon: Award, title: t.certEarned, desc: 'Congratulations! "GST Filing" certificate is ready.', time: '1 day ago', read: true, color: 'amber' },
  ]);

  const markAllRead = () => {
    setNotifs(notifs.map(n => ({ ...n, read: true })));
    toast.success(t.markAllRead + '!');
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-900/20 to-red-900/10 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-white">{t.notificationsTitle}</h2>
          <p className="text-sm text-gray-400 mt-1">{notifs.filter(n => !n.read).length} unread notifications</p>
        </div>
        <button onClick={markAllRead} className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition">{t.markAllRead}</button>
      </div>
      <div className="space-y-3">
        {notifs.map(n => {
          const Icon = n.icon;
          const colorMap: Record<string, string> = { violet: 'bg-violet-500/20 text-violet-400', blue: 'bg-blue-500/20 text-blue-400', emerald: 'bg-emerald-500/20 text-emerald-400', amber: 'bg-amber-500/20 text-amber-400' };
          return (
            <div key={n.id} onClick={() => setNotifs(notifs.map(nn => nn.id === n.id ? { ...nn, read: true } : nn))}
              className={`glass-card p-4 rounded-2xl border border-gray-200 dark:border-gray-700/50 flex items-start gap-4 cursor-pointer transition hover:border-gray-300 dark:hover:border-gray-600 ${!n.read ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}>
              <div className={`p-2.5 rounded-xl ${colorMap[n.color]} flex-shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{n.title}</p>
                  {!n.read && <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{n.desc}</p>
                <p className="text-[11px] text-gray-400 mt-1">{n.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ===== SETTINGS =====
export const SettingsSection: React.FC = () => {
  const { i18n } = useTranslation();
  const t = getLearnerTranslation(i18n.language);
  const { theme, toggleTheme } = useTheme();

  const languages = [
    { code: 'en', name: 'English' }, { code: 'ta', name: 'Tamil (தமிழ்)' },
    { code: 'hi', name: 'Hindi (हिंदी)' }, { code: 'te', name: 'Telugu (తెలుగు)' },
    { code: 'kn', name: 'Kannada (ಕನ್ನಡ)' }, { code: 'ml', name: 'Malayalam (മലയാളം)' },
    { code: 'mr', name: 'Marathi (मराठी)' }, { code: 'bn', name: 'Bengali (বাংলা)' },
    { code: 'gu', name: 'Gujarati (ગુજરાતી)' }, { code: 'ur', name: 'Urdu (اردو)' },
  ];

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl border border-gray-500/20">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">{t.settingsTitle}</h2>
      </div>

      {/* Language Settings */}
      <div className="glass-card p-6 rounded-3xl border border-gray-200 dark:border-gray-700/50 space-y-4">
        <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><Globe className="w-5 h-5 text-blue-500" />{t.languageSettings}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {languages.map(lang => (
            <button key={lang.code} onClick={() => { i18n.changeLanguage(lang.code); toast.success(`Language changed to ${lang.name}!`); }}
              className={`py-2.5 px-3 rounded-2xl text-xs font-bold transition ${i18n.language.startsWith(lang.code) ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
              {lang.name}
            </button>
          ))}
        </div>
      </div>

      {/* Theme Settings */}
      <div className="glass-card p-6 rounded-3xl border border-gray-200 dark:border-gray-700/50 space-y-4">
        <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">{theme === 'dark' ? <Moon className="w-5 h-5 text-indigo-500" /> : <Sun className="w-5 h-5 text-amber-500" />}{t.themeSettings}</h3>
        <div className="flex gap-3">
          <button onClick={() => theme !== 'dark' && toggleTheme()}
            className={`flex-1 py-3 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition ${theme === 'dark' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700'}`}>
            <Moon className="w-4 h-4" /> {t.darkMode}
          </button>
          <button onClick={() => theme !== 'light' && toggleTheme()}
            className={`flex-1 py-3 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition ${theme === 'light' ? 'bg-amber-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
            <Sun className="w-4 h-4" /> {t.lightMode}
          </button>
        </div>
      </div>

      {/* Password Settings */}
      <div className="glass-card p-6 rounded-3xl border border-gray-200 dark:border-gray-700/50 space-y-4">
        <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><Lock className="w-5 h-5 text-red-500" />{t.passwordSettings}</h3>
        <div className="space-y-3">
          {['Current Password', 'New Password', 'Confirm New Password'].map((label, i) => (
            <div key={i}>
              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">{label}</label>
              <input type="password" className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-500 transition" />
            </div>
          ))}
          <button onClick={() => toast.success('Password updated!')}
            className="px-5 py-2.5 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition">
            {t.changePassword}
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="glass-card p-6 rounded-3xl border border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/10">
        <h3 className="font-bold text-red-700 dark:text-red-400 flex items-center gap-2 mb-3"><AlertCircle className="w-5 h-5" />Danger Zone</h3>
        <p className="text-xs text-red-600 dark:text-red-500 mb-4">Deleting your account is permanent and cannot be undone.</p>
        <button onClick={() => toast.error('Account deletion requires email confirmation.')}
          className="px-5 py-2.5 rounded-2xl border border-red-300 dark:border-red-700 text-red-700 dark:text-red-400 font-bold text-sm hover:bg-red-100 dark:hover:bg-red-950/30 transition flex items-center gap-2">
          <Trash2 className="w-4 h-4" /> {t.deleteAccount}
        </button>
      </div>
    </div>
  );
};
