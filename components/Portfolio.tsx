"use client";

import styles from "./Portfolio.module.css";
import { useMessaging } from "./MessagingContext";

const stats = [
  { value: "500K+", label: "App Downloads", icon: "📲" },
  { value: "6+",    label: "Years Experience", icon: "🏆" },
  { value: "5–7",   label: "Days to Deliver", icon: "⚡" },
  { value: "3",     label: "Languages Supported", icon: "🌐" },
];

const projects = [
  {
    category: "WhatsApp Automation",
    title: "Food Business Bot — Dubai",
    desc: "AI-powered WhatsApp chatbot for a Dubai-based Iranian food business. Handles order capture, menu enquiries, and pricing 24/7. Client saved 3+ hours/day in manual replies.",
    tags: ["WhatsApp API", "AI Replies", "Order Capture"],
    metric: "3 hrs/day saved",
    color: "#25D366",
  },
  {
    category: "Business Website",
    title: "Bilingual Trading Co. Site",
    desc: "5-page Next.js website in English and Farsi for a Dubai trading company. SEO-optimised, mobile-first, with WhatsApp CTA on every page. Launched in 10 days.",
    tags: ["Next.js", "Bilingual EN/FA", "SEO-Ready"],
    metric: "10-day delivery",
    color: "#C9A84C",
  },
  {
    category: "Android Development",
    title: "Delivery App — Feature Module",
    desc: "New real-time driver tracking module built with Kotlin and Firebase for a UAE delivery startup. Clean MVVM architecture, shipped in 12 days as a B2B contract.",
    tags: ["Kotlin", "Firebase", "MVVM"],
    metric: "12-day turnaround",
    color: "#4A90D9",
  },
  {
    category: "Full Digital Growth",
    title: "Home Services — Full Launch",
    desc: "Website + WhatsApp bot + 8 SEO blog posts in Farsi and English for a Dubai home services company. First inbound Google lead arrived within 45 days of launch.",
    tags: ["Website", "Bot", "SEO Content"],
    metric: "45 days to 1st lead",
    color: "#9B59B6",
  },
];

const process = [
  { step: "01", title: "WhatsApp Consult", desc: "Free 20-minute call to understand your business and recommend the right package." },
  { step: "02", title: "Proposal & Quote", desc: "Clear scope, fixed price, delivery timeline. No hidden fees. You approve before we start." },
  { step: "03", title: "Build & Deliver", desc: "We build fast using AI tools. You review at every stage. Delivered in days, not months." },
  { step: "04", title: "Launch & Support", desc: "We go live together and provide 30-day support to make sure everything performs." },
];

export default function Portfolio() {
  const { activeOption } = useMessaging();
  return (
    <>
      {/* ── Stats Band ── */}
      <section className={styles.statsBand}>
        <div className={styles.statsContainer}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statIcon}>{s.icon}</span>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section id="portfolio" className={styles.section}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <span className={styles.label}>
              <span className={styles.labelLine} />
              Our Work
            </span>
            <h2 className={styles.title}>
              Projects That Paid Off<br />
              <em>for Dubai Businesses</em>
            </h2>
            <p className={styles.subtitle}>
              Real results for real clients. Every project is developer-reviewed,
              AI-accelerated, and delivered with measurable outcomes.
            </p>
          </div>

          {/* Project cards */}
          <div className={styles.grid}>
            {projects.map((p) => (
              <div key={p.title} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.category} style={{ color: p.color }}>
                    {p.category}
                  </span>
                  <span className={styles.metric}>{p.metric}</span>
                </div>
                <div className={styles.accentLine} style={{ background: p.color }} />
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Process section */}
          <div className={styles.process}>
            <div className={styles.processHeader}>
              <span className={styles.label}>
                <span className={styles.labelLine} />
                How It Works
              </span>
              <h3 className={styles.processTitle}>
                From first message to live product<br />in as little as 5 days
              </h3>
              <a
                href={activeOption.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "16px",
                  padding: "12px 24px",
                  borderRadius: "40px",
                  background: activeOption.color,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  boxShadow: `0 4px 20px ${activeOption.shadowColor}`,
                  transition: "all 0.2s ease",
                }}
              >
                {activeOption.icon18}
                Start your free consult on {activeOption.label}
              </a>
            </div>
            <div className={styles.steps}>
              {process.map((p, i) => (
                <div key={p.step} className={styles.step}>
                  <div className={styles.stepNumber}>{p.step}</div>
                  {i < process.length - 1 && <div className={styles.stepLine} />}
                  <h4 className={styles.stepTitle}>{p.title}</h4>
                  <p className={styles.stepDesc}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
