// EMPOWER HUB - Express API Controllers

import { Request, Response } from 'express';
import { MockDatabase } from '../services/db/mockDb';
import { AIService } from '../services/ai/AIService';
import { OpportunityEngine } from '../services/ai/OpportunityEngine';
import { LearningEngine } from '../services/ai/LearningEngine';
import { BusinessEngine } from '../services/ai/BusinessEngine';

// --- AUTH CONTROLLER ---
export const loginUser = (req: Request, res: Response) => {
  const { email, role } = req.body;
  const user = MockDatabase.users.find(u => u.email === email || (role && u.role === role)) || MockDatabase.users[0];
  
  return res.json({
    success: true,
    message: `Logged in successfully as ${user.role}`,
    token: `jwt_token_empower_hub_${user.id}`,
    user
  });
};

export const registerUser = (req: Request, res: Response) => {
  const newUser = {
    id: `usr-${Date.now()}`,
    name: req.body.name || 'New Member',
    email: req.body.email || 'user@empowerhub.io',
    role: req.body.role || 'learner',
    phone: req.body.phone || '+91 9999999999',
    preferredLanguage: req.body.preferredLanguage || 'en',
    skills: req.body.skills ? req.body.skills.split(',') : ['General'],
    opportunityScore: 78,
    businessReadinessScore: 65,
    financialReadinessScore: 70,
    walletBalance: 1000.00,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
  };

  MockDatabase.users.push(newUser);
  return res.status(201).json({
    success: true,
    message: 'User registered successfully!',
    token: `jwt_token_empower_hub_${newUser.id}`,
    user: newUser
  });
};

// --- DASHBOARD DATA CONTROLLER ---
export const getDashboardData = (req: Request, res: Response) => {
  const role = (req.query.role as string) || 'learner';
  const user = MockDatabase.users.find(u => u.role === role) || MockDatabase.users[0];

  return res.json({
    success: true,
    user,
    stats: {
      totalUsers: 14850,
      activeLearners: 9420,
      verifiedMentors: 320,
      businesses: 1240,
      totalRevenue: '₹42,85,000',
      marketplaceOrders: 5890,
      opportunityMatches: 18450
    },
    opportunities: MockDatabase.opportunities,
    products: MockDatabase.products,
    mentors: MockDatabase.mentors,
    schemes: MockDatabase.schemes
  });
};

// --- MARKETPLACE CONTROLLER ---
export const getMarketplaceItems = (req: Request, res: Response) => {
  return res.json({
    success: true,
    products: MockDatabase.products,
    total: MockDatabase.products.length
  });
};

export const createOrder = (req: Request, res: Response) => {
  const { productId, amount } = req.body;
  return res.json({
    success: true,
    message: 'Order created & payment processed via Razorpay UPI!',
    transactionId: `TXN_RZP_${Date.now()}`,
    orderId: `ORD_${Math.floor(100000 + Math.random() * 900000)}`,
    amountPaid: amount || 899,
    status: 'Completed'
  });
};

// --- AI ENGINE CONTROLLERS ---
export const runAIOpportunityForge = async (req: Request, res: Response) => {
  const { skills = ['Tailoring', 'Crafts'], location = 'Tamil Nadu', interests = ['Fashion'] } = req.body;
  const result = await OpportunityEngine.analyzeUserOpportunities(skills, location, interests);
  return res.json(result);
};

export const runAITutorLesson = async (req: Request, res: Response) => {
  const { topic = 'Digital Marketing for Micro Business', language = 'en' } = req.body;
  const result = await LearningEngine.generateLesson(topic, language);
  return res.json(result);
};

export const runAIBusinessPlan = async (req: Request, res: Response) => {
  const { businessName = 'Artisanal Studio', category = 'Handicrafts', capital = '₹15,000' } = req.body;
  const result = await BusinessEngine.generateBusinessPlan(businessName, category, capital);
  return res.json(result);
};

export const runAIPricingCalculator = (req: Request, res: Response) => {
  const { material = 200, labor = 100, packaging = 30 } = req.body;
  const result = BusinessEngine.calculatePricing(Number(material), Number(labor), Number(packaging));
  return res.json({ success: true, ...result });
};

export const runAIGenericChat = async (req: Request, res: Response) => {
  const { prompt, language = 'en' } = req.body;
  const response = await AIService.generateCompletion({ prompt: prompt || 'How to earn money using my skills?', language });
  return res.json({ success: true, response });
};
