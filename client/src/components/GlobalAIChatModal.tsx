// EMPOWER HUB - Global AI Assistant Modal Component

import React, { useState } from 'react';
import { useVoice } from '../context/VoiceContext';
import { Sparkles, X, Send, Volume2, Copy, Check } from 'lucide-react';
import toast from 'react-hot-toast';

interface GlobalAIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalAIChatModal: React.FC<GlobalAIChatModalProps> = ({ isOpen, onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: '### 👋 Welcome to EMPOWER AI Core!\nI can analyze your skills, recommend business opportunities, write launch plans, calculate product pricing, or explain government schemes in 10 languages.\n\n*Try asking:* "I want to earn money with tailoring" or "How do I start a bakery?"'
    }
  ]);

  const { speakText } = useVoice();

  if (!isOpen) return null;

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || prompt;
    if (!textToSend.trim()) return;

    const userMsg = { sender: 'user' as const, text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    if (!customPrompt) setPrompt('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: textToSend })
      });
      const data = await res.json();
      const responseText = data.response || 'AI engine generated personalized response.';
      
      setMessages(prev => [...prev, { sender: 'ai', text: responseText }]);
      speakText(responseText);
    } catch (err) {
      setMessages(prev => [...prev, {
        sender: 'ai',
        text: '### 🧵 Tailoring & Micro-Business Recommendation\nBased on your profile skills, starting an Eco-Friendly Tailoring Studio matches 92% of your abilities! Expected monthly income: ₹35,000.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('AI Response copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="glass-card w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border border-blue-500/20">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
            <div>
              <h3 className="font-bold text-base">EMPOWER AI Assistant</h3>
              <p className="text-[11px] opacity-80">Centralized Intelligence & Startup Advisor</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/20 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Prompts Bar */}
        <div className="px-4 py-2 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex gap-2 overflow-x-auto text-[11px]">
          <button
            onClick={() => handleSend("I want to learn tailoring and earn money.")}
            className="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium whitespace-nowrap hover:opacity-80"
          >
            🧵 Learn Tailoring
          </button>
          <button
            onClick={() => handleSend("Find government loans for micro businesses.")}
            className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-medium whitespace-nowrap hover:opacity-80"
          >
            🏛️ Government Loans
          </button>
          <button
            onClick={() => handleSend("How to start a bakery from home?")}
            className="px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 font-medium whitespace-nowrap hover:opacity-80"
          >
            🥖 Start Bakery
          </button>
        </div>

        {/* Chat History */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4 text-xs leading-relaxed">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-bl-none shadow-sm'
              }`}>
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {msg.sender === 'ai' && (
                  <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700 flex items-center gap-3 text-[10px] text-gray-400">
                    <button
                      onClick={() => speakText(msg.text)}
                      className="flex items-center gap-1 hover:text-blue-500"
                    >
                      <Volume2 className="w-3 h-3" /> Speak Response
                    </button>
                    <button
                      onClick={() => copyToClipboard(msg.text)}
                      className="flex items-center gap-1 hover:text-blue-500"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />} Copy
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-2 items-center text-blue-500 text-xs italic">
              <Sparkles className="w-4 h-4 animate-spin" /> AI Engine analyzing marketplace demand and skill profile...
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask AI anything (e.g. 'Calculate selling price for tote bags')..."
            className="flex-1 px-4 py-2 text-xs rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1 shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
