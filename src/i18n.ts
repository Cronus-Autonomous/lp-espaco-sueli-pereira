import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptTranslation from "./locales/pt/translation.json";
import esTranslation from "./locales/es/translation.json";

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador do cliente
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: ptTranslation },
      es: { translation: esTranslation },
    },
    fallbackLng: "pt", // Idioma padrão caso o navegador esteja em outro
    interpolation: {
      escapeValue: false, // O React já faz o escape automático de XSS
    },
  });

export default i18n;