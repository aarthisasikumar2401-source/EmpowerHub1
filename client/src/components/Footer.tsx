// EMPOWER HUB - Footer Component

import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Heart, ShieldCheck, Globe, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800/80 bg-white/50 dark:bg-gray-950/50 backdrop-blur-md pt-12 pb-8 px-4 lg:px-8 text-xs text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            </div>
            <span className="font-extrabold text-lg text-gradient">EMPOWER HUB</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-[11px] leading-relaxed">
            "From Talent to Opportunity, From Opportunity to Empowerment." An AI-powered startup ecosystem combining skill discovery, hybrid learning, business creation, and marketplace monetization.
          </p>
          <div className="flex items-center gap-2 text-emerald-500 font-semibold text-[10px]">
            <ShieldCheck className="w-4 h-4" /> ISO-Grade Security & Supabase RLS Protected
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wider text-[11px]">Platform Avenues</h4>
          <ul className="space-y-2">
            <li><Link to="/forge" className="hover:text-blue-500 transition">AI Opportunity Forge</Link></li>
            <li><Link to="/tutor" className="hover:text-blue-500 transition">AI Tutor & Hybrid Learning</Link></li>
            <li><Link to="/marketplace" className="hover:text-blue-500 transition">Artisanal & Service Marketplace</Link></li>
            <li><Link to="/business-builder" className="hover:text-blue-500 transition">AI Business & Brand Builder</Link></li>
            <li><Link to="/funding" className="hover:text-blue-500 transition">Government Schemes & Loans</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wider text-[11px]">User Dashboards</h4>
          <ul className="space-y-2">
            <li><Link to="/dashboard" className="hover:text-blue-500 transition">Learner Opportunity Passport</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-500 transition">Verified Mentor Portal</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-500 transition">Business & Talent Dashboard</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-500 transition">Admin Governance Console</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wider text-[11px]">Supported Languages</h4>
          <p className="text-[11px] mb-3">Supporting 10 regional Indian & global languages with auto speech conversion.</p>
          <div className="flex flex-wrap gap-1 text-[10px] font-semibold text-blue-500">
            <span>English</span> • <span>தமிழ்</span> • <span>हिंदी</span> • <span>తెలుగు</span> • <span>ಕನ್ನಡ</span> • <span>മലയാളം</span> • <span>मराठी</span> • <span>বাংলা</span> • <span>ગુજરાતી</span> • <span>اردو</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800/80 pt-4 flex flex-wrap items-center justify-between gap-4 text-[11px] text-gray-500">
        <p>© 2026 EMPOWER HUB Inc. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for global human potential & entrepreneurship.
        </p>
      </div>
    </footer>
  );
};
