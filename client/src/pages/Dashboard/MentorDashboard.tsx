import React from 'react';
import { motion } from 'framer-motion';

export const MentorDashboard = () => {
  return (
    <div className="p-8 min-h-screen bg-[#0F0F1A] text-white">
      <motion.h1 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-3xl font-bold mb-6 text-green-500"
      >
        Mentor Dashboard
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#1A1A2E] p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-2">My Appointments</h2>
          <p className="text-gray-400">Manage your student calls.</p>
        </div>
        <div className="bg-[#1A1A2E] p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-2">Courses & Pricing</h2>
          <p className="text-gray-400">Update your offerings.</p>
        </div>
      </div>
    </div>
  );
};
