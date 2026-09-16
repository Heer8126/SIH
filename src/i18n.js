import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import hi from './locales/hi/translation.json';
import bn from './locales/bn/translation.json';
import ta from './locales/ta/translation.json';
import te from './locales/te/translation.json';
import gu from './locales/gu/translation.json';
import mr from './locales/mr/translation.json';
import kn from './locales/kn/translation.json';

export const LANGUAGES = [
  { code: 'en', label: 'English', nativeName: 'English (EN)' },
  { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी (Hindi)' },
  { code: 'bn', label: 'Bengali', nativeName: 'বাংলা (Bengali)' },
  { code: 'ta', label: 'Tamil', nativeName: 'தமிழ் (Tamil)' },
  { code: 'te', label: 'Telugu', nativeName: 'తెలుగు (Telugu)' },
  { code: 'gu', label: 'Gujarati', nativeName: 'ગુજરાતી (Gujarati)' },
  { code: 'mr', label: 'Marathi', nativeName: 'मराठी (Marathi)' },
  { code: 'kn', label: 'Kannada', nativeName: 'ಕನ್ನಡ (Kannada)' }
];

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  bn: { translation: bn },
  ta: { translation: ta },
  te: { translation: te },
  gu: { translation: gu },
  mr: { translation: mr },
  kn: { translation: kn }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'hi', 'bn', 'ta', 'te', 'gu', 'mr', 'kn'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
