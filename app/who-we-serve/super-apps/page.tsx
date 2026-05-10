import type { Metadata } from "next";
import { SuperAppsClient } from "./super-apps-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/who-we-serve/super-apps`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "Super Apps — Embedded Digital Value at Scale",
  description:
    "Grow your super app with embedded mobile top-ups, eSIMs, gift cards, gaming pins, and bill payments that keep users inside your ecosystem. Scale across 170+ countries from one integration.",
  keywords: [
    "super app digital services",
    "embedded digital payments",
    "super app monetisation",
    "mobile top-ups super app",
    "super app eSIM",
    "gift cards super app",
    "super app user retention",
    "digital value super platform",
    "super app revenue streams",
    "embedded finance super app",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Super Apps — Embedded Digital Value at Scale | NuovoConnect",
    description:
      "Embed mobile top-ups, eSIMs, gift cards, and bill payments in your super app. Scale to 170+ countries from one integration.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "NuovoConnect for Super Apps" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Apps — Embedded Digital Value at Scale | NuovoConnect",
    description: "Embed top-ups, eSIMs, gift cards, and bill payments in your super app to keep users engaged.",
    images: [OG_IMAGE],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  name: "Digital Value Services for Super Apps",
  description: "Embedded digital value services for super app platforms — mobile top-ups, eSIMs, gift cards, and loyalty rewards.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Who We Serve", item: `${SITE_URL}/who-we-serve` },
      { "@type": "ListItem", position: 3, name: "Super Apps", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "Service",
    name: "Embedded Digital Value for Super Apps",
    provider: { "@id": `${SITE_URL}/#organization` },
    description: "Mobile top-ups, eSIMs, gift cards, gaming pins, and bill payments embedded in super app platforms.",
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "Audience", name: "Super App Platforms" },
  },
};

export default function SuperAppsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <SuperAppsClient />
    </>
  );
}
