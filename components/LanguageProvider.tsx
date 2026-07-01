/**
 * Language Context Provider
 * 
 * Global state management for language detection and switching.
 * Provides context for current language, translation object, and loading state.
 * 
 * Features:
 * - Automatic language detection via IP geolocation (FR-5.1)
 * - Manual language override with localStorage persistence (FR-5.5)
 * - Dynamic HTML lang and dir attribute updates (FR-5.2)
 * - Loading state management during detection
 * 
 * Requirements: FR-5.1, FR-5.2, FR-5.5
 */

'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { detectCountryCode, isArabicCountry } from '@/lib/geolocation';
import { translations, Language, Translations } from '@/locales/translations';

/**
 * Language context type definition
 */
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isLoading: boolean;
}

/**
 * Language context instance
 */
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Language Provider Component
 * 
 * Wraps the application to provide language detection and switching functionality.
 * 
 * Detection Flow:
 * 1. Check localStorage for manual language preference
 * 2. If no preference, call detectCountryCode() from geolocation service
 * 3. Use isArabicCountry() to determine language ('ar' or 'en')
 * 4. Update <html lang> and <html dir> attributes
 * 5. Store detected language in state
 * 
 * @param children - React children to wrap
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true); // Show loading screen during IP detection

  useEffect(() => {
    async function detectLanguage() {
      // 1. Check localStorage for manual language preference
      const savedLang = localStorage.getItem('language');
      if (savedLang === 'en' || savedLang === 'ar') {
        setLanguageState(savedLang);
        setIsLoading(false);
        updateHTMLAttributes(savedLang);
        return;
      }

      // 2. No preference found - detect via IP geolocation
      const countryCode = await detectCountryCode();
      
      // 3. Determine language based on country code
      const detectedLang: Language = isArabicCountry(countryCode) ? 'ar' : 'en';
      
      // 4. Update state and HTML attributes
      setLanguageState(detectedLang);
      setIsLoading(false);
      updateHTMLAttributes(detectedLang);
    }

    detectLanguage();
  }, []);

  /**
   * Set language manually and persist preference
   * 
   * @param lang - Language to switch to
   */
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang); // Persist preference
    updateHTMLAttributes(lang);
  };

  /**
   * Update HTML lang and dir attributes
   * 
   * - English: <html lang="en" dir="ltr">
   * - Arabic: <html lang="ar" dir="rtl">
   * 
   * @param lang - Language to apply
   */
  const updateHTMLAttributes = (lang: Language) => {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t: translations[language],
        isLoading 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * useLanguage Hook
 * 
 * Access language context in any component.
 * 
 * @returns LanguageContextType - Current language state and translation object
 * @throws Error if used outside LanguageProvider
 * 
 * @example
 * const { language, setLanguage, t, isLoading } = useLanguage();
 * return <h1>{t.hero.headline}</h1>;
 */
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
