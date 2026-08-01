// EMPOWER HUB - Floating Voice Assistant Microphone Button

import React from 'react';
import { useVoice } from '../context/VoiceContext';
import { Mic, Volume2 } from 'lucide-react';

export const VoiceAssistantButton: React.FC = () => {
  const { isListening, startListening, stopListening } = useVoice();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Listening Status Tooltip */}
      {isListening && (
        <div className="glass-card px-4 py-2 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 animate-bounce flex items-center gap-2 shadow-2xl border border-blue-500/30">
          <Volume2 className="w-4 h-4 animate-pulse" /> Listening... Speak command!
        </div>
      )}

      {/* Floating Microphone Action Button */}
      <button
        onClick={isListening ? stopListening : startListening}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isListening
            ? 'bg-rose-600 ring-8 ring-rose-500/30 animate-pulse'
            : 'bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 hover:shadow-blue-500/40 ring-4 ring-blue-500/20'
        }`}
        title="Click to talk to Voice Assistant (STT & TTS)"
      >
        <Mic className={`w-6 h-6 ${isListening ? 'animate-bounce' : ''}`} />
      </button>
    </div>
  );
};
