import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Users, Briefcase, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const DashboardSelector = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dashboards = [
    {
      id: 'learner',
      title: t('dashboards.learner.title', 'Learner Dashboard'),
      description: t('dashboards.learner.desc', 'Learn from AI, create business plans, and get started.'),
      icon: BookOpen,
      path: '/dashboard/learner',
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    {
      id: 'mentor',
      title: t('dashboards.mentor.title', 'Mentor Dashboard'),
      description: t('dashboards.mentor.desc', 'Guide students, set pricing, and manage appointments.'),
      icon: Users,
      path: '/dashboard/mentor',
      color: 'bg-green-500/10 text-green-400 border-green-500/20'
    },
    {
      id: 'business',
      title: t('dashboards.business.title', 'Business Dashboard'),
      description: t('dashboards.business.desc', 'Manage inventory, sales, customers, and analytics.'),
      icon: Briefcase,
      path: '/dashboard/business',
      color: 'bg-[#C41E3A]/10 text-[#C41E3A] border-[#C41E3A]/20'
    },
    {
      id: 'admin',
      title: t('dashboards.admin.title', 'Admin Dashboard'),
      description: t('dashboards.admin.desc', 'Platform overview, user management, and security.'),
      icon: Settings,
      path: '/dashboard/admin',
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white p-8">
      <div className="max-w-6xl mx-auto pt-16">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#C41E3A] to-[#E8B4B8] text-transparent bg-clip-text"
          >
            {t('dashboard_selector.title', 'Select Your Dashboard')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            {t('dashboard_selector.subtitle', 'Choose how you want to interact with Empower Hub today.')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboards.map((dash, index) => (
            <motion.div
              key={dash.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              onClick={() => navigate(dash.path)}
              className={`p-6 rounded-2xl border bg-[#1A1A2E]/50 backdrop-blur-sm cursor-pointer hover:shadow-2xl transition-all ${dash.color}`}
            >
              <dash.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{dash.title}</h3>
              <p className="text-sm text-gray-400 line-clamp-3">{dash.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
