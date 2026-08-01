// EMPOWER HUB - Auth & User Role State Context

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'learner' | 'mentor' | 'business' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  country?: string;
  state?: string;
  city?: string;
  preferredLanguage: string;
  skills: string[];
  education?: string;
  occupation?: string;
  opportunityScore: number;
  businessReadinessScore: number;
  financialReadinessScore: number;
  walletBalance: number;
  avatar: string;
}

interface AuthContextType {
  user: UserProfile | null;
  role: UserRole;
  isAuthenticated: boolean;
  login: (email: string, role?: UserRole) => void;
  logout: () => void;
  switchRole: (role: UserRole) => void;
  updateProfile: (updated: Partial<UserProfile>) => void;
}

const defaultUser: UserProfile = {
  id: 'usr-learner-01',
  name: 'Ananya Sharma',
  email: 'learner@empowerhub.io',
  role: 'learner',
  phone: '+91 9876543210',
  country: 'India',
  state: 'Tamil Nadu',
  city: 'Chennai',
  preferredLanguage: 'en',
  skills: ['Tailoring', 'Handicrafts', 'Basic Accounting', 'Social Media'],
  education: 'Higher Secondary',
  occupation: 'Aspiring Artisan & Entrepreneur',
  opportunityScore: 88,
  businessReadinessScore: 74,
  financialReadinessScore: 80,
  walletBalance: 3450.00,
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(defaultUser);

  const switchRole = (role: UserRole) => {
    if (role === 'learner') {
      setUser(defaultUser);
    } else if (role === 'mentor') {
      setUser({
        id: 'usr-mentor-01',
        name: 'Dr. Rajesh Varma',
        email: 'mentor@empowerhub.io',
        role: 'mentor',
        phone: '+91 9812345678',
        preferredLanguage: 'en',
        skills: ['E-Commerce Strategy', 'Digital Marketing', 'Startup Advisory'],
        opportunityScore: 96,
        businessReadinessScore: 98,
        financialReadinessScore: 95,
        walletBalance: 14200.00,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
      });
    } else if (role === 'business') {
      setUser({
        id: 'usr-business-01',
        name: 'Apex Artisan Collective',
        email: 'business@empowerhub.io',
        role: 'business',
        phone: '+91 9765432109',
        preferredLanguage: 'en',
        skills: ['Bulk Craft Sourcing', 'Supply Chain', 'Export'],
        opportunityScore: 92,
        businessReadinessScore: 94,
        financialReadinessScore: 90,
        walletBalance: 48500.00,
        avatar: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150&auto=format&fit=crop&q=80'
      });
    } else if (role === 'admin') {
      setUser({
        id: 'usr-admin-01',
        name: 'Platform Administrator',
        email: 'admin@empowerhub.io',
        role: 'admin',
        phone: '+91 9000000000',
        preferredLanguage: 'en',
        skills: ['System Operations', 'AI Governance'],
        opportunityScore: 99,
        businessReadinessScore: 99,
        financialReadinessScore: 99,
        walletBalance: 250000.00,
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
      });
    }
  };

  const login = (email: string, targetRole?: UserRole) => {
    switchRole(targetRole || 'learner');
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updated: Partial<UserProfile>) => {
    if (user) {
      setUser({ ...user, ...updated });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role: user ? user.role : 'learner',
        isAuthenticated: !!user,
        login,
        logout,
        switchRole,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
