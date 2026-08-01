// EMPOWER HUB - Multilingual i18n Dictionary supporting 10 Languages

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      platformName: 'EMPOWER HUB',
      tagline: 'From Talent to Opportunity, From Opportunity to Empowerment.',
      navHome: 'Home',
      navFeatures: 'Features',
      navMarketplace: 'Marketplace',
      navMentors: 'Mentors',
      navBusiness: 'Business',
      navFunding: 'Government Schemes',
      navLogin: 'Login',
      navRegister: 'Register',
      navDashboard: 'Dashboard',
      heroTitle: 'Turn Your Existing Skills Into Sustainable Revenue with AI',
      heroSubtitle: 'Discover high-demand opportunities, master missing skills with AI Tutor, launch digital businesses, sell crafts, and get verified mentor guidance.',
      btnStart: 'Start Earning Now',
      btnExplore: 'Explore Opportunities',
      roleLearner: 'Learner',
      roleMentor: 'Mentor',
      roleBusiness: 'Business',
      roleAdmin: 'Admin',
      voiceAssistantTitle: 'Voice Assistant Ready',
      searchPlaceholder: 'Search opportunities, products, mentors, schemes...',
    }
  },
  ta: {
    translation: {
      platformName: 'எம்பவர் ஹப்',
      tagline: 'திறமையிலிருந்து வாய்ப்பு, வாய்ப்பிலிருந்து அதிகாரமளித்தல்.',
      navHome: 'முகப்பு',
      navFeatures: 'அம்சங்கள்',
      navMarketplace: 'சந்தை',
      navMentors: 'வழிகாட்டிகள்',
      navBusiness: 'வணிகம்',
      navFunding: 'அரசு திட்டங்கள்',
      navLogin: 'உள்நுழை',
      navRegister: 'பதிவுசெய்',
      navDashboard: 'டாஷ்போர்டு',
      heroTitle: 'உங்கள் திறமைகளை AI மூலம் நிலையான வருமானமாக மாற்றவும்',
      heroSubtitle: 'வாய்ப்புகளைக் கண்டறியவும், AI ஆசிரியருடன் புதிய திறன்களைக் கற்றுக்கொள்ளவும், பொருட்களை விற்பனை செய்யவும்.',
      btnStart: 'இப்போதே சம்பாதிக்க தொடங்குங்கள்',
      btnExplore: 'வாய்ப்புகளை ஆராய்க',
      roleLearner: 'கற்பவர்',
      roleMentor: 'வழிகாட்டி',
      roleBusiness: 'வணிகம்',
      roleAdmin: 'நிர்வாகி',
      voiceAssistantTitle: 'குரல் உதவி தயார்',
      searchPlaceholder: 'தேடுக...',
    }
  },
  hi: {
    translation: {
      platformName: 'एमपावर हब',
      tagline: 'प्रतिभा से अवसर, अवसर से सशक्तिकरण।',
      navHome: 'होम',
      navFeatures: 'विशेषताएं',
      navMarketplace: 'मार्केटप्लेस',
      navMentors: 'मेंटर्स',
      navBusiness: 'बिजनेस',
      navFunding: 'सरकारी योजनाएं',
      navLogin: 'लॉगिन',
      navRegister: 'रजिस्टर',
      navDashboard: 'डैशबोर्ड',
      heroTitle: 'अपनी प्रतिभा को AI की मदद से स्थायी आय में बदलें',
      heroSubtitle: 'अवसर खोजें, AI ट्यूटर से सीखें, और अपना व्यवसाय शुरू करें।',
      btnStart: 'अभी कमाना शुरू करें',
      btnExplore: 'अवसर खोजें',
      roleLearner: 'शिक्षार्थी',
      roleMentor: 'मेंटॉर',
      roleBusiness: 'बिजनेस',
      roleAdmin: 'एडमिन',
      voiceAssistantTitle: 'वॉइस असिस्टेंट तैयार है',
      searchPlaceholder: 'खोजें...',
    }
  },
  te: { translation: { platformName: 'ఎంపవర్ హబ్', tagline: 'నైపుణ్యం నుండి అవకాశం, అవకాశం నుండి సాధికారత.', navHome: 'హోమ్', navMarketplace: 'మార్కెట్‌ప్లేస్', navLogin: 'లాగిన్', btnStart: 'సంపాదించడం ప్రారంభించండి' } },
  kn: { translation: { platformName: 'ಎಂಪವರ್ ಹಬ್', tagline: 'ಪ್ರತಿಭೆಯಿಂದ ಅವಕಾಶ, ಅವಕಾಶದಿಂದ ಸಬಲೀಕರಣ.', navHome: 'ಹೋಮ್', navMarketplace: 'ಮಾರುಕಟ್ಟೆ', navLogin: 'ಲಾಗಿನ್', btnStart: 'ಈಗಲೇ ಗಳಿಸಲು ಪ್ರಾರಂಭಿಸಿ' } },
  ml: { translation: { platformName: 'എംപവർ ഹബ്', tagline: 'പ്രതിഭയിൽ നിന്ന് അവസരത്തിലേക്ക്.', navHome: 'ഹോം', navMarketplace: 'മാർക്കറ്റ് പ്ലേസ്', navLogin: 'ലോഗിൻ', btnStart: 'ഇപ്പോൾ സമ്പാദിച്ചു തുടങ്ങൂ' } },
  mr: { translation: { platformName: 'एमपावर हब', tagline: 'कौशल्याकडून संधीकडे, संधीकडून सक्षमीकरणाकडे.', navHome: 'होम', navMarketplace: 'मार्केटप्लेस', navLogin: 'लॉगिन', btnStart: 'आताच मिळवणे सुरू करा' } },
  bn: { translation: { platformName: 'এমপাওয়ার হাব', tagline: 'মেধা থেকে সুযোগ, সুযোগ থেকে ক্ষমতায়ন।', navHome: 'হোম', navMarketplace: 'মার্কেটপ্লেস', navLogin: 'লগইন', btnStart: 'এখনই উপার্জন শুরু করুন' } },
  gu: { translation: { platformName: 'એમ્પાવર હબ', tagline: 'પ્રતિભાથી અવસર, અવસરથી સશક્તિકરણ.', navHome: 'હોમ', navMarketplace: 'માર્કેટપ્લેસ', navLogin: 'લોગિન', btnStart: 'હવે કમાવવાનું શરૂ કરો' } },
  ur: { translation: { platformName: 'ایم پاور ہب', tagline: 'صلاحیت سے موقع، موقع سے بااختیاری۔', navHome: 'ہوم', navMarketplace: 'مارکیٹ پلیس', navLogin: 'لاگ ان', btnStart: 'ابھی کمانا شروع کریں' } }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
