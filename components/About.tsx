"use client";

import Image from "next/image";
import styles from "./About.module.css";
import { useMessaging } from "./MessagingContext";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { activeOption } = useMessaging();
  const { t } = useLanguage();

  const pillars = [
    {
      icon: "🏗️",
      title: t.about.pillars.developerLed.title,
      desc: t.about.pillars.developerLed.description,
    },
    {
      icon: "⚡",
      title: t.about.pillars.aiAccelerated.title,
      desc: t.about.pillars.aiAccelerated.description,
    },
    {
      icon: "🌐",
      title: t.about.pillars.bilingual.title,
      desc: t.about.pillars.bilingual.description,
    },
    {
      icon: "📈",
      title: t.about.pillars.builtToConvert.title,
      desc: t.about.pillars.builtToConvert.description,
    },
  ];
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        {/* Left: Image block */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/assets/business-bay-dubai_optimized_.jpg"
              alt="Business Bay Dubai — Lumatic Software Group"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.image}
              priority={false}
            />
            <div className={styles.imageOverlay} />
          </div>

          {/* Floating badge */}
          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>🇦🇪</div>
            <div>
              <div className={styles.floatingTitle}>{t.about.floatingBadge.title}</div>
              <div className={styles.floatingDesc}>{t.about.floatingBadge.description}</div>
            </div>
          </div>

          {/* Gold accent bar */}
          <div className={styles.accentBar} />
        </div>

        {/* Right: Content */}
        <div className={styles.content}>
          <span className={styles.label}>
            <span className={styles.labelLine} />
            {t.about.sectionLabel}
          </span>

          <h2 className={styles.title}>
            {t.about.title}<br />
            <em>{t.about.titleAccent}</em>
          </h2>

          <p className={styles.body}>
            {t.about.body1}
          </p>
          <p className={styles.body}>
            {t.about.body2}
          </p>

          {/* Pillars */}
          <div className={styles.pillars}>
            {pillars.map((p) => (
              <div key={p.title} className={styles.pillar}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <div>
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <a
              href={activeOption.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
              style={{ background: activeOption.color, boxShadow: `0 4px 20px ${activeOption.shadowColor}` }}
            >
              {activeOption.icon18}
              {t.about.ctaPrimary} {activeOption.label}
            </a>
            {/* dofollow — passes link equity to abbasian.dev per master plan */}
            <a
              href="https://abbasian.dev"
              target="_blank"
              rel="noopener"
              className={styles.btnLink}
            >
              {t.about.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
