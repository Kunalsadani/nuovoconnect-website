import type { Metadata } from "next";
import { RetailMerchantsClient } from "./retail-merchants-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/who-we-serve/retail-merchants`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "Retail Merchants — Add Digital Products & Grow Revenue",
  description:
    "Help retail merchants unlock new revenue streams with mobile top-ups, gift cards, eSIMs, and gaming pins. Serve diaspora and migrant communities. Launch in days via a single API.",
  keywords: [
    "retail digital products",
    "retail mobile top-ups",
    "retail gift cards",
    "retail eSIM sales",
    "retail prepaid services",
    "airtime retail partner",
    "digital vouchers retail",
    "diaspora remittance retail",
    "new revenue retail merchants",
    "digital product portfolio retail",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Retail Merchants — Add Digital Products & Grow Revenue | NuovoConnect",
    description:
      "Unlock new revenue with mobile top-ups, gift cards, eSIMs, and gaming pins for your retail store. Launch in days via a single API.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "NuovoConnect for Retail Merchants" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Merchants — Add Digital Products & Grow Revenue | NuovoConnect",
    description: "Unlock new revenue streams with mobile top-ups, gift cards, and eSIMs for your retail business.",
    images: [OG_IMAGE],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  name: "Digital Value Services for Retail Merchants",
  description: "Helping retail merchants diversify revenue with mobile top-ups, gift cards, eSIMs, gaming pins, and prepaid utility vouchers.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Who We Serve", item: `${SITE_URL}/who-we-serve` },
      { "@type": "ListItem", position: 3, name: "Retail Merchants", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "Service",
    name: "Digital Value Services for Retail Merchants",
    provider: { "@id": `${SITE_URL}/#organization` },
    description: "Mobile top-ups, gift cards, eSIMs, gaming pins, and utility vouchers for retail store distribution.",
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "Audience", name: "Retail Merchants" },
  },
};

export default function RetailMerchantsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <RetailMerchantsClient />
    </>
  );
}
