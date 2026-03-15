"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const channels = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+971 50 265 9885",
    href: "https://wa.me/971502659885",
    color: "#25D366",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Email",
    value: "hello@lumaticgroup.info",
    href: "mailto:hello@lumaticgroup.info",
    color: "#C9A84C",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Location",
    value: "Dubai, United Arab Emirates",
    href: "https://maps.google.com/?q=Dubai,UAE",
    color: "#C9A84C",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", business: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nService: ${form.service}\n\n${form.message}`
    );
    const subject = encodeURIComponent(`Lumatic Enquiry from ${form.name}`);
    window.location.href = `mailto:hello@lumaticgroup.info?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className={styles.section}>
      {/* Dark background */}
      <div className={styles.bg} />
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        {/* Left: Info */}
        <div className={styles.info}>
          <span className={styles.label}>
            <span className={styles.labelLine} />
            Get in Touch
          </span>

          <h2 className={styles.title}>
            Let&apos;s Build Something<br />
            <em>That Pays Off</em>
          </h2>

          <p className={styles.subtitle}>
            Tell us what your business needs. We reply within a few hours on
            WhatsApp — or send a quick message below and we&apos;ll be in touch.
          </p>

          {/* Channels */}
          <div className={styles.channels}>
            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channel}
              >
                <span className={styles.channelIcon} style={{ color: ch.color }}>
                  {ch.icon}
                </span>
                <div>
                  <div className={styles.channelLabel}>{ch.label}</div>
                  <div className={styles.channelValue}>{ch.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/971502659885"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waCta}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp — fastest response
          </a>
        </div>

        {/* Right: Form */}
        <div className={styles.formWrap}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Send us a message</h3>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Mohammed Al Rashid"
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Business Name</label>
                <input
                  type="text"
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                  placeholder="Your company"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Service Interested In</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={styles.input}
              >
                <option value="">Select a service…</option>
                <option value="WhatsApp Chatbot">WhatsApp Chatbot</option>
                <option value="Business Website">Business Website</option>
                <option value="Android Development">Android Development</option>
                <option value="Full Digital Growth Package">Full Digital Growth Package</option>
                <option value="Other">Other / Not sure yet</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a bit about your business and what you need…"
                rows={5}
                required
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submit}>
              {sent ? "✓ Message Sent!" : "Send Message"}
              {!sent && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

            <p className={styles.formNote}>
              We typically respond within 2 hours during Dubai business hours (9am–9pm GST).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
