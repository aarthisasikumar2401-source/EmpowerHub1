# EMPOWER HUB

> **Tagline**: *"From Talent to Opportunity, From Opportunity to Empowerment."*

EMPOWER HUB is an enterprise-grade AI-powered startup platform that converts people's existing skills into sustainable revenue. It combines capabilities inspired by **LinkedIn + Coursera + Shopify + Fiverr + ChatGPT** into a single cohesive ecosystem.

---

## 🌟 Key Capabilities & Ecosystem

1. **AI Opportunity Forge**: Continuously maps user skills, location, and local market demand to high-margin micro-business blueprints.
2. **AI Tutor & Hybrid Learning**: 24×7 free interactive AI instructor with quizzes, certificates, and seamless escalation to 1-on-1 human mentor bookings.
3. **E-Commerce & Service Marketplace**: Direct seller portal for crafts, beauty products, food, tailoring, and freelance consulting with Razorpay UPI payouts.
4. **AI Business & Brand Builder**: Generates business plans, brand identities, pricing formulas, and 30-day launch checklists.
5. **Government Schemes & Micro-Grants**: Automatically matches PM Mudra, Stand-Up India, and PMEGP schemes with eligibility scoring and proposal builders.
6. **Voice Assistant**: Floating Speech-to-Text (STT) and Text-to-Speech (TTS) voice assistant supporting voice navigation and inquiry.
7. **10-Language Support**: English, Tamil, Hindi, Telugu, Kannada, Malayalam, Marathi, Bengali, Gujarati, Urdu.
8. **Hackathon Presentation Mode**: Integrated top toolbar allowing 1-click evaluation of all 4 role dashboards (**Learner**, **Mentor**, **Business**, **Admin**).

---

## 📁 Repository Structure

```
empower-hub/
├── client/                     # React 19 + Vite + TypeScript + Tailwind CSS + Framer Motion
│   ├── src/
│   │   ├── components/         # Navbar, Footer, DemoRoleSwitcher, GlobalAIChatModal, AuthModal, VoiceAssistantButton
│   │   ├── context/            # AuthContext, ThemeContext, VoiceContext
│   │   ├── locales/            # i18n dictionary supporting 10 languages
│   │   ├── pages/              # LandingPage, DashboardPage, AIOpportunityForgePage, AITutorPage, MarketplacePage, AIBusinessBuilderPage, FundingHubPage, CommunityPage
│   │   ├── App.tsx             # Main router
│   │   ├── index.css           # Glassmorphism design tokens & Apple/Stripe gradients
│   │   └── main.tsx
│   ├── index.html
│   ├── tailwind.config.js
│   └── vite.config.ts
├── server/                     # Node.js + Express + TypeScript + Socket.IO + AI Engines
│   ├── src/
│   │   ├── controllers/        # Express REST API controllers
│   │   ├── routes/             # API routes (/auth, /dashboard, /marketplace, /ai)
│   │   ├── services/
│   │   │   ├── ai/             # AIService, OpportunityEngine, LearningEngine, BusinessEngine
│   │   │   └── db/             # Mock DB & seed dataset for zero-config presentation
│   │   └── server.ts           # Express & Socket.IO server
│   ├── tsconfig.json
│   └── package.json
├── database/
│   └── schema.sql              # Supabase PostgreSQL DDL (24+ tables, RLS policies)
├── vercel.json                 # Vercel deployment configuration
├── .gitignore
└── package.json                # Monorepo setup
```

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
npm install --workspace=client
npm install --workspace=server
```

### 2. Run Local Development Server
```bash
npm run dev
```
- **Client**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`

---

## 🛢️ Supabase Database Setup

To link with Supabase Cloud:
1. Create a project at [supabase.com](https://supabase.com).
2. Open SQL Editor and execute `database/schema.sql`.
3. Add `SUPABASE_URL` and `SUPABASE_KEY` to your environment variables.

---

## ☁️ Vercel Deployment Instructions

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Vercel automatically detects `vercel.json` and builds `client/dist`.
