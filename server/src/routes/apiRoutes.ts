// EMPOWER HUB - Express API Router

import { Router } from 'express';
import {
  loginUser,
  registerUser,
  getDashboardData,
  getMarketplaceItems,
  createOrder,
  runAIOpportunityForge,
  runAITutorLesson,
  runAIBusinessPlan,
  runAIPricingCalculator,
  runAIGenericChat
} from '../controllers/apiController';

const router = Router();

// Auth Endpoints
router.post('/auth/login', loginUser);
router.post('/auth/register', registerUser);

// Dashboard & Analytics
router.get('/dashboard', getDashboardData);

// Marketplace & Orders
router.get('/marketplace/products', getMarketplaceItems);
router.post('/marketplace/checkout', createOrder);

// AI Engine Endpoints
router.post('/ai/forge', runAIOpportunityForge);
router.post('/ai/tutor', runAITutorLesson);
router.post('/ai/business-plan', runAIBusinessPlan);
router.post('/ai/pricing', runAIPricingCalculator);
router.post('/ai/chat', runAIGenericChat);

export default router;
