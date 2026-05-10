import type { Metadata } from "next";
import { EsimClient } from "./esim-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/who-we-serve/esim-services`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "eSIM Services — Global Connectivity in 170+ Countries",
  description:
    "Wholesale eSIM bundles and instant connectivity for travelers, remote workers, and digital nomads. No physical SIM — activate instantly in 170+ countries. B2B eSIM API for platforms and operators.",
  keywords: [
    "eSIM wholesale",
    "eSIM B2B API",
    "eSIM 170 countries",
    "travel eSIM wholesale",
    "digital SIM wholesale",
    "eSIM reseller",
    "global eSIM connectivity",
    "eSIM for platforms",
    "eSIM operator API",
    "data roaming eSIM wholesale",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "eSIM Services — Global Connectivity in 170+ Countries | NuovoConnect",
    description:
      "Wholesale eSIM bundles with instant activation in 170+ countries. B2B API for platforms, operators, and retailers.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "NuovoConnect eSIM Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "eSIM Services — Global Connectivity 170+ Countries | NuovoConnect",
    description: "Wholesale eSIM bundles. Instant activation. 170+ countries. B2B API for platforms and operators.",
    images: [OG_IMAGE],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  name: "Wholesale eSIM Services — Global Digital Connectivity",
  description: "B2B eSIM wholesale API providing instant activation in 170+ countries for platforms, operators, and retailers.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Who We Serve", item: `${SITE_URL}/who-we-serve` },
      { "@type": "ListItem", position: 3, name: "eSIM Services", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "Service",
    name: "Wholesale eSIM Services",
    provider: { "@id": `${SITE_URL}/#organization` },
    description: "B2B eSIM bundles with instant activation in 170+ countries via a single API integration.",
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "Audience", name: "Telecom Operators, eWallets, Super Apps, Retail Platforms" },
  },
};

export default function EsimServicesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <EsimClient />
    </>
  );
}
