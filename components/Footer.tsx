"use client";

import Image from "next/image";
import styles from "./Footer.module.css";
import { useMessaging, MESSAGING_OPTIONS } from "./MessagingContext";

const services = [
  { label: "WhatsApp Chatbot", href: "#services" },
  { label: "Business Website", href: "#services" },
  { label: "Android Development", href: "#services" },
  { label: "Full Digital Growth", href: "#services" },
];

const company = [
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
  { label: "abbasian.dev", href: "https://abbasian.dev", external: true },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mahdi-abbasian",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/971502659885",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/lumaticgroup",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { activeOption } = useMessaging();
  const scrollTo = (href: string) => {
    if (href.startsWith("http")) { window.open(href, "_blank"); return; }
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>
          {/* Brand col */}
          <div className={styles.brand}>
            <Image
              src="/assets/lumatic_logo_optimized_.png"
              alt="Lumatic Software Group"
              width={150}
              height={44}
              className={styles.logo}
            />
            <p className={styles.tagline}>
              AI-powered digital studio for Dubai businesses. We build what your
              customers need to find you, trust you, and buy from you.
            </p>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className={styles.contact}>
              <a href={activeOption.href} className={styles.contactItem}>
                +971 50 265 9885
              </a>
              <span className={styles.dot}>·</span>
              <a href="mailto:hello@lumaticgroup.info" className={styles.contactItem}>
                hello@lumaticgroup.info
              </a>
            </div>
          </div>

          {/* Services col */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.links}>
              {services.map((s) => (
                <li key={s.label}>
                  <button className={styles.link} onClick={() => scrollTo(s.href)}>
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.links}>
              {company.map((c) => (
                <li key={c.label}>
                  <button className={styles.link} onClick={() => scrollTo(c.href)}>
                    {c.label}
                    {c.external && (
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" width="10" height="10">
                        <path d="M3 9L9 3M5 3h4v4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Messaging CTA col */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Start Today</h4>
            <p className={styles.ctaText}>
              Ready to grow your Dubai business digitally? Message us now — free consultation.
            </p>
            {/* App toggle indicators */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
              {MESSAGING_OPTIONS.map((opt) => (
                <span
                  key={opt.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "5px 11px",
                    borderRadius: "20px",
                    border: `1.5px solid ${activeOption.id === opt.id ? opt.color : "rgba(255,255,255,0.12)"}`,
                    background: activeOption.id === opt.id ? opt.color : "transparent",
                    color: activeOption.id === opt.id ? "#fff" : "rgba(255,255,255,0.4)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                  }}
                >
                  {opt.icon16}
                  {opt.label}
                </span>
              ))}
            </div>
            <a
              href={activeOption.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
              style={{ background: activeOption.color, boxShadow: `0 4px 16px ${activeOption.shadowColor}` }}
            >
              {activeOption.icon16}
              Message Us on {activeOption.label}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>© {new Date().getFullYear()} Lumatic Software Group · Dubai, UAE</span>
          <span className={styles.bottomRight}>
            Led by{" "}
            <a href="https://abbasian.dev" target="_blank" rel="noopener noreferrer" className={styles.devLink}>
              Mahdi Abbasian
            </a>
            , Senior Mobile Developer
          </span>
        </div>
      </div>
    </footer>
  );
}
