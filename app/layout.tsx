import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7C3AED",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NuovoConnect — Global Digital Value Services Platform",
    template: "%s | NuovoConnect",
  },
  description:
    "NuovoConnect is a worldwide B2B platform for mobile top-ups, data bundles, gaming pins, gift cards, crypto vouchers, and digital micropayments across 170+ countries. Activate. Grow. Engage. Reward.",
  keywords: [
    "digital value services",
    "mobile top-ups",
    "airtime recharge",
    "data bundles",
    "gift cards B2B",
    "gaming pins",
    "eSIM wholesale",
    "crypto vouchers",
    "micropayments platform",
    "digital payments API",
    "prepaid services",
    "NuovoConnect",
    "fintech B2B",
    "global payments",
    "emerging markets fintech",
  ],
  authors: [{ name: "NuovoConnect", url: SITE_URL }],
  creator: "NuovoConnect",
  publisher: "NuovoConnect",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NuovoConnect",
    title: "NuovoConnect — Global Digital Value Services Platform",
    description:
      "Worldwide B2B platform for mobile top-ups, data bundles, gaming pins, gift cards, crypto vouchers, and digital micropayments across 170+ countries.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NuovoConnect — Global Digital Value Services Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nuovoconnect",
    creator: "@nuovoconnect",
    title: "NuovoConnect — Global Digital Value Services Platform",
    description:
      "Worldwide B2B platform for mobile top-ups, data bundles, gaming pins, gift cards, and digital micropayments across 170+ countries.",
    images: [{ url: OG_IMAGE, alt: "NuovoConnect Platform" }],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png" }],
  },
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "NuovoConnect",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/nuovoconnect-logo.png`,
    width: 200,
    height: 200,
  },
  image: OG_IMAGE,
  description:
    "NuovoConnect is a global B2B platform delivering digital value services — mobile top-ups, eSIMs, gift cards, gaming pins, crypto vouchers, and micropayments across 170+ countries.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "kunal@nuovoconnect.com",
    areaServed: "Worldwide",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/nuovoconnect",
  ],
  foundingLocation: "Dubai, UAE",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
  knowsAbout: [
    "Mobile Top-ups",
    "eSIM Services",
    "Gift Cards",
    "Gaming Pins",
    "Digital Micropayments",
    "Banking as a Service",
    "Crypto Vouchers",
    "Prepaid Services",
    "Fintech B2B",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "NuovoConnect",
  description: "Global Digital Value Services Platform",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
