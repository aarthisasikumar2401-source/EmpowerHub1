import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          voice_listening: "Listening in your mother tongue...",
          dashboards: {
            learner: { title: "Learner Dashboard", desc: "Learn from AI, create business plans, and get started." },
            mentor: { title: "Mentor Dashboard", desc: "Guide students, set pricing, and manage appointments." },
            business: { title: "Business Dashboard", desc: "Manage inventory, sales, customers, and analytics." },
            admin: { title: "Admin Dashboard", desc: "Platform overview, user management, and security." }
          },
          dashboard_selector: {
            title: "Select Your Dashboard",
            subtitle: "Choose how you want to interact with Empower Hub today."
          }
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
