# Product Overview — Lumatic Software Group Website

## What This Application Is

This is the official marketing and lead generation website for **Lumatic Software Group**, a Dubai-based digital studio founded by Mahdi Hossein Abbasian (Senior Mobile Developer). The site is a single-page application (SPA) built as a static export for deployment to GitHub Pages.

## Core Purpose

**Primary Goal**: Convert visitors into paying clients through WhatsApp or Telegram contact.

**Business Model**: B2B digital services for Dubai/UAE businesses, with emphasis on:
- AI-powered chatbot setup (WhatsApp/Telegram automation)
- Professional bilingual business websites (English/Arabic/Farsi)
- Android & iOS mobile app development
- Full Digital Growth packages (Website + Bot + SEO)

## Implemented Features

### 1. Landing Page (Single-Page Architecture)

**Sections implemented (in order)**:
1. **Hero** — Primary value proposition, stats (500K+ downloads, 6+ years exp), dual-app CTA (WhatsApp/Telegram toggle)
2. **Services** — Four service cards with feature lists and dynamic messaging CTAs
3. **About** — Founder story, studio pillars, bilingual by default messaging
4. **Portfolio** — Stats band, project showcase cards, process timeline
5. **Contact** — Multi-channel contact info, contact form (mailto), messaging app toggle
6. **Footer** — Brand info, nav links, services, messaging CTA, bottom bar with founder credit

### 2. Messaging App Toggle System

**Implementation**: Global context-based state management (`MessagingContext`)

**Features**:
- User can toggle between WhatsApp and Telegram as preferred contact method
- Choice persists across all CTAs (Navbar, Hero, Services, About, Contact, Footer, FAB)
- WhatsApp is the default
- Each CTA dynamically updates href, color, icon, and shadow based on active app
- Toggle UI appears in:
  - Navbar dropdown (desktop)
  - Hero section (pill toggle + primary CTA)
  - Services cards (dynamic quote links)
  - Contact section (pill toggle + primary button)
  - Footer (indicator pills + CTA)

### 3. Floating Action Button (FAB)

**Position**: Fixed bottom-right
**Features**:
- Primary button opens active messaging app
- Secondary toggle button reveals app picker
- Visual pulse animation
- Dynamic color based on active app

### 4. Navigation

**Desktop**:
- Fixed navbar with scroll detection (backdrop blur on scroll)
- Logo, 5 nav links, CTA with dropdown app picker
- Smooth scroll to sections

**Mobile**:
- Hamburger menu
- Right-side drawer with nav links
- Messaging options at bottom of drawer
- Overlay on open

### 5. SEO & Metadata

**Implemented**:
- Comprehensive Next.js metadata (title, description, keywords)
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Schema.org JSON-LD structured data:
  - LocalBusiness
  - WebSite with SearchAction
  - ProfessionalService with OfferCatalog
  - FAQPage with 9 FAQ items
- Geo tags (Dubai coordinates: 25.2048, 55.2708)
- hreflang tags for multilingual intent (en, fa, ar, x-default)
- Google Search Console verification meta tag
- robots.txt (dynamic, allows all, disallows /api/ and /_next/)
- sitemap.xml (dynamic, single page with changeFrequency: weekly, priority: 1.0)

### 6. Static Export Configuration

**Build Target**: GitHub Pages
- `output: 'export'` (static HTML export)
- `distDir: 'docs'` (GitHub Pages source folder)
- `trailingSlash: true`
- `images.unoptimized: true` (Next.js Image component works without image optimization server)
- Assets served from `/assets/` and `/public/assets/`

## Target Users

**Geographic**: Dubai, Abu Dhabi, UAE (explicit geo-targeting)

**Business Types**:
- Iranian, Arab, and international business owners in UAE
- SMEs needing digital presence
- Food businesses (chatbot automation use case)
- Trading companies (bilingual website use case)
- Home services (full digital growth use case)
- UAE startups (mobile app development use case)

**User Intent**:
- Seeking developer-led (not agency) digital services
- Need bilingual support (EN/AR/FA by default)
- Want fast delivery (5-15 days typical)
- Prefer messaging app contact (WhatsApp/Telegram over email/phone)
- Budget-conscious but quality-focused

## Content Strategy (As Implemented)

**Tone**: Developer-led, professional, Dubai-modern, conversion-focused
**Language**: English only (multilingual support mentioned but not implemented in UI)
**CTA Strategy**: Every section includes messaging app contact CTA
**Social Proof**: 500K+ downloads, 6+ years experience, B2B contract invoicing capability
**Trust Signals**: 
- Dubai registered company
- Founder's personal brand (abbasian.dev dofollow link)
- Real project examples with metrics
- 30-60 day support included in all packages

## Not Implemented (No Evidence in Code)

- Actual multilingual routing (/fa/, /ar/ paths mentioned in hreflang but not built)
- Backend API routes
- Database or CMS integration
- Analytics tracking (no GA, Plausible, or similar scripts)
- Blog or content pages
- Authentication/login
- Payment processing
- Admin dashboard
- Form submission handling (form uses mailto: link)
- Cookie consent banner
- Dark mode toggle

## Key Business Constraints Reflected in Implementation

1. **Messaging-first contact**: Every CTA goes to WhatsApp or Telegram, not traditional forms
2. **Static hosting**: No server-side rendering, no API routes, GitHub Pages deployment
3. **Minimal dependencies**: Core functionality with React Context, no state management library
4. **Mobile-first design**: Responsive patterns prioritize mobile viewport
5. **SEO-optimized for "Dubai software"**: Keywords and geo-tags target local search
6. **Conversion-focused**: Multiple CTAs, sticky FAB, emphasis on speed/delivery/results
