"use client";

import styles from "./Services.module.css";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Most Popular",
    title: "WhatsApp Chatbot Setup",
    description:
      "Never lose a sale after hours again. We build AI-powered WhatsApp bots that handle pricing, FAQs, order capture and Telegram integration — while you sleep.",
    features: ["AI-powered auto-replies", "Product catalogue & orders", "30-day support included", "5–7 day delivery"],
    price: "From 800 AED",
    href: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20a%20WhatsApp%20chatbot",
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
      "A professional, mobile-first Next.js website in English, Arabic, or Farsi — built to rank on Google and convert visitors into paying clients.",
    features: ["5-page bilingual site (EN/AR/FA)", "WhatsApp CTA on every page", "SEO-ready & mobile-responsive", "7–14 day delivery"],
    price: "From 2,500 AED",
    href: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20a%20business%20website",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <path d="M12 18H12.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Developer-Grade",
    title: "Android App Development",
    description:
      "Senior Kotlin/MVVM development for UAE startups. Whether it's new features, bug fixes, or a full rebuild — we code to ship-ready standard, fast.",
    features: ["Kotlin · MVVM · KMM", "Firebase & REST integration", "500K+ download track record", "B2B contract invoicing"],
    price: "From 600 AED/day",
    href: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20Android%20development",
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
      "Website + WhatsApp bot + 8 SEO blog posts in Farsi, Arabic & English + Google Search Console setup. Start generating inbound leads in 30 days.",
    features: ["Everything in Web + Bot", "8 SEO blog posts (Farsi/EN/AR)", "Google Search Console setup", "Monthly performance report"],
    price: "From 4,000 AED",
    href: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20the%20Full%20Digital%20Growth%20package",
  },
];

export default function Services() {
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
            Services Priced for<br />
            <em>Dubai Businesses</em>
          </h2>
          <p className={styles.subtitle}>
            Three packages. Simple enough to explain in one WhatsApp message.
            Delivered fast with AI tools. Priced to remove hesitation.
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
                <span className={styles.price}>{svc.price}</span>
                <a
                  href={svc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.cardCta} ${i === 1 ? styles.cardCtaFeatured : ""}`}
                >
                  Get Started
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
            href="https://wa.me/971502659885"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stripCta}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with us — it&apos;s free
          </a>
        </div>
      </div>
    </section>
  );
}
