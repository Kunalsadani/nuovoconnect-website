import type { Metadata } from "next";
import { ForexClient } from "./forex-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/who-we-serve/forex`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "Forex & Money Transfer — Add Digital Value to FX Services",
  description:
    "Grow wallet share for your forex or money transfer platform with digital add-ons — mobile top-ups, gift cards, eSIMs, and bill payments alongside currency exchange. Single API, 170+ countries.",
  keywords: [
    "forex digital services",
    "money transfer digital products",
    "FX platform top-ups",
    "remittance gift cards",
    "currency exchange digital add-ons",
    "money transfer wallet share",
    "forex eSIM",
    "FX app engagement",
    "cross-border digital payments",
    "remittance platform loyalty",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Forex & Money Transfer — Add Digital Value to FX Services | NuovoConnect",
    description:
      "Grow wallet share with mobile top-ups, gift cards, and eSIMs alongside your FX transfers. Single API, 170+ countries.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "NuovoConnect for Forex" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forex & Money Transfer — Add Digital Value | NuovoConnect",
    description: "Add top-ups, gift cards, and eSIMs alongside your FX transfers and grow wallet share.",
    images: [OG_IMAGE],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  name: "Digital Value Services for Forex & Money Transfer Providers",
  description: "Helping forex and money transfer platforms grow wallet share with digital top-ups, gift cards, and eSIMs.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Who We Serve", item: `${SITE_URL}/who-we-serve` },
      { "@type": "ListItem", position: 3, name: "Forex & Money Transfer", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "Service",
    name: "Digital Value Services for Forex Providers",
    provider: { "@id": `${SITE_URL}/#organization` },
    description: "Mobile top-ups, gift cards, eSIMs, and digital add-ons for forex and money transfer platforms.",
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "Audience", name: "Forex & Money Transfer Operators" },
  },
};

export default function ForexPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ForexClient />
    </>
  );
}
