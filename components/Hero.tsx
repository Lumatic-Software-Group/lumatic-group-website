"use client";

import styles from "./Hero.module.css";

const stats = [
  { value: "500K+", label: "App Downloads" },
  { value: "6+",    label: "Years Experience" },
  { value: "50+",   label: "Projects Delivered" },
  { value: "5★",    label: "Client Rating" },
];

export default function Hero() {
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
          businesses — fast, bilingual, and built to convert.
        </p>

        {/* CTAs */}
        <div className={styles.actions}>
          <a
            href="https://wa.me/971502659885"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Start on WhatsApp
          </a>
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
