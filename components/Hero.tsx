"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import { useMessaging, MESSAGING_OPTIONS } from "./MessagingContext";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  const { active: activeMsg, setActive: setActiveMsg, activeOption } = useMessaging();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bg} />
      <div className={styles.bgImageWrap}>
        <Image
          src="/assets/business-bay-dubai_optimized_.jpg"
          alt=""
          fill
          priority={true}
          sizes="100vw"
          quality={85}
          className={styles.bgImage}
        />
      </div>
      <div className={styles.bgOverlay} />

      {/* Decorative orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      {/* Grid pattern */}
      <div className={styles.grid} />

      <div className={styles.container}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          {t.hero.badge}
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          {t.hero.headline}
          <span className={styles.headlineAccent}>{t.hero.headlineAccent1}</span>
          <span className={styles.headlineAccent}>{t.hero.headlineAccent2}</span>
        </h1>

        {/* Sub-headline */}
        <p className={styles.subline}>
          {t.hero.subline}
        </p>

        {/* CTAs */}
        <div className={styles.actions}>
          {/* Messaging toggle + primary CTA */}
          <div className={styles.msgToggleGroup}>
            {/* App selector */}
            <div className={styles.heroTogglePill}>
              {MESSAGING_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  className={`${styles.heroToggleBtn} ${activeMsg === opt.id ? styles.heroToggleBtnActive : ""}`}
                  style={
                    activeMsg === opt.id
                      ? ({ "--htb-color": opt.color, "--htb-shadow": opt.shadowColor } as React.CSSProperties)
                      : {}
                  }
                  onClick={() => setActiveMsg(opt.id as "whatsapp" | "telegram")}
                  aria-pressed={activeMsg === opt.id}
                  aria-label={`Select ${opt.label}`}
                >
                  {opt.icon18}
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>

            {/* Dynamic primary CTA */}
            <a
              href={activeOption.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
              style={
                {
                  "--btn-color": activeOption.color,
                  "--btn-shadow": activeOption.shadowColor,
                } as React.CSSProperties
              }
            >
              {activeOption.icon18}
              {t.hero.ctaPrimary} {activeOption.label}
            </a>
          </div>

          <button
            className={styles.btnOutline}
            onClick={() => scrollTo("services")}
          >
            {t.hero.ctaSecondary}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Stats row */}
        <div className={styles.stats}>
          {Object.values(t.hero.stats).map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className={styles.scrollDown}
        onClick={() => scrollTo("services")}
        aria-label={t.hero.scrollDownAriaLabel}
      >
        <div className={styles.scrollLine} />
      </button>

      {/* Bottom fade */}
      <div className={styles.bottomFade} />
    </section>
  );
}
