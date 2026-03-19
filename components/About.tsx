"use client";

import Image from "next/image";
import styles from "./About.module.css";
import { useMessaging } from "./MessagingContext";

const pillars = [
  {
    icon: "🏗️",
    title: "Developer-Led",
    desc: "Every project is overseen by Mahdi Hossein Abbasian - a Senior Mobile Developer with 6+ years and 500K+ app downloads.",
  },
  {
    icon: "⚡",
    title: "AI-Accelerated",
    desc: "We use cutting-edge AI tools to deliver in days, not months - without compromising on quality or code standards.",
  },
  {
    icon: "🌐",
    title: "Bilingual by Default",
    desc: "Every product we ship works in English, Arabic, and Farsi - designed for Dubai's multicultural business landscape.",
  },
  {
    icon: "📈",
    title: "Built to Convert",
    desc: "We don't just build pretty sites. Every element is engineered to turn visitors into Social conversations and paying clients.",
  },
];

export default function About() {
  const { activeOption } = useMessaging();
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
              <div className={styles.floatingTitle}>Registered in Dubai</div>
              <div className={styles.floatingDesc}>UAE Company · Legal B2B Invoicing</div>
            </div>
          </div>

          {/* Gold accent bar */}
          <div className={styles.accentBar} />
        </div>

        {/* Right: Content */}
        <div className={styles.content}>
          <span className={styles.label}>
            <span className={styles.labelLine} />
            About Lumatic
          </span>

          <h2 className={styles.title}>
            A Studio Where the<br />
            <em>Founder Still Codes</em>
          </h2>

          <p className={styles.body}>
            Lumatic Software Group is a Dubai-based digital studio founded by
            Mahdi Hossein Abbasian - a Senior Mobile Developer who has shipped apps
            with over 500,000 downloads. We apply AI tools to deliver
            enterprise-quality digital products at startup-friendly prices.
          </p>
          <p className={styles.body}>
            We serve Iranian, Arab, and international business owners across
            the UAE who need a credible digital presence - fast. Whether it's
            a chatbot for your food business, an Mobile feature for
            your startup, or a bilingual website for your trade company, we
            build it in days, not months.
          </p>

          {/* Pillars */}
          <div className={styles.pillars}>
            {pillars.map((p) => (
              <div key={p.title} className={styles.pillar}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <div>
                  <h4 className={styles.pillarTitle}>{p.title}</h4>
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
              Talk to the Founder on {activeOption.label}
            </a>
            {/* dofollow — passes link equity to abbasian.dev per master plan */}
            <a
              href="https://abbasian.dev"
              target="_blank"
              rel="noopener"
              className={styles.btnLink}
            >
              View Developer Portfolio → abbasian.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
