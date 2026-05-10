import type { Metadata } from "next";
import { EwalletsClient } from "./ewallets-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/who-we-serve/ewallets`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "eWallet Providers — Grow Revenue with Prepaid Digital Services",
  description:
    "Supercharge your eWallet app with mobile top-ups, eSIMs, gift cards, gaming pins, and loyalty rewards. Grow user acquisition, increase retention, and diversify revenue via a single API.",
  keywords: [
    "eWallet digital products",
    "mobile wallet top-ups",
    "eWallet gift cards",
    "digital wallet loyalty rewards",
    "eWallet user acquisition",
    "prepaid services eWallet",
    "mobile wallet eSIM",
    "eWallet revenue diversification",
    "fintech wallet digital products",
    "eWallet engagement rewards",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "eWallet Providers — Grow Revenue with Digital Services | NuovoConnect",
    description:
      "Add mobile top-ups, gift cards, eSIMs, and loyalty rewards to your eWallet. Grow acquisition, retention, and revenue.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "NuovoConnect for eWallets" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "eWallet Providers — Grow Revenue with Digital Services | NuovoConnect",
    description: "Add top-ups, gift cards, eSIMs, and rewards to your eWallet app and grow user retention.",
    images: [OG_IMAGE],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  name: "Digital Value Services for eWallet Providers",
  description: "Helping eWallet platforms grow revenue and user retention with mobile top-ups, gift cards, eSIMs, and loyalty products.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Who We Serve", item: `${SITE_URL}/who-we-serve` },
      { "@type": "ListItem", position: 3, name: "eWallets", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "Service",
    name: "Digital Value Services for eWallet Providers",
    provider: { "@id": `${SITE_URL}/#organization` },
    description: "Mobile top-ups, gift cards, eSIMs, gaming pins, and loyalty rewards for eWallet applications.",
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "Audience", name: "eWallet & Mobile Wallet Providers" },
  },
};

export default function EwalletsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <EwalletsClient />
    </>
  );
}
