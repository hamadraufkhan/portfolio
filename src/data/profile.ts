/**
 * Portfolio content (CV-driven). Edit values here to update the entire site.
 */

import { asset } from "../lib/asset";

export const profile = {
  name: "Hamad Rauf Khan",
  role: "Senior Software Architect",
  location: "Islamabad, Pakistan",
  avatar: asset("/avatars/hamad.png"),
  email: "hamadraufkhan@gmail.com",
  phone: "+92-332-8876607",
  address: "Islamabad, Pakistan",
  cvUrl: "#",
  copyright: "(C) 2026 Hamad Rauf Khan. All rights reserved.",
  imageCredit: "Photo provided by Hamad Rauf Khan",
  social: [
    {
      id: "email",
      label: "Email",
      href: "mailto:hamadraufkhan@gmail.com",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/923328876607",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hamad-rauf-khan/",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/hamadraufkhan",
    },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroSlides = [
  {
    id: 1,
    title: "Hi! I'm Hamad",
    subtitle:
      "Senior Software Architect building robust, scalable, and secure enterprise systems",
    cta: { label: "Download CV", href: "#contact" },
    image: asset("/backgrounds/hero-architecture.png"),
  },
  {
    id: 2,
    title: "I design platforms",
    subtitle:
      "Windows & web apps, edge/cloud delivery, Fast Channel platforms, and microservices",
    cta: { label: "View Work", href: "#work" },
    image: asset("/backgrounds/hero-cloud.png"),
  },
] as const;

export const about = {
  eyebrow: "About Me",
  heading: "Who Am I?",
  paragraphs: [
    "Senior Software Architect with 10+ years of professional engineering experience and 5+ years in senior leadership roles (Tech Lead). Expert in designing robust, scalable, and secure enterprise software solutions.",
    "I build Windows desktop applications, web platforms, cloud-native and edge systems, and Fast Channel delivery for telecom/OTT products — translating technical strategy into reliable delivery with cross-functional teams.",
  ],
  highlights: [
    { icon: "server", label: "Backend & APIs" },
    { icon: "layers", label: "System Design" },
    { icon: "cloud", label: "Cloud & Edge" },
    { icon: "database", label: "Platforms" },
  ],
  ctaHeading:
    "I help teams turn complex requirements into high-performance Windows, web, and cloud platforms.",
};

export const services = {
  eyebrow: "What I do?",
  heading: "Here are some of my expertise",
  items: [
    {
      icon: "architecture",
      title: "System Architecture",
      description:
        "Microservices, SOA, event-driven architecture, and distributed systems designed for scale, reliability, and maintainability.",
    },
    {
      icon: "api",
      title: "Windows & Web Applications",
      description:
        "Windows desktop apps, Windows Services, and web platforms — .NET, Node.js, Python, PHP, React, and production-grade APIs.",
    },
    {
      icon: "cloud",
      title: "Cloud & Edge Computing",
      description:
        "Azure, AWS, Huawei Cloud, and edge-ready delivery patterns — modernizing legacy systems into cloud-native platforms.",
    },
    {
      icon: "events",
      title: "Fast Channel Platforms",
      description:
        "Built Fast Channel and content/platform delivery for OTT, live TV, and telecom VAS products at scale.",
    },
    {
      icon: "devops",
      title: "Performance & DevOps",
      description:
        "CI/CD pipelines, deployment reliability, and performance optimization for high-traffic environments.",
    },
    {
      icon: "consult",
      title: "Security Engineering",
      description:
        "Security-focused system design: hardening, reliability improvements, and secure integrations across enterprise applications.",
    },
  ],
};

export const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "+", label: "Leadership" },
  { value: 16, suffix: "+", label: "Key Projects" },
  { value: 3, suffix: "", label: "Cloud Platforms" },
];

export const skills = {
  eyebrow: "My Specialty",
  heading: "My Skills",
  intro:
    "Windows apps and services, web stacks, Node.js / Python / PHP backends, edge/cloud platforms, and Fast Channel delivery.",
  categories: [
    {
      title: "Application Development",
      items: [
        { name: "Windows Desktop Applications", level: 93 },
        { name: "Windows Services", level: 91 },
        { name: "Web-Based Applications", level: 91 },
        { name: ".NET / C# / ASP.NET Core", level: 94 },
        { name: "React Frontend", level: 82 },
      ],
    },
    {
      title: "Languages & Runtimes",
      items: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 86 },
        { name: "PHP", level: 84 },
        { name: "REST / SOAP APIs", level: 93 },
      ],
    },
    {
      title: "Cloud, Edge & Platforms",
      items: [
        { name: "Cloud Computing (Azure / AWS / Huawei)", level: 90 },
        { name: "Edge Computing", level: 84 },
        { name: "Fast Channel for Platforms", level: 92 },
        { name: "Telecom VAS & OTT Platforms", level: 90 },
      ],
    },
    {
      title: "Architecture, Data & Delivery",
      items: [
        { name: "Microservices & SOA", level: 95 },
        { name: "Event-Driven Architecture", level: 90 },
        { name: "SQL / NoSQL Databases", level: 88 },
        { name: "Security Engineering & CI/CD", level: 88 },
      ],
    },
  ],
};

export const education = {
  eyebrow: "Education",
  heading: "Education",
  items: [
    {
      title: "BS Electronics Engineering",
      content: "COMSATS University",
      bullets: [],
    },
  ],
};

export const experience = {
  eyebrow: "Experience",
  heading: "Work Experience",
  items: [
    {
      title: "Senior Software Engineer / Solution Architect",
      company: "Ideation Pvt. Ltd",
      period: "Sep 2023 - Present",
      description:
        "Represent technical capabilities during client consultations and manage project lifecycles. Architect and implement scalable .NET-based solutions using microservices and SOA patterns. Build Windows and web applications, Fast Channel platform delivery, and cloud/edge architectures across Azure/Huawei/AWS/Google Cloud. Optimize application performance, security, and reliability for high-traffic enterprise environments. Mentor engineering teams on CI/CD and architectural design while collaborating with US stakeholders for robust delivery.",
    },
    {
      title: "Team Lead - System Integration",
      company: "Frontier Works Organization (FWO)",
      period: "Jan 2015 - Sep 2023",
      description:
        "Led design and delivery of large-scale enterprise backend systems and Windows/web applications. Built high-throughput transactional systems using .NET and integrated service-oriented components. Engineered complex data processing pipelines and ensured system availability under heavy loads. Collaborated with clients and stakeholders to deliver against requirements, and spearheaded adoption of modern CI/CD pipelines to improve deployment frequency and reliability.",
    },
  ],
};

export type PortfolioCategory =
  | "all"
  | "platforms"
  | "desktop"
  | "web"
  | "cloud"
  | "ai"
  | "security";

export const portfolio = {
  eyebrow: "My Work",
  heading: "Recent Work",
  intro:
    "Selected platforms and systems — OTT/Fast Channel products with live previews, plus enterprise Windows, web, cloud, AI, and border security delivery.",
  categories: [
    { id: "all" as const, label: "All" },
    { id: "platforms" as const, label: "Platforms" },
    { id: "desktop" as const, label: "Desktop" },
    { id: "web" as const, label: "Web" },
    { id: "cloud" as const, label: "Cloud" },
    { id: "ai" as const, label: "AI" },
    { id: "security" as const, label: "Security" },
  ],
  items: [
    {
      id: 16,
      title: "Kartarpur Corridor Access Control",
      category: "security" as const,
      tag: "RFID · Biometric",
      description:
        "Built and installed an RFID + biometric access control system for 1-day visa visits across the Kartarpur Corridor border.",
      image: asset("/projects/project-kartarpur.png"),
    },
    {
      id: 1,
      title: "AssistMe AI",
      category: "ai" as const,
      tag: "AI · Multi-channel",
      description:
        "AI assistant across Web, App, SMS, USSD, and IVR — help without requiring always-on internet.",
      image: asset("/projects/assistme.webp"),
      video: asset("/projects/videos/assist-me.mp4"),
    },
    {
      id: 2,
      title: "PortAll",
      category: "cloud" as const,
      tag: "Cloud · Storage",
      description:
        "Secure cloud storage and sharing with role-based access and enterprise-grade integrity controls.",
      image: asset("/projects/portall.webp"),
      video: asset("/projects/videos/portall.mp4"),
    },
    {
      id: 3,
      title: "Deikho",
      category: "platforms" as const,
      tag: "OTT · Fast Channel",
      description:
        "Digital content platform for films, local shows, and originals — Fast Channel delivery at scale.",
      image: asset("/projects/deikho.webp"),
      video: asset("/projects/videos/deikho.mp4"),
    },
    {
      id: 4,
      title: "Zong TV",
      category: "platforms" as const,
      tag: "Live TV · Streaming",
      description:
        "Video streaming with 40+ live channels plus movies, series, and on-demand Fast Channel content.",
      image: asset("/projects/zongtv.webp"),
      video: asset("/projects/videos/zong-tv.mp4"),
    },
    {
      id: 5,
      title: "WhatsIn",
      category: "platforms" as const,
      tag: "Lifestyle · OTT",
      description:
        "Original lifestyle programming — fashion, travel, food, and fitness on a Fast Channel stack.",
      image: asset("/projects/whatsin.webp"),
      video: asset("/projects/videos/whatsin.mp4"),
    },
    {
      id: 6,
      title: "PlayLand",
      category: "web" as const,
      tag: "Web · Gaming",
      description:
        "Browser-based gaming platform — instant play, no downloads, subscription-ready delivery.",
      image: asset("/projects/playland.webp"),
      video: asset("/projects/videos/playland.mp4"),
    },
    {
      id: 7,
      title: "Fast Channel Platform",
      category: "platforms" as const,
      tag: "Platform · Delivery",
      description:
        "Fast Channel infrastructure built for Ideation platforms — low-latency content and channel delivery across OTT products.",
      image: asset("/projects/project-fast-channel.png"),
    },
    {
      id: 8,
      title: "E-Tag Management System",
      category: "desktop" as const,
      tag: "Desktop · Enterprise",
      description:
        "National ETTM platform for M-Tags — registration, tolls, reporting, and 99.9% uptime architecture.",
      image: asset("/projects/project-etag.png"),
    },
    {
      id: 9,
      title: "M-Tag Mobile Application",
      category: "web" as const,
      tag: "Mobile · Play Store",
      description:
        "Commuter app for balances, recharges, travel history, and secure top-ups — as published on Google Play.",
      image: asset("/projects/mtag-screen.jpg"),
      url: "https://play.google.com/store/apps/details?id=com.ls.onenetwork.mtag&hl=en",
    },
    {
      id: 10,
      title: "Corporate Fleet Management Portal",
      category: "web" as const,
      tag: "Web · Enterprise",
      description:
        "Web portal for fleet admin, bulk recharge, monitoring, reporting, and role-based account control.",
      image: asset("/projects/project-fleet.png"),
    },
    {
      id: 11,
      title: "Payment Gateway Integration",
      category: "web" as const,
      tag: "APIs · Fintech",
      description:
        "Secure integrations with 1LINK, Mastercard, banks, and wallets — reconciliation and real-time callbacks.",
      image: asset("/projects/project-payment.png"),
    },
    {
      id: 12,
      title: "Merit - AI Recruitment",
      category: "ai" as const,
      tag: "AI · HR Tech",
      description:
        "AI screening, resume analysis, matching, and interview workflows to speed hiring decisions.",
      image: asset("/projects/project-merit.png"),
    },
    {
      id: 13,
      title: "Call Bot - Complaint AI",
      category: "ai" as const,
      tag: "Voice AI · NLP",
      description:
        "Voice assistant for complaints — speech recognition, NLP, ticketing, and CRM integration.",
      image: asset("/projects/project-callbot.png"),
    },
    {
      id: 14,
      title: "Futura ATM & Kiosk Platform",
      category: "desktop" as const,
      tag: "ATM · Fintech",
      description:
        "Smart bank teller / ATM software bridging cash and regulated banking — hardware, APIs, and compliance-ready flows.",
      image: asset("/projects/futura-kiosk.png"),
      url: "https://futuraatm.com/",
    },
    {
      id: 15,
      title: "Mobile Akhbaar",
      category: "web" as const,
      tag: "News · Media",
      description:
        "Digital news aggregation platform consolidating publishers into a mobile-friendly reading experience.",
      image: asset("/projects/project-news.png"),
      url: "https://mobileakhbaar.com/",
    },
  ],
};

export const contact = {
  eyebrow: "Get in Touch",
  heading: "Contact",
  intro: "Reach out via email, WhatsApp, LinkedIn, or GitHub — happy to connect.",
};
