import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumatic Software Group | AI-Powered Digital Services in Dubai",
  description:
    "Dubai-based software studio delivering WhatsApp automation, mobile apps, and professional websites. Led by a Senior Mobile Developer with 500K+ app downloads.",
  keywords:
    "software development Dubai, WhatsApp chatbot Dubai, Android development UAE, web design Dubai, AI automation Dubai, Lumatic Software Group",
  openGraph: {
    title: "Lumatic Software Group — Dubai's AI-Powered Digital Studio",
    description:
      "We build WhatsApp chatbots, mobile apps, and bilingual websites for Dubai businesses — fast, affordable, and developer-led.",
    type: "website",
    locale: "en_AE",
    siteName: "Lumatic Software Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumatic Software Group | Dubai Digital Studio",
    description:
      "AI-powered digital services for UAE businesses: chatbots, apps, websites.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#0A1628" />
      </head>
      <body>{children}</body>
    </html>
  );
}
