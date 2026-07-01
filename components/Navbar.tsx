"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useMessaging, MESSAGING_OPTIONS } from "./MessagingContext";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [ctaOpen,       setCtaOpen]       = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { active, setActive, activeOption } = useMessaging();
  const { t } = useLanguage();
  
  const navLinks = [
    { label: t.navbar.links.home,     href: "#home" },
    { label: t.navbar.links.services, href: "#services" },
    { label: t.navbar.links.about,    href: "#about" },
    { label: t.navbar.links.work,     href: "#portfolio" },
    { label: t.navbar.links.contact,  href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close CTA dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ctaRef.current && !ctaRef.current.contains(e.target as Node)) {
        setCtaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#home" className={styles.logo} onClick={() => handleNav("#home")}>
            <Image
              src="/assets/lumatic_logo_optimized_.png"
              alt="Lumatic Software Group"
              width={140}
              height={40}
              priority
              className={styles.logoImg}
            />
          </a>

          {/* Desktop Links */}
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  className={`${styles.link} ${activeSection === link.href.replace("#", "") ? styles.active : ""}`}
                  onClick={() => handleNav(link.href)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA with messaging dropdown */}
          <div className={styles.ctaWrap} ref={ctaRef}>
            <button
              className={styles.cta}
              onClick={() => setCtaOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={ctaOpen}
              style={{ "--cta-active-color": activeOption.color } as React.CSSProperties}
            >
              <span style={{ display: "flex" }}>{activeOption.icon16}</span>
              {t.navbar.cta} {activeOption.label}
              <svg
                className={`${styles.ctaChevron} ${ctaOpen ? styles.ctaChevronOpen : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                width="12"
                height="12"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown */}
            {ctaOpen && (
              <div className={styles.ctaDropdown} role="menu">
                <p className={styles.ctaDropdownHint}>{t.navbar.ctaDropdownHint}</p>
                {MESSAGING_OPTIONS.map((opt) => (
                  <a
                    key={opt.id}
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaDropdownItem}
                    style={{
                      "--item-color": opt.color,
                      background: active === opt.id ? `${opt.color}22` : undefined,
                      fontWeight: active === opt.id ? 700 : undefined,
                    } as React.CSSProperties}
                    onClick={() => { setActive(opt.id); setCtaOpen(false); }}
                    role="menuitem"
                  >
                    <span className={styles.ctaDropdownIcon} style={{ color: opt.color }}>
                      {opt.icon16}
                    </span>
                    {opt.label}
                    {active === opt.id && (
                      <span style={{ marginLeft: "auto", fontSize: "0.65rem", opacity: 0.7 }}>✓</span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.navbar.toggleMenuAriaLabel}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        <ul className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                className={styles.drawerLink}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile messaging options */}
        <div className={styles.drawerMessaging}>
          <p className={styles.drawerMessagingLabel}>{t.navbar.mobileMessagingLabel}</p>
          <div className={styles.drawerCtaGroup}>
            {MESSAGING_OPTIONS.map((opt) => (
              <a
                key={opt.id}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.drawerCta}
                style={{ "--drawer-cta-color": opt.color } as React.CSSProperties}
                onClick={() => setMenuOpen(false)}
              >
<span>{opt.icon18}</span>
                {opt.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
