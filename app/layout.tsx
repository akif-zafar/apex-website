import type { Metadata, Viewport } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientFx from "@/components/ClientFx";
import { siteUrl, contact } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Managed IT, secure Microsoft 365, data migration and custom software for businesses that can't afford downtime. A Sydney team.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Apex Technologies — Managed IT, Cloud & Software",
    template: "%s · Apex Technologies",
  },
  description,
  applicationName: "Apex Technologies",
  keywords: [
    "Managed IT Sydney",
    "Microsoft 365",
    "IT support",
    "data migration",
    "custom software",
    "cloud",
    "cybersecurity",
    "Intune",
    "Entra ID",
  ],
  authors: [{ name: "Apex Technologies" }],
  creator: "Apex Technologies",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Apex Technologies",
    title: "Apex Technologies — Managed IT, Cloud & Software",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Technologies — Managed IT, Cloud & Software",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFB" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
  ],
};

// Structured data — helps search engines understand the business (local SEO).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Apex Technologies",
  url: siteUrl,
  description,
  email: contact.email,
  telephone: contact.phone,
  areaServed: "Australia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  knowsAbout: [
    "Managed IT",
    "Microsoft 365",
    "Intune",
    "Entra ID",
    "Cloud",
    "Azure",
    "Data migration",
    "Custom software",
    "Cybersecurity",
  ],
};

// Sets the theme before paint so there is no flash. Defaults to dark
// unless the visitor previously chose light. Swap the logic here if you
// prefer to default to the visitor's system preference.
const themeScript = `(function(){try{var t=localStorage.getItem('apex-theme');var d=document.documentElement;if(t==='light'){d.classList.remove('dark')}else{d.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${poppins.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <Background />
        <Nav />
        {children}
        <Footer />
        <ClientFx />
      </body>
    </html>
  );
}
