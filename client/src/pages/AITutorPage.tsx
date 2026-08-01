// EMPOWER HUB - AI Tutor & Hybrid Learning Page

import React, { useState } from 'react';
import { useVoice } from '../context/VoiceContext';
import { BookOpen, Sparkles, Volume2, Award, CheckCircle, HelpCircle, UserCheck } from 'lucide-react';
import toast from 'react-hot-toast';

export const AITutorPage: React.FC = () => {
  const [topic, setTopic] = useState('Digital Marketing & E-Commerce Selling');
  const [currentStep, setCurrentStep] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [certified, setCertified] = useState(false);
  const { speakText } = useVoice();

  const lessons = [
    {
      title: 'Module 1: Product Photography with Smartphone',
      content: 'Learn how to capture vibrant product photos using natural sunlight, clean white backgrounds, and macro angles for tote bags, soaps, and handicrafts.',
      quiz: {
        question: 'Which lighting condition produces the most natural craft photos?',
        options: ['Direct harsh sunlight', 'Diffused natural morning light', 'Pitch dark room', 'Red laser light'],
        correct: 1
      }
    },
    {
      title: 'Module 2: Profit Margin & Dynamic Pricing Formula',
      content: 'Price = (Material Cost + Labor + Packaging) + Platform Fee (5%) + Profit Margin (30%). Always ensure your selling price covers your time!',
      quiz: {
        question: 'If Direct Cost is ₹300 and desired profit is ₹100, what is the selling price?',
        options: ['₹300', '₹400', '₹500', '₹200'],
        correct: 1
      }
    },
    {
      title: 'Module 3: Marketplace Upload & Razorpay UPI Setup',
      content: 'Upload 3 crisp product images, write AI-optimised tags, set your stock count, and connect your bank UPI for instant order payouts.',
      quiz: {
        question: 'What is required for receiving instant payout on EMPOWER HUB?',
        options: ['Bank Account / UPI ID', 'Physical Stamp', 'Paper Cheque', 'Manual Cash'],
        correct: 0
      }
    }
  ];

  const handleNext = () => {
    if (quizAnswer !== lessons[currentStep].quiz.correct) {
      toast.error('Incorrect quiz answer! Try selecting the right option.');
      return;
    }
    toast.success('Module Quiz Completed Successfully! 🎉');
    if (currentStep < lessons.length - 1) {
      setCurrentStep(prev => prev + 1);
      setQuizAnswer(null);
    } else {
      setCertified(true);
      toast.success('Congratulations! You earned your EMPOWER AI Skill Certificate!');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-8 py-10 space-y-8">
      
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-500 text-xs font-bold">
          <BookOpen className="w-4 h-4 text-purple-400" /> 24×7 Free AI Instructor + Hybrid Human Mentorship
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          AI Tutor Learning Path
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Topic: <span className="font-bold text-purple-500">{topic}</span>
        </p>
      </div>

      {/* Certificate Modal Banner */}
      {certified ? (
        <div className="glass-card p-8 rounded-3xl text-center space-y-4 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 border border-amber-500/30 shadow-2xl">
          <Award className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
          <h2 className="text-2xl font-extrabold text-gradient">Certificate of Achievement</h2>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            This certifies that <span className="font-bold text-white">Ananya Sharma</span> has successfully completed the <span className="font-bold text-amber-300">{topic}</span> micro-credential powered by EMPOWER HUB AI Engine.
          </p>
          <div className="pt-2 flex justify-center gap-4 text-xs font-bold">
            <button onClick={() => toast.success('Certificate PDF Downloaded!')} className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-900 shadow-lg">
              Download PDF Certificate
            </button>
            <a href="/marketplace" className="px-6 py-2.5 rounded-xl bg-blue-600 text-white shadow-lg">
              Start Selling Products Now →
            </a>
          </div>
        </div>
      ) : (
        /* Active Lesson Player */
        <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 border border-purple-500/20 shadow-2xl">
          
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
            <div>
              <span className="text-xs font-bold text-purple-500">Step {currentStep + 1} of {lessons.length}</span>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mt-1">{lessons[currentStep].title}</h2>
            </div>
            <button
              onClick={() => speakText(lessons[currentStep].content)}
              className="p-2 rounded-xl bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 transition flex items-center gap-1 text-xs font-bold"
            >
              <Volume2 className="w-4 h-4" /> Listen Audio
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 text-xs text-gray-700 dark:text-gray-300 leading-relaxed border border-gray-200 dark:border-gray-700">
            {lessons[currentStep].content}
          </div>

          {/* Quiz Box */}
          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-xs text-gray-900 dark:text-gray-100 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-purple-500" /> Module Knowledge Quiz
            </h3>
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{lessons[currentStep].quiz.question}</p>

            <div className="space-y-2">
              {lessons[currentStep].quiz.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuizAnswer(idx)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium transition border ${
                    quizAnswer === idx
                      ? 'bg-purple-600 text-white border-purple-500 font-bold'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-purple-500'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <UserCheck className="w-4 h-4 text-emerald-500" /> Need human guidance? <a href="/dashboard" className="text-purple-400 underline font-bold">Book Mentor Priya Sundaram</a>
            </div>
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-lg transition"
            >
              {currentStep === lessons.length - 1 ? 'Finish & Claim Certificate' : 'Next Module →'}
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
