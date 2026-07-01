"use client";

import styles from "./Portfolio.module.css";
import { useMessaging } from "./MessagingContext";
import { useLanguage } from "./LanguageProvider";

export default function Portfolio() {
  const { activeOption } = useMessaging();
  const { t } = useLanguage();

  const stats = [
    { value: t.portfolio.statsBand.downloads.value, label: t.portfolio.statsBand.downloads.label, icon: t.portfolio.statsBand.downloads.icon },
    { value: t.portfolio.statsBand.experience.value, label: t.portfolio.statsBand.experience.label, icon: t.portfolio.statsBand.experience.icon },
    { value: t.portfolio.statsBand.delivery.value, label: t.portfolio.statsBand.delivery.label, icon: t.portfolio.statsBand.delivery.icon },
    { value: t.portfolio.statsBand.languages.value, label: t.portfolio.statsBand.languages.label, icon: t.portfolio.statsBand.languages.icon },
  ];

  const projects = [
    {
      category: t.portfolio.projects.chatbot.category,
      title: t.portfolio.projects.chatbot.title,
      desc: t.portfolio.projects.chatbot.description,
      tags: t.portfolio.projects.chatbot.tags,
      metric: t.portfolio.projects.chatbot.metric,
      color: "#25D366",
    },
    {
      category: t.portfolio.projects.website.category,
      title: t.portfolio.projects.website.title,
      desc: t.portfolio.projects.website.description,
      tags: t.portfolio.projects.website.tags,
      metric: t.portfolio.projects.website.metric,
      color: "#C9A84C",
    },
    {
      category: t.portfolio.projects.mobile.category,
      title: t.portfolio.projects.mobile.title,
      desc: t.portfolio.projects.mobile.description,
      tags: t.portfolio.projects.mobile.tags,
      metric: t.portfolio.projects.mobile.metric,
      color: "#4A90D9",
    },
    {
      category: t.portfolio.projects.growth.category,
      title: t.portfolio.projects.growth.title,
      desc: t.portfolio.projects.growth.description,
      tags: t.portfolio.projects.growth.tags,
      metric: t.portfolio.projects.growth.metric,
      color: "#9B59B6",
    },
  ];

  const process = [
    { step: t.portfolio.process.steps.step1.number, title: t.portfolio.process.steps.step1.title, desc: t.portfolio.process.steps.step1.description },
    { step: t.portfolio.process.steps.step2.number, title: t.portfolio.process.steps.step2.title, desc: t.portfolio.process.steps.step2.description },
    { step: t.portfolio.process.steps.step3.number, title: t.portfolio.process.steps.step3.title, desc: t.portfolio.process.steps.step3.description },
    { step: t.portfolio.process.steps.step4.number, title: t.portfolio.process.steps.step4.title, desc: t.portfolio.process.steps.step4.description },
  ];
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
              {t.portfolio.sectionLabel}
            </span>
            <h2 className={styles.title}>
              {t.portfolio.title}<br />
              <em>{t.portfolio.titleAccent}</em>
            </h2>
            <p className={styles.subtitle}>
              {t.portfolio.subtitle}
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
                {t.portfolio.process.sectionLabel}
              </span>
              <h3 className={styles.processTitle}>
                {t.portfolio.process.title}
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
                {t.portfolio.process.ctaText} {activeOption.label}
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
