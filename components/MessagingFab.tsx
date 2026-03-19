"use client";

import { useState } from "react";
import { useMessaging, MESSAGING_OPTIONS } from "./MessagingContext";

export default function MessagingFab() {
  const { active, setActive, activeOption } = useMessaging();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "32px", right: "32px", zIndex: 999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
      {/* App picker — shown when open */}
      {open && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          animation: "fabMenuIn 0.2s ease both",
        }}>
          {MESSAGING_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => { setActive(opt.id); setOpen(false); }}
              aria-label={`Switch to ${opt.label}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                borderRadius: "40px",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body, 'Inter', sans-serif)",
                fontSize: "0.85rem",
                fontWeight: 600,
                background: active === opt.id ? opt.color : "rgba(10,22,40,0.92)",
                color: active === opt.id ? "#fff" : opt.color,
                boxShadow: active === opt.id
                  ? `0 4px 20px ${opt.shadowColor}`
                  : "0 2px 12px rgba(0,0,0,0.35)",
                transition: "all 0.2s ease",
                backdropFilter: "blur(8px)",
                outline: active === opt.id ? `2px solid ${opt.color}` : "2px solid transparent",
              }}
            >
              <span style={{ display: "flex", color: active === opt.id ? "#fff" : opt.color }}>
                {opt.icon18}
              </span>
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Toggle button to open/close picker */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Choose messaging app"
          title="Switch between WhatsApp & Telegram"
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.25)",
            background: "rgba(10,22,40,0.85)",
            backdropFilter: "blur(8px)",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.7rem",
            fontWeight: 700,
            transition: "all 0.2s ease",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
            <path d={open ? "M18 6L6 18M6 6l12 12" : "M8 9l4-4 4 4M16 15l-4 4-4-4"} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Primary FAB — opens the active app */}
        <a
          href={activeOption.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat on ${activeOption.label}`}
          style={{
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            background: activeOption.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 4px 20px ${activeOption.shadowColor}`,
            textDecoration: "none",
            transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
            animation: "fabPulse 2.5s infinite",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.12)";
            (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${activeOption.shadowColor}`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${activeOption.shadowColor}`;
          }}
        >
          {activeOption.icon30}
        </a>
      </div>

      <style>{`
        @keyframes fabPulse {
          0%, 100% { box-shadow: 0 4px 20px ${activeOption.shadowColor}; }
          50%       { box-shadow: 0 4px 20px ${activeOption.shadowColor}, 0 0 0 10px ${activeOption.pulseColor.replace("0.4", "0")}; }
        }
        @keyframes fabMenuIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
