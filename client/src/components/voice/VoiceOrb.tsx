import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const VoiceOrb = () => {
  const { t, i18n } = useTranslation();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  
  // This is a placeholder for the actual LiveKit / WebSpeech API integration
  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTranscript(t('voice_listening', 'Listening in your mother tongue...'));
    } else {
      setTranscript('');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-4">
      {isListening && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/90 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl border border-[#C41E3A]/30 max-w-sm w-72"
        >
          <div className="flex justify-between items-center mb-2 text-sm text-gray-400">
            <span>{i18n.language ? i18n.language.toUpperCase() : 'EN'} AI</span>
            <Volume2 className="w-4 h-4 text-[#E8B4B8]" />
          </div>
          <p className="text-sm font-medium">{transcript}</p>
          <div className="mt-4 flex space-x-1">
            <motion.div
              animate={{ height: [10, 20, 10] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-1.5 bg-[#C41E3A] rounded-full"
            />
            <motion.div
              animate={{ height: [10, 30, 10] }}
              transition={{ repeat: Infinity, duration: 0.8, delay: 0.1 }}
              className="w-1.5 bg-[#C41E3A] rounded-full"
            />
            <motion.div
              animate={{ height: [10, 15, 10] }}
              transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
              className="w-1.5 bg-[#C41E3A] rounded-full"
            />
          </div>
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleListening}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(196,30,58,0.3)] transition-colors ${
          isListening ? 'bg-[#C41E3A] text-white' : 'bg-[#1A1A2E] text-[#E8B4B8] border border-[#C41E3A]/50'
        }`}
      >
        {isListening ? <Mic className="w-8 h-8" /> : <MicOff className="w-8 h-8" />}
      </motion.button>
    </div>
  );
};
