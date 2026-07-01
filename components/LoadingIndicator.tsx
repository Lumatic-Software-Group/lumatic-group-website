/**
 * Loading Indicator Component
 * 
 * Displays loading state during IP geolocation detection.
 * Shows logo/spinner while isLoading === true, then fades out.
 * Also controls content visibility to prevent FOUC.
 * 
 * Features:
 * - Full-screen overlay with logo during detection (<300ms)
 * - Smooth fade-out transition when loading completes
 * - Prevents flash of untranslated content (FOUC)
 * - Content opacity controlled by loading state
 * 
 * Requirements: FR-5.8
 */

'use client';

import { useLanguage } from './LanguageProvider';
import styles from './LoadingIndicator.module.css';
import Image from 'next/image';
import { ReactNode } from 'react';

/**
 * Loading Indicator Wrapper Component
 * 
 * Shows full-screen loading overlay with logo during language detection.
 * Wraps children and controls their visibility based on loading state.
 * Automatically hides when LanguageProvider completes detection.
 */
export default function LoadingIndicator({ children }: { children: ReactNode }) {
  const { isLoading } = useLanguage();

  return (
    <>
      {isLoading && (
        <div className={styles.overlay}>
          <div className={styles.content}>
            <Image
              src="/assets/lumatic_logo_optimized_.png"
              alt="Lumatic Software Group"
              width={120}
              height={120}
              priority
              className={styles.logo}
            />
            <div className={styles.spinner} />
          </div>
        </div>
      )}
      <div className={styles.mainContent} style={{ opacity: isLoading ? 0 : 1 }}>
        {children}
      </div>
    </>
  );
}
