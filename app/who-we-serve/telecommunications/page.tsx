import type { Metadata } from "next";
import { TelecomClient } from "./telecom-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/who-we-serve/telecommunications`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "Telecommunications — Grow ARPU with Digital Value Services",
  description:
    "Grow ARPU and reduce churn for telecom operators with cross-border mobile top-ups, data bundles, eSIMs, white-label recharge platforms, and branded vouchers across 170+ countries.",
  keywords: [
    "telecom digital services",
    "mobile operator ARPU growth",
    "cross-border top-ups telecom",
    "white-label recharge platform",
    "telecom eSIM wholesale",
    "mobile data bundles API",
    "reduce churn telecom",
    "telecommunications digital products",
    "MVNO digital services",
    "airtime wholesale telecom",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Telecommunications — Grow ARPU with Digital Value Services | NuovoConnect",
    description:
      "Grow ARPU and reduce churn with cross-border top-ups, data bundles, eSIMs, and branded vouchers for telecom operators.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "NuovoConnect for Telecom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telecommunications — Grow ARPU with Digital Value | NuovoConnect",
    description: "Grow ARPU and reduce churn with cross-border top-ups, eSIMs, and digital products for telecom operators.",
    images: [OG_IMAGE],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  name: "Digital Value Services for Telecommunications Operators",
  description: "Helping telecom operators grow ARPU and reduce churn through cross-border top-ups, eSIMs, and digital value products.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Who We Serve", item: `${SITE_URL}/who-we-serve` },
      { "@type": "ListItem", position: 3, name: "Telecommunications", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "Service",
    name: "Digital Value Services for Telecom Operators",
    provider: { "@id": `${SITE_URL}/#organization` },
    description: "Mobile top-ups, eSIMs, data bundles, and white-label recharge platforms for telecom operators.",
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "Audience", name: "Telecommunications Operators & MVNOs" },
  },
};

export default function TelecomPage() {
  return (
    <>
      <JsonLd data={schema} />
      <TelecomClient />
    </>
  );
}
