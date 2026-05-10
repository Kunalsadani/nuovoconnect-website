import type { Metadata } from "next";
import { NetworkClient } from "./network-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/network`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "Global Network — 650+ Operators, 170+ Countries",
  description:
    "NuovoConnect's wholesale digital marketplace spans 650+ mobile operators and 2,100+ partners across 170+ countries. One API connection unlocks mobile top-ups, eSIMs, gift cards, and prepaid utility products worldwide.",
  keywords: [
    "global mobile network",
    "650 mobile operators",
    "wholesale airtime",
    "digital value marketplace",
    "B2B digital products network",
    "prepaid services network",
    "mobile top-up network",
    "eSIM network wholesale",
    "170 countries coverage",
    "digital partner network",
    "telco API wholesale",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Global Network — 650+ Operators in 170+ Countries | NuovoConnect",
    description:
      "One API connection to 650+ mobile operators and 2,100+ partners across 170+ countries. Wholesale top-ups, eSIMs, gift cards, and prepaid products.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "NuovoConnect Global Network" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Network — 650+ Operators, 170+ Countries | NuovoConnect",
    description: "One API to 650+ mobile operators and 2,100+ partners worldwide. Wholesale digital value products.",
    images: [OG_IMAGE],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  name: "NuovoConnect Global Network",
  description:
    "Wholesale digital marketplace with 650+ mobile operators and 2,100+ partners across 170+ countries.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Network", item: PAGE_URL },
    ],
  },
  about: {
    "@type": "Service",
    name: "Global Digital Value Network",
    description: "Wholesale marketplace providing access to 650+ mobile operators and 15,000+ digital products across 170+ countries through a single API.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Place", name: "Worldwide" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "200",
      bestRating: "5",
    },
  },
};

export default function NetworkPage() {
  return (
    <>
      <JsonLd data={schema} />
      <NetworkClient />
    </>
  );
}
