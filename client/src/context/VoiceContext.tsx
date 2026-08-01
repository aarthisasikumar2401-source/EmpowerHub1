// EMPOWER HUB - Global Voice Assistant Context (STT & TTS Engine)

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface VoiceContextType {
  isListening: boolean;
  transcript: string;
  speakText: (text: string) => void;
  startListening: () => void;
  stopListening: () => void;
}

const VoiceContext = createContext<VoiceContextType | undefined>(undefined);

export const VoiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const navigate = useNavigate();

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop ongoing speech
      const cleanText = text.replace(/[#*`]/g, ''); // Clean markdown formatting
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const processVoiceCommand = (commandText: string) => {
    const lower = commandText.toLowerCase();
    toast.success(`Voice Command Detected: "${commandText}"`);

    if (lower.includes('marketplace') || lower.includes('buy') || lower.includes('store')) {
      speakText("Opening the EMPOWER HUB Marketplace.");
      navigate('/marketplace');
    } else if (lower.includes('mentor') || lower.includes('teacher') || lower.includes('guidance')) {
      speakText("Opening the Mentor Network.");
      navigate('/dashboard');
    } else if (lower.includes('dashboard') || lower.includes('home')) {
      speakText("Navigating to your personalized dashboard.");
      navigate('/dashboard');
    } else if (lower.includes('forge') || lower.includes('opportunity') || lower.includes('earn')) {
      speakText("Launching the AI Opportunity Forge.");
      navigate('/forge');
    } else if (lower.includes('tutor') || lower.includes('learn') || lower.includes('tailor')) {
      speakText("Opening the AI Tutor step-by-step module.");
      navigate('/tutor');
    } else if (lower.includes('business') || lower.includes('bakery') || lower.includes('plan')) {
      speakText("Opening the AI Business Builder Engine.");
      navigate('/business-builder');
    } else if (lower.includes('scheme') || lower.includes('government') || lower.includes('loan')) {
      speakText("Opening the Government Scheme and Funding Hub.");
      navigate('/funding');
    } else {
      speakText(`Analyzing your query: ${commandText}. Launching AI Opportunity Forge.`);
      navigate('/forge');
    }
  };

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error('Web Speech API is not supported in this browser mode. Simulating voice input!');
      const sampleCmd = 'I want to earn money with tailoring';
      setTranscript(sampleCmd);
      processVoiceCommand(sampleCmd);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        toast('Listening... Speak now!', { icon: '🎙️' });
      };

      recognition.onresult = (event: any) => {
        const resultText = event.results[0][0].transcript;
        setTranscript(resultText);
        setIsListening(false);
        processVoiceCommand(resultText);
      };

      recognition.onerror = (err: any) => {
        console.warn('Speech recognition error:', err);
        setIsListening(false);
        toast.error('Voice input error. Try again.');
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      setIsListening(false);
      toast.error('Voice Assistant initialization failed.');
    }
  };

  const stopListening = () => {
    setIsListening(false);
  };

  return (
    <VoiceContext.Provider value={{ isListening, transcript, speakText, startListening, stopListening }}>
      {children}
    </VoiceContext.Provider>
  );
};

export const useVoice = () => {
  const context = useContext(VoiceContext);
  if (!context) throw new Error('useVoice must be used within VoiceProvider');
  return context;
};
