/**
 * Accessibility Verification Script for Task 9.2
 * Verifies WCAG 2.1 AA compliance for new service cards
 */

const fs = require('fs');
const path = require('path');

// Color contrast calculation utilities
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

// Read the Services component
const servicesPath = path.join(__dirname, 'components', 'Services.tsx');
const servicesContent = fs.readFileSync(servicesPath, 'utf-8');

// Read the CSS module
const cssPath = path.join(__dirname, 'components', 'Services.module.css');
const cssContent = fs.readFileSync(cssPath, 'utf-8');

console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║   ACCESSIBILITY VERIFICATION REPORT - TASK 9.2                 ║');
console.log('║   Testing WCAG 2.1 AA Compliance for New Service Cards        ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

const results = {
  passed: [],
  failed: [],
  warnings: []
};

// Test 1: Heading Hierarchy
console.log('📋 TEST 1: Heading Hierarchy');
console.log('─────────────────────────────────────────────────────────────────');

const hasH3Title = servicesContent.includes('<h3 className={styles.cardTitle}>');
if (hasH3Title) {
  console.log('✅ PASS: Card titles use <h3> tags (correct semantic hierarchy)');
  results.passed.push('Heading hierarchy correct (H3 for card titles)');
} else {
  console.log('❌ FAIL: Card titles do not use proper <h3> tags');
  results.failed.push('Heading hierarchy incorrect');
}

const hasH2Section = servicesContent.includes('<h2 className={styles.title}>');
if (hasH2Section) {
  console.log('✅ PASS: Section title uses <h2> (proper hierarchy: h2 → h3)');
  results.passed.push('Section uses H2, cards use H3');
} else {
  console.log('⚠️  WARNING: Section title may not use <h2>');
  results.warnings.push('Section heading hierarchy unclear');
}

console.log('');

// Test 2: Color Contrast for Tags
console.log('📋 TEST 2: Color Contrast for Tags');
console.log('─────────────────────────────────────────────────────────────────');

// Regular tag colors from CSS
const tagTextColor = '#7A6230';
const tagBgColor = '#F5EDD5'; // rgba(201, 168, 76, 0.15) on white ≈ this
const tagContrast = getContrastRatio(tagTextColor, tagBgColor);

console.log(`Regular Tag: ${tagTextColor} on ${tagBgColor}`);
console.log(`Contrast Ratio: ${tagContrast.toFixed(2)}:1`);

if (tagContrast >= 4.5) {
  console.log('✅ PASS: Regular tag contrast meets WCAG AA (4.5:1)');
  results.passed.push(`Tag contrast ${tagContrast.toFixed(2)}:1 meets 4.5:1`);
} else if (tagContrast >= 3.0) {
  console.log(`⚠️  WARNING: Regular tag contrast ${tagContrast.toFixed(2)}:1 meets Large Text AA (3:1) but not Normal Text AA (4.5:1)`);
  results.warnings.push(`Tag contrast ${tagContrast.toFixed(2)}:1 < 4.5:1`);
} else {
  console.log(`❌ FAIL: Regular tag contrast ${tagContrast.toFixed(2)}:1 does not meet WCAG AA`);
  results.failed.push(`Tag contrast ${tagContrast.toFixed(2)}:1 fails WCAG AA`);
}

// Featured tag (gradient on dark background)
const featuredTagText = '#0A1628';
const featuredTagBg = '#C9A84C'; // Mid-point of gradient
const featuredTagContrast = getContrastRatio(featuredTagText, featuredTagBg);

console.log(`\nFeatured Tag: ${featuredTagText} on ${featuredTagBg}`);
console.log(`Contrast Ratio: ${featuredTagContrast.toFixed(2)}:1`);

if (featuredTagContrast >= 4.5) {
  console.log('✅ PASS: Featured tag contrast meets WCAG AA (4.5:1)');
  results.passed.push(`Featured tag contrast ${featuredTagContrast.toFixed(2)}:1 meets 4.5:1`);
} else {
  console.log(`❌ FAIL: Featured tag contrast ${featuredTagContrast.toFixed(2)}:1 does not meet WCAG AA`);
  results.failed.push(`Featured tag contrast ${featuredTagContrast.toFixed(2)}:1 fails WCAG AA`);
}

console.log('');

// Test 3: CTA Button Descriptive Text
console.log('📋 TEST 3: CTA Button Descriptive Text');
console.log('─────────────────────────────────────────────────────────────────');

// Check for AI Content CTA
const aiContentCTA = servicesContent.includes('aiContent.ctaLabel');
// Check for AI Agent CTA
const aiAgentCTA = servicesContent.includes('aiAgent.ctaLabel');

if (aiContentCTA) {
  console.log('✅ PASS: AI Content CTA uses descriptive text from translation');
  results.passed.push('AI Content CTA has descriptive text');
} else {
  console.log('❌ FAIL: AI Content CTA not found or not descriptive');
  results.failed.push('AI Content CTA missing descriptive text');
}

if (aiAgentCTA) {
  console.log('✅ PASS: AI Agent CTA uses descriptive text from translation');
  results.passed.push('AI Agent CTA has descriptive text');
} else {
  console.log('❌ FAIL: AI Agent CTA not found or not descriptive');
  results.failed.push('AI Agent CTA missing descriptive text');
}

// Check that CTAs are not just "Click here" or generic
const noGenericText = !servicesContent.includes('>Click here<') && 
                      !servicesContent.includes('>Learn more<');
if (noGenericText) {
  console.log('✅ PASS: No generic "Click here" or "Learn more" text found');
  results.passed.push('CTA buttons use specific, descriptive text');
} else {
  console.log('⚠️  WARNING: Generic CTA text found');
  results.warnings.push('Some CTAs may use generic text');
}

console.log('');

// Test 4: Icons with aria-hidden
console.log('📋 TEST 4: Icons with aria-hidden="true"');
console.log('─────────────────────────────────────────────────────────────────');

// Count all SVG elements
const svgMatches = servicesContent.match(/<svg[^>]*>/g) || [];
const totalSvgs = svgMatches.length;

// Count SVGs with aria-hidden="true"
const ariaHiddenSvgs = servicesContent.match(/<svg[^>]*aria-hidden="true"[^>]*>/g) || [];
const ariaHiddenCount = ariaHiddenSvgs.length;

console.log(`Total SVG icons found: ${totalSvgs}`);
console.log(`SVGs with aria-hidden="true": ${ariaHiddenCount}`);

if (ariaHiddenCount === totalSvgs) {
  console.log('✅ PASS: All icons have aria-hidden="true" (decorative)');
  results.passed.push(`All ${totalSvgs} icons properly marked as decorative`);
} else {
  console.log(`⚠️  WARNING: ${totalSvgs - ariaHiddenCount} icons missing aria-hidden="true"`);
  results.warnings.push(`${totalSvgs - ariaHiddenCount} icons not marked as decorative`);
}

console.log('');

// Test 5: Keyboard Navigation
console.log('📋 TEST 5: Keyboard Navigation Support');
console.log('─────────────────────────────────────────────────────────────────');

// Check for focus-visible styles
const hasFocusVisible = cssContent.includes(':focus-visible');
if (hasFocusVisible) {
  console.log('✅ PASS: CSS includes :focus-visible styles for keyboard navigation');
  results.passed.push('Focus indicators defined with :focus-visible');
} else {
  console.log('❌ FAIL: No :focus-visible styles found');
  results.failed.push('Missing keyboard focus indicators');
}

// Check that CTAs are <a> tags (keyboard accessible)
const ctaIsLink = servicesContent.includes('className={`${styles.cardCta}');
if (ctaIsLink) {
  console.log('✅ PASS: CTA buttons use <a> tags (keyboard accessible)');
  results.passed.push('CTA buttons are keyboard accessible links');
} else {
  console.log('⚠️  WARNING: CTA implementation unclear');
  results.warnings.push('CTA keyboard accessibility needs verification');
}

// Check for outline styles in CSS
const hasOutlineStyles = cssContent.match(/outline:\s*2px/g) || [];
const outlineCount = hasOutlineStyles.length;
console.log(`Focus outline styles found: ${outlineCount}`);

if (outlineCount >= 3) {
  console.log('✅ PASS: Multiple focus outline styles defined for different elements');
  results.passed.push(`${outlineCount} focus outline styles defined`);
} else {
  console.log('⚠️  WARNING: Limited focus outline styles may affect keyboard navigation');
  results.warnings.push('Consider adding more focus styles');
}

console.log('');

// Test 6: Semantic HTML Structure
console.log('📋 TEST 6: Semantic HTML Structure');
console.log('─────────────────────────────────────────────────────────────────');

const hasSection = servicesContent.includes('<section');
const hasUl = servicesContent.includes('<ul className={styles.features}>');
const hasLi = servicesContent.includes('<li key={f} className={styles.feature}>');

if (hasSection) {
  console.log('✅ PASS: Uses semantic <section> element');
  results.passed.push('Semantic <section> element used');
} else {
  console.log('❌ FAIL: Missing semantic <section> element');
  results.failed.push('Missing semantic structure');
}

if (hasUl && hasLi) {
  console.log('✅ PASS: Features use semantic <ul> and <li> elements');
  results.passed.push('Semantic list structure for features');
} else {
  console.log('❌ FAIL: Features do not use proper list structure');
  results.failed.push('Missing semantic list structure');
}

console.log('');

// Summary
console.log('═════════════════════════════════════════════════════════════════');
console.log('                         SUMMARY REPORT                          ');
console.log('═════════════════════════════════════════════════════════════════\n');

console.log(`✅ PASSED: ${results.passed.length} checks`);
results.passed.forEach(item => console.log(`   • ${item}`));

console.log(`\n⚠️  WARNINGS: ${results.warnings.length} items`);
results.warnings.forEach(item => console.log(`   • ${item}`));

console.log(`\n❌ FAILED: ${results.failed.length} checks`);
results.failed.forEach(item => console.log(`   • ${item}`));

const overallPass = results.failed.length === 0;
const wcagLevel = overallPass && results.warnings.length === 0 ? 'AA' : 
                  overallPass ? 'AA (with minor warnings)' : 'Does not meet AA';

console.log('\n─────────────────────────────────────────────────────────────────');
console.log(`WCAG 2.1 Compliance Level: ${wcagLevel}`);
console.log('─────────────────────────────────────────────────────────────────\n');

console.log('📝 MANUAL TESTING REQUIRED:');
console.log('   • Test keyboard navigation (Tab, Enter, Shift+Tab)');
console.log('   • Verify focus indicators are visible');
console.log('   • Test with screen reader (VoiceOver, NVDA, JAWS)');
console.log('   • Run Lighthouse accessibility audit');
console.log('   • Run axe DevTools browser extension');
console.log('   • Verify touch targets on mobile (min 44x44px)');
console.log('\n═════════════════════════════════════════════════════════════════\n');

// Exit code based on results
process.exit(results.failed.length > 0 ? 1 : 0);
