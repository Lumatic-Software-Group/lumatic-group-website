"use client";

import styles from "./Hero.module.css";
import { useMessaging, MESSAGING_OPTIONS } from "./MessagingContext";

const stats = [
  { value: "500K+", label: "App Downloads" },
  { value: "6+",    label: "Years Experience" },
  { value: "50+",   label: "Projects Delivered" },
  { value: "5★",    label: "Client Rating" },
];

export default function Hero() {
  const { active: activeMsg, setActive: setActiveMsg, activeOption } = useMessaging();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bg} />
      <div className={styles.bgImage} />
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
          Dubai · UAE &nbsp;·&nbsp; AI-Powered Studio
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          We Build Digital
          <span className={styles.headlineAccent}> Products</span>
          <br />
          That Drive
          <span className={styles.headlineAccent}> Growth</span>
        </h1>

        {/* Sub-headline */}
        <p className={styles.subline}>
          Lumatic Software Group is a developer-led studio crafting WhatsApp
          automation, mobile apps, and premium websites for ambitious Dubai
          businesses - fast, bilingual, and built to convert.
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
              Start on {activeOption.label}
            </a>
          </div>

          <button
            className={styles.btnOutline}
            onClick={() => scrollTo("services")}
          >
            Our Services
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Stats row */}
        <div className={styles.stats}>
          {stats.map((s) => (
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
        aria-label="Scroll down"
      >
        <div className={styles.scrollLine} />
      </button>

      {/* Bottom fade */}
      <div className={styles.bottomFade} />
    </section>
  );
}
