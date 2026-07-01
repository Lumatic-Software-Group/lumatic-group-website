"use client";

import styles from "./Services.module.css";
import { useMessaging, MESSAGING_OPTIONS } from "./MessagingContext";
import { useLanguage } from "./LanguageProvider";

export default function Services() {
  const { active, activeOption } = useMessaging();
  const { t } = useLanguage();

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32" aria-hidden="true">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      tag: t.services.cards.chatbot.tag,
      title: t.services.cards.chatbot.title,
      description: t.services.cards.chatbot.description,
      features: t.services.cards.chatbot.features,
      ctaLabel: t.services.cards.chatbot.ctaLabel,
      waHref: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20a%20chatbot",
      tgHref: "https://t.me/lumaticgroup?text=Hi%2C%20I%27m%20interested%20in%20a%20chatbot",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      tag: t.services.cards.website.tag,
      title: t.services.cards.website.title,
      description: t.services.cards.website.description,
      features: t.services.cards.website.features,
      ctaLabel: t.services.cards.website.ctaLabel,
      waHref: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20a%20business%20website",
      tgHref: "https://t.me/lumaticgroup?text=Hi%2C%20I%27m%20interested%20in%20a%20business%20website",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32" aria-hidden="true">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 2v6h6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 8l.5-1.5L12 6l-1.5-.5L10 4l-.5 1.5L8 6l1.5.5L10 8z" fill="currentColor" strokeWidth="0" />
        </svg>
      ),
      tag: t.services.cards.aiContent.tag,
      title: t.services.cards.aiContent.title,
      description: t.services.cards.aiContent.description,
      features: t.services.cards.aiContent.features,
      ctaLabel: t.services.cards.aiContent.ctaLabel,
      waHref: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20AI%20Content%20%26%20SEO%20Marketing",
      tgHref: "https://t.me/lumaticgroup?text=Hi%2C%20I%27m%20interested%20in%20AI%20Content%20%26%20SEO%20Marketing",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32" aria-hidden="true">
          <path d="M12 18H12.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      tag: t.services.cards.mobile.tag,
      title: t.services.cards.mobile.title,
      description: t.services.cards.mobile.description,
      features: t.services.cards.mobile.features,
      ctaLabel: t.services.cards.mobile.ctaLabel,
      waHref: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20Mobile%20development",
      tgHref: "https://t.me/lumaticgroup?text=Hi%2C%20I%27m%20interested%20in%20Mobile%20development",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32" aria-hidden="true">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="1" fill="currentColor" strokeWidth="0" />
        </svg>
      ),
      tag: t.services.cards.aiAgent.tag,
      title: t.services.cards.aiAgent.title,
      description: t.services.cards.aiAgent.description,
      features: t.services.cards.aiAgent.features,
      ctaLabel: t.services.cards.aiAgent.ctaLabel,
      waHref: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20Custom%20AI%20Agent%20Development",
      tgHref: "https://t.me/lumaticgroup?text=Hi%2C%20I%27m%20interested%20in%20Custom%20AI%20Agent%20Development",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32" aria-hidden="true">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      tag: t.services.cards.growth.tag,
      title: t.services.cards.growth.title,
      description: t.services.cards.growth.description,
      features: t.services.cards.growth.features,
      ctaLabel: t.services.cards.growth.ctaLabel,
      waHref: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20the%20Full%20Digital%20Growth%20package",
      tgHref: "https://t.me/lumaticgroup?text=Hi%2C%20I%27m%20interested%20in%20the%20Full%20Digital%20Growth%20package",
    },
  ];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>
            <span className={styles.labelLine} />
            {t.services.sectionLabel}
          </span>
          <h2 className={styles.title}>
            {t.services.title}<br />
            <em>{t.services.titleAccent}</em>
          </h2>
          <p className={styles.subtitle}>
            {t.services.subtitle}
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
                    <svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true">
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
                  {t.services.messageCta}
                </a>
                <a
                  href={active === "whatsapp" ? svc.waHref : svc.tgHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.cardCta} ${i === 1 ? styles.cardCtaFeatured : ""}`}
                >
                  {svc.ctaLabel}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true">
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
            {t.services.stripText}
          </p>
          <a
            href={activeOption.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stripCta}
            style={{ "--strip-color": activeOption.color } as React.CSSProperties}
          >
            {activeOption.icon18}
            {t.services.stripCta}
          </a>
        </div>
      </div>
    </section>
  );
}
