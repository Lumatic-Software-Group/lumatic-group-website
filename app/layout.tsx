import type {Metadata} from "next";
import {Cormorant_Garamond, Inter} from "next/font/google";
import "./globals.css";
import {MessagingProvider} from "@/components/MessagingContext";
import {LanguageProvider} from "@/components/LanguageProvider";
import LoadingIndicator from "@/components/LoadingIndicator";

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
    metadataBase: new URL("https://lumaticgroup.info"),
    title: {
        default: "Lumatic Software Group | AI-Powered Digital Services in Dubai & Abu Dhabi",
        template: "%s | Lumatic Software Group",
    },
    description:
        "Dubai-based software studio delivering WhatsApp chatbot automation, Android & iOS mobile apps, and bilingual websites for UAE businesses. Senior developer-led, 500K+ app downloads, fast delivery.",
    keywords: [
        "software development Dubai",
        "software development Abu Dhabi",
        "WhatsApp chatbot Dubai",
        "WhatsApp automation UAE",
        "Android development Dubai",
        "iOS app development UAE",
        "mobile app development Dubai",
        "web design Dubai",
        "web development Abu Dhabi",
        "AI automation Dubai",
        "bilingual website Dubai Arabic English",
        "Next.js website Dubai",
        "Flutter developer UAE",
        "React Native developer Dubai",
        "digital agency Dubai",
        "tech startup Dubai",
        "business website Dubai affordable",
        "chatbot for restaurant Dubai",
        "Lumatic Software Group",
        "lumaticgroup.info",
    ],
    authors: [{name: "Mahdi Hossein Abbasian", url: "https://abbasian.dev"}],
    creator: "Mahdi Hossein Abbasian",
    publisher: "Lumatic Software Group",
    category: "technology",
    alternates: {
        canonical: "https://lumaticgroup.info/",
    },
    openGraph: {
        title: "Lumatic Software Group — Dubai's AI-Powered Digital Studio",
        description:
            "WhatsApp chatbots, Android & iOS apps, and bilingual websites for Dubai & Abu Dhabi businesses — senior developer-led, fast & affordable.",
        url: "https://lumaticgroup.info/",
        type: "website",
        locale: "en_AE",
        siteName: "Lumatic Software Group",
        images: [
            {
                url: "/assets/business-bay-dubai_optimized_.jpg",
                width: 1200,
                height: 630,
                alt: "Lumatic Software Group — AI-Powered Digital Studio in Dubai",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Lumatic Software Group | Dubai & Abu Dhabi Digital Studio",
        description:
            "WhatsApp chatbots, mobile apps & bilingual websites for UAE businesses. Senior developer-led. Fast delivery.",
        images: ["/assets/business-bay-dubai_optimized_.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "Ct4H23RmNrx7TjqdbuEYgyScXQPT708xbpDs37Kza1g",
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What services does Lumatic Software Group offer in Dubai?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Lumatic Software Group offers four services for Dubai businesses: AI-powered WhatsApp and Telegram chatbot setup, professional bilingual business websites (English, Arabic, Farsi), Android and iOS mobile app development (Kotlin, Swift, KMM, Flutter, React Native), and a Full Digital Growth package combining website, chatbot, SEO content, and Google Search Console setup.",
            },
        },
        {
            "@type": "Question",
            name: "What is included in the Chatbot Setup service?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The Chatbot Setup service from Lumatic Software Group includes AI-powered auto-replies, product catalogue and order capture, and 30-day support. It handles pricing enquiries, FAQs, and order capture on WhatsApp and Telegram — 24/7, while you sleep. Delivered in 5–7 days.",
            },
        },
        {
            "@type": "Question",
            name: "What is included in the Business Website service?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Lumatic Software Group builds professional, mobile-first Next.js websites in English, Arabic, or Farsi — built to rank on Google and convert visitors into paying clients. Each site includes a 5-page bilingual build (EN/AR/FA), social CTA (WhatsApp or Telegram) on every page, SEO-ready and mobile-responsive design, and 60-day support. Delivered in 7–14 days.",
            },
        },
        {
            "@type": "Question",
            name: "What mobile app technologies does Lumatic Software Group use?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Lumatic Software Group offers senior mobile app development for UAE startups using Kotlin, Swift, KMM (Kotlin Multiplatform Mobile), Flutter, and React Native. We cover native Android, native iOS, and cross-platform apps, with Firebase and REST API integration. Our track record includes 500K+ app downloads and B2B contract invoicing.",
            },
        },
        {
            "@type": "Question",
            name: "What is the Full Digital Growth package?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The Full Digital Growth package from Lumatic Software Group combines everything in the Business Website and Chatbot services, plus specialized content production, advanced SEO, and Google Search Console setup. It includes 60-day support and B2B contract invoicing — ideal for Dubai SMEs wanting inbound Google leads.",
            },
        },
        {
            "@type": "Question",
            name: "How fast does Lumatic Software Group deliver projects?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Lumatic Software Group delivers chatbot setups in 5–7 days, business websites in 7–14 days, and the Full Digital Growth package in 21–30 days. Mobile app features and modules are typically delivered in 5–15 days depending on scope. The studio uses AI tools to deliver fast without compromising quality.",
            },
        },
        {
            "@type": "Question",
            name: "How do I contact Lumatic Software Group in Dubai?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can reach Lumatic Software Group via WhatsApp at +971 50 265 9885, Telegram at @lumaticgroup, or by email at contact@lumaticgroup.info. The team is based in Dubai, UAE and typically responds within 2 hours during Dubai business hours (9am–9pm GST). A free 20-minute consultation is available.",
            },
        },
        {
            "@type": "Question",
            name: "Does Lumatic Software Group support Arabic and Farsi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Lumatic Software Group is bilingual by default — every product ships in English, Arabic, and Farsi, designed for Dubai's multicultural business landscape. The studio serves Iranian, Arab, and international business owners across the UAE.",
            },
        },
        {
            "@type": "Question",
            name: "Is Lumatic Software Group a registered company in Dubai?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Lumatic Software Group is a registered UAE company based in Dubai, enabling legal B2B invoicing. The studio is led by Mahdi Hossein Abbasian, a Senior Mobile Developer with 6+ years of experience and over 500,000 app downloads.",
            },
        },
    ],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "LocalBusiness",
            "@id": "https://lumaticgroup.info/#business",
            name: "Lumatic Software Group",
            alternateName: "Lumatic Group",
            url: "https://lumaticgroup.info",
            logo: "https://lumaticgroup.info/assets/lumatic_logo_optimized_.png",
            image: "https://lumaticgroup.info/assets/business-bay-dubai_optimized_.jpg",
            description:
                "Dubai-based AI-powered software studio delivering WhatsApp chatbots, Android & iOS mobile apps, and bilingual websites for UAE businesses.",
            telephone: "+971502659885",
            email: "contact@lumaticgroup.info",
            founder: {
                "@type": "Person",
                name: "Mahdi Hossein Abbasian",
                url: "https://abbasian.dev",
                jobTitle: "Senior Mobile Developer",
            },
            address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                addressCountry: "AE",
            },
            areaServed: [
                {"@type": "City", name: "Dubai"},
                {"@type": "City", name: "Abu Dhabi"},
                {"@type": "Country", name: "United Arab Emirates"},
            ],
            serviceType: [
                "WhatsApp Chatbot Development",
                "Android App Development",
                "iOS App Development",
                "Business Website Development",
                "AI Automation",
                "Full Digital Growth Package",
            ],
            sameAs: [
                "https://linkedin.com/in/mahdi-abbasian",
                "https://t.me/lumaticgroup",
                "https://wa.me/971502659885",
            ],
            priceRange: "$$",
            openingHours: "Mo-Sa 09:00-20:00",
            currenciesAccepted: "AED, USD",
            paymentAccepted: "Bank Transfer, Cash, Online Payment",
        },
        {
            "@type": "WebSite",
            "@id": "https://lumaticgroup.info/#website",
            url: "https://lumaticgroup.info",
            name: "Lumatic Software Group",
            description: "AI-Powered Digital Services in Dubai & Abu Dhabi",
            publisher: {"@id": "https://lumaticgroup.info/#business"},
            potentialAction: {
                "@type": "SearchAction",
                target: "https://lumaticgroup.info/?q={search_term_string}",
                "query-input": "required name=search_term_string",
            },
        },
        {
            "@type": "ProfessionalService",
            "@id": "https://lumaticgroup.info/#service",
            name: "Software Development & Digital Marketing Dubai",
            provider: {"@id": "https://lumaticgroup.info/#business"},
            areaServed: ["Dubai", "Abu Dhabi", "UAE"],
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Services",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "WhatsApp Chatbot Setup",
                            description: "AI-powered WhatsApp chatbot for UAE businesses with auto-replies, product catalogue, and order capture.",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Business Website Development Dubai",
                            description: "Professional bilingual (EN/AR/FA) Next.js websites built to rank on Google and convert visitors.",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Android & iOS Mobile App Development UAE",
                            description: "Senior mobile development using Kotlin, Swift, Flutter, and React Native for UAE startups.",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Full Digital Growth Package",
                            description: "Website + Chatbot + SEO + Google Search Console setup for complete digital presence in UAE.",
                        },
                    },
                ],
            },
        },
    ],
};

export default function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <meta name="theme-color" content="#0A1628"/>
            {/* Geo tags — local search signal for Dubai */}
            <meta name="geo.region" content="AE-DU"/>
            <meta name="geo.placename" content="Dubai, United Arab Emirates"/>
            <meta name="geo.position" content="25.2048;55.2708"/>
            <meta name="ICBM" content="25.2048, 55.2708"/>
            {/* hreflang — English and Arabic (same URL, client-side language switching) */}
            <link rel="alternate" hrefLang="en" href="https://lumaticgroup.info/"/>
            <link rel="alternate" hrefLang="ar" href="https://lumaticgroup.info/"/>
            <link rel="alternate" hrefLang="x-default" href="https://lumaticgroup.info/"/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}}
            />
        </head>
        <body suppressHydrationWarning>
        <LanguageProvider>
            <LoadingIndicator>
                <MessagingProvider>{children}</MessagingProvider>
            </LoadingIndicator>
        </LanguageProvider>
        </body>
        </html>
    );
}
