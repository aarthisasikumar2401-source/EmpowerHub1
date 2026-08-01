// EMPOWER HUB - Modern Apple/Stripe Aesthetic Landing Page

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Sparkles,
  Zap,
  ArrowRight,
  TrendingUp,
  Award,
  ShoppingBag,
  Users,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  DollarSign,
  Briefcase,
  Landmark,
  ChevronRight,
  Play
} from 'lucide-react';
import { motion } from 'framer-motion';

interface LandingPageProps {
  onOpenAuth: () => void;
  onOpenAIChat: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenAuth, onOpenAIChat }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 px-4 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        {/* Background Blur Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 dark:bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Official Logo Banner */}
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="Empower Hub Official Logo" className="h-24 sm:h-32 w-auto object-contain drop-shadow-xl" />
          </div>

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 text-xs font-semibold shadow-sm">
            <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
            <span>From Talent to Opportunity, From Opportunity to Empowerment.</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
            Convert Your Existing Skills Into{' '}
            <span className="text-gradient">Sustainable Income</span> with AI.
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            EMPOWER HUB is the all-in-one AI ecosystem combining skill discovery, AI Tutor learning, digital business creation, micro-marketplace selling, and human mentor guidance.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigate('/forge')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm shadow-xl hover:shadow-blue-500/25 flex items-center gap-2 transition transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-amber-300" /> Launch AI Opportunity Forge <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/marketplace')}
              className="px-8 py-3.5 rounded-full glass-card hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold text-sm flex items-center gap-2 transition"
            >
              <ShoppingBag className="w-4 h-4 text-blue-500" /> Explore Marketplace
            </button>
          </div>
        </motion.div>

        {/* Animated Interactive AI Illustration Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 glass-card rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto text-left shadow-2xl border border-blue-500/20 relative"
        >
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-mono text-gray-400 pl-2">AI Opportunity Forge Live Engine</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[11px] font-bold">
              ● 92% Skill Match Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40">
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">1. Input Skill</div>
              <div className="font-extrabold text-sm text-gray-900 dark:text-gray-100">Tailoring & Embroidery</div>
              <p className="text-[11px] text-gray-500">Local artisan skills with basic smartphone literacy.</p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40">
              <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">2. AI Tutor & Brand</div>
              <div className="font-extrabold text-sm text-gray-900 dark:text-gray-100">Eco-Tote Boutique</div>
              <p className="text-[11px] text-gray-500">AI generated pricing, logo prompts & catalog descriptions.</p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">3. Sustainable Income</div>
              <div className="font-extrabold text-sm text-emerald-600 dark:text-emerald-400">₹35,000 / month</div>
              <p className="text-[11px] text-gray-500">Razorpay UPI payouts via EMPOWER Marketplace.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* USER JOURNEY SECTION */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            The Complete Transformation Journey
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            From discovering your latent skills to becoming a verified community mentor and business owner.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
          {[
            { step: '1', title: 'Discover Skills', icon: Sparkles },
            { step: '2', title: 'AI Opportunities', icon: TrendingUp },
            { step: '3', title: 'AI Tutor Lessons', icon: BookOpen },
            { step: '4', title: 'Build Products', icon: ShoppingBag },
            { step: '5', title: 'Start Earning', icon: DollarSign },
            { step: '6', title: 'Entrepreneur', icon: Briefcase },
            { step: '7', title: 'Empower Community', icon: Users }
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-4 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-2 hover:border-blue-500 transition">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mx-auto shadow-md">
                {item.step}
              </div>
              <h3 className="font-bold text-xs text-gray-900 dark:text-gray-100">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Enterprise Feature Suite</span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            LinkedIn + Coursera + Shopify + Fiverr Combined
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card p-6 rounded-3xl space-y-4 hover:shadow-xl transition">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-gray-900 dark:text-gray-100">AI Opportunity Forge</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Continuously analyzes local demand, skill gaps, and government schemes to output tailored micro-business blueprints.
            </p>
            <Link to="/forge" className="inline-flex items-center gap-1 text-xs font-bold text-blue-500 hover:underline">
              Launch Forge <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4 hover:shadow-xl transition">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-gray-900 dark:text-gray-100">AI Tutor & Hybrid Learning</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              24×7 free AI instructor for step-by-step skill building, seamlessly transitioning to paid 1-on-1 human mentor sessions when needed.
            </p>
            <Link to="/tutor" className="inline-flex items-center gap-1 text-xs font-bold text-purple-500 hover:underline">
              Start Learning <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4 hover:shadow-xl transition">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-gray-900 dark:text-gray-100">Craft & Service Marketplace</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Sell handmade crafts, digital products, consulting, or tutoring services with integrated Razorpay UPI checkout and wallet payouts.
            </p>
            <Link to="/marketplace" className="inline-flex items-center gap-1 text-xs font-bold text-emerald-500 hover:underline">
              Visit Marketplace <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* LIVE PLATFORM METRICS */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="glass-card p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-900/40 border border-blue-500/30 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-extrabold text-gradient">14,850+</div>
            <div className="text-xs font-medium text-gray-400 mt-1">Active Entrepreneurs</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-gradient">₹42.8 Lakhs</div>
            <div className="text-xs font-medium text-gray-400 mt-1">Monthly Member Income</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-gradient">320+</div>
            <div className="text-xs font-medium text-gray-400 mt-1">Verified Mentors</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-gradient">98.4%</div>
            <div className="text-xs font-medium text-gray-400 mt-1">AI Match Accuracy</div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          Ready to Build Your Sustainable Future?
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Join thousands of learners, mentors, and business creators transforming talent into independence.
        </p>
        <button
          onClick={onOpenAuth}
          className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl transition"
        >
          Create Free Account Now
        </button>
      </section>

    </div>
  );
};
