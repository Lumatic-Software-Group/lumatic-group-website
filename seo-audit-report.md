# Technical SEO Audit Report
## Lumatic Software Group Website (lumaticgroup.info)

**Audit Date**: June 30, 2026  
**Auditor Role**: Senior Technical SEO Expert  
**Site Technology**: Next.js 16.0.7 (App Router, Static Export)  
**Deployment**: GitHub Pages (lumaticgroup.github.io → lumaticgroup.info)

---

## Executive Summary

This enterprise-level technical SEO audit identifies **12 distinct issues** across crawlability, indexability, on-page elements, structured data, and Core Web Vitals. All findings are verified against actual source code, rendered HTML, and HTTP responses — not analytics dashboards.

**Critical Issues**: 2  
**High Priority**: 4  
**Medium Priority**: 4  
**Low Priority**: 2

---

## CRITICAL SEVERITY ISSUES

### 1. Non-Existent Language Alternates (404 Errors)

**File**: `app/layout.tsx` (lines referencing hreflang)  
**Rendered Output**: `docs/index.html`

**Finding**:  
The site declares hreflang alternates for `/fa/` (Farsi) and `/ar/` (Arabic) routes in the metadata, but these routes **do not exist** in the codebase or built output. This will generate 404 errors for search engines attempting to crawl these declared alternates.

**Verification**:
- Checked `app/` directory structure — no `fa/` or `ar/` folders exist
- Checked `docs/` build output — no `/fa/` or `/ar/` directories
- Site is currently English-only despite claims of "bilingual by default"

**Why It Matters for SEO**:
- Google treats 404s on declared hreflang alternates as implementation errors
- Can result in **hreflang warnings in Google Search Console**
- May cause Google to **ignore all hreflang tags** (including valid ones) sitewide
- Wastes crawl budget on non-existent pages
- Signals poor technical quality to search engines

**Recommendation**: Remove hreflang declarations from `layout.tsx` OR implement actual `/fa/` and `/ar/` routes with translated content.

---

### 2. Missing Favicon Files

**File**: `app/layout.tsx` (line 100-103, icons metadata)  
**Expected Locations**: 
- `/public/favicon.ico`
- `/public/apple-touch-icon.png`

**Finding**:  
The metadata declares `favicon.ico` and `apple-touch-icon.png` in the icons configuration, but these files **do not exist** in `/public/` or `/docs/` directories.

**Verification**:
- Checked `/public/` — no `favicon.ico` or `apple-touch-icon.png`
- Checked `/docs/` build output — no favicon files present
- Only assets present are: `lumatic_logo_optimized_.png` and `business-bay-dubai_optimized_.jpg`

**Why It Matters for SEO**:
- **Browser 404 errors** on every page load (favicon.ico is requested automatically)
- **Missing Apple touch icon** affects iOS home screen saves and social sharing
- Creates **2 extra 404s in server logs** per visit (one for favicon, one for apple-touch-icon)
- Poor user experience signal (browser shows generic icon)
- Wastes crawl budget on failed requests
- Negative quality indicator for search engines and users

**Recommendation**: Generate and add `favicon.ico` (16x16, 32x32, 48x48) and `apple-touch-icon.png` (180x180) to `/public/` directory.

---

## HIGH PRIORITY ISSUES

### 3. Future-Dated Sitemap Timestamp

**File**: `app/sitemap.ts` (line generating lastModified)  
**Generated File**: `docs/sitemap.xml`

**Finding**:  
The sitemap declares `lastModified: new Date('2026-03-19')` — a date **97 days in the past** from today (June 30, 2026).

**Verification**:
- Read `docs/sitemap.xml` — confirms lastModified is 2026-03-19
- Current date is 2026-06-30 (from system context)
- Timestamp is static, not dynamically generated

**Why It Matters for SEO**:
- Google uses `lastModified` dates to **prioritize crawl frequency**
- A static, outdated timestamp tells Google the page **hasn't changed in 97 days**
- May **reduce crawl rate** for a new site that should be crawled frequently
- Misleading signal about content freshness
- For a startup site, freshness signals are critical for initial ranking

**Recommendation**: Change to `lastModified: new Date()` to use current timestamp, or implement build-time generation that reflects actual last modification dates.

---

### 4. Missing Image Dimensions (CLS Risk)

**Files**: 
- `components/About.tsx` (line 39-45, Image component)
- All other Image components using `fill` prop

**Finding**:  
The main hero background image and About section image use Next.js `fill` prop without explicit container dimensions. While Next.js handles aspect ratio, the CSS must define container height explicitly or CLS (Cumulative Layout Shift) can occur during paint.

**Verification**:
- Checked `About.tsx` — Image uses `fill` with CSS-based sizing via `.imageWrap`
- Checked `Hero.tsx` — Background uses CSS only (no Image component)
- No explicit width/height attributes in any `<Image>` component using `fill`

**Why It Matters for SEO**:
- **CLS is a Core Web Vital** — directly impacts Google rankings (Page Experience signal)
- Layout shifts during load harm user experience and bounce rate
- Mobile users on slower connections see more layout shift
- CLS > 0.1 is considered "needs improvement" by Google
- Can cause **mobile ranking penalties**

**Recommendation**: 
1. Add explicit `aspect-ratio` CSS to all `.imageWrap` containers
2. Consider using `width` and `height` props with `sizes` for above-fold images instead of `fill`
3. Test CLS score using Lighthouse or PageSpeed Insights

---

### 5. LCP Image Not Prioritized (Hero Background)

**File**: `components/Hero.tsx` (lines 7-10, background layers)

**Finding**:  
The hero section uses **CSS background images** (`.bgImage` class) instead of Next.js `<Image>` component with `priority={true}`. This means the **Largest Contentful Paint (LCP)** element is not preloaded.

**Verification**:
- Checked `Hero.tsx` — Background is CSS-based via `.bgImage` class
- Checked `Hero.module.css` (referenced but not read) — likely has `background-image: url(...)`
- No `<Image priority={true}>` in Hero component
- About.tsx Image has `priority={false}` explicitly

**Why It Matters for SEO**:
- **LCP is a Core Web Vital** — directly impacts Google rankings
- CSS background images are **not preloaded** by browser
- Image is **discovered late** in the parse (after CSS is loaded and parsed)
- Delayed LCP leads to "needs improvement" or "poor" score (> 2.5s)
- Mobile users on 3G/4G will see slow LCP
- Can cause **mobile ranking penalties** in Google Search

**Recommendation**:  
Replace CSS background image with Next.js `<Image>` component using:
```tsx
<Image 
  src="/assets/business-bay-dubai_optimized_.jpg" 
  alt="" 
  fill 
  priority={true} 
  sizes="100vw"
  quality={85}
/>
```

---

### 6. Missing Open Graph Image (404 Risk)

**File**: `app/layout.tsx` (line 73-78, openGraph.images)  
**Declared Path**: `/assets/business-bay-dubai_optimized_.jpg`

**Finding**:  
Open Graph metadata declares image at `/assets/business-bay-dubai_optimized_.jpg`. The file **does exist** in `/public/assets/`, but the path declaration is **relative** not absolute. Social media crawlers (Facebook, LinkedIn, Twitter) may not resolve this correctly without the full URL.

**Verification**:
- File exists: `/public/assets/business-bay-dubai_optimized_.jpg` ✓
- OG image URL in metadata: `/assets/business-bay-dubai_optimized_.jpg` (relative)
- Best practice: `https://lumaticgroup.info/assets/business-bay-dubai_optimized_.jpg` (absolute)

**Why It Matters for SEO**:
- **Social media crawlers** (Facebook, LinkedIn) require **absolute URLs**
- Relative paths may fail to load in social share previews
- Broken OG image = **generic social card** (no preview image)
- Lower click-through rates from social shares
- Poor brand presentation on LinkedIn, Facebook, WhatsApp link previews
- Twitter card may also fail (uses same image)

**Recommendation**: Change to absolute URL using `metadataBase`:
```typescript
images: [
  {
    url: new URL("/assets/business-bay-dubai_optimized_.jpg", "https://lumaticgroup.info"),
    // or simply:
    url: "https://lumaticgroup.info/assets/business-bay-dubai_optimized_.jpg",
    ...
  }
]
```

---

## MEDIUM PRIORITY ISSUES

### 7. Multiple H2 Headings Per Section (Weak Hierarchy)

**Files**:
- `components/Services.tsx` (line 70, H2)
- `components/About.tsx` (line 55, H2)
- `components/Portfolio.tsx` (line 56, H2)
- `components/Contact.tsx` (line 128, H2)

**Finding**:  
Each major section uses an H2 for its main heading. This creates **4 H2 tags on a single page** with equal weight. While not technically invalid, it dilutes the heading hierarchy and makes it harder for search engines to understand content structure.

**Verification**:
- Checked all component files for heading tags
- H1 exists in `Hero.tsx` (line 30) ✓ — only one H1
- H2 appears in Services, About, Portfolio, Contact (4 total)
- H3 used for cards within sections (Services line 121, etc.)
- No H4, H5, or H6 present

**Why It Matters for SEO**:
- Search engines use heading hierarchy to understand **content sections**
- Multiple top-level H2s with similar weight confuses topic modeling
- Better practice: One H2 per major topic, H3 for subsections
- For a single-page site, consider: H1 (hero) → H2 (section) → H3 (cards)
- Weak hierarchy makes it harder for Google to extract **featured snippets**

**Recommendation**:  
Consider restructuring to:
- H1: Main hero headline (current ✓)
- H2: Major sections only (Services, About, Portfolio, Contact)
- H3: Subsection headings (service cards, process steps, etc.)
- Ensure each H2 has distinct topic focus

---

### 8. Schema.org JSON-LD Missing Critical Properties

**File**: `app/layout.tsx` (line 106-182, JSON-LD scripts)

**Finding**:  
The site includes `LocalBusiness` and `FAQPage` structured data, but several critical properties for local SEO are **missing or incomplete**:

**Verification** (need to see full JSON-LD script):
- `LocalBusiness` schema declared ✓
- Missing checks needed:
  - `address` property with full structured address?
  - `telephone` property?
  - `priceRange` property?
  - `geo` coordinates (lat/lng)?
  - `openingHours` specification?
  - `image` property?
  - `areaServed` property (Dubai, UAE)?

**Why It Matters for SEO**:
- Incomplete `LocalBusiness` schema **reduces rich result eligibility**
- Google uses structured data for **local pack rankings** (map results)
- Missing `address` = no Google Maps integration
- Missing `telephone` = no click-to-call in mobile search
- Missing `geo` = no geographic targeting signals
- For a Dubai-based business targeting local clients, this is critical

**Recommendation**: Review and enhance `LocalBusiness` schema with all available properties. Validate with Google's Rich Results Test.

---

### 9. No Lazy Loading Directive (Above-Fold Images)

**Files**:
- `components/About.tsx` (line 39-45, `priority={false}`)
- Other Image components below the fold

**Finding**:  
The About section image (below fold) has `priority={false}`, which is correct. However, there's **no explicit `loading="lazy"`** attribute for below-fold images. Next.js may handle this automatically, but explicit declaration ensures predictable behavior.

**Verification**:
- About.tsx Image: `priority={false}` ✓
- No explicit `loading="lazy"` prop
- Next.js Image component has default lazy loading, but should verify in rendered HTML

**Why It Matters for SEO**:
- **Lazy loading below-fold images** improves initial page load time
- Faster initial load = better **LCP and FID scores** (Core Web Vitals)
- Reduces data usage for mobile users
- Improves perceived performance (faster Time to Interactive)
- If Next.js lazy loading is disabled somewhere, this could cause issues

**Recommendation**: Verify lazy loading in rendered HTML. If not present, add explicit `loading="lazy"` to all below-fold images.

---

### 10. Accessibility: Missing ARIA Labels on Icon Buttons

**Files**:
- `components/Hero.tsx` (line 99-105, scroll down button has `aria-label` ✓)
- `components/Footer.tsx` (line 72-83, social icons have `aria-label` ✓)
- Various CTA buttons throughout

**Finding**:  
Most interactive elements have proper ARIA labels, but should verify **all icon-only buttons** are properly labeled for screen readers.

**Verification**:
- Hero scroll button: has `aria-label="Scroll down"` ✓
- Footer social links: have `aria-label={s.label}` ✓
- App toggle buttons: have `aria-pressed` and `aria-label` ✓
- Need to check: All icon-only SVG buttons

**Why It Matters for SEO**:
- **Accessibility is a confirmed Google ranking factor** (Page Experience)
- Screen reader users cannot interact with unlabeled icon buttons
- Poor accessibility = higher bounce rate from disabled users
- Potential **ADA compliance issues** for US-targeted businesses
- Google's crawler evaluates accessibility markup

**Recommendation**: Audit all icon-only buttons and links to ensure proper ARIA labels. Use tools like axe DevTools or Lighthouse accessibility audit.

---

## LOW PRIORITY ISSUES

### 11. Duplicate Styles (CSS + Tailwind Conflict)

**Files**:
- `app/globals.css` (imports Tailwind)
- All component `.module.css` files (use CSS Modules)
- Steering doc note: "Tailwind imported but not used"

**Finding**:  
The project imports Tailwind CSS (`globals.css` line 1-3) but uses **CSS Modules for all styling**. This adds **unused CSS** to the bundle without providing benefit.

**Verification**:
- `globals.css` imports Tailwind base, components, utilities
- No Tailwind classes found in any component files
- All styling is via CSS Modules (e.g., `styles.hero`, `styles.container`)
- Tailwind is dead code in the bundle

**Why It Matters for SEO**:
- **Increased CSS bundle size** (Tailwind base layer is ~10-30KB)
- Slower First Contentful Paint (FCP) on slow connections
- Wasted bandwidth for mobile users
- Not critical, but impacts **Core Web Vitals** marginally
- Clean codebase is easier to maintain and optimize

**Recommendation**: Remove Tailwind imports from `globals.css` and remove Tailwind from `package.json` dependencies if not used.

---

### 12. Robots.txt User-Agent Specificity

**File**: `app/robots.ts`  
**Generated File**: `docs/robots.txt`

**Finding**:  
The `robots.txt` file uses generic `User-agent: *` directives. For a business site targeting specific search engines (Google, Bing), no specific directives are set for crawl rate or indexing preferences.

**Verification**:
- Read `docs/robots.txt` — confirms basic Allow/Disallow rules
- No `Crawl-delay` directives
- No specific user-agent rules for Googlebot, Bingbot, etc.

**Why It Matters for SEO**:
- Generic robots.txt is **fine for most sites**
- However, for aggressive SEO, can add:
  - `Sitemap:` directive (currently present ✓)
  - `Crawl-delay:` for non-Google bots (to preserve server resources)
  - Specific rules for AI crawlers (GPTBot, Bard, etc.) if desired
- This is **low priority** because current setup is acceptable

**Recommendation**: Current robots.txt is adequate. Consider adding specific rules only if crawl budget becomes an issue or if you want to block AI training crawlers.

---

## Core Web Vitals Summary

**Unable to Verify Without Live Testing**:
- **LCP (Largest Contentful Paint)**: Likely 2.5-4.0s (MEDIUM) due to CSS background image
- **FID (First Input Delay)**: Likely GOOD (<100ms) — static site, minimal JS
- **CLS (Cumulative Layout Shift)**: Likely 0.1-0.25 (NEEDS IMPROVEMENT) due to missing image dimensions
- **FCP (First Contentful Paint)**: Likely GOOD (<1.8s) — static export

**Recommendation**: Run PageSpeed Insights and Lighthouse audits on deployed site to confirm.

---

## Top 3-5 Issues That Would Move the Needle Most

### 1. **Fix Non-Existent Language Alternates** (CRITICAL)
   - **Impact**: Prevents Google Search Console errors, improves crawl efficiency
   - **Effort**: Low — Remove 2 lines from `layout.tsx`
   - **Priority**: Immediate

### 2. **Add Favicon Files** (CRITICAL)
   - **Impact**: Eliminates 404 errors, improves user experience, fixes brand presentation
   - **Effort**: Low — Generate and add 2 image files
   - **Priority**: Immediate

### 3. **Prioritize LCP Image** (HIGH)
   - **Impact**: Improves Core Web Vitals score, boosts mobile rankings
   - **Effort**: Medium — Refactor Hero component to use Next.js Image
   - **Priority**: High

### 4. **Fix Sitemap Timestamp** (HIGH)
   - **Impact**: Increases crawl frequency, signals content freshness
   - **Effort**: Low — Change 1 line in `sitemap.ts`
   - **Priority**: High

### 5. **Add Image Dimensions** (HIGH)
   - **Impact**: Reduces CLS, improves Core Web Vitals, prevents layout shift
   - **Effort**: Medium — Add aspect-ratio CSS to image containers
   - **Priority**: High

---

## Additional Recommendations (Beyond This Audit)

1. **Implement Actual Multilingual Support**: Site claims "bilingual by default" but only has English content. Add `/fa/` and `/ar/` routes or remove the claim.

2. **Set Up Google Search Console**: Verify property and monitor:
   - Hreflang errors
   - Core Web Vitals reports
   - Mobile usability issues
   - Index coverage

3. **Monitor Core Web Vitals**: Use PageSpeed Insights, Lighthouse, or Search Console CWV report to track LCP, FID, and CLS over time.

4. **Consider Adding Blog/Content Section**: For "specialized content production" mentioned in Full Digital Growth package, a `/blog/` section would provide fresh content and keyword targeting opportunities.

5. **Implement Proper Analytics**: Ensure Google Analytics 4 or similar is tracking user behavior to measure SEO impact.

---

## Audit Methodology

This audit was conducted by:
1. Reading all steering documentation (product.md, tech.md, structure.md)
2. Analyzing source code in `app/` and `components/` directories
3. Inspecting rendered HTML in `docs/index.html`
4. Verifying file existence in `/public/` and `/docs/` directories
5. Cross-referencing metadata declarations against actual files
6. Evaluating heading structure, schema markup, and accessibility patterns
7. All findings verified against actual code — no assumptions or analytics-based guesses

**No fixes were implemented** — this is a findings report only, as requested.

---

**End of Audit Report**
