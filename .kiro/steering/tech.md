# Technology Stack — Lumatic Software Group Website

## Framework & Router

**Next.js 16.0.7** (App Router)
- Uses `app/` directory structure (not `pages/`)
- Static export mode (`output: 'export'`)
- Exports to `docs/` directory for GitHub Pages
- Trailing slashes enabled (`trailingSlash: true`)
- No server-side rendering (SSR), no API routes, no middleware
- `force-static` export for robots.ts and sitemap.ts

## React

**React 19.2.1**
- React DOM 19.2.1
- `"use client"` directive used in all interactive components (Navbar, Hero, Services, About, Portfolio, Contact, Footer, MessagingFab)
- Root layout (app/layout.tsx) does NOT use `"use client"` (server component)

## TypeScript

**TypeScript 5.9.3**
- Strict mode enabled (`strict: true`)
- Target: ES2017
- Module resolution: bundler
- Path alias configured: `@/*` → `./*` (root)
- No custom types defined; relies on library types (@types/react, @types/node)

## Styling System

### CSS Architecture

**Hybrid approach**: Global CSS + CSS Modules

1. **Global Design System** (`app/globals.css`):
   - Tailwind CSS 4.2.1 imported via `@import "tailwindcss"`
   - Custom CSS variables for brand colors, fonts, shadows, transitions
   - Global utility classes (`.section`, `.container`, `.btn`, `.section-title`, etc.)
   - Animations defined globally (`@keyframes fadeUp`, `fadeIn`, `shimmer`, `float`, `pulse-gold`)
   - Responsive helpers
   - Scrollbar styling

2. **Component-Scoped Styles** (CSS Modules):
   - Every component has a paired `.module.css` file
   - Class names follow camelCase convention (`.hero`, `.heroTogglePill`, `.btnPrimary`)
   - No BEM notation, no utility-first approach inside modules
   - Imports: `import styles from "./ComponentName.module.css"`
   - Usage: `className={styles.hero}`, `className={\`${styles.link} ${styles.active}\`}`

### Tailwind CSS

**Version**: 4.2.1
- PostCSS plugin: `@tailwindcss/postcss` 4.2.1
- **Not used for utility classes in JSX** — Tailwind is imported but global CSS vars and custom classes are preferred
- Config: `postcss.config.mjs` (minimal, just loads @tailwindcss/postcss)

### Design Tokens (Actual Values in Use)

**Colors**:
```css
--gold:           #C9A84C
--gold-light:     #E8C97A
--gold-dark:      #9E7A2A
--navy:           #0A1628
--navy-mid:       #0F2040
--navy-light:     #162B52
--slate:          #1E3A5F
--white:          #FFFFFF
--off-white:      #F8F6F1
--text-primary:   #0A1628
--text-secondary: #4A5E78
--text-muted:     #8A9BB0
```

**Fonts**:
- Display (headings): `Cormorant Garamond` (Google Fonts, weights: 300, 400, 500, 600, 700)
- Body (UI): `Inter` (Google Fonts)
- Loaded via `next/font/google` in `app/layout.tsx`
- CSS variables: `--font-cormorant`, `--font-inter`
- Applied to `<html>` via `className={`${inter.variable} ${cormorant.variable}`}`

**Shadows**:
```css
--shadow-sm:   0 2px 8px rgba(10, 22, 40, 0.08)
--shadow-md:   0 8px 32px rgba(10, 22, 40, 0.12)
--shadow-lg:   0 20px 60px rgba(10, 22, 40, 0.18)
--shadow-gold: 0 4px 24px rgba(201, 168, 76, 0.25)
```

**Border Radius**:
```css
--radius-sm:  6px
--radius-md:  12px
--radius-lg:  20px
--radius-xl:  32px
```

## State Management

**React Context API** (no external library)

**Implementation**:
- `components/MessagingContext.tsx` exports:
  - `MessagingProvider` (wraps app in `app/layout.tsx`)
  - `useMessaging()` hook
  - `MESSAGING_OPTIONS` array (WhatsApp, Telegram data + icons)
- State: `active` (MessagingApp type: "whatsapp" | "telegram")
- Default: `"whatsapp"`
- No persistence (resets on page reload)
- All components use `useMessaging()` to access/update active app

**No other state management**:
- No Redux, Zustand, Jotai, or similar
- Local component state via `useState` (e.g., form inputs, dropdowns, mobile menu)
- No URL state management (no query params)

## Data Fetching

**None**. This is a static site with no dynamic data.

- No `fetch()` calls
- No `useSWR` or React Query
- No API routes in `app/api/`
- All content is hardcoded in components (services array, projects array, stats array, etc.)
- Contact form uses `mailto:` link (no backend submission)

## Images

**next/image** (Next.js Image component)
- Used for: Logo, Business Bay Dubai hero image, About section image
- Config: `images.unoptimized: true` (required for static export)
- Image paths: `/assets/` (served from `public/assets/`)
- Optimized images manually (e.g., `business-bay-dubai_optimized_.jpg`)
- `priority={true}` on logo, `priority={false}` on below-fold images
- `fill` prop + `sizes` for responsive images

## Icons

**Inline SVG** (no icon library)
- All icons written directly in JSX
- Stored in:
  - Component render functions (e.g., service icons in Services.tsx)
  - MessagingContext.tsx (WhatsApp, Telegram icons in multiple sizes: 16px, 18px, 22px, 30px)
  - Inline in buttons/links
- Styled via CSS (`stroke`, `fill`, `width`, `height` props)

## Forms

**No form library**
- Contact form in `Contact.tsx` uses controlled inputs (`useState`)
- Submission: `window.location.href = "mailto:..."` with URL-encoded body
- No validation library
- HTML5 `required` attributes
- No error handling UI

## SEO & Metadata

**next/metadata** (Next.js App Router API)
- Metadata object exported from `app/layout.tsx`
- Static (no dynamic metadata per route)
- JSON-LD scripts injected via `dangerouslySetInnerHTML` in layout

**Dynamic Routes**:
- `app/robots.ts` → `/robots.txt`
- `app/sitemap.ts` → `/sitemap.xml`
- Both use `export const dynamic = "force-static"`

## Build & Deployment

**Build Output**: Static HTML/CSS/JS
```bash
npm run build
# → Generates files in /docs/ directory
# → Ready for GitHub Pages (docs/ as source)
```

**Dev Server**:
```bash
npm run dev
# → Next.js dev server on localhost:3000
```

**Lint**:
```bash
npm run lint
# → eslint-config-next
```

**No CI/CD config in repo** (assumed GitHub Actions or manual deploy)

## Key Dependencies (package.json)

**Runtime**:
- `next`: 16.0.7
- `react`: 19.2.1
- `react-dom`: 19.2.1

**Dev Dependencies**:
- `@tailwindcss/postcss`: 4.2.1
- `@types/node`: 24.10.1
- `@types/react`: 19.2.7
- `@types/react-dom`: 19.2.3
- `eslint`: 9.39.1
- `eslint-config-next`: 16.0.7
- `tailwindcss`: 4.2.1
- `typescript`: 5.9.3

## Browser Support

**Implicit** (via browserslist defaults, Next.js config):
- Modern browsers (ES2017+ support)
- No IE11 support
- No polyfills for older browsers

## Performance Patterns

**Implemented**:
- Static export (no server rendering overhead)
- Optimized images manually (`_optimized_` suffix)
- Font loading via `next/font/google` (automatic subsetting, variable fonts)
- CSS Modules (scoped styles, no runtime CSS-in-JS)
- No external analytics scripts
- Minimal JavaScript (React hydration only)

**Not implemented**:
- Code splitting beyond Next.js defaults
- Lazy loading of components
- Service worker or PWA features
- Image CDN or transformation service

## Responsive Design

**Approach**: CSS media queries in CSS Modules
- Breakpoint convention: `@media (max-width: 768px)` for mobile
- No responsive utility classes (e.g., Tailwind's `sm:`, `md:`)
- Mobile-first adjustments (e.g., `flex-direction: column`, `padding: 70px 0` → `padding: 100px 0`)

## Animation

**CSS animations only**:
- `@keyframes` defined in `globals.css` and component CSS modules
- No animation library (Framer Motion, GSAP, etc.)
- Transitions: `transition: var(--transition)` (0.3s cubic-bezier)
- Scroll animations: Manual (e.g., navbar scroll state, not Intersection Observer)

## No Testing

- No test files (no `*.test.ts`, `*.spec.ts`)
- No test framework (Jest, Vitest, Playwright, Cypress)
- No `npm test` script

## No Backend or Database

- No API routes (`app/api/` directory does not exist)
- No database (no Prisma, Drizzle, or SQL files)
- No ORM
- No authentication
- No serverless functions

## Version Control & Hosting

**Git**: `.git` directory present
- `.gitignore` includes: `node_modules/`, `.next/`, `.DS_Store`, etc.
- `.gitmodules` present (suggests submodules, but not analyzed in this review)

**Hosting**: GitHub Pages
- `CNAME` file in root and `docs/` → `lumaticgroup.info`
- `.nojekyll` file in `public/` and `docs/` (disables Jekyll processing)

## Environment Variables

**None used** (no `.env`, no `process.env.*` references in code)
- Contact details (phone, Telegram username) hardcoded in `MessagingContext.tsx`
- Domain hardcoded in metadata (`https://lumaticgroup.info`)

## Inconsistencies & Technical Debt

1. **Tailwind CSS imported but rarely used**: `@import "tailwindcss"` in globals.css, but no utility classes in JSX (only custom CSS)
2. **Dual styling systems**: Global CSS + CSS Modules could be simplified to one approach
3. **No runtime validation**: Contact form has no client-side validation beyond HTML5 attributes
4. **Hardcoded content**: All text/data in components; updating content requires code changes
5. **No internationalization**: hreflang tags reference `/fa/` and `/ar/` routes that don't exist
6. **No error boundaries**: No React error boundaries for component failures
7. **Manual image optimization**: Images manually optimized and renamed (`_optimized_` suffix) instead of using build-time optimization
