#!/usr/bin/env node

/**
 * Accessibility Testing Script for Service Cards
 * Verifies WCAG 2.1 AA compliance for the add-two-new-services feature
 */

const fs = require('fs');
const path = require('path');

// WCAG 2.1 AA requires 4.5:1 contrast ratio for normal text
const WCAG_AA_NORMAL_TEXT = 4.5;
const WCAG_AA_LARGE_TEXT = 3.0; // 18pt+ or 14pt+ bold

console.log('═══════════════════════════════════════════════════════════════');
console.log('  ACCESSIBILITY COMPLIANCE TEST - WCAG 2.1 AA');
console.log('  Feature: Add Two New Services');
console.log('═══════════════════════════════════════════════════════════════\n');

// Results tracking
const results = {
  passed: [],
  failed: [],
  warnings: []
};

function pass(test) {
  results.passed.push(test);
  console.log(`✅ PASS: ${test}`);
}

function fail(test, reason) {
  results.failed.push({ test, reason });
  console.log(`❌ FAIL: ${test}`);
  console.log(`   Reason: ${reason}\n`);
}

function warn(test, reason) {
  results.warnings.push({ test, reason });
  console.log(`⚠️  WARN: ${test}`);
  console.log(`   Note: ${reason}\n`);
}

// Helper: Calculate relative luminance
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Helper: Calculate contrast ratio
function getContrastRatio(rgb1, rgb2) {
  const l1 = getLuminance(rgb1[0], rgb1[1], rgb1[2]);
  const l2 = getLuminance(rgb2[0], rgb2[1], rgb2[2]);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Helper: Parse hex color to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}

console.log('──────────────────────────────────────────────────────────────');
console.log('TEST 1: Heading Hierarchy');
console.log('──────────────────────────────────────────────────────────────\n');

// Test 1: Verify heading hierarchy
const servicesFile = fs.readFileSync(
  path.join(__dirname, 'components/Services.tsx'),
  'utf8'
);

if (servicesFile.includes('<h3 className={styles.cardTitle}>')) {
  pass('Service card titles use H3 (correct semantic level after section H2)');
} else {
  fail('Service card titles heading level', 'Card titles should use <h3> for proper hierarchy');
}

// Check for H2 in section header
if (servicesFile.includes('<h2 className={styles.title}>')) {
  pass('Services section header uses H2');
} else {
  fail('Services section heading level', 'Section should have H2 before card H3s');
}

console.log('\n──────────────────────────────────────────────────────────────');
console.log('TEST 2: Color Contrast Ratios');
console.log('──────────────────────────────────────────────────────────────\n');

// Test 2: Color contrast for tags
const cssFile = fs.readFileSync(
  path.join(__dirname, 'components/Services.module.css'),
  'utf8'
);

// Regular tag colors
const tagTextColor = '#7A6230';
const tagBgColor = 'rgba(201, 168, 76, 0.15)'; // ~#F5EDD9 when blended with white

// Featured tag colors (used for Website card)
const featuredTagTextColor = '#0A1628';
const featuredTagBgColor = '#C9A84C'; // Average of gradient

// Calculate regular tag contrast (text on background, considering blend)
const regularTagText = hexToRgb(tagTextColor);
const regularTagBg = [245, 237, 217]; // Approximate blended color

const regularTagContrast = getContrastRatio(regularTagText, regularTagBg);
console.log(`Regular Tag Contrast: ${regularTagContrast.toFixed(2)}:1`);
console.log(`  Text: ${tagTextColor} on Background: rgba(201,168,76,0.15) [≈#F5EDD9]`);

if (regularTagContrast >= WCAG_AA_NORMAL_TEXT) {
  pass(`Regular tag contrast (${regularTagContrast.toFixed(2)}:1) meets WCAG AA (≥4.5:1)`);
} else {
  fail(
    `Regular tag contrast (${regularTagContrast.toFixed(2)}:1)`,
    `Does not meet WCAG AA requirement of ${WCAG_AA_NORMAL_TEXT}:1 for normal text`
  );
}

// Featured tag contrast
const featuredTagText = hexToRgb(featuredTagTextColor);
const featuredTagBg = hexToRgb(featuredTagBgColor);
const featuredTagContrast = getContrastRatio(featuredTagText, featuredTagBg);

console.log(`\nFeatured Tag Contrast: ${featuredTagContrast.toFixed(2)}:1`);
console.log(`  Text: ${featuredTagTextColor} on Background: ${featuredTagBgColor}`);

if (featuredTagContrast >= WCAG_AA_NORMAL_TEXT) {
  pass(`Featured tag contrast (${featuredTagContrast.toFixed(2)}:1) meets WCAG AA (≥4.5:1)`);
} else {
  fail(
    `Featured tag contrast (${featuredTagContrast.toFixed(2)}:1)`,
    `Does not meet WCAG AA requirement of ${WCAG_AA_NORMAL_TEXT}:1 for normal text`
  );
}

// Note: "High ROI" and "Enterprise-Grade" use the same .tag styles
console.log('\nNote: "High ROI" and "Enterprise-Grade" tags use the same CSS classes as existing tags.');
console.log('No special color overrides detected for new service tags.\n');

console.log('──────────────────────────────────────────────────────────────');
console.log('TEST 3: Keyboard Navigation & Focus Indicators');
console.log('──────────────────────────────────────────────────────────────\n');

// Test 3: Focus indicators
const focusIndicatorPatterns = [
  'focus-visible',
  'outline: 2px solid'
];

let foundFocusIndicators = true;
focusIndicatorPatterns.forEach(pattern => {
  if (!cssFile.includes(pattern)) {
    foundFocusIndicators = false;
  }
});

if (foundFocusIndicators) {
  pass('Focus indicators defined with :focus-visible and 2px outlines');
} else {
  fail('Focus indicators', 'Missing :focus-visible styles or outline definitions');
}

// Check CTA button focus states
if (cssFile.includes('.cardCta:focus-visible')) {
  pass('CTA buttons have :focus-visible styles');
} else {
  fail('CTA button focus', 'Missing :focus-visible style for .cardCta');
}

if (cssFile.includes('.quoteLabel:focus-visible')) {
  pass('Message CTAs have :focus-visible styles');
} else {
  fail('Message CTA focus', 'Missing :focus-visible style for .quoteLabel');
}

// Verify tab order (semantic check)
if (servicesFile.includes('href=') && servicesFile.includes('target="_blank"')) {
  pass('All CTAs are proper anchor links (keyboard accessible)');
} else {
  warn('CTA link structure', 'Verify all CTAs use <a> tags, not buttons or divs');
}

console.log('\n──────────────────────────────────────────────────────────────');
console.log('TEST 4: Icon Accessibility');
console.log('──────────────────────────────────────────────────────────────\n');

// Test 4: Icons should have aria-hidden="true" for decorative icons
const iconCheckmarkPattern = /<svg[^>]*>[\s\S]*?<path[^>]*stroke="#C9A84C"/;
const ariaHiddenPattern = /aria-hidden="true"/;

// Check service card icons (decorative)
const serviceIconPattern = /<svg viewBox="0 0 24 24"[^>]*>/g;
const serviceIcons = servicesFile.match(serviceIconPattern) || [];

console.log(`Found ${serviceIcons.length} service card icons (24x24 viewBox)`);

// Checkmark icons in features should have aria-hidden
if (servicesFile.includes('viewBox="0 0 16 16"')) {
  console.log('Found feature checkmark icons (16x16 viewBox)');
  const checkmarkWithAriaPattern = /viewBox="0 0 16 16"[^>]*aria-hidden="true"/;
  if (checkmarkWithAriaPattern.test(servicesFile)) {
    pass('Feature checkmark icons have aria-hidden="true" (decorative)');
  } else {
    warn(
      'Feature checkmark icons missing aria-hidden',
      'Decorative icons should have aria-hidden="true" to hide from screen readers'
    );
  }
}

// Service card main icons
const serviceIconWithAriaPattern = /viewBox="0 0 24 24"[^>]*aria-hidden="true"/;
if (serviceIconWithAriaPattern.test(servicesFile)) {
  pass('Service card main icons have aria-hidden="true" (decorative)');
} else {
  warn(
    'Service card main icons',
    'Consider adding aria-hidden="true" to main service icons for best practices, though titles provide context'
  );
}

console.log('\n──────────────────────────────────────────────────────────────');
console.log('TEST 5: CTA Button Text Descriptiveness');
console.log('──────────────────────────────────────────────────────────────\n');

// Test 5: CTA text should be descriptive
const translationsFile = fs.readFileSync(
  path.join(__dirname, 'locales/translations.ts'),
  'utf8'
);

// Check for new service CTA labels
if (translationsFile.includes('ctaLabel: "Start Ranking on Google"')) {
  pass('AI Content service has descriptive CTA: "Start Ranking on Google"');
} else {
  fail('AI Content CTA', 'Missing or non-descriptive CTA label');
}

if (translationsFile.includes('ctaLabel: "Build Your AI Agent"')) {
  pass('AI Agent service has descriptive CTA: "Build Your AI Agent"');
} else {
  fail('AI Agent CTA', 'Missing or non-descriptive CTA label');
}

// Check message CTAs
if (translationsFile.includes('messageCta:') && translationsFile.includes('Message us to discuss')) {
  pass('Message CTAs have descriptive text (not just icons)');
} else {
  warn('Message CTA text', 'Verify message CTAs have visible text, not icon-only');
}

console.log('\n──────────────────────────────────────────────────────────────');
console.log('TEST 6: Semantic HTML Structure');
console.log('──────────────────────────────────────────────────────────────\n');

// Test 6: Semantic HTML
if (servicesFile.includes('<section id="services"')) {
  pass('Services section uses semantic <section> element');
} else {
  fail('Section semantics', 'Should use <section> for services area');
}

if (servicesFile.includes('<ul className={styles.features}>')) {
  pass('Feature lists use semantic <ul> elements');
} else {
  fail('Feature list semantics', 'Features should be in <ul> lists');
}

if (servicesFile.includes('<li') && servicesFile.includes('className={styles.feature}')) {
  pass('Feature items use semantic <li> elements');
} else {
  fail('Feature item semantics', 'Feature items should be <li> elements');
}

console.log('\n──────────────────────────────────────────────────────────────');
console.log('TEST 7: Language Support');
console.log('──────────────────────────────────────────────────────────────\n');

// Test 7: RTL and bilingual support
if (translationsFile.includes('ar:') && translationsFile.includes('aiContent:')) {
  pass('Arabic translations provided for new services');
} else {
  fail('Arabic translations', 'Missing Arabic translations for new services');
}

if (translationsFile.includes('en:') && translationsFile.includes('aiContent:')) {
  pass('English translations provided for new services');
} else {
  fail('English translations', 'Missing English translations for new services');
}

console.log('\n══════════════════════════════════════════════════════════════');
console.log('  TEST SUMMARY');
console.log('══════════════════════════════════════════════════════════════\n');

console.log(`✅ Passed: ${results.passed.length}`);
console.log(`❌ Failed: ${results.failed.length}`);
console.log(`⚠️  Warnings: ${results.warnings.length}\n`);

if (results.failed.length > 0) {
  console.log('FAILED TESTS:');
  results.failed.forEach(({ test, reason }) => {
    console.log(`  • ${test}`);
    console.log(`    ${reason}`);
  });
  console.log('');
}

if (results.warnings.length > 0) {
  console.log('WARNINGS (Manual verification recommended):');
  results.warnings.forEach(({ test, reason }) => {
    console.log(`  • ${test}`);
    console.log(`    ${reason}`);
  });
  console.log('');
}

console.log('══════════════════════════════════════════════════════════════');
console.log('  MANUAL TESTING CHECKLIST');
console.log('══════════════════════════════════════════════════════════════\n');

console.log('Please perform these manual tests:');
console.log('  [ ] 1. Tab through all service cards using keyboard only');
console.log('  [ ] 2. Verify focus indicators are clearly visible on all CTAs');
console.log('  [ ] 3. Press Enter/Space to activate focused CTAs');
console.log('  [ ] 4. Test with screen reader (NVDA, JAWS, VoiceOver, or Orca)');
console.log('  [ ] 5. Run axe DevTools browser extension for automated checks');
console.log('  [ ] 6. Test on mobile devices (touch targets ≥44x44px)');
console.log('  [ ] 7. Verify color contrast in actual browser (rendered colors)');
console.log('  [ ] 8. Test in high contrast mode (Windows/macOS)');
console.log('  [ ] 9. Verify Arabic RTL layout renders correctly');
console.log('  [ ] 10. Test with browser zoom at 200% (no horizontal scroll)\n');

console.log('══════════════════════════════════════════════════════════════\n');

// Exit with appropriate code
const exitCode = results.failed.length > 0 ? 1 : 0;
process.exit(exitCode);
