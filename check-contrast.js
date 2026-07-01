/**
 * Color Contrast Checker
 * Calculates WCAG contrast ratios for service tags
 */

// Convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Parse rgba string
function parseRgba(rgba) {
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
      a: match[4] ? parseFloat(match[4]) : 1
    };
  }
  return null;
}

// Calculate relative luminance
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio
function getContrastRatio(color1, color2) {
  const l1 = getLuminance(color1.r, color1.g, color1.b);
  const l2 = getLuminance(color2.r, color2.g, color2.b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Composite color with alpha on background
function compositeColor(fg, bg) {
  const alpha = fg.a;
  return {
    r: Math.round(fg.r * alpha + bg.r * (1 - alpha)),
    g: Math.round(fg.g * alpha + bg.g * (1 - alpha)),
    b: Math.round(fg.b * alpha + bg.b * (1 - alpha))
  };
}

// ANSI colors
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  bold: '\x1b[1m',
  reset: '\x1b[0m'
};

console.log(`\n${colors.bold}═══════════════════════════════════════════════════════${colors.reset}`);
console.log(`${colors.bold}  COLOR CONTRAST VERIFICATION - Service Tags${colors.reset}`);
console.log(`${colors.bold}═══════════════════════════════════════════════════════${colors.reset}\n`);

// Test 1: High ROI tag (gold on light gold background)
console.log(`${colors.blue}1. "High ROI" Tag (AI Content & SEO Marketing)${colors.reset}`);
const goldText = hexToRgb('#7A6230'); // Darker gold for better contrast
const goldBg = parseRgba('rgba(201, 168, 76, 0.15)');
const whiteBg = { r: 255, g: 255, b: 255 }; // Card background

// Composite the semi-transparent gold background on white
const compositeBg = compositeColor(goldBg, whiteBg);

const ratio1 = getContrastRatio(goldText, compositeBg);
console.log(`   Text: #7A6230 (rgb(122, 98, 48))`);
console.log(`   Background: rgba(201, 168, 76, 0.15) on white`);
console.log(`   Effective Background: rgb(${compositeBg.r}, ${compositeBg.g}, ${compositeBg.b})`);
console.log(`   Contrast Ratio: ${colors.bold}${ratio1.toFixed(2)}:1${colors.reset}`);

if (ratio1 >= 4.5) {
  console.log(`   ${colors.green}✓ PASSES WCAG AA (≥4.5:1)${colors.reset}`);
} else if (ratio1 >= 3.0) {
  console.log(`   ${colors.yellow}⚠ PASSES WCAG AA Large Text (≥3:1) only${colors.reset}`);
} else {
  console.log(`   ${colors.red}✗ FAILS WCAG AA${colors.reset}`);
}

// Test 2: Featured tag (dark on gold gradient)
console.log(`\n${colors.blue}2. "Best Value" Featured Tag${colors.reset}`);
const darkText = hexToRgb('#0A1628');
const gradientBg = hexToRgb('#C9A84C'); // Use darker end of gradient

const ratio2 = getContrastRatio(darkText, gradientBg);
console.log(`   Text: #0A1628 (rgb(10, 22, 40))`);
console.log(`   Background: #C9A84C (rgb(201, 168, 76))`);
console.log(`   Contrast Ratio: ${colors.bold}${ratio2.toFixed(2)}:1${colors.reset}`);

if (ratio2 >= 4.5) {
  console.log(`   ${colors.green}✓ PASSES WCAG AA (≥4.5:1)${colors.reset}`);
} else if (ratio2 >= 3.0) {
  console.log(`   ${colors.yellow}⚠ PASSES WCAG AA Large Text (≥3:1) only${colors.reset}`);
} else {
  console.log(`   ${colors.red}✗ FAILS WCAG AA${colors.reset}`);
}

// Test 3: Card description text
console.log(`\n${colors.blue}3. Card Description Text${colors.reset}`);
const descText = hexToRgb('#4A5E78');
const cardBg = whiteBg;

const ratio3 = getContrastRatio(descText, cardBg);
console.log(`   Text: #4A5E78 (rgb(74, 94, 120))`);
console.log(`   Background: #FFFFFF (rgb(255, 255, 255))`);
console.log(`   Contrast Ratio: ${colors.bold}${ratio3.toFixed(2)}:1${colors.reset}`);

if (ratio3 >= 4.5) {
  console.log(`   ${colors.green}✓ PASSES WCAG AA (≥4.5:1)${colors.reset}`);
} else if (ratio3 >= 3.0) {
  console.log(`   ${colors.yellow}⚠ PASSES WCAG AA Large Text (≥3:1) only${colors.reset}`);
} else {
  console.log(`   ${colors.red}✗ FAILS WCAG AA${colors.reset}`);
}

// Test 4: Featured card description
console.log(`\n${colors.blue}4. Featured Card Description Text${colors.reset}`);
const featuredDescText = parseRgba('rgba(255, 255, 255, 0.6)');
const featuredCardBg = hexToRgb('#0A1628');

const compositeText = compositeColor(featuredDescText, featuredCardBg);
const ratio4 = getContrastRatio(compositeText, featuredCardBg);
console.log(`   Text: rgba(255, 255, 255, 0.6)`);
console.log(`   Effective Text: rgb(${compositeText.r}, ${compositeText.g}, ${compositeText.b})`);
console.log(`   Background: #0A1628 (rgb(10, 22, 40))`);
console.log(`   Contrast Ratio: ${colors.bold}${ratio4.toFixed(2)}:1${colors.reset}`);

if (ratio4 >= 4.5) {
  console.log(`   ${colors.green}✓ PASSES WCAG AA (≥4.5:1)${colors.reset}`);
} else if (ratio4 >= 3.0) {
  console.log(`   ${colors.yellow}⚠ PASSES WCAG AA Large Text (≥3:1) only${colors.reset}`);
} else {
  console.log(`   ${colors.red}✗ FAILS WCAG AA${colors.reset}`);
}

// Summary
console.log(`\n${colors.bold}═══════════════════════════════════════════════════════${colors.reset}`);
console.log(`${colors.bold}  SUMMARY${colors.reset}`);
console.log(`${colors.bold}═══════════════════════════════════════════════════════${colors.reset}\n`);

const allPass = ratio1 >= 4.5 && ratio2 >= 4.5 && ratio3 >= 4.5 && ratio4 >= 4.5;
const largeTextPass = ratio1 >= 3.0 && ratio2 >= 3.0 && ratio3 >= 3.0 && ratio4 >= 3.0;

if (allPass) {
  console.log(`${colors.green}✓ All color combinations PASS WCAG AA for normal text${colors.reset}`);
} else if (largeTextPass) {
  console.log(`${colors.yellow}⚠ Some combinations only pass for large text (14pt bold or 18pt)${colors.reset}`);
  console.log(`${colors.yellow}  Consider increasing contrast or using larger font sizes${colors.reset}`);
} else {
  console.log(`${colors.red}✗ Some color combinations FAIL WCAG AA${colors.reset}`);
  console.log(`${colors.red}  Remediation required for accessibility compliance${colors.reset}`);
}

console.log(`\n${colors.blue}📚 WCAG 2.1 AA Requirements:${colors.reset}`);
console.log(`   • Normal text: 4.5:1 minimum`);
console.log(`   • Large text (14pt bold / 18pt): 3:1 minimum`);
console.log(`   • Tag text is 0.65rem (~10pt), requires 4.5:1\n`);

process.exit(allPass ? 0 : 1);
