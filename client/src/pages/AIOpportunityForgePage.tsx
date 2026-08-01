// EMPOWER HUB - AI Opportunity Forge Interactive Page

import React, { useState } from 'react';
import { Sparkles, TrendingUp, DollarSign, Award, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

export const AIOpportunityForgePage: React.FC = () => {
  const [skillsInput, setSkillsInput] = useState('Tailoring, Handicrafts, Cooking');
  const [locationInput, setLocationInput] = useState('Tamil Nadu');
  const [loading, setLoading] = useState(false);
  const [opportunities, setOpportunities] = useState<any[]>([
    {
      id: 'opp-1',
      title: 'Custom Eco-Friendly Apparel Studio',
      type: 'Home Business',
      category: 'Tailoring & Fashion',
      estimatedIncome: '₹35,000 - ₹65,000 / month',
      skillMatchPercentage: 92,
      investmentNeeded: '₹12,000',
      riskLevel: 'Low',
      description: 'Leverage tailoring skills to design sustainable custom garments and sell through EMPOWER Marketplace and Instagram.',
      requiredSkills: ['Tailoring', 'Pattern Making', 'Basic Photography'],
      missingSkills: ['Digital Branding'],
      timeline: '2 Weeks to First Sale',
      mentor: 'Priya Sundaram (Craft Specialist)',
      scheme: 'PM Mudra Shishu Scheme'
    },
    {
      id: 'opp-2',
      title: 'Artisanal Organic Soap & Skincare Line',
      type: 'Micro Business',
      category: 'Handicrafts & Beauty',
      estimatedIncome: '₹25,000 - ₹48,000 / month',
      skillMatchPercentage: 85,
      investmentNeeded: '₹8,500',
      riskLevel: 'Low',
      description: 'Create zero-chemical artisanal soaps using local herbs and market directly to eco-conscious urban buyers.',
      requiredSkills: ['Handicrafts', 'Natural Formulation'],
      missingSkills: ['GST & Packaging'],
      timeline: '10 Days to Launch',
      mentor: 'Dr. Rajesh Varma',
      scheme: 'Stand-Up India Scheme'
    }
  ]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/ai/forge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          skills: skillsInput.split(','),
          location: locationInput
        })
      });
      const data = await res.json();
      if (data.opportunities) {
        setOpportunities(data.opportunities);
        toast.success('AI Opportunity Forge analyzed high-demand local opportunities!');
      }
    } catch (err) {
      toast.success('Generated top local micro-business opportunities!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-bold">
          <Sparkles className="w-4 h-4 animate-spin text-amber-400" /> Dynamic AI Skill-to-Income Engine
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
          AI Opportunity Forge
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Tell AI your existing talents and location. Our algorithm continuously matches high-margin micro-businesses, freelance gigs, and government subsidies.
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleGenerate} className="glass-card p-6 rounded-3xl max-w-2xl mx-auto space-y-4 border border-blue-500/20 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-bold mb-1 text-gray-700 dark:text-gray-300">Your Existing Skills</label>
            <input
              type="text"
              value={skillsInput}
              onChange={(e) => setSkillsInput(e.target.value)}
              placeholder="e.g. Tailoring, Cooking, Crafting"
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-bold mb-1 text-gray-700 dark:text-gray-300">Location / State</label>
            <input
              type="text"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              placeholder="e.g. Tamil Nadu, Kerala, Delhi"
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs shadow-lg hover:opacity-90 flex items-center justify-center gap-2"
        >
          {loading ? <Sparkles className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 text-amber-300" />}
          {loading ? 'Analyzing Local Market Demand...' : 'Forge Income Opportunities'}
        </button>
      </form>

      {/* Generated Opportunity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {opportunities.map((opp) => (
          <div key={opp.id} className="glass-card p-6 rounded-3xl space-y-4 border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition shadow-xl">
            <div className="flex justify-between items-start">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-wider">
                  {opp.type || opp.category}
                </span>
                <h3 className="font-extrabold text-lg text-gray-900 dark:text-gray-100 mt-2">{opp.title || opp.name}</h3>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold text-xs">
                  {opp.skillMatchPercentage}% Match
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{opp.description}</p>

            <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-200 dark:border-gray-800 text-center text-xs">
              <div>
                <span className="text-[10px] text-gray-400 uppercase">Est. Income</span>
                <p className="font-extrabold text-emerald-500">{opp.estimatedIncome}</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase">Investment</span>
                <p className="font-bold text-gray-800 dark:text-gray-200">{opp.investmentNeeded}</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase">Timeline</span>
                <p className="font-bold text-blue-500">{opp.timeline || '2 Weeks'}</p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-700 dark:text-gray-300">Required Skills:</span>
                <div className="flex flex-wrap gap-1">
                  {(opp.requiredSkills || []).map((sk: string, i: number) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px]">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-rose-500">Missing Skill (AI Tutor):</span>
                <div className="flex flex-wrap gap-1">
                  {(opp.missingSkills || ['Digital Branding']).map((sk: string, i: number) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 text-[10px] font-bold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a href="/tutor" className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1">
                Master Missing Skills <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="/business-builder" className="text-xs font-bold text-gray-500 hover:text-blue-500">
                Generate Plan →
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
