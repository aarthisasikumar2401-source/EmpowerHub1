// EMPOWER HUB - Glassmorphic Navigation Bar

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import {
  Zap,
  Globe,
  Sun,
  Moon,
  Search,
  Bell,
  User,
  LogOut,
  ShoppingBag,
  Sparkles,
  Award,
  BookOpen,
  Landmark,
  Users
} from 'lucide-react';
import toast from 'react-hot-toast';

interface NavbarProps {
  onOpenAuth: () => void;
  onOpenAIChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onOpenAIChat }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ta', name: 'தமிழ் (Tamil)' },
    { code: 'hi', name: 'हिंदी (Hindi)' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
    { code: 'ml', name: 'മലയാളം (Malayalam)' },
    { code: 'mr', name: 'मराठी (Marathi)' },
    { code: 'bn', name: 'বাংলা (Bengali)' },
    { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
    { code: 'ur', name: 'اردو (Urdu)' }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    toast.success(`Searching for "${searchQuery}" across opportunities & marketplace...`);
    navigate(`/marketplace?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav className="glass-nav sticky top-8 z-40 px-4 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo & Tagline */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-pink-500 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
            </div>
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-gradient">
              EMPOWER HUB
            </span>
            <span className="hidden xl:block text-[10px] text-gray-500 dark:text-gray-400 font-medium">
              Talent → Opportunity → Empowerment
            </span>
          </div>
        </Link>

        {/* Global Search Bar */}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-md relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills, opportunities, mentors, schemes..."
            className="w-full pl-9 pr-4 py-1.5 text-xs rounded-full bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </form>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-5 text-xs font-medium text-gray-700 dark:text-gray-300">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/forge" className="flex items-center gap-1 hover:text-blue-500 transition text-amber-500 font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Opportunity Forge
          </Link>
          <Link to="/tutor" className="flex items-center gap-1 hover:text-blue-500 transition">
            <BookOpen className="w-3.5 h-3.5" /> AI Tutor
          </Link>
          <Link to="/marketplace" className="flex items-center gap-1 hover:text-blue-500 transition">
            <ShoppingBag className="w-3.5 h-3.5" /> Marketplace
          </Link>
          <Link to="/business-builder" className="hover:text-blue-500 transition">Business Builder</Link>
          <Link to="/funding" className="flex items-center gap-1 hover:text-blue-500 transition">
            <Landmark className="w-3.5 h-3.5" /> Schemes
          </Link>
          <Link to="/community" className="flex items-center gap-1 hover:text-blue-500 transition">
            <Users className="w-3.5 h-3.5" /> Community
          </Link>
          {isAuthenticated && (
            <Link to="/dashboard" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
              Dashboard
            </Link>
          )}
        </div>

        {/* Actions & Utilities */}
        <div className="flex items-center gap-3">
          
          {/* AI Assistant Button */}
          <button
            onClick={onOpenAIChat}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-md hover:opacity-90 transition"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" /> Ask AI
          </button>

          {/* Language Dropdown Selector */}
          <div className="relative group">
            <button className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1 text-xs">
              <Globe className="w-4 h-4 text-blue-500" />
              <span className="uppercase font-bold">{i18n.language.slice(0,2)}</span>
            </button>
            <div className="absolute right-0 mt-1 w-44 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 py-1 hidden group-hover:block z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    toast.success(`Language set to ${lang.name}`);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-blue-50 dark:hover:bg-blue-900/30 transition flex items-center justify-between ${i18n.language === lang.code ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          {/* Dark/Light Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            title="Toggle Dark / Light Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Notifications Icon */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition relative"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full animate-ping"></span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 p-3 z-50 text-xs">
                <div className="font-bold text-gray-900 dark:text-gray-100 mb-2 pb-1 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                  <span>Notifications</span>
                  <span className="text-[10px] text-blue-500 font-normal">3 New</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-200">
                    <p className="font-semibold">🎉 92% Match Found!</p>
                    <p className="text-[11px] opacity-80">Eco-Friendly Apparel Studio matches your tailoring skills.</p>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-200">
                    <p className="font-semibold">💰 Order Payment Received</p>
                    <p className="text-[11px] opacity-80">₹699 credited to your EMPOWER Wallet via Razorpay.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Auth Profile Button */}
          {isAuthenticated && user ? (
            <div className="flex items-center gap-2 pl-2 border-l border-gray-300 dark:border-gray-800">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-7 h-7 rounded-full object-cover border border-blue-500"
                />
                <span className="hidden md:inline text-xs font-semibold text-gray-800 dark:text-gray-200 max-w-[100px] truncate">
                  {user.name}
                </span>
              </button>
              <button
                onClick={logout}
                className="p-1.5 text-gray-500 hover:text-rose-500 transition"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition shadow-md"
            >
              Sign In
            </button>
          )}

        </div>

      </div>
    </nav>
  );
};
