/**
 * Geolocation Service
 * 
 * Detects user's country code via IP geolocation API for automatic language detection.
 * Uses client-side API calls with caching to minimize requests.
 * 
 * Requirements: FR-5.1
 */

/**
 * List of Arabic-speaking country codes.
 * Used to determine if automatic Arabic language should be displayed.
 */
export const ARABIC_COUNTRIES = [
  'AE', 'SA', 'KW', 'QA', 'BH', 'OM',  // Gulf countries
  'JO', 'EG', 'IQ', 'LB', 'SY', 'YE', 'PS',  // Levant + others
  'MA', 'DZ', 'TN', 'LY', 'SD', 'MR'  // North Africa
];

/**
 * Detects the user's country code using IP geolocation API.
 * 
 * Strategy:
 * 1. Check sessionStorage cache first (avoid repeated API calls)
 * 2. If not cached, call ipapi.co API with 200ms timeout
 * 3. Cache result in sessionStorage
 * 4. Fallback to 'US' (English) on error or timeout
 * 
 * @returns Promise<string> - ISO 3166-1 alpha-2 country code (e.g., 'AE', 'US')
 */
export async function detectCountryCode(): Promise<string> {
  // Check sessionStorage cache first
  const cached = sessionStorage.getItem('country_code');
  if (cached) {
    return cached;
  }
  
  try {
    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 200);
    
    // Call ipapi.co API (free tier: 1,000 requests/day, CORS-enabled)
    const response = await fetch('https://ipapi.co/json/', {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    const countryCode = data.country_code || 'US';
    
    // Cache result in sessionStorage (persists for session only)
    sessionStorage.setItem('country_code', countryCode);
    
    return countryCode;
  } catch (error) {
    // Fallback to English (US) on any error (timeout, network, API failure)
    if (error instanceof Error && error.name === 'AbortError') {
      console.warn('Geolocation API timeout (>200ms), falling back to English');
    } else {
      console.warn('Geolocation API error, falling back to English:', error);
    }
    
    return 'US';
  }
}

/**
 * Checks if a country code belongs to an Arabic-speaking region.
 * 
 * @param countryCode - ISO 3166-1 alpha-2 country code
 * @returns boolean - true if country is in ARABIC_COUNTRIES list
 */
export function isArabicCountry(countryCode: string): boolean {
  return ARABIC_COUNTRIES.includes(countryCode);
}
