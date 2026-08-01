// EMPOWER HUB - Funding & Government Schemes Hub Page

import React, { useState } from 'react';
import { Landmark, Award, ShieldCheck, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

export const FundingHubPage: React.FC = () => {
  const [selectedScheme, setSelectedScheme] = useState<any | null>(null);

  const schemes = [
    {
      id: 'sch-1',
      title: 'PM Mudra Yojana (PMMY) Shishu / Kishore Loan',
      ministry: 'Ministry of Finance',
      subsidyAmount: 'Up to ₹5,000,000 Collateral Free',
      category: 'Micro Enterprises & Artisans',
      eligibility: 'Any Indian citizen initiating micro-business or expanding artisan unit.',
      link: 'https://www.mudra.org.in',
      matchScore: 98
    },
    {
      id: 'sch-2',
      title: 'Stand-Up India Scheme for Women Entrepreneurs',
      ministry: 'Ministry of Financial Services',
      subsidyAmount: '₹10 Lakh to ₹1 Crore Loan',
      category: 'Women & SC/ST Entrepreneurs',
      eligibility: 'Women entrepreneurs starting greenfield micro or manufacturing enterprises.',
      link: 'https://www.standupmitra.in',
      matchScore: 95
    },
    {
      id: 'sch-3',
      title: 'PMEGP (Prime Minister Employment Generation Programme)',
      ministry: 'MSME',
      subsidyAmount: 'Up to 35% Capital Subsidy',
      category: 'Self-Employment Generation',
      eligibility: 'Individuals above 18 years establishing manufacturing or service units.',
      link: 'https://www.kviconline.gov.in',
      matchScore: 90
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-10">
      
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-bold">
          <Landmark className="w-4 h-4" /> AI Government Scheme & Micro-Grants Matcher
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
          Funding & Government Subsidies Hub
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Discover zero-collateral government loans, grants, incubators, and subsidies matched directly to your gender, state, and business model.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {schemes.map((sch) => (
          <div key={sch.id} className="glass-card p-6 rounded-3xl space-y-4 border border-gray-200 dark:border-gray-800 hover:border-amber-500 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 font-bold text-[10px]">
                  {sch.ministry}
                </span>
                <span className="text-emerald-400 font-extrabold text-xs">
                  {sch.matchScore}% Eligible
                </span>
              </div>

              <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100 mt-3">{sch.title}</h3>
              <p className="text-xs text-emerald-500 font-bold mt-1">{sch.subsidyAmount}</p>

              <div className="p-3 bg-gray-50 dark:bg-gray-800/80 rounded-2xl text-[11px] text-gray-500 dark:text-gray-400 mt-3">
                <strong>Eligibility:</strong> {sch.eligibility}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <button onClick={() => toast.success('AI Proposal Builder generated application document!')} className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-xs shadow-md">
                Generate Application Draft
              </button>
              <a href={sch.link} target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-amber-500">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
