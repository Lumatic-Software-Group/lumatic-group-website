# Project Structure & Conventions — Lumatic Software Group Website

## Directory Layout

```
lumatic-group-website/
├── app/                      # Next.js App Router (pages & layouts)
│   ├── layout.tsx           # Root layout (metadata, fonts, MessagingProvider)
│   ├── page.tsx             # Home page (only page, SPA composition)
│   ├── globals.css          # Global styles & design system
│   ├── robots.ts            # Dynamic robots.txt generator
│   └── sitemap.ts           # Dynamic sitemap.xml generator
├── components/              # React components (UI sections)
│   ├── Navbar.tsx / Navbar.module.css
│   ├── Hero.tsx / Hero.module.css
│   ├── Services.tsx / Services.module.css
│   ├── About.tsx / About.module.css
│   ├── Portfolio.tsx / Portfolio.module.css
│   ├── Contact.tsx / Contact.module.css
│   ├── Footer.tsx / Footer.module.css
│   ├── MessagingFab.tsx / MessagingFab.module.css
│   └── MessagingContext.tsx  # Context provider (no CSS module)
├── assets/                  # Source images (not served)
├── public/                  # Static assets (served at root)
│   └── assets/             # Actual served images
├── docs/                    # Static export output (GitHub Pages source)
├── out/                     # Alternative output directory (not used in config)
├── .next/                   # Next.js build cache
├── node_modules/
├── package.json
├── tsconfig.json
├── next.config.js
├── postcss.config.mjs
├── .eslintrc.json
├── .gitignore
├── CNAME                    # GitHub Pages custom domain
└── README.md
```

## File Naming Conventions

### Components
**Pattern**: `ComponentName.tsx` + `ComponentName.module.css`

**Examples**:
- `Navbar.tsx` + `Navbar.module.css`
- `Hero.tsx` + `Hero.module.css`
- `MessagingFab.tsx` + `MessagingFab.module.css`

**Exception**: `MessagingContext.tsx` has no CSS module (context provider, no UI)

### App Router Files
**Pattern**: Lowercase with extension indicating behavior

- `layout.tsx` — Root layout wrapper
- `page.tsx` — Route page component
- `globals.css` — Global stylesheet
- `robots.ts` — Dynamic route handler (returns metadata)
- `sitemap.ts` — Dynamic route handler (returns metadata)

### Assets
**Pattern**: `kebab-case` + `_optimized_` suffix for manually optimized images

**Examples**:
- `business-bay-dubai.jpg` (original)
- `business-bay-dubai_optimized_.jpg` (used in production)
- `lumatic_logo.png` (original)
- `lumatic_logo_optimized_.png` (used in production)

## Component Structure Patterns

### Page Component (app/page.tsx)

**Pattern**: Simple composition, no logic

```tsx
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <MessagingFab />
    </>
  );
}
```

**Rules**:
- No `"use client"` (server component)
- No state or effects
- Just imports and composition
- Wraps sections in `<main>`
- `Navbar` above main, `Footer` and `MessagingFab` after main

### Section Components (Navbar, Hero, Services, etc.)

**Pattern**: Client component with local state + CSS Modules

```tsx
"use client";

import { useState, useEffect } from "react";
import styles from "./ComponentName.module.css";
import { useMessaging } from "./MessagingContext";

// Data arrays (if needed)
const items = [/* ... */];

export default function ComponentName() {
  // Hooks
  const [localState, setLocalState] = useState(false);
  const { active, activeOption } = useMessaging();

  // Effects
  useEffect(() => {
    // ...
  }, []);

  // Handlers
  const handleClick = () => { /* ... */ };

  // Render
  return (
    <section id="section-name" className={styles.section}>
      {/* ... */}
    </section>
  );
}
```

**Component Anatomy Rules**:

1. **File header**: `"use client"` directive (always first line)
2. **Imports**:
   - React hooks first
   - Image/Link from next/* second
   - CSS module import last
   - Context hooks after React imports
3. **Data declarations**: Arrays/objects defined before component (e.g., `const services = [...]`)
4. **Component function**: Default export, named after file
5. **Hooks order**: State → Context → Effects → Refs
6. **Handlers**: Defined after hooks, before return
7. **Return**: Single root element (usually `<section>`)

### Section IDs

**Convention**: `id="kebab-case"` matching navigation anchor

**Implemented IDs**:
- `id="home"` (Hero section)
- `id="services"` (Services section)
- `id="about"` (About section)
- `id="portfolio"` (Portfolio section)
- `id="contact"` (Contact section)

**Usage**: Smooth scroll navigation via `document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })`

## CSS Module Conventions

### Class Naming

**Pattern**: camelCase (no BEM, no utility-first)

**Examples**:
```css
.hero              /* root element */
.headline          /* child element */
.headlineAccent    /* nested child */
.btnPrimary        /* component variant */
.statValue         /* nested element */
```

**Modifiers**: Use separate classes, combine in JSX

```tsx
className={`${styles.link} ${styles.active}`}
```

**Not used**:
- BEM: `.hero__headline--accent` ❌
- Kebab-case: `.hero-headline` ❌
- Utility classes: `.flex .items-center` ❌ (use Tailwind or custom CSS instead)

### Responsive Design

**Pattern**: Desktop-first (mobile adjustments in `@media (max-width: 768px)`)

```css
.hero {
  padding: 120px 0 80px;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
    min-height: 100svh;
  }
}
```

**Breakpoint**: `768px` (tablet/mobile threshold)
**No intermediate breakpoints** (e.g., no 1024px, 640px, etc.)

### Dynamic Styles

**Pattern**: Inline CSS variables for runtime theming

```tsx
<button
  className={styles.btn}
  style={{
    "--btn-color": activeOption.color,
    "--btn-shadow": activeOption.shadowColor,
  } as React.CSSProperties}
>
  Click Me
</button>
```

```css
.btn {
  background: var(--btn-color, #25D366);
  box-shadow: 0 4px 24px var(--btn-shadow, rgba(37, 211, 102, 0.35));
}
```

**Used for**: Messaging app color theming (WhatsApp green vs Telegram blue)

## Import Conventions

### Absolute Imports

**Pattern**: `@/*` alias resolves to project root

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useMessaging } from "@/components/MessagingContext";
```

**Configured in**: `tsconfig.json` → `"paths": { "@/*": ["./*"] }`

**Not used**:
- Relative imports for components: `import Navbar from "../components/Navbar"` ❌
- Named barrel exports: No `components/index.ts` file

### Image Imports

**Pattern**: `/assets/path` (served from `public/assets/`)

```tsx
import Image from "next/image";

<Image
  src="/assets/lumatic_logo_optimized_.png"
  alt="Lumatic Software Group"
  width={150}
  height={44}
/>
```

**Background images in CSS**:
```css
.bgImage {
  background-image: url('/assets/business-bay-dubai_optimized_.jpg');
}
```

## Data Management Patterns

### Static Data Arrays

**Pattern**: Defined at module top-level, before component

**Example** (from Services.tsx):
```tsx
const services = [
  {
    icon: <svg>...</svg>,
    tag: "Most Popular",
    title: "Chatbot Setup",
    description: "...",
    features: ["...", "..."],
    ctaLabel: "Request a Quote",
    waHref: "https://wa.me/...",
    tgHref: "https://t.me/...",
  },
  // ... more services
];

export default function Services() {
  return (
    <div>
      {services.map((svc) => (
        <div key={svc.title}>{/* ... */}</div>
      ))}
    </div>
  );
}
```

**Rules**:
- Arrays are `const` (immutable)
- No separate `data/` directory
- No JSON imports
- Icons are JSX elements within array objects
- Keys are unique strings from data (e.g., `key={svc.title}`)

### Context Data

**Pattern**: Constants exported from context file

```tsx
// MessagingContext.tsx
export const PHONE = "971502659885";
export const TELEGRAM_USERNAME = "lumaticgroup";

export const MESSAGING_OPTIONS = [
  { id: "whatsapp", label: "WhatsApp", href: `https://wa.me/${PHONE}`, ... },
  { id: "telegram", label: "Telegram", href: `https://t.me/${TELEGRAM_USERNAME}`, ... },
];
```

**Used by**: All components via `useMessaging().activeOption`

## Component Props Patterns

### No Prop Drilling

**Pattern**: Components don't receive props from parent

```tsx
// page.tsx
<Navbar />  {/* No props passed */}
<Hero />    {/* No props passed */}
```

**Why**: All data is either:
1. Hardcoded in component
2. Retrieved from context (`useMessaging()`)
3. Managed as local state (`useState`)

**Exception**: None (even MessagingFab receives no props)

### TypeScript Props Typing

**Pattern**: Inline interface or type (when props exist)

**Example** (if props were used):
```tsx
interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  // ...
}
```

**Actual usage**: No components currently receive props, so no prop types defined

## Shared UI Patterns

### No Shared Component Library

**Pattern**: Each component is self-contained

- No `components/ui/Button.tsx` or `components/common/`
- Buttons are styled uniquely per component (e.g., `.btnPrimary` in Hero.module.css vs Services.module.css)
- Similar styles are duplicated, not abstracted

**Inconsistency**: 
- `.btn-primary` styled differently in Hero vs Navbar
- `.card` class exists in multiple components with different styles

### Icon Components

**Pattern**: Inline SVG functions at module level

```tsx
const WA_ICON = (size = 22) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="..." />
  </svg>
);
```

**Used in**: Contact.tsx (WA_ICON, TG_ICON)

**MessagingContext pattern**: Icons stored as JSX in MESSAGING_OPTIONS array, sized variants (icon16, icon18, icon22, icon30)

## Animation Patterns

### Global Animations

**Pattern**: `@keyframes` in `globals.css`, referenced by class

```css
/* globals.css */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-fade-up {
  animation: fadeUp 0.7s ease both;
}
```

**Used in**: Components apply class directly (`className="animate-fade-up"`)

### Component-Scoped Animations

**Pattern**: `@keyframes` in component CSS module

```css
/* Hero.module.css */
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
  50%       { box-shadow: 0 0 0 8px rgba(37, 211, 102, 0); }
}

.badgeDot {
  animation: pulse 2s infinite;
}
```

**Used in**: Hero.tsx badge dot, FAB pulse animation

## Layout Patterns

### Section Wrapper

**Pattern**: Full-width section + centered container

```tsx
<section id="services" className={styles.section}>
  <div className={styles.container}>
    {/* Content */}
  </div>
</section>
```

**CSS** (consistent across components):
```css
.section {
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

**Used by**: All section components except Navbar (fixed position) and MessagingFab (fixed position)

### Flexbox Grid

**Pattern**: `.grid` class with `display: flex` + `gap`

```css
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
```

**Not using CSS Grid** (despite class name `.grid`)

**Examples**:
- Services: 4-column flex grid
- Portfolio: 2x2 project cards
- About: 2-column pillars

## Navigation Patterns

### Smooth Scroll

**Pattern**: `scrollIntoView` with `behavior: "smooth"`

```tsx
const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

<button onClick={() => scrollTo("services")}>Services</button>
```

**Not used**: 
- React Router or Next.js `<Link>` for internal navigation
- `window.scrollTo()`
- Scroll libraries (react-scroll, etc.)

### Anchor Links

**Pattern**: `href="#section-id"` with click handler override

```tsx
<a href="#home" onClick={(e) => { e.preventDefault(); handleNav("#home"); }}>
  Home
</a>
```

**Used in**: Navbar, Footer

## State Management Architecture

### Local State

**Pattern**: `useState` in component, not lifted

```tsx
// Navbar.tsx
const [menuOpen, setMenuOpen] = useState(false);
const [ctaOpen, setCtaOpen] = useState(false);
```

**Scope**: Component-only (not shared)

### Global State

**Pattern**: React Context for shared state

**Current usage**: Only `MessagingContext` (WhatsApp/Telegram toggle)

**Structure**:
```tsx
// MessagingContext.tsx
const MessagingContext = createContext<MessagingContextValue | null>(null);

export function MessagingProvider({ children }) {
  const [active, setActive] = useState<MessagingApp>("whatsapp");
  return <MessagingContext.Provider value={...}>{children}</MessagingContext.Provider>;
}

export function useMessaging() {
  const ctx = useContext(MessagingContext);
  if (!ctx) throw new Error("useMessaging must be used inside <MessagingProvider>");
  return ctx;
}
```

**Wrapped in**: `app/layout.tsx` → `<MessagingProvider>{children}</MessagingProvider>`

## Form Patterns

### Controlled Inputs

**Pattern**: `useState` + `value` + `onChange`

```tsx
const [form, setForm] = useState({ name: "", email: "", message: "" });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

<input
  type="text"
  name="name"
  value={form.name}
  onChange={handleChange}
  required
/>
```

**Used in**: Contact.tsx

### Form Submission

**Pattern**: `window.location.href = "mailto:..."` (no fetch)

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const body = encodeURIComponent(`Name: ${form.name}\n...`);
  window.location.href = `mailto:hello@lumaticgroup.info?subject=...&body=${body}`;
};
```

**No server submission** (static site)

## Architectural Patterns

### Component Composition

**Pattern**: Flat composition in page.tsx, no nesting

```tsx
// page.tsx
<>
  <Navbar />
  <main>
    <Hero />
    <Services />
    <About />
  </main>
  <Footer />
</>
```

**Not used**: 
- Layout components wrapping sections
- Provider components per section
- Compound components (e.g., `<Card><Card.Header /></Card>`)

### Server vs Client Components

**Server Components**:
- `app/layout.tsx` (root layout)
- `app/page.tsx` (home page)

**Client Components** (all have `"use client"`):
- All components in `components/` directory

**Pattern**: 
- Server components for static structure
- Client components for interactivity (state, events, effects)

### No Code Splitting

**Pattern**: All components imported statically

```tsx
import Navbar from "@/components/Navbar";  // Not lazy loaded
```

**Not used**: `React.lazy()`, `next/dynamic`

## Inconsistencies Observed

1. **Duplicate styles**: Similar button styles (`.btn`, `.btnPrimary`, `.cta`) defined separately in multiple components
2. **Mixed spacing units**: Some components use `px`, others use `rem`, some use CSS variables
3. **Inconsistent state patterns**: Some components use `useEffect` for scroll listeners, others use inline event handlers
4. **No component library**: Each section reimplements UI patterns (cards, buttons, forms)
5. **Hardcoded URLs**: Contact links hardcoded in arrays vs using context constants (inconsistent)
6. **CSS class naming**: Some classes use modifiers (`.btnPrimary`), others use separate classes (`.btn` + `.primary`)
7. **Image paths**: Some images in `/assets/` (not served), others in `/public/assets/` (served) — source vs production confusion
