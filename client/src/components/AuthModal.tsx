// EMPOWER HUB - User Authentication Modal Component

import React, { useState } from 'react';
import { useAuth, UserRole } from '../context/AuthContext';
import { X, Lock, Mail, User, Phone, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>('learner');
  const [email, setEmail] = useState('learner@empowerhub.io');
  const [password, setPassword] = useState('password123');
  const [name, setName] = useState('Ananya Sharma');
  const [skills, setSkills] = useState('Tailoring, Handicrafts');

  const { login } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, selectedRole);
    toast.success(`Welcome to EMPOWER HUB! Logged in as ${selectedRole.toUpperCase()}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="glass-card w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-blue-500/20 p-6 relative">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-200">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 mx-auto flex items-center justify-center mb-2 shadow-lg">
            <Sparkles className="w-6 h-6 text-amber-300" />
          </div>
          <h2 className="font-extrabold text-xl text-gradient">
            {isRegister ? 'Join EMPOWER HUB' : 'Sign In to EMPOWER HUB'}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            "From Talent to Opportunity, From Opportunity to Empowerment."
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl mb-4 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setSelectedRole('learner')}
            className={`py-1.5 rounded-lg transition ${selectedRole === 'learner' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 dark:text-gray-400'}`}
          >
            Learner
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole('mentor')}
            className={`py-1.5 rounded-lg transition ${selectedRole === 'mentor' ? 'bg-purple-600 text-white shadow' : 'text-gray-600 dark:text-gray-400'}`}
          >
            Mentor
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole('business')}
            className={`py-1.5 rounded-lg transition ${selectedRole === 'business' ? 'bg-emerald-600 text-white shadow' : 'text-gray-600 dark:text-gray-400'}`}
          >
            Business
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          {isRegister && (
            <div>
              <label className="block font-medium mb-1 text-gray-700 dark:text-gray-300">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block font-medium mb-1 text-gray-700 dark:text-gray-300">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700 dark:text-gray-300">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {isRegister && (
            <div>
              <label className="block font-medium mb-1 text-gray-700 dark:text-gray-300">Your Skills (Comma separated)</label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="e.g. Tailoring, Cooking, Digital Marketing"
                className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-lg transition mt-2"
          >
            {isRegister ? 'Create Free Account' : 'Sign In Now'}
          </button>
        </form>

        <div className="mt-4 text-center text-[11px] text-gray-500">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-500 font-bold hover:underline"
          >
            {isRegister ? 'Sign In' : 'Register Now'}
          </button>
        </div>

      </div>
    </div>
  );
};
