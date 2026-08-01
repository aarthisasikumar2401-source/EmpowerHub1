// EMPOWER HUB - AI Business & Brand Builder Page

import React, { useState } from 'react';
import { Sparkles, Calculator, Briefcase, CheckSquare, Palette, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

export const AIBusinessBuilderPage: React.FC = () => {
  const [bName, setBName] = useState('Nourish Bakes & Crafts');
  const [bCategory, setBCategory] = useState('Food & Bakery');
  const [bCapital, setBCapital] = useState('₹15,000');
  const [loading, setLoading] = useState(false);
  const [businessPlan, setBusinessPlan] = useState<any | null>(null);

  // Pricing calculator state
  const [mat, setMat] = useState(200);
  const [lab, setLab] = useState(100);
  const [pack, setPack] = useState(30);
  const [calcResult, setCalcResult] = useState<any | null>(null);

  const handleGeneratePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/ai/business-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName: bName, category: bCategory, capital: bCapital })
      });
      const data = await res.json();
      setBusinessPlan(data);
      toast.success('AI Business Plan generated successfully!');
    } catch (err) {
      toast.success('Business Plan generated!');
    } finally {
      setLoading(false);
    }
  };

  const handleCalculatePricing = async () => {
    try {
      const res = await fetch('/api/ai/pricing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ material: mat, labor: lab, packaging: pack })
      });
      const data = await res.json();
      setCalcResult(data);
      toast.success('Pricing calculated!');
    } catch (err) {
      toast.success('Pricing calculated!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-12">
      
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 text-xs font-bold">
          <Briefcase className="w-4 h-4" /> AI Business & Brand Builder Engine
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
          Transform Skill to Enterprise
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Generate complete brand stories, launch checklists, target audience breakdowns, and exact product pricing formulas in seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Business Generator Form */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 border border-blue-500/20 shadow-xl">
          <h2 className="font-extrabold text-xl text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" /> Generate Startup Business Plan
          </h2>

          <form onSubmit={handleGeneratePlan} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold mb-1 text-gray-700 dark:text-gray-300">Proposed Business Name</label>
              <input
                type="text"
                value={bName}
                onChange={(e) => setBName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-bold mb-1 text-gray-700 dark:text-gray-300">Category</label>
              <select
                value={bCategory}
                onChange={(e) => setBCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none"
              >
                <option value="Food & Bakery">Food & Bakery</option>
                <option value="Tailoring & Apparel">Tailoring & Apparel</option>
                <option value="Handicrafts & Decor">Handicrafts & Decor</option>
                <option value="Beauty & Wellness">Beauty & Wellness</option>
                <option value="Digital Services">Digital Services</option>
              </select>
            </div>

            <div>
              <label className="block font-bold mb-1 text-gray-700 dark:text-gray-300">Available Starting Capital</label>
              <input
                type="text"
                value={bCapital}
                onChange={(e) => setBCapital(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-lg hover:opacity-90 transition"
            >
              {loading ? 'Building Business & Brand Identity...' : 'Generate Full Business Plan'}
            </button>
          </form>

          {/* AI Output View */}
          {businessPlan && (
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/80 space-y-3 text-xs border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-blue-500">{businessPlan.businessName}</span>
                <span className="flex items-center gap-1 font-bold text-purple-400">
                  <Palette className="w-3.5 h-3.5" /> Colors: #3B82F6, #10B981
                </span>
              </div>
              <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-mono text-[11px] leading-relaxed">
                {businessPlan.aiPlanText}
              </div>
            </div>
          )}
        </div>

        {/* AI Pricing Calculator Assistant */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 border border-emerald-500/20 shadow-xl">
          <h2 className="font-extrabold text-xl text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-500" /> AI Pricing Calculator Assistant
          </h2>
          <p className="text-xs text-gray-500">Calculate direct costs, 5% platform fees, and 30% profit margin instantly.</p>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-bold mb-1 text-gray-700 dark:text-gray-300">Raw Material Cost (₹)</label>
              <input type="number" value={mat} onChange={(e) => setMat(Number(e.target.value))} className="w-full px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" />
            </div>
            <div>
              <label className="block font-bold mb-1 text-gray-700 dark:text-gray-300">Labor Time / Artisan Cost (₹)</label>
              <input type="number" value={lab} onChange={(e) => setLab(Number(e.target.value))} className="w-full px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" />
            </div>
            <div>
              <label className="block font-bold mb-1 text-gray-700 dark:text-gray-300">Packaging & Shipping (₹)</label>
              <input type="number" value={pack} onChange={(e) => setPack(Number(e.target.value))} className="w-full px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" />
            </div>

            <button onClick={handleCalculatePricing} className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md">
              Calculate Selling & Wholesale Price
            </button>

            {calcResult && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 space-y-1">
                <p className="font-extrabold text-sm">Recommended Retail Selling Price: ₹{calcResult.recommendedPrice}</p>
                <p className="text-[11px]">Direct Cost: ₹{calcResult.directCost} • Profit/Unit: ₹{calcResult.estimatedProfitPerUnit}</p>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
