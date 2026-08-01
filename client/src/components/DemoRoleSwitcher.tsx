// EMPOWER HUB - Hackathon Presentation Role Switcher Toolbar

import React from 'react';
import { useAuth, UserRole } from '../context/AuthContext';
import { Sparkles, UserCheck, ShieldCheck, Briefcase, GraduationCap } from 'lucide-react';
import toast from 'react-hot-toast';

export const DemoRoleSwitcher: React.FC = () => {
  const { role, switchRole } = useAuth();

  const handleSwitch = (targetRole: UserRole) => {
    switchRole(targetRole);
    toast.success(`Switched active view to ${targetRole.toUpperCase()} Dashboard!`);
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-xs py-2 px-4 flex flex-wrap items-center justify-between border-b border-blue-500/20 z-50 sticky top-0 shadow-md">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        <span className="font-semibold tracking-wide text-amber-300 uppercase">Hackathon Demo Mode:</span>
        <span className="text-gray-300 hidden sm:inline">Switch views instantly to evaluate complete role dashboards:</span>
      </div>

      <div className="flex items-center gap-1.5 mt-1 sm:mt-0">
        <button
          onClick={() => handleSwitch('learner')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition ${role === 'learner' ? 'bg-blue-600 text-white font-bold ring-1 ring-white/50' : 'bg-white/10 hover:bg-white/20 text-gray-200'}`}
        >
          <GraduationCap className="w-3.5 h-3.5" /> Learner
        </button>

        <button
          onClick={() => handleSwitch('mentor')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition ${role === 'mentor' ? 'bg-purple-600 text-white font-bold ring-1 ring-white/50' : 'bg-white/10 hover:bg-white/20 text-gray-200'}`}
        >
          <UserCheck className="w-3.5 h-3.5" /> Mentor
        </button>

        <button
          onClick={() => handleSwitch('business')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition ${role === 'business' ? 'bg-emerald-600 text-white font-bold ring-1 ring-white/50' : 'bg-white/10 hover:bg-white/20 text-gray-200'}`}
        >
          <Briefcase className="w-3.5 h-3.5" /> Business
        </button>

        <button
          onClick={() => handleSwitch('admin')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition ${role === 'admin' ? 'bg-rose-600 text-white font-bold ring-1 ring-white/50' : 'bg-white/10 hover:bg-white/20 text-gray-200'}`}
        >
          <ShieldCheck className="w-3.5 h-3.5" /> Admin
        </button>
      </div>
    </div>
  );
};
