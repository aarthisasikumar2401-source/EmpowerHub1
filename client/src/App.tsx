// EMPOWER HUB - Main React Application Component

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { VoiceProvider } from './context/VoiceContext';
import './locales/i18n';

import { DemoRoleSwitcher } from './components/DemoRoleSwitcher';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VoiceAssistantButton } from './components/VoiceAssistantButton';
import { GlobalAIChatModal } from './components/GlobalAIChatModal';
import { AuthModal } from './components/AuthModal';

import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { AIOpportunityForgePage } from './pages/AIOpportunityForgePage';
import { AITutorPage } from './pages/AITutorPage';
import { MarketplacePage } from './pages/MarketplacePage';
import { AIBusinessBuilderPage } from './pages/AIBusinessBuilderPage';
import { FundingHubPage } from './pages/FundingHubPage';
import { CommunityPage } from './pages/CommunityPage';
import { LearnerDashboard } from './pages/LearnerDashboard';

import { Toaster } from 'react-hot-toast';

// Layout wrapper for pages WITH the global Navbar & Footer
const WithNavbar: React.FC<{ children: React.ReactNode; onOpenAuth: () => void; onOpenAIChat: () => void }> = ({
  children, onOpenAuth, onOpenAIChat
}) => (
  <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0B0F17] text-gray-900 dark:text-gray-100 transition-colors duration-200">
    <DemoRoleSwitcher />
    <Navbar onOpenAuth={onOpenAuth} onOpenAIChat={onOpenAIChat} />
    <main className="flex-1">{children}</main>
    <Footer />
    <VoiceAssistantButton />
  </div>
);

export const App: React.FC = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <VoiceProvider>

            <Routes>
              {/* ===== LEARNER DASHBOARD — Standalone (no global navbar) ===== */}
              <Route path="/learner" element={<LearnerDashboard />} />
              <Route path="/learner/*" element={<LearnerDashboard />} />

              {/* ===== ALL OTHER PAGES — With Global Navbar ===== */}
              <Route path="/*" element={
                <WithNavbar onOpenAuth={() => setIsAuthOpen(true)} onOpenAIChat={() => setIsAIChatOpen(true)}>
                  <Routes>
                    <Route path="/" element={<LandingPage onOpenAuth={() => setIsAuthOpen(true)} onOpenAIChat={() => setIsAIChatOpen(true)} />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/forge" element={<AIOpportunityForgePage />} />
                    <Route path="/tutor" element={<AITutorPage />} />
                    <Route path="/marketplace" element={<MarketplacePage />} />
                    <Route path="/business-builder" element={<AIBusinessBuilderPage />} />
                    <Route path="/funding" element={<FundingHubPage />} />
                    <Route path="/community" element={<CommunityPage />} />
                  </Routes>

                  {/* Modals */}
                  <GlobalAIChatModal isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
                  <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
                </WithNavbar>
              } />
            </Routes>

            {/* Toast Notifications — always rendered */}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: { background: '#1e293b', color: '#f1f5f9', border: '1px solid #334155', borderRadius: '12px' }
              }}
            />

          </VoiceProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
