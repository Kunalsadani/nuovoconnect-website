import type { Metadata } from "next";
import { ProductsClient } from "./products-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/products`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "Products — Mobile Top-Ups, Gift Cards, eSIM & Digital Value",
  description:
    "Explore NuovoConnect's full B2B product suite: mobile top-ups, data bundles, gift cards, gaming pins, eSIMs, crypto vouchers, global bank accounts, and payment processing across 170+ countries.",
  keywords: [
    "mobile top-ups wholesale",
    "data bundles B2B",
    "gift cards API",
    "gaming pins wholesale",
    "eSIM bundles B2B",
    "crypto vouchers wholesale",
    "global bank accounts API",
    "payment processing B2B",
    "digital value products",
    "prepaid digital services",
    "airtime recharge API",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Products — Mobile Top-Ups, Gift Cards, eSIM & Digital Value | NuovoConnect",
    description:
      "Full B2B product suite: mobile top-ups, data bundles, gift cards, gaming pins, eSIMs, and payment processing across 170+ countries.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "NuovoConnect Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products — Mobile Top-Ups, Gift Cards, eSIM & More | NuovoConnect",
    description: "B2B digital product suite: top-ups, gift cards, gaming pins, eSIMs, and payment processing across 170+ countries.",
    images: [OG_IMAGE],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: PAGE_URL,
  name: "NuovoConnect Products — Digital Value Services Catalogue",
  description:
    "Full B2B digital value product suite including mobile top-ups, eSIMs, gift cards, gaming pins, and payment processing.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Digital Value Products",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Global Connectivity — Mobile Top-Ups & Data Bundles", url: PAGE_URL },
      { "@type": "ListItem", position: 2, name: "Global Bank Accounts", url: PAGE_URL },
      { "@type": "ListItem", position: 3, name: "Payment Processing", url: PAGE_URL },
      { "@type": "ListItem", position: 4, name: "Loyalty & Retention Tools — Gift Cards, Gaming Pins", url: PAGE_URL },
    ],
  },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ProductsClient />
    </>
  );
}
