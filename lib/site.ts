// ============================================================
// SITE CONTENT
// Edit copy, links, and data here — components read from this
// file, so you rarely need to touch the JSX to change wording.
// ============================================================

// ⚠️ Set this to your real production domain (used for SEO, sitemap,
// canonical URLs, and social-share image resolution).
export const siteUrl = "https://apextechnologies.com.au";

export const nav = {
  brandTop: "Apex",
  brandBottom: "Technologies",
  // One-pager nav: every link points to a real on-page section.
  // Re-add Work / About / Pricing here when those pages exist.
  links: [
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Book a call", href: "#contact" },
};

export const hero = {
  eyebrow: "Managed IT · Data · Software",
  titleLine1: "We run your IT.",
  titleLine2: "And build what's missing.",
  sub: "Managed support, secure Microsoft 365, data migration, and custom software for businesses that can't afford downtime. One Sydney team — from the strategy call to the 2am fix.",
  primary: { label: "Book a call", href: "#contact" },
  secondary: { label: "What we do →", href: "#services" },
  trust:
    "Trusted by security, logistics & professional-services teams across Australia.",
};

export const techStrip = [
  "Microsoft 365",
  "Intune",
  "Entra ID",
  "Cloudflare",
  "Azure",
  "Defender",
];

export type IconName =
  | "dashboard"
  | "assets"
  | "tickets"
  | "clients"
  | "billing"
  | "shield"
  | "wrench";

export type StatusKey = "ok" | "go" | "wa";

export const consoleData = {
  brand: "Apex Console",
  tag: "Operations",
  nav: [
    { icon: "dashboard" as IconName, label: "Dashboard", active: true },
    { icon: "assets" as IconName, label: "Assets", count: "248" },
    { icon: "tickets" as IconName, label: "Tickets", count: "12" },
    { icon: "clients" as IconName, label: "Clients", count: "26" },
  ],
  navFinance: [{ icon: "billing" as IconName, label: "Billing" }],
  stats: [
    { k: "Open tickets", v: "12" },
    { k: "Assets", v: "248" },
    { k: "Uptime 30d", v: "99.98", unit: "%" },
  ],
  rows: [
    { client: "Westfield", service: "Network monitoring", status: "ok" as StatusKey, label: "On track" },
    { client: "CBD Tower", service: "M365 migration", status: "go" as StatusKey, label: "In progress" },
    { client: "Royal North", service: "Backup audit", status: "wa" as StatusKey, label: "Needs review" },
    { client: "Pioneer Logistics", service: "Helpdesk", status: "ok" as StatusKey, label: "On track" },
  ],
  footer: "4 of 26 active engagements",
};

export const services = {
  tag: "What we do",
  title: "Two ways we work.",
  intro:
    "Keep the lights on, or build something new. Most clients do both — one team that already knows your environment, whichever side you need.",
  chips: [
    "Managed IT",
    "Helpdesk",
    "Microsoft 365",
    "Security",
    "Backup",
    "Data migration",
    "Web",
    "Software",
    "Cloud",
    "Staffing",
  ],
  cards: [
    {
      icon: "shield" as IconName,
      kicker: "Ongoing",
      title: "Managed Services",
      desc: "We become your IT department — monitoring, support and security, on a predictable monthly plan.",
      features: [
        "24/7 monitoring & helpdesk",
        "Microsoft 365 & Intune management",
        "Security hardening & compliance",
        "Backup, recovery & patching",
        "Asset tracking & reporting",
      ],
      more: { label: "Explore managed support →", href: "#contact" },
    },
    {
      icon: "wrench" as IconName,
      kicker: "Fixed scope",
      title: "Projects & Builds",
      desc: "A defined outcome with a clear price and timeline — websites, software, migrations and cloud setups.",
      features: [
        "Data & mailbox migration",
        "Website design & development",
        "Custom software & internal tools",
        "Cloud & tenant setup",
        "IT staffing & resourcing",
      ],
      more: { label: "Start a project →", href: "#contact" },
    },
  ],
};

export const closing = {
  titleLine1: "Let's talk.",
  titleLine2: "No commitment, no jargon.",
  sub: "Tell us what's slowing you down. We'll come back with a plan — managed, project, or both.",
  note: "We reply within one business day.",
};

// ⚠️ REPLACE THESE PLACEHOLDERS with your real details.
// `email` receives form enquiries and is shown as the "Email us" link.
// `phone` is the tel: target (E.164, no spaces); `phoneDisplay` is what's shown.
export const contact = {
  email: "hello@apextechnologies.com.au",
  phone: "+61200000000",
  phoneDisplay: "(02) 0000 0000",
  abn: "00 000 000 000",
};

export const footer = {
  blurb:
    "Managed IT, cloud and custom software for businesses that can't afford downtime.",
  // Each link has a real href. Items that point to "#contact" are placeholders
  // for pages that don't exist yet (About, Work, Careers, Privacy, Terms, …) —
  // give them real targets when those pages are built.
  cols: [
    {
      title: "Services",
      links: [
        { label: "Managed IT", href: "#services" },
        { label: "Microsoft 365", href: "#services" },
        { label: "Data migration", href: "#services" },
        { label: "Web development", href: "#services" },
        { label: "Software", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#contact" },
        { label: "Work", href: "#contact" },
        { label: "Careers", href: "#contact" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Support", href: "#contact" },
        { label: "Status", href: "#contact" },
        { label: "Privacy", href: "#contact" },
        { label: "Terms", href: "#contact" },
      ],
    },
  ],
  copyright: "© 2026 Apex Technologies. All rights reserved.",
  made: "Built in Sydney, Australia",
};
