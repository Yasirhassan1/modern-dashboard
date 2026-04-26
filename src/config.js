import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enSignInTranslation from "./locales/en/sign-in.json"
import enSignUpTranslation from "./locales/en/sign-up.json"

import hiSignInTranslation from "./locales/hi/sign-in.json"
import hiSignUpTranslation from "./locales/hi/sign-up.json"
import urDashboardTranslation from "./locales/ur/dashboard.json"
import enDashboardTranslation from "./locales/en/dashboard.json"




i18n.use(initReactI18next).init({
  resources: {
    en: 
    { translation: {
       ...enDashboardTranslation,
      ...enSignInTranslation,
      ...enSignUpTranslation,
    }
    
    },
   

    hi: { translation: {
      ...hiSignInTranslation,
      ...hiSignUpTranslation,
    }
    
    },

    ur:{
      translation:{
        ...urDashboardTranslation,
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