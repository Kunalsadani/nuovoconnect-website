import type { Metadata } from "next";
import { HomeClient } from "./home-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "NuovoConnect — Global Digital Value Services Platform",
  description:
    "NuovoConnect is a worldwide B2B platform for mobile top-ups, data bundles, gaming pins, gift cards, crypto vouchers, and digital micropayments across 170+ countries. Activate. Grow. Engage. Reward.",
  keywords: [
    "digital value services platform",
    "B2B mobile top-ups",
    "global airtime recharge",
    "wholesale gift cards",
    "gaming pins B2B",
    "eSIM wholesale API",
    "digital micropayments",
    "prepaid services platform",
    "fintech B2B Dubai",
    "NuovoConnect",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "NuovoConnect — Global Digital Value Services Platform",
    description:
      "Worldwide B2B platform for mobile top-ups, data bundles, gaming pins, gift cards, and digital micropayments across 170+ countries.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "NuovoConnect Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NuovoConnect — Global Digital Value Services Platform",
    description: "Worldwide B2B platform for mobile top-ups, gift cards, eSIMs, and digital micropayments across 170+ countries.",
    images: [OG_IMAGE],
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "NuovoConnect — Global Digital Value Services Platform",
  description:
    "Worldwide B2B platform for mobile top-ups, data bundles, gaming pins, gift cards, and digital micropayments across 170+ countries.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  name: "Digital Value Services",
  provider: { "@id": `${SITE_URL}/#organization` },
  description:
    "B2B digital value services including mobile top-ups, eSIMs, gift cards, gaming pins, crypto vouchers, and micropayments for businesses across 170+ countries.",
  areaServed: { "@type": "Place", name: "Worldwide" },
  serviceType: "Digital Micropayments Platform",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Value Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Top-Ups & Data Bundles" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "eSIM Bundles" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gift Cards & Branded Vouchers" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gaming Pins" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crypto Vouchers" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Banking as a Service" } },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <JsonLd data={serviceSchema} />
      <HomeClient />
    </>
  );
}
