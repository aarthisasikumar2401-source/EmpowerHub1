// EMPOWER HUB — Learner Profile Section (Complete Form)

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getLearnerTranslation } from '../../locales/learnerTranslations';
import { useAuth } from '../../context/AuthContext';
import {
  Camera, Save, User, Mail, Phone, MapPin, Briefcase,
  GraduationCap, Globe, Linkedin, Github, BookOpen,
  Award, Star, CheckCircle2, AlertCircle, ExternalLink
} from 'lucide-react';
import toast from 'react-hot-toast';

const SKILLS_SUGGESTIONS = [
  'Tailoring', 'Photography', 'Painting', 'Carpentry', 'Baking',
  'Cooking', 'Embroidery', 'Pottery', 'Jewelry Making', 'Candle Making',
  'Web Design', 'Graphic Design', 'Teaching', 'Yoga', 'Music',
];

const LANGUAGES_LIST = ['English', 'Tamil', 'Hindi', 'Telugu', 'Kannada', 'Malayalam', 'Marathi', 'Bengali', 'Gujarati', 'Urdu'];

export const ProfileSection: React.FC = () => {
  const { i18n } = useTranslation();
  const { user, updateProfile } = useAuth();
  const t = getLearnerTranslation(i18n.language);

  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    city: user?.city || '',
    state: user?.state || '',
    skills: (user?.skills || []).join(', '),
    experience: user?.experience || '',
    education: user?.education || '',
    occupation: user?.occupation || '',
    languages: '',
    portfolio: '',
    linkedin: '',
    github: '',
    website: '',
    businessInterests: '',
    bio: '',
  });

  const [activeTab, setActiveTab] = useState<'personal' | 'skills' | 'links' | 'business'>('personal');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      updateProfile({
        name: form.name,
        phone: form.phone,
        city: form.city,
        state: form.state,
        skills: form.skills.split(',').map(s => s.trim()).filter(Boolean),
        education: form.education,
        occupation: form.occupation,
      });
      setIsSaving(false);
      toast.success(t.saveProfile + ' successful!');
    }, 1000);
  };

  const completionFields = [
    { label: t.fullName, done: !!form.name },
    { label: t.phone, done: !!form.phone },
    { label: t.skills, done: !!form.skills },
    { label: t.education, done: !!form.education },
    { label: t.portfolio, done: !!form.portfolio },
    { label: t.linkedin, done: !!form.linkedin },
    { label: t.experience, done: !!form.experience },
    { label: t.businessInterests, done: !!form.businessInterests },
  ];
  const completionPct = Math.round((completionFields.filter(f => f.done).length / completionFields.length) * 100);

  const tabs = [
    { id: 'personal', label: '👤 Personal Info' },
    { id: 'skills', label: '🛠️ Skills & Experience' },
    { id: 'links', label: '🔗 Links & Portfolio' },
    { id: 'business', label: '💼 Business Interests' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card p-6 rounded-3xl border border-blue-500/20">
        <div className="flex items-start gap-6 flex-wrap">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
              alt="Profile"
              className="w-24 h-24 rounded-2xl object-cover border-2 border-blue-500/40"
            />
            <button className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition">
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Profile Summary */}
          <div className="flex-1 min-w-[200px]">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">{user?.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{user?.occupation}</p>
            <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>{user?.city}, {user?.state}</span>
            </div>
            <div className="flex gap-2 mt-2 flex-wrap">
              {(user?.skills || []).slice(0, 4).map((skill, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[11px] font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Completion Progress */}
          <div className="min-w-[180px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-600 dark:text-gray-400">{t.profileCompletion}</span>
              <span className="text-sm font-extrabold text-blue-600 dark:text-blue-400">{completionPct}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full transition-all duration-500" style={{ width: `${completionPct}%` }} />
            </div>
            <div className="mt-3 space-y-1">
              {completionFields.slice(0, 4).map((f, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[10px]">
                  {f.done
                    ? <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    : <AlertCircle className="w-3 h-3 text-gray-400" />}
                  <span className={f.done ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-500'}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Form Sections */}
      <div className="glass-card p-6 rounded-3xl border border-gray-200 dark:border-gray-700/50">
        {activeTab === 'personal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { key: 'name', label: t.fullName, icon: User, type: 'text' },
              { key: 'email', label: t.email, icon: Mail, type: 'email' },
              { key: 'phone', label: t.phone, icon: Phone, type: 'tel' },
              { key: 'occupation', label: 'Occupation / Role', icon: Briefcase, type: 'text' },
              { key: 'city', label: 'City', icon: MapPin, type: 'text' },
              { key: 'state', label: 'State', icon: MapPin, type: 'text' },
            ].map(({ key, label, icon: Icon, type }) => (
              <div key={key}>
                <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5">{label}</label>
                <div className="relative">
                  <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={type}
                    value={(form as any)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5">Bio / About</label>
              <textarea
                rows={3}
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                placeholder="Tell customers and mentors about yourself..."
                className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-500 transition resize-none text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5">{t.skills}</label>
              <textarea
                rows={2}
                value={form.skills}
                onChange={(e) => setForm({ ...form, skills: e.target.value })}
                placeholder="e.g. Tailoring, Photography, Baking..."
                className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-500 transition resize-none text-gray-900 dark:text-gray-100"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {SKILLS_SUGGESTIONS.map((skill, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const current = form.skills ? form.skills.split(',').map(s => s.trim()) : [];
                      if (!current.includes(skill)) {
                        setForm({ ...form, skills: [...current, skill].join(', ') });
                      }
                    }}
                    className="px-2.5 py-1 text-[11px] rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/60 transition"
                  >
                    + {skill}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5">{t.experience}</label>
              <textarea
                rows={3}
                value={form.experience}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                placeholder="Describe your work experience..."
                className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-500 transition resize-none text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5">{t.education}</label>
              <input
                type="text"
                value={form.education}
                onChange={(e) => setForm({ ...form, education: e.target.value })}
                placeholder="e.g. Higher Secondary, Diploma in Design..."
                className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-500 transition text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5">{t.languages}</label>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES_LIST.map((lang, i) => {
                  const selected = form.languages.includes(lang);
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        const langs = form.languages ? form.languages.split(',').map(l => l.trim()).filter(Boolean) : [];
                        if (selected) {
                          setForm({ ...form, languages: langs.filter(l => l !== lang).join(', ') });
                        } else {
                          setForm({ ...form, languages: [...langs, lang].join(', ') });
                        }
                      }}
                      className={`px-3 py-1.5 text-xs rounded-full transition font-medium ${
                        selected
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'links' && (
          <div className="space-y-5">
            {[
              { key: 'portfolio', label: t.portfolio, icon: Globe, placeholder: 'https://myportfolio.com' },
              { key: 'linkedin', label: t.linkedin, icon: Linkedin, placeholder: 'https://linkedin.com/in/username' },
              { key: 'github', label: t.github, icon: Github, placeholder: 'https://github.com/username' },
              { key: 'website', label: t.website, icon: ExternalLink, placeholder: 'https://mywebsite.com' },
            ].map(({ key, label, icon: Icon, placeholder }) => (
              <div key={key}>
                <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5">{label}</label>
                <div className="relative">
                  <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="url"
                    value={(form as any)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-500 transition text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
            ))}
            <div>
              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5">Resume / CV Upload</label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-6 text-center hover:border-blue-500 transition cursor-pointer">
                <p className="text-sm text-gray-500 dark:text-gray-400">Click to upload PDF or DOC file</p>
                <p className="text-xs text-gray-400 mt-1">Max 5MB</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'business' && (
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5">{t.businessInterests}</label>
              <textarea
                rows={3}
                value={form.businessInterests}
                onChange={(e) => setForm({ ...form, businessInterests: e.target.value })}
                placeholder="e.g. I want to start an online tailoring boutique and sell handmade items..."
                className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-500 transition resize-none text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-500/30">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-300 mb-1">💡 AI Tip</p>
              <p className="text-xs text-amber-600 dark:text-amber-400">The more you fill in your business interests, the better AI can recommend government schemes, funding, and mentor matches!</p>
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="flex justify-end mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg disabled:opacity-60 transition flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {isSaving ? t.loading : t.saveProfile}
          </button>
        </div>
      </div>
    </div>
  );
};
