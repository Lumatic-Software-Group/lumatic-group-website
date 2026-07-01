/**
 * Semantic HTML and SEO Validation Script for Task 9.3
 * Validates:
 * - Services section uses proper <section> tag
 * - No duplicate IDs
 * - Service card titles use H3 tags
 * - Services section remains crawlable
 */

const fs = require('fs');
const path = require('path');

console.log('='.repeat(80));
console.log('TASK 9.3: Semantic HTML and SEO Validation');
console.log('='.repeat(80));
console.log();

// Track validation results
const results = {
  passed: [],
  failed: [],
  warnings: []
};

function pass(message) {
  results.passed.push(message);
  console.log('✅ PASS:', message);
}

function fail(message) {
  results.failed.push(message);
  console.log('❌ FAIL:', message);
}

function warn(message) {
  results.warnings.push(message);
  console.log('⚠️  WARN:', message);
}

console.log('1. VALIDATING SERVICES.TSX COMPONENT STRUCTURE');
console.log('-'.repeat(80));

// Read Services.tsx
const servicesPath = path.join(__dirname, 'components', 'Services.tsx');
const servicesContent = fs.readFileSync(servicesPath, 'utf8');

// Check 1: Services section uses proper <section> tag
if (servicesContent.includes('<section id="services"')) {
  pass('Services component uses proper <section> tag with id="services"');
} else {
  fail('Services component does not use <section> tag with id="services"');
}

// Check 2: Service card titles use H3 tags
const h3Pattern = /<h3[^>]*className={styles\.cardTitle}>/g;
const h3Matches = servicesContent.match(h3Pattern);
if (h3Matches && h3Matches.length > 0) {
  pass(`Service card titles use <h3> tags (found ${h3Matches.length} instance(s))`);
} else {
  fail('Service card titles do not use <h3> tags');
}

// Check 3: Verify aria-hidden on decorative icons
const ariaHiddenPattern = /aria-hidden="true"/g;
const ariaHiddenMatches = servicesContent.match(ariaHiddenPattern);
if (ariaHiddenMatches && ariaHiddenMatches.length >= 6) {
  pass(`Decorative SVG icons have aria-hidden="true" (found ${ariaHiddenMatches.length} instances)`);
} else {
  warn(`Found ${ariaHiddenMatches ? ariaHiddenMatches.length : 0} aria-hidden attributes. Expected at least 6 for service icons.`);
}

// Check 4: Verify proper heading hierarchy (h2 before h3)
if (servicesContent.includes('<h2') && servicesContent.indexOf('<h2') < servicesContent.indexOf('<h3')) {
  pass('Proper heading hierarchy: <h2> section title appears before <h3> card titles');
} else {
  warn('Could not verify heading hierarchy order in source');
}

// Check 5: Semantic lists for features
if (servicesContent.includes('<ul className={styles.features}>')) {
  pass('Service features use semantic <ul> lists');
} else {
  fail('Service features do not use semantic <ul> lists');
}

console.log();
console.log('2. VALIDATING PAGE.TSX STRUCTURE');
console.log('-'.repeat(80));

// Read page.tsx
const pagePath = path.join(__dirname, 'app', 'page.tsx');
const pageContent = fs.readFileSync(pagePath, 'utf8');

// Check 6: Services component inside <main>
if (pageContent.includes('<main>') && pageContent.includes('<Services />')) {
  const mainStart = pageContent.indexOf('<main>');
  const mainEnd = pageContent.indexOf('</main>');
  const servicesPos = pageContent.indexOf('<Services />');
  
  if (servicesPos > mainStart && servicesPos < mainEnd) {
    pass('Services component is properly nested inside <main> tag');
  } else {
    fail('Services component is not inside <main> tag');
  }
} else {
  fail('Could not verify <main> structure');
}

console.log();
console.log('3. CHECKING FOR DUPLICATE IDs');
console.log('-'.repeat(80));

// Check all component files for duplicate IDs
const componentsDir = path.join(__dirname, 'components');
const componentFiles = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const allIds = new Set();
const duplicateIds = [];

componentFiles.forEach(file => {
  const filePath = path.join(componentsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Match id="something" patterns
  const idPattern = /id=["']([^"']+)["']/g;
  let match;
  
  while ((match = idPattern.exec(content)) !== null) {
    const id = match[1];
    if (allIds.has(id)) {
      duplicateIds.push({ id, file });
    } else {
      allIds.add(id);
    }
  }
});

// Also check page.tsx
const pageIdPattern = /id=["']([^"']+)["']/g;
let pageMatch;
while ((pageMatch = pageIdPattern.exec(pageContent)) !== null) {
  const id = pageMatch[1];
  if (allIds.has(id)) {
    duplicateIds.push({ id, file: 'page.tsx' });
  } else {
    allIds.add(id);
  }
}

if (duplicateIds.length === 0) {
  pass(`No duplicate IDs found (checked ${allIds.size} unique IDs)`);
} else {
  fail(`Found ${duplicateIds.length} duplicate ID(s):`);
  duplicateIds.forEach(dup => {
    console.log(`   - id="${dup.id}" in ${dup.file}`);
  });
}

console.log();
console.log('4. VALIDATING LAYOUT.TSX SEO METADATA');
console.log('-'.repeat(80));

// Read layout.tsx
const layoutPath = path.join(__dirname, 'app', 'layout.tsx');
const layoutContent = fs.readFileSync(layoutPath, 'utf8');

// Check 7: Proper structured data
if (layoutContent.includes('"@type": "LocalBusiness"')) {
  pass('Structured data (JSON-LD) includes LocalBusiness schema');
} else {
  warn('LocalBusiness schema not found in structured data');
}

// Check 8: Meta description exists
if (layoutContent.includes('description:') && layoutContent.includes('Dubai')) {
  pass('Meta description exists and includes location keyword');
} else {
  warn('Meta description may be missing or incomplete');
}

// Check 9: Proper hreflang tags
if (layoutContent.includes('hrefLang="en"') && layoutContent.includes('hrefLang="ar"')) {
  pass('Proper hreflang tags for English and Arabic');
} else {
  warn('hreflang tags may be incomplete');
}

// Check 10: Robots meta tag allows indexing
if (layoutContent.includes('index: true') && layoutContent.includes('follow: true')) {
  pass('Robots metadata allows indexing and following');
} else {
  warn('Robots metadata may restrict crawling');
}

console.log();
console.log('5. CRAWLABILITY ANALYSIS');
console.log('-'.repeat(80));

// Check that services section is not blocked from crawling
const servicesHasNoIndex = servicesContent.includes('noindex') || servicesContent.includes('data-nosnippet');
if (!servicesHasNoIndex) {
  pass('Services section does not block search engine crawling');
} else {
  fail('Services section contains no-index directives');
}

// Check for proper semantic HTML5 elements
const semanticElements = ['<section', '<main', '<nav', '<header', '<footer', '<article'];
let foundElements = 0;

[pageContent, servicesContent, layoutContent].forEach(content => {
  semanticElements.forEach(element => {
    if (content.includes(element)) {
      foundElements++;
    }
  });
});

if (foundElements >= 4) {
  pass(`Proper use of HTML5 semantic elements (found ${foundElements} different types)`);
} else {
  warn('Limited use of HTML5 semantic elements');
}

console.log();
console.log('6. CONTENT VALIDATION');
console.log('-'.repeat(80));

// Check that all 6 service cards are present
const serviceCardCount = (servicesContent.match(/services\.map\(/g) || []).length;
if (serviceCardCount >= 1) {
  pass('Services component iterates over service cards array');
  
  // Count service objects in the array
  const servicesArrayMatch = servicesContent.match(/const services = \[([\s\S]*?)\];/);
  if (servicesArrayMatch) {
    const servicesArray = servicesArrayMatch[1];
    const cardCount = (servicesArray.match(/\{[\s\S]*?icon:/g) || []).length;
    
    if (cardCount === 6) {
      pass(`Services array contains 6 service cards as expected`);
    } else {
      warn(`Services array contains ${cardCount} cards (expected 6)`);
    }
  }
} else {
  fail('Services component does not properly render service cards');
}

// Check for accessible link text (not just "click here")
if (!servicesContent.includes('>click here<') && !servicesContent.includes('>Click here<')) {
  pass('CTA links use descriptive text (not generic "click here")');
} else {
  warn('Found generic "click here" link text');
}

console.log();
console.log('='.repeat(80));
console.log('VALIDATION SUMMARY');
console.log('='.repeat(80));
console.log();
console.log(`✅ PASSED: ${results.passed.length} checks`);
console.log(`❌ FAILED: ${results.failed.length} checks`);
console.log(`⚠️  WARNINGS: ${results.warnings.length} checks`);
console.log();

if (results.failed.length === 0) {
  console.log('🎉 All critical validation checks passed!');
  console.log();
  console.log('NEXT STEPS:');
  console.log('1. Build the production version: npm run build');
  console.log('2. Start a local server: npx serve out');
  console.log('3. Run Lighthouse SEO audit in Chrome DevTools (target: ≥95)');
  console.log('4. Verify all 6 service cards display correctly');
  console.log('5. Test on mobile and desktop viewports');
  console.log();
  process.exit(0);
} else {
  console.log('⚠️  Some validation checks failed. Please review and fix issues above.');
  console.log();
  process.exit(1);
}
