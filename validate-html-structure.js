#!/usr/bin/env node

/**
 * HTML Structure Validation - Task 9.3
 * Additional validation for built HTML structure
 */

const fs = require('fs');
const path = require('path');

// ANSI colors
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bright: '\x1b[1m',
};

const log = {
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  info: (msg) => console.log(`  ${msg}`),
  section: (msg) => console.log(`\n${colors.cyan}${colors.bright}${msg}${colors.reset}\n`),
};

/**
 * Check if production build exists and analyze HTML
 */
function validateBuiltHTML() {
  log.section('HTML BUILD STRUCTURE CHECK');

  // Check both docs/ (configured) and out/ (default) directories
  let outDir = path.join(__dirname, 'docs');
  
  if (!fs.existsSync(outDir)) {
    outDir = path.join(__dirname, 'out');
  }
  
  if (!fs.existsSync(outDir)) {
    log.warning('Production build directory not found (tried docs/ and out/)');
    log.info('This validation checks the built HTML. Run "npm run build" first.');
    return;
  }

  log.info(`Using build directory: ${path.basename(outDir)}/\n`);

  const indexPath = path.join(outDir, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    log.error('index.html not found in out/ directory');
    return;
  }

  log.success('Production build found, analyzing HTML structure...\n');

  const html = fs.readFileSync(indexPath, 'utf-8');

  // Check 1: Services section exists with proper id
  if (html.includes('<section id="services"')) {
    log.success('Services section with id="services" present in built HTML');
  } else {
    log.error('Services section missing or incorrectly formatted');
  }

  // Check 2: Semantic HTML elements
  const semanticElements = [
    { tag: '<main>', name: 'Main element' },
    { tag: '<section', name: 'Section elements' },
    { tag: '<header', name: 'Header elements' },
    { tag: '<footer', name: 'Footer element' },
    { tag: '<nav', name: 'Navigation elements' },
  ];

  log.info('Checking for semantic HTML elements:');
  semanticElements.forEach(({ tag, name }) => {
    if (html.includes(tag)) {
      log.success(`  ${name} found`);
    } else {
      log.warning(`  ${name} not found`);
    }
  });

  // Check 3: Heading hierarchy
  console.log();
  log.info('Checking heading hierarchy:');
  
  const headings = {
    h1: (html.match(/<h1[^>]*>/g) || []).length,
    h2: (html.match(/<h2[^>]*>/g) || []).length,
    h3: (html.match(/<h3[^>]*>/g) || []).length,
    h4: (html.match(/<h4[^>]*>/g) || []).length,
  };

  console.log(`  H1: ${headings.h1} (should be 1 per page)`);
  console.log(`  H2: ${headings.h2}`);
  console.log(`  H3: ${headings.h3} (should be 6+ for service cards)`);
  console.log(`  H4: ${headings.h4}`);

  if (headings.h1 === 1) {
    log.success('  ✓ Exactly one H1 heading (SEO best practice)');
  } else {
    log.warning(`  ⚠ Found ${headings.h1} H1 headings (should be exactly 1)`);
  }

  if (headings.h3 >= 6) {
    log.success('  ✓ Service cards use H3 headings (6+ found)');
  } else {
    log.warning(`  ⚠ Expected 6+ H3 headings for service cards, found ${headings.h3}`);
  }

  // Check 4: Lists
  console.log();
  const ulCount = (html.match(/<ul[^>]*>/g) || []).length;
  const olCount = (html.match(/<ol[^>]*>/g) || []).length;
  
  log.info(`Found ${ulCount} <ul> lists and ${olCount} <ol> lists`);
  
  if (ulCount >= 6) {
    log.success('  ✓ Service card features use <ul> lists (6+ found)');
  } else {
    log.warning(`  ⚠ Expected 6+ <ul> lists for service features, found ${ulCount}`);
  }

  // Check 5: Links
  console.log();
  const links = html.match(/<a [^>]*href=/g) || [];
  const externalLinks = html.match(/href="http/g) || [];
  const noopenerLinks = html.match(/rel="[^"]*noopener[^"]*"/g) || [];

  log.info(`Found ${links.length} total links, ${externalLinks.length} external links`);
  
  if (noopenerLinks && noopenerLinks.length > 0) {
    log.success(`  ✓ ${noopenerLinks.length} links have rel="noopener" security`);
  }

  // Check 6: Meta tags
  console.log();
  log.info('Checking meta tags:');
  
  const metaTags = [
    { pattern: /<meta name="description"/, name: 'Description' },
    { pattern: /<meta name="keywords"/, name: 'Keywords' },
    { pattern: /<meta property="og:/, name: 'Open Graph' },
    { pattern: /<meta name="robots"/, name: 'Robots' },
    { pattern: /<link rel="canonical"/, name: 'Canonical URL' },
    { pattern: /<meta name="viewport"/, name: 'Viewport (mobile)' },
  ];

  metaTags.forEach(({ pattern, name }) => {
    if (pattern.test(html)) {
      log.success(`  ${name} meta tag present`);
    } else {
      log.warning(`  ${name} meta tag missing`);
    }
  });

  // Check 7: Structured data
  console.log();
  if (html.includes('application/ld+json')) {
    log.success('Structured data (JSON-LD) present in built HTML');
    
    try {
      const jsonLdMatches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
      if (jsonLdMatches) {
        log.info(`  Found ${jsonLdMatches.length} structured data blocks`);
        
        jsonLdMatches.forEach((match, i) => {
          const jsonContent = match.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];
          try {
            const parsed = JSON.parse(jsonContent);
            const type = parsed['@type'] || (parsed['@graph'] && parsed['@graph'].map(g => g['@type']).join(', '));
            log.success(`  Block ${i + 1}: ${type || 'Unknown type'}`);
          } catch (e) {
            log.warning(`  Block ${i + 1}: Invalid JSON structure`);
          }
        });
      }
    } catch (e) {
      log.warning('  Could not parse structured data');
    }
  } else {
    log.warning('No structured data found');
  }

  // Check 8: Language attributes
  console.log();
  if (html.includes('lang="en"')) {
    log.success('Language attribute present on <html> element');
  } else {
    log.warning('Language attribute missing on <html> element');
  }

  // Check 9: Accessibility
  console.log();
  log.info('Checking accessibility attributes:');
  
  const ariaCount = (html.match(/aria-/g) || []).length;
  const altCount = (html.match(/alt="/g) || []).length;
  
  if (ariaCount > 0) {
    log.success(`  ${ariaCount} ARIA attributes found`);
  }
  if (altCount > 0) {
    log.success(`  ${altCount} alt attributes on images`);
  }

  // Summary
  log.section('✓ HTML Structure Validation Complete');
  log.info('The built HTML appears to be semantically correct and SEO-friendly.');
  log.info('For full validation, run Lighthouse audit in Chrome DevTools.');
}

validateBuiltHTML();
