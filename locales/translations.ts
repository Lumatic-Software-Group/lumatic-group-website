/**
 * Translation File Structure for Lumatic Group Website
 * 
 * This file contains all user-facing text strings in English and Arabic.
 * English translations are extracted from existing components.
 * Arabic translations are marked with TODO - to be provided by user.
 * 
 * Structure: Nested objects for each component (hero, services, about, portfolio, contact, navbar, footer)
 * All keys are type-safe and exported for use with the i18n system.
 */

export type Language = 'en' | 'ar';

export interface Translations {
  hero: {
    badge: string;
    headline: string;
    headlineAccent1: string;
    headlineAccent2: string;
    subline: string;
    ctaPrimary: string; // "Start on" (followed by WhatsApp/Telegram)
    ctaSecondary: string;
    stats: {
      downloads: { value: string; label: string };
      experience: { value: string; label: string };
      projects: { value: string; label: string };
      rating: { value: string; label: string };
    };
    scrollDownAriaLabel: string;
  };
  services: {
    sectionLabel: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cards: {
      chatbot: {
        tag: string;
        title: string;
        description: string;
        features: string[];
        ctaLabel: string;
      };
      website: {
        tag: string;
        title: string;
        description: string;
        features: string[];
        ctaLabel: string;
      };
      aiContent: {
        tag: string;
        title: string;
        description: string;
        features: string[];
        ctaLabel: string;
      };
      mobile: {
        tag: string;
        title: string;
        description: string;
        features: string[];
        ctaLabel: string;
      };
      aiAgent: {
        tag: string;
        title: string;
        description: string;
        features: string[];
        ctaLabel: string;
      };
      growth: {
        tag: string;
        title: string;
        description: string;
        features: string[];
        ctaLabel: string;
      };
    };
    messageCta: string; // "Message us to discuss"
    stripText: string;
    stripCta: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    titleAccent: string;
    body1: string;
    body2: string;
    floatingBadge: {
      title: string;
      description: string;
    };
    pillars: {
      developerLed: { title: string; description: string };
      aiAccelerated: { title: string; description: string };
      bilingual: { title: string; description: string };
      builtToConvert: { title: string; description: string };
    };
    ctaPrimary: string; // "Talk to the Founder on" (followed by WhatsApp/Telegram)
    ctaSecondary: string;
  };
  portfolio: {
    statsBand: {
      downloads: { icon: string; value: string; label: string };
      experience: { icon: string; value: string; label: string };
      delivery: { icon: string; value: string; label: string };
      languages: { icon: string; value: string; label: string };
    };
    sectionLabel: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    projects: {
      chatbot: {
        category: string;
        title: string;
        description: string;
        tags: string[];
        metric: string;
      };
      website: {
        category: string;
        title: string;
        description: string;
        tags: string[];
        metric: string;
      };
      mobile: {
        category: string;
        title: string;
        description: string;
        tags: string[];
        metric: string;
      };
      growth: {
        category: string;
        title: string;
        description: string;
        tags: string[];
        metric: string;
      };
    };
    process: {
      sectionLabel: string;
      title: string;
      ctaText: string; // "Start your free consult on" (followed by WhatsApp/Telegram)
      steps: {
        step1: { number: string; title: string; description: string };
        step2: { number: string; title: string; description: string };
        step3: { number: string; title: string; description: string };
        step4: { number: string; title: string; description: string };
      };
    };
  };
  contact: {
    sectionLabel: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    channels: {
      whatsapp: { label: string; value: string };
      telegram: { label: string; value: string };
      email: { label: string; value: string };
      location: { label: string; value: string };
    };
    messagingHint: string;
    messagingCta: {
      whatsapp: string;
      telegram: string;
    };
    form: {
      title: string;
      fields: {
        name: { label: string; placeholder: string };
        business: { label: string; placeholder: string };
        service: {
          label: string;
          placeholder: string;
          options: {
            chatbot: string;
            website: string;
            aiContent: string;
            mobile: string;
            aiAgent: string;
            growth: string;
            other: string;
          };
        };
        message: { label: string; placeholder: string };
      };
      submitButton: string;
      submitSuccess: string;
      note: string;
    };
  };
  navbar: {
    links: {
      home: string;
      services: string;
      about: string;
      work: string;
      contact: string;
    };
    cta: string; // "Get a Quote ·" (followed by WhatsApp/Telegram)
    ctaDropdownHint: string;
    mobileMessagingLabel: string;
    toggleMenuAriaLabel: string;
  };
  footer: {
    tagline: string;
    contact: {
      phone: string;
      email: string;
    };
    sections: {
      services: {
        title: string;
        links: {
          chatbot: string;
          website: string;
          aiContent: string;
          mobile: string;
          aiAgent: string;
          growth: string;
        };
      };
      company: {
        title: string;
        links: {
          about: string;
          work: string;
          contact: string;
          portfolio: string; // "abbasian.dev" - kept in English
        };
      };
      startToday: {
        title: string;
        text: string;
        cta: string; // "Message Us on" (followed by WhatsApp/Telegram)
      };
    };
    bottom: {
      copyright: string;
      developer: string; // "Led by" prefix, name kept in English
    };
    socialAriaLabels: {
      linkedin: string;
      whatsapp: string;
      telegram: string;
    };
  };
  // Messaging options (WhatsApp/Telegram labels)
  messaging: {
    whatsapp: string;
    telegram: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      badge: "Dubai · UAE  ·  AI-Powered Studio",
      headline: "We Build Digital",
      headlineAccent1: " Products",
      headlineAccent2: " Growth",
      subline: "Lumatic Software Group is a developer-led studio crafting WhatsApp automation, mobile apps, and premium websites for ambitious Dubai businesses - fast, bilingual, and built to convert.",
      ctaPrimary: "Start on",
      ctaSecondary: "Our Services",
      stats: {
        downloads: { value: "500K+", label: "App Downloads" },
        experience: { value: "6+", label: "Years Experience" },
        projects: { value: "50+", label: "Projects Delivered" },
        rating: { value: "5★", label: "Client Rating" },
      },
      scrollDownAriaLabel: "Scroll down",
    },
    services: {
      sectionLabel: "What We Build",
      title: "Tailored Solutions for",
      titleAccent: "Dubai Businesses",
      subtitle: "Six high-impact services - delivered fast with AI tools and senior expertise. Tell us your goal and we'll craft the right solution for you.",
      cards: {
        chatbot: {
          tag: "Most Popular",
          title: "Chatbot Setup",
          description: "Never lose a sale after hours again. We build AI-powered bots that handle pricing, FAQs, order capture and integration - while you sleep.",
          features: [
            "AI-powered auto-replies",
            "Product catalogue & orders",
            "30-day support included",
            "5–7 day delivery"
          ],
          ctaLabel: "Request a Quote",
        },
        website: {
          tag: "Best Value",
          title: "Business Website",
          description: "A professional, mobile-first Next.js website in English, Arabic, or Farsi - built to rank on Google and convert visitors into paying clients.",
          features: [
            "5-page bilingual site (EN/AR/FA)",
            "Social CTA on every page",
            "SEO-ready & mobile-responsive",
            "60-day support included",
            "7–14 day delivery"
          ],
          ctaLabel: "Get a Free Proposal",
        },
        aiContent: {
          tag: "High ROI",
          title: "AI Content & SEO Marketing",
          description: "Boost your Google ranking with SEO-optimized blog posts, product descriptions, and social media content in English, Arabic, or Farsi. AI-powered, human-reviewed, and designed to attract customers.",
          features: [
            "4-8 SEO blog posts per month",
            "Product descriptions & web copy",
            "Social media content (LinkedIn, Instagram)",
            "Multilingual (EN/AR/FA)",
            "Keyword research included"
          ],
          ctaLabel: "Start Ranking on Google",
        },
        mobile: {
          tag: "Developer-Grade",
          title: "Android & iOS App Development",
          description: "Senior mobile development for UAE startups - native Android And iOS or cross-platform (Flutter & React Native). New features, bug fixes, or full rebuilds - shipped fast, built to last.",
          features: [
            "Kotlin · Swift · KMM · Flutter · React Native",
            "Firebase & REST integration",
            "500K+ download track record",
            "B2B contract invoicing"
          ],
          ctaLabel: "Discuss Your Project",
        },
        aiAgent: {
          tag: "Enterprise-Grade",
          title: "Custom AI Agent Development",
          description: "Beyond simple chatbots. We build intelligent AI agents that automate complex business workflows - from customer support and sales qualification to data processing and internal operations.",
          features: [
            "Custom LLM integration (GPT-4, Claude, Gemini)",
            "Multi-step workflow automation",
            "API & database integration",
            "Web-based or messaging platform",
            "90-day support included"
          ],
          ctaLabel: "Build Your AI Agent",
        },
        growth: {
          tag: "Growth Package",
          title: "Full Digital Growth",
          description: "Website + Chatbot + Specialized content production + Advanced SEO + Google Search Console setup.",
          features: [
            "Everything in Web + Bot",
            "Specialized content production",
            "Advanced SEO (incl. Google Search Console)",
            "60-day support included",
            "B2B contract invoicing"
          ],
          ctaLabel: "Start Growing Today",
        },
      },
      messageCta: "Message us to discuss",
      stripText: "Not sure which package is right for you?",
      stripCta: "Chat with us — it's free",
    },
    about: {
      sectionLabel: "About Lumatic",
      title: "A Studio Where the",
      titleAccent: "Founder Still Codes",
      body1: "Lumatic Software Group is a Dubai-based digital studio founded by Mahdi Hossein Abbasian - a Senior Mobile Developer who has shipped apps with over 500,000 downloads. We apply AI tools to deliver enterprise-quality digital products at startup-friendly prices.",
      body2: "We serve Iranian, Arab, and international business owners across the UAE who need a credible digital presence - fast. Whether it's a chatbot for your food business, an Mobile feature for your startup, or a bilingual website for your trade company, we build it in days, not months.",
      floatingBadge: {
        title: "Registered in Dubai",
        description: "UAE Company · Legal B2B Invoicing",
      },
      pillars: {
        developerLed: {
          title: "Developer-Led",
          description: "Every project is overseen by Mahdi Hossein Abbasian - a Senior Mobile Developer with 6+ years and 500K+ app downloads.",
        },
        aiAccelerated: {
          title: "AI-Accelerated",
          description: "We use cutting-edge AI tools to deliver in days, not months - without compromising on quality or code standards.",
        },
        bilingual: {
          title: "Bilingual by Default",
          description: "Every product we ship works in English, Arabic, and Farsi - designed for Dubai's multicultural business landscape.",
        },
        builtToConvert: {
          title: "Built to Convert",
          description: "We don't just build pretty sites. Every element is engineered to turn visitors into Social conversations and paying clients.",
        },
      },
      ctaPrimary: "Talk to the Founder on",
      ctaSecondary: "View Developer Portfolio → abbasian.dev",
    },
    portfolio: {
      statsBand: {
        downloads: { icon: "📲", value: "500K+", label: "App Downloads" },
        experience: { icon: "🏆", value: "6+", label: "Years Experience" },
        delivery: { icon: "⚡", value: "5–7", label: "Days to Deliver" },
        languages: { icon: "🌐", value: "3", label: "Languages Supported" },
      },
      sectionLabel: "Our Work",
      title: "Projects That Paid Off",
      titleAccent: "for Dubai Businesses",
      subtitle: "Real results for real clients. Every project is developer-reviewed, AI-accelerated, and delivered with measurable outcomes.",
      projects: {
        chatbot: {
          category: "Chatbot Automation",
          title: "Food Business Bot - Dubai",
          description: "AI-powered chatbot for a Dubai-based Iranian food business. Handles order capture, menu enquiries, and pricing 24/7. Client saved 3+ hours/day in manual replies.",
          tags: ["Chatbot API", "AI Replies", "Order Capture"],
          metric: "3 hrs/day saved",
        },
        website: {
          category: "Business Website",
          title: "Bilingual Trading Co. Site",
          description: "5-page Next.js website in English and Farsi for a Dubai trading company. SEO-optimised, mobile-first, with WhatsApp CTA on every page. Launched in 10 days.",
          tags: ["Next.js", "Bilingual EN/FA", "SEO-Ready"],
          metric: "10-day delivery",
        },
        mobile: {
          category: "Android Development",
          title: "Delivery App - Feature Module",
          description: "New real-time driver tracking module built with Kotlin and Firebase for a UAE delivery startup. Clean architecture, shipped in 12 days as a B2B contract.",
          tags: ["Kotlin", "Firebase", "MVVM"],
          metric: "12-day turnaround",
        },
        growth: {
          category: "Full Digital Growth",
          title: "Home Services - Full Launch",
          description: "Website + WhatsApp bot + 8 SEO blog posts in Farsi and English for a Dubai home services company. First inbound Google lead arrived within 45 days of launch.",
          tags: ["Website", "Bot", "SEO Content"],
          metric: "45 days to 1st lead",
        },
      },
      process: {
        sectionLabel: "How It Works",
        title: "From first message to live product\nin as little as 5 days",
        ctaText: "Start your free consult on",
        steps: {
          step1: {
            number: "01",
            title: "WhatsApp Or Telegram Consult",
            description: "Free 20-minute call to understand your business and recommend the right package.",
          },
          step2: {
            number: "02",
            title: "Proposal & Quote",
            description: "Clear scope, fixed price, delivery timeline. No hidden fees. You approve before we start.",
          },
          step3: {
            number: "03",
            title: "Build & Deliver",
            description: "We build fast using AI tools. You review at every stage. Delivered in days, not months.",
          },
          step4: {
            number: "04",
            title: "Launch & Support",
            description: "We go live together and provide support to make sure everything performs.",
          },
        },
      },
    },
    contact: {
      sectionLabel: "Get in Touch",
      title: "Let's Build Something",
      titleAccent: "That Pays Off",
      subtitle: "Tell us what your business needs. We reply within a few hours - reach us on WhatsApp or Telegram, whichever you prefer.",
      channels: {
        whatsapp: { label: "WhatsApp", value: "+971 50 265 9885" },
        telegram: { label: "Telegram", value: "@lumaticgroup" },
        email: { label: "Email", value: "contact@lumaticgroup.info" },
        location: { label: "Location", value: "Dubai, United Arab Emirates" },
      },
      messagingHint: "Chat with us instantly via:",
      messagingCta: {
        whatsapp: "Chat on WhatsApp — fastest response",
        telegram: "Message on Telegram — also quick",
      },
      form: {
        title: "Send us a message",
        fields: {
          name: { label: "Your Name *", placeholder: "Mohammed Al Rashid" },
          business: { label: "Business Name", placeholder: "Your company" },
          service: {
            label: "Service Interested In",
            placeholder: "Select a service…",
            options: {
              chatbot: "Chatbot",
              website: "Business Website",
              aiContent: "AI Content & SEO Marketing",
              mobile: "Mobile Development",
              aiAgent: "Custom AI Agent Development",
              growth: "Full Digital Growth Package",
              other: "Other / Not sure yet",
            },
          },
          message: {
            label: "Message *",
            placeholder: "Tell us a bit about your business and what you need…",
          },
        },
        submitButton: "Send Message",
        submitSuccess: "✓ Message Sent!",
        note: "We typically respond within 2 hours during Dubai business hours (9am–9pm GST).",
      },
    },
    navbar: {
      links: {
        home: "Home",
        services: "Services",
        about: "About",
        work: "Work",
        contact: "Contact",
      },
      cta: "Get a Quote ·",
      ctaDropdownHint: "Choose your preferred app:",
      mobileMessagingLabel: "Chat with us via:",
      toggleMenuAriaLabel: "Toggle menu",
    },
    footer: {
      tagline: "AI-powered digital studio for Dubai businesses. We build what your customers need to find you, trust you, and buy from you.",
      contact: {
        phone: "+971 50 265 9885",
        email: "contact@lumaticgroup.info",
      },
      sections: {
        services: {
          title: "Services",
          links: {
            chatbot: "Chatbot",
            website: "Business Website",
            aiContent: "AI Content & SEO",
            mobile: "Mobile Development",
            aiAgent: "AI Agent Development",
            growth: "Full Digital Growth",
          },
        },
        company: {
          title: "Company",
          links: {
            about: "About Us",
            work: "Our Work",
            contact: "Contact",
            portfolio: "abbasian.dev",
          },
        },
        startToday: {
          title: "Start Today",
          text: "Ready to grow your Dubai business digitally? Message us now - free consultation.",
          cta: "Message Us on",
        },
      },
      bottom: {
        copyright: "© 2026 Lumatic Software Group · Dubai, UAE",
        developer: "Led by",
      },
      socialAriaLabels: {
        linkedin: "LinkedIn",
        whatsapp: "WhatsApp",
        telegram: "Telegram",
      },
    },
    messaging: {
      whatsapp: "WhatsApp",
      telegram: "Telegram",
    },
  },
  ar: {
    hero: {
      badge: "دبي · الإمارات · استوديو مدعوم بالذكاء الاصطناعي",
      headline: "نبني منتجات رقمية",
      headlineAccent1: " للنمو",
      headlineAccent2: " والنجاح",
      subline: "مجموعة لوماتك للبرمجيات هي استوديو يقوده مطورون محترفون، متخصص في أتمتة واتساب، تطبيقات الجوال، والمواقع الإلكترونية المتميزة للشركات الطموحة في دبي - سريع، ثنائي اللغة، ومصمم للتحويل.",
      ctaPrimary: "ابدأ على",
      ctaSecondary: "خدماتنا",
      stats: {
        downloads: { value: "500K+", label: "تنزيلات التطبيقات" },
        experience: { value: "6+", label: "سنوات خبرة" },
        projects: { value: "50+", label: "مشاريع منجزة" },
        rating: { value: "5★", label: "تقييم العملاء" },
      },
      scrollDownAriaLabel: "انتقل للأسفل",
    },
    services: {
      sectionLabel: "ما نقوم ببنائه",
      title: "حلول مخصصة لـ",
      titleAccent: "شركات دبي",
      subtitle: "ست خدمات عالية التأثير - تُسلّم بسرعة باستخدام أدوات الذكاء الاصطناعي والخبرة العالية. أخبرنا بهدفك وسنصمم الحل المناسب لك.",
      cards: {
        chatbot: {
          tag: "الأكثر شعبية",
          title: "إعداد روبوت المحادثة",
          description: "لن تخسر أي عملية بيع بعد ساعات العمل مرة أخرى. نبني روبوتات مدعومة بالذكاء الاصطناعي تتعامل مع الأسعار، الأسئلة الشائعة، التقاط الطلبات والتكامل - بينما أنت نائم.",
          features: [
            "ردود تلقائية بالذكاء الاصطناعي",
            "كتالوج المنتجات والطلبات",
            "دعم لمدة 30 يومًا مضمّن",
            "تسليم خلال 5-7 أيام"
          ],
          ctaLabel: "اطلب عرض سعر",
        },
        website: {
          tag: "أفضل قيمة",
          title: "موقع إلكتروني للأعمال",
          description: "موقع Next.js احترافي، متوافق مع الجوال باللغتين الإنجليزية والعربية أو الفارسية - مبني للظهور على جوجل وتحويل الزوار إلى عملاء يدفعون.",
          features: [
            "موقع 5 صفحات ثنائي اللغة (EN/AR/FA)",
            "دعوة للتواصل عبر وسائل التواصل في كل صفحة",
            "جاهز لتحسين محركات البحث ومتجاوب",
            "دعم لمدة 60 يومًا مضمّن",
            "تسليم خلال 7-14 يومًا"
          ],
          ctaLabel: "احصل على عرض مجاني",
        },
        aiContent: {
          tag: "عائد استثمار مرتفع",
          title: "إنشاء محتوى بالذكاء الاصطناعي وتحسين محركات البحث",
          description: "عزز ترتيبك على جوجل من خلال مقالات مدونة محسّنة لمحركات البحث، أوصاف المنتجات، ومحتوى وسائل التواصل الاجتماعي بالإنجليزية أو العربية أو الفارسية. مدعوم بالذكاء الاصطناعي، مراجع بشريًا، ومصمم لجذب العملاء.",
          features: [
            "4-8 مقالات مدونة شهريًا محسّنة لمحركات البحث",
            "أوصاف المنتجات ونصوص المواقع",
            "محتوى وسائل التواصل الاجتماعي (لينكد إن، إنستغرام)",
            "متعدد اللغات (EN/AR/FA)",
            "بحث الكلمات المفتاحية مضمّن"
          ],
          ctaLabel: "ابدأ الترتيب على جوجل",
        },
        mobile: {
          tag: "بجودة المطورين المحترفين",
          title: "تطوير تطبيقات أندرويد و iOS",
          description: "تطوير جوال متقدم للشركات الناشئة في الإمارات - أندرويد و iOS الأصلي أو متعدد المنصات (Flutter و React Native). ميزات جديدة، إصلاح الأخطاء، أو إعادة بناء كاملة - يُسلّم بسرعة، مبني ليدوم.",
          features: [
            "Kotlin · Swift · KMM · Flutter · React Native",
            "تكامل Firebase و REST",
            "سجل حافل بأكثر من 500 ألف تنزيل",
            "فواتير تعاقدية B2B"
          ],
          ctaLabel: "ناقش مشروعك",
        },
        aiAgent: {
          tag: "مستوى المؤسسات",
          title: "تطوير وكيل ذكاء اصطناعي مخصص",
          description: "أبعد من روبوتات المحادثة البسيطة. نبني وكلاء ذكاء اصطناعي يؤتمتون سير العمل المعقد - من دعم العملاء وتأهيل المبيعات إلى معالجة البيانات والعمليات الداخلية.",
          features: [
            "تكامل LLM مخصص (GPT-4، Claude، Gemini)",
            "أتمتة سير عمل متعدد الخطوات",
            "تكامل API وقاعدة البيانات",
            "منصة ويب أو منصة مراسلة",
            "دعم لمدة 90 يومًا مضمّن"
          ],
          ctaLabel: "ابنِ وكيل الذكاء الاصطناعي الخاص بك",
        },
        growth: {
          tag: "باقة النمو",
          title: "نمو رقمي كامل",
          description: "موقع إلكتروني + روبوت محادثة + إنتاج محتوى متخصص + SEO متقدم + إعداد Google Search Console.",
          features: [
            "كل ما في الموقع + الروبوت",
            "إنتاج محتوى متخصص",
            "SEO متقدم (بما في ذلك Google Search Console)",
            "دعم لمدة 60 يومًا مضمّن",
            "فواتير تعاقدية B2B"
          ],
          ctaLabel: "ابدأ النمو اليوم",
        },
      },
      messageCta: "راسلنا للمناقشة",
      stripText: "غير متأكد من الباقة المناسبة لك؟",
      stripCta: "تحدث معنا - مجانًا",
    },
    about: {
      sectionLabel: "عن لوماتك",
      title: "استوديو حيث المؤسس",
      titleAccent: "لا يزال يكتب الكود",
      body1: "مجموعة لوماتك للبرمجيات هي استوديو رقمي مقره دبي، أسسه Mahdi Hossein Abbasian - مطور جوال رئيسي أطلق تطبيقات بأكثر من 500,000 تنزيل. نطبق أدوات الذكاء الاصطناعي لتقديم منتجات رقمية بجودة المؤسسات بأسعار مناسبة للشركات الناشئة.",
      body2: "نخدم أصحاب الأعمال الإيرانيين والعرب والدوليين في جميع أنحاء الإمارات الذين يحتاجون إلى حضور رقمي موثوق - بسرعة. سواء كان روبوت محادثة لعملك الغذائي، أو ميزة تطبيق جوال لشركتك الناشئة، أو موقع ثنائي اللغة لشركتك التجارية، نبنيه في أيام وليس شهور.",
      floatingBadge: {
        title: "مسجلة في دبي",
        description: "شركة إماراتية · فواتير B2B قانونية",
      },
      pillars: {
        developerLed: {
          title: "يقوده مطور",
          description: "يتم الإشراف على كل مشروع من قبل Mahdi Hossein Abbasian - مطور جوال رئيسي بخبرة أكثر من 6 سنوات وأكثر من 500 ألف تنزيل تطبيق.",
        },
        aiAccelerated: {
          title: "مُسرّع بالذكاء الاصطناعي",
          description: "نستخدم أدوات الذكاء الاصطناعي المتطورة للتسليم في أيام وليس شهور - دون التنازل عن الجودة أو معايير الكود.",
        },
        bilingual: {
          title: "ثنائي اللغة افتراضيًا",
          description: "كل منتج نطلقه يعمل بالإنجليزية والعربية والفارسية - مصمم لمشهد الأعمال متعدد الثقافات في دبي.",
        },
        builtToConvert: {
          title: "مبني للتحويل",
          description: "نحن لا نبني مواقع جميلة فقط. كل عنصر مهندس لتحويل الزوار إلى محادثات وعملاء يدفعون.",
        },
      },
      ctaPrimary: "تحدث مع المؤسس على",
      ctaSecondary: "عرض محفظة المطور → abbasian.dev",
    },
    portfolio: {
      statsBand: {
        downloads: { icon: "📲", value: "500K+", label: "تنزيلات التطبيقات" },
        experience: { icon: "🏆", value: "6+", label: "سنوات خبرة" },
        delivery: { icon: "⚡", value: "5–7", label: "أيام للتسليم" },
        languages: { icon: "🌐", value: "3", label: "لغات مدعومة" },
      },
      sectionLabel: "أعمالنا",
      title: "مشاريع أتت",
      titleAccent: "بنتائج لشركات دبي",
      subtitle: "نتائج حقيقية لعملاء حقيقيين. كل مشروع يتم مراجعته من قبل مطور، مُسرّع بالذكاء الاصطناعي، ويُسلّم بنتائج قابلة للقياس.",
      projects: {
        chatbot: {
          category: "أتمتة روبوت المحادثة",
          title: "روبوت لأعمال الطعام - دبي",
          description: "روبوت محادثة مدعوم بالذكاء الاصطناعي لأعمال طعام إيرانية في دبي. يتعامل مع التقاط الطلبات، استفسارات القائمة، والأسعار 24/7. وفر العميل أكثر من 3 ساعات يوميًا في الردود اليدوية.",
          tags: ["Chatbot API", "ردود الذكاء الاصطناعي", "التقاط الطلبات"],
          metric: "توفير 3 ساعات/يوم",
        },
        website: {
          category: "موقع أعمال",
          title: "موقع شركة تجارية ثنائي اللغة",
          description: "موقع Next.js من 5 صفحات بالإنجليزية والفارسية لشركة تجارية في دبي. محسّن لمحركات البحث، متوافق مع الجوال، مع دعوة واتساب في كل صفحة. أُطلق في 10 أيام.",
          tags: ["Next.js", "ثنائي اللغة EN/FA", "جاهز لـ SEO"],
          metric: "تسليم في 10 أيام",
        },
        mobile: {
          category: "تطوير أندرويد",
          title: "تطبيق توصيل - وحدة ميزة",
          description: "وحدة تتبع سائق في الوقت الفعلي جديدة مبنية بـ Kotlin و Firebase لشركة توصيل ناشئة في الإمارات. معمارية نظيفة، أُطلقت في 12 يومًا كعقد B2B.",
          tags: ["Kotlin", "Firebase", "MVVM"],
          metric: "معالجة في 12 يوم",
        },
        growth: {
          category: "نمو رقمي كامل",
          title: "خدمات منزلية - إطلاق كامل",
          description: "موقع إلكتروني + روبوت واتساب + 8 مقالات SEO بالفارسية والإنجليزية لشركة خدمات منزلية في دبي. وصل أول عميل من جوجل خلال 45 يومًا من الإطلاق.",
          tags: ["موقع", "روبوت", "محتوى SEO"],
          metric: "45 يومًا لأول عميل",
        },
      },
      process: {
        sectionLabel: "كيف يعمل",
        title: "من الرسالة الأولى إلى المنتج المباشر\nفي 5 أيام فقط",
        ctaText: "ابدأ استشارتك المجانية على",
        steps: {
          step1: {
            number: "01",
            title: "استشارة واتساب أو تيليجرام",
            description: "مكالمة مجانية لمدة 20 دقيقة لفهم عملك والتوصية بالباقة المناسبة.",
          },
          step2: {
            number: "02",
            title: "عرض وسعر",
            description: "نطاق واضح، سعر ثابت، جدول زمني للتسليم. لا رسوم مخفية. توافق قبل أن نبدأ.",
          },
          step3: {
            number: "03",
            title: "بناء وتسليم",
            description: "نبني بسرعة باستخدام أدوات الذكاء الاصطناعي. تراجع في كل مرحلة. يُسلّم في أيام وليس شهور.",
          },
          step4: {
            number: "04",
            title: "إطلاق ودعم",
            description: "نطلق معًا ونقدم الدعم للتأكد من أن كل شيء يعمل بشكل صحيح.",
          },
        },
      },
    },
    contact: {
      sectionLabel: "تواصل معنا",
      title: "لنبني شيئًا",
      titleAccent: "يحقق النجاح",
      subtitle: "أخبرنا بما يحتاجه عملك. نرد خلال بضع ساعات - تواصل معنا على واتساب أو تيليجرام، أيهما تفضل.",
      channels: {
        whatsapp: { label: "واتساب", value: "+971 50 265 9885" },
        telegram: { label: "تيليجرام", value: "@lumaticgroup" },
        email: { label: "البريد الإلكتروني", value: "contact@lumaticgroup.info" },
        location: { label: "الموقع", value: "دبي، الإمارات العربية المتحدة" },
      },
      messagingHint: "تحدث معنا فورًا عبر:",
      messagingCta: {
        whatsapp: "تحدث على واتساب - أسرع استجابة",
        telegram: "راسلنا على تيليجرام - سريع أيضًا",
      },
      form: {
        title: "أرسل لنا رسالة",
        fields: {
          name: { label: "اسمك *", placeholder: "محمد الرشيد" },
          business: { label: "اسم النشاط التجاري", placeholder: "شركتك" },
          service: {
            label: "الخدمة المهتم بها",
            placeholder: "اختر خدمة…",
            options: {
              chatbot: "روبوت محادثة",
              website: "موقع أعمال",
              aiContent: "إنشاء محتوى بالذكاء الاصطناعي وتحسين محركات البحث",
              mobile: "تطوير جوال",
              aiAgent: "تطوير وكيل ذكاء اصطناعي مخصص",
              growth: "باقة نمو رقمي كامل",
              other: "أخرى / غير متأكد بعد",
            },
          },
          message: {
            label: "الرسالة *",
            placeholder: "أخبرنا قليلاً عن عملك وما تحتاجه…",
          },
        },
        submitButton: "إرسال الرسالة",
        submitSuccess: "✓ تم إرسال الرسالة!",
        note: "نرد عادة خلال ساعتين خلال ساعات عمل دبي (9 صباحًا – 9 مساءً بتوقيت GST).",
      },
    },
    navbar: {
      links: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "من نحن",
        work: "الأعمال",
        contact: "اتصل بنا",
      },
      cta: "احصل على عرض سعر ·",
      ctaDropdownHint: "اختر التطبيق المفضل لديك:",
      mobileMessagingLabel: "تحدث معنا عبر:",
      toggleMenuAriaLabel: "تبديل القائمة",
    },
    footer: {
      tagline: "استوديو رقمي مدعوم بالذكاء الاصطناعي لشركات دبي. نبني ما يحتاجه عملاؤك للعثور عليك، والثقة بك، والشراء منك.",
      contact: {
        phone: "+971 50 265 9885",
        email: "contact@lumaticgroup.info",
      },
      sections: {
        services: {
          title: "الخدمات",
          links: {
            chatbot: "روبوت محادثة",
            website: "موقع أعمال",
            aiContent: "محتوى AI وتحسين محركات البحث",
            mobile: "تطوير جوال",
            aiAgent: "تطوير وكيل AI",
            growth: "نمو رقمي كامل",
          },
        },
        company: {
          title: "الشركة",
          links: {
            about: "من نحن",
            work: "أعمالنا",
            contact: "اتصل بنا",
            portfolio: "abbasian.dev",
          },
        },
        startToday: {
          title: "ابدأ اليوم",
          text: "مستعد لتنمية أعمالك في دبي رقميًا؟ راسلنا الآن - استشارة مجانية.",
          cta: "راسلنا على",
        },
      },
      bottom: {
        copyright: "© 2026 مجموعة لوماتك للبرمجيات · دبي، الإمارات",
        developer: "بقيادة",
      },
      socialAriaLabels: {
        linkedin: "لينكد إن",
        whatsapp: "واتساب",
        telegram: "تيليجرام",
      },
    },
    messaging: {
      whatsapp: "واتساب",
      telegram: "تيليجرام",
    },
  },
};

/**
 * Helper function to get translation by language
 * @param lang Language code ('en' or 'ar')
 * @returns Translation object for the specified language
 */
export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en;
}

/**
 * Helper function to validate if a language is supported
 * @param lang Language code to validate
 * @returns True if language is supported
 */
export function isSupportedLanguage(lang: string): lang is Language {
  return lang === 'en' || lang === 'ar';
}
