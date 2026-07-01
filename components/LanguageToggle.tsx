/**
 * Manual Language Toggle Component
 * 
 * Provides manual language override functionality with EN/AR buttons.
 * Implements keyboard accessibility and visual feedback for active language.
 * 
 * Features:
 * - Two-button toggle: "EN" and "AR"
 * - Active language visually highlighted
 * - Keyboard accessible (Tab, Enter, Space)
 * - Saves preference to localStorage
 * - Proper ARIA labels for screen readers
 * 
 * Requirements: FR-5.5
 */

'use client';

import { useLanguage } from './LanguageProvider';
import styles from './LanguageToggle.module.css';

/**
 * LanguageToggle Component
 * 
 * Displays a small EN/AR toggle in the footer corner.
 * Clicking a button switches language and saves preference.
 * 
 * Keyboard Interaction:
 * - Tab: Focus on buttons
 * - Enter/Space: Activate button
 * - Focus visible with proper outline
 * 
 * @returns Language toggle UI
 */
export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  /**
   * Handle language button click
   * 
   * @param lang - Language to switch to ('en' or 'ar')
   */
  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
  };

  /**
   * Handle keyboard events for accessibility
   * 
   * @param e - Keyboard event
   * @param lang - Language to switch to
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, lang: 'en' | 'ar') => {
    // Activate on Enter or Space key
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLanguageChange(lang);
    }
  };

  return (
    <div className={styles.toggle} role="group" aria-label="Language Selection">
      <button 
        onClick={() => handleLanguageChange('en')}
        onKeyDown={(e) => handleKeyDown(e, 'en')}
        className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
        type="button"
      >
        EN
      </button>
      <span className={styles.divider} aria-hidden="true">|</span>
      <button 
        onClick={() => handleLanguageChange('ar')}
        onKeyDown={(e) => handleKeyDown(e, 'ar')}
        className={`${styles.button} ${language === 'ar' ? styles.active : ''}`}
        aria-label="Switch to Arabic"
        aria-pressed={language === 'ar'}
        type="button"
      >
        AR
      </button>
    </div>
  );
}
