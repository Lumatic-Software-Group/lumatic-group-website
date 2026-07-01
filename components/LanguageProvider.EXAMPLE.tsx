/**
 * Example Usage of LanguageProvider
 * 
 * This file demonstrates how to integrate and use the LanguageProvider component.
 * DO NOT import this file in production code - it's for reference only.
 */

'use client';

import { LanguageProvider, useLanguage } from './LanguageProvider';

// Example 1: Basic component using translations
function ExampleHero() {
  const { t, isLoading } = useLanguage();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <section>
      <h1>{t.hero.headline}</h1>
      <p>{t.hero.subline}</p>
      <button>{t.hero.ctaPrimary}</button>
    </section>
  );
}

// Example 2: Component with manual language toggle
function ExampleLanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div>
      <button 
        onClick={() => setLanguage('en')}
        disabled={language === 'en'}
      >
        English
      </button>
      <button 
        onClick={() => setLanguage('ar')}
        disabled={language === 'ar'}
      >
        العربية
      </button>
    </div>
  );
}

// Example 3: Component showing current language
function ExampleLanguageIndicator() {
  const { language, t } = useLanguage();
  
  return (
    <div>
      <p>Current language: {language}</p>
      <p>Direction: {language === 'ar' ? 'RTL' : 'LTR'}</p>
      <p>Sample text: {t.navbar.links.home}</p>
    </div>
  );
}

// Example 4: Root layout integration (app/layout.tsx)
export function ExampleRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <LanguageProvider>
          <header>
            <ExampleLanguageToggle />
          </header>
          <main>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}

// Example 5: Conditional rendering based on language
function ExampleConditionalContent() {
  const { language, t } = useLanguage();
  
  return (
    <div>
      {language === 'ar' && (
        <div style={{ textAlign: 'right', direction: 'rtl' }}>
          <p>This is RTL content</p>
        </div>
      )}
      {language === 'en' && (
        <div style={{ textAlign: 'left', direction: 'ltr' }}>
          <p>This is LTR content</p>
        </div>
      )}
      <p>{t.footer.tagline}</p>
    </div>
  );
}

// Example 6: Using translations in nested objects
function ExampleNestedTranslations() {
  const { t } = useLanguage();
  
  return (
    <div>
      {/* Stats from hero */}
      <div>
        <span>{t.hero.stats.downloads.value}</span>
        <span>{t.hero.stats.downloads.label}</span>
      </div>
      
      {/* Service card */}
      <div>
        <h3>{t.services.cards.chatbot.title}</h3>
        <p>{t.services.cards.chatbot.description}</p>
        <ul>
          {t.services.cards.chatbot.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Example 7: Loading state handling
function ExampleWithLoadingState() {
  const { isLoading, t, language } = useLanguage();
  
  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
        <div>Detecting language...</div>
      </div>
    );
  }
  
  return (
    <div>
      <h1>{t.hero.headline}</h1>
      <p>Language detected: {language}</p>
    </div>
  );
}

// Example 8: Error boundary (recommended for production)
import { Component, ReactNode } from 'react';

class LanguageProviderErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('LanguageProvider error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Language system error. Please refresh the page.</div>;
    }

    return this.props.children;
  }
}

export function ExampleWithErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <LanguageProviderErrorBoundary>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </LanguageProviderErrorBoundary>
  );
}

/**
 * Integration Checklist:
 * 
 * 1. ✅ Import LanguageProvider in app/layout.tsx
 * 2. ✅ Wrap entire app with <LanguageProvider>
 * 3. ✅ Import useLanguage hook in components
 * 4. ✅ Replace hardcoded strings with t.section.key
 * 5. ✅ Add loading state handling (optional)
 * 6. ✅ Add manual language toggle (optional)
 * 7. ✅ Test in browser with:
 *    - English country (e.g., US)
 *    - Arabic country (e.g., UAE)
 *    - Manual language switch
 *    - localStorage persistence
 *    - sessionStorage caching
 */
