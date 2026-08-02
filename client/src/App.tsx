import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { VoiceOrb } from './components/voice/VoiceOrb';
import { LandingPage } from './pages/LandingPage';
import { DashboardSelector } from './pages/Dashboard/DashboardSelector';
import { LearnerDashboard } from './pages/Dashboard/LearnerDashboard';
import { MentorDashboard } from './pages/Dashboard/MentorDashboard';
import { BusinessDashboard } from './pages/Dashboard/BusinessDashboard';
import { AdminDashboard } from './pages/Dashboard/AdminDashboard';
import './i18n'; // translation init if exists

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0F0F1A] font-sans">
        {/* Global Voice Assistant Orb */}
        <VoiceOrb />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardSelector />} />
          <Route path="/dashboard/learner" element={<LearnerDashboard />} />
          <Route path="/dashboard/mentor" element={<MentorDashboard />} />
          <Route path="/dashboard/business" element={<BusinessDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          
          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
