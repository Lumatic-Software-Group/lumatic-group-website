"use client";

import styles from "./Services.module.css";
import { useMessaging, MESSAGING_OPTIONS } from "./MessagingContext";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Most Popular",
    title: "Chatbot Setup",
    description:
      "Never lose a sale after hours again. We build AI-powered bots that handle pricing, FAQs, order capture and integration - while you sleep.",
    features: ["AI-powered auto-replies", "Product catalogue & orders", "30-day support included", "5–7 day delivery"],
    ctaLabel: "Request a Quote",
    waHref: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20a%20chatbot",
    tgHref: "https://t.me/lumaticgroup?text=Hi%2C%20I%27m%20interested%20in%20a%20chatbot",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Best Value",
    title: "Business Website",
    description:
      "A professional, mobile-first Next.js website in English, Arabic, or Farsi - built to rank on Google and convert visitors into paying clients.",
    features: ["5-page bilingual site (EN/AR/FA)", "Social CTA on every page", "SEO-ready & mobile-responsive", "60-day support included", "7–14 day delivery"],
    ctaLabel: "Get a Free Proposal",
    waHref: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20a%20business%20website",
    tgHref: "https://t.me/lumaticgroup?text=Hi%2C%20I%27m%20interested%20in%20a%20business%20website",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <path d="M12 18H12.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Developer-Grade",
    title: "Android & iOS App Development",
    description:
      "Senior mobile development for UAE startups - native Android And iOS or cross-platform (Flutter & React Native). New features, bug fixes, or full rebuilds - shipped fast, built to last.",
    features: ["Kotlin · Swift · KMM · Flutter · React Native", "Firebase & REST integration", "500K+ download track record", "B2B contract invoicing"],
    ctaLabel: "Discuss Your Project",
    waHref: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20Mobile%20development",
    tgHref: "https://t.me/lumaticgroup?text=Hi%2C%20I%27m%20interested%20in%20Mobile%20development",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Growth Package",
    title: "Full Digital Growth",
    description:
      "Website + Chatbot + Specialized content production + Advanced SEO + Google Search Console setup.",
    features: ["Everything in Web + Bot", "Specialized content production", "Advanced SEO (incl. Google Search Console)" , "60-day support included", "B2B contract invoicing"],
    ctaLabel: "Start Growing Today",
    waHref: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20the%20Full%20Digital%20Growth%20package",
    tgHref: "https://t.me/lumaticgroup?text=Hi%2C%20I%27m%20interested%20in%20the%20Full%20Digital%20Growth%20package",
  },
];

export default function Services() {
  const { active, activeOption } = useMessaging();

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>
            <span className={styles.labelLine} />
            What We Build
          </span>
          <h2 className={styles.title}>
            Tailored Solutions for<br />
            <em>Dubai Businesses</em>
          </h2>
          <p className={styles.subtitle}>
            Four high-impact services - delivered fast with AI tools and senior
            expertise. Tell us your goal and we&apos;ll craft the right solution for you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {services.map((svc, i) => (
            <div key={svc.title} className={`${styles.card} ${i === 1 ? styles.cardFeatured : ""}`}>
              {svc.tag && (
                <span className={`${styles.tag} ${i === 1 ? styles.tagFeatured : ""}`}>
                  {svc.tag}
                </span>
              )}

              <div className={`${styles.iconWrap} ${i === 1 ? styles.iconFeatured : ""}`}>
                {svc.icon}
              </div>

              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardDesc}>{svc.description}</p>

              <ul className={styles.features}>
                {svc.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                      <path d="M3 8l3.5 3.5L13 4" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className={styles.cardFooter}>
                <a
                  href={active === "whatsapp" ? svc.waHref : svc.tgHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.quoteLabel} ${i === 1 ? styles.quoteLabelFeatured : ""}`}
                >
                  <span style={{ display: "flex", width: 13, height: 13 }} aria-hidden="true">
                    {activeOption.icon16}
                  </span>
                  Message us to discuss
                </a>
                <a
                  href={active === "whatsapp" ? svc.waHref : svc.tgHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.cardCta} ${i === 1 ? styles.cardCtaFeatured : ""}`}
                >
                  {svc.ctaLabel}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className={styles.strip}>
          <p className={styles.stripText}>
            Not sure which package is right for you?
          </p>
          <a
            href={activeOption.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stripCta}
            style={{ "--strip-color": activeOption.color } as React.CSSProperties}
          >
            {activeOption.icon18}
            Chat with us — it&apos;s free
          </a>
        </div>
      </div>
    </section>
  );
}
