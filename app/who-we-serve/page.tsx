import type { Metadata } from "next";
import { WhoWeServeClient } from "./who-we-serve-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/who-we-serve`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "Who We Serve — Telecom, eWallets, Gaming, Retail & More",
  description:
    "NuovoConnect delivers industry-specific digital value services for retail merchants, telecoms, eWallets, forex providers, super apps, gaming companies, and relocation services across 170+ countries.",
  keywords: [
    "digital value services industries",
    "fintech B2B sectors",
    "telecom digital services",
    "eWallet digital products",
    "gaming rewards platform",
    "retail digital services",
    "forex digital value",
    "super app digital products",
    "relocation financial services",
    "B2B fintech solutions",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Who We Serve — Telecom, eWallets, Gaming & More | NuovoConnect",
    description:
      "Industry-specific digital value services for retail merchants, telecoms, eWallets, forex providers, super apps, and gaming companies.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "NuovoConnect Industries" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Serve — Telecom, eWallets, Gaming & More | NuovoConnect",
    description: "Industry-specific digital value services for telecom, eWallets, gaming, retail, forex, and super apps.",
    images: [OG_IMAGE],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  name: "Industries NuovoConnect Serves",
  description:
    "Industry-specific digital value services for retail merchants, telecoms, eWallets, forex providers, super apps, gaming companies, and relocation providers.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Who We Serve", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Industries Served",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Retail Merchants", url: `${SITE_URL}/who-we-serve/retail-merchants` },
      { "@type": "ListItem", position: 2, name: "Telecommunications", url: `${SITE_URL}/who-we-serve/telecommunications` },
      { "@type": "ListItem", position: 3, name: "eWallets", url: `${SITE_URL}/who-we-serve/ewallets` },
      { "@type": "ListItem", position: 4, name: "Forex & Money Transfer", url: `${SITE_URL}/who-we-serve/forex` },
      { "@type": "ListItem", position: 5, name: "Super Apps", url: `${SITE_URL}/who-we-serve/super-apps` },
      { "@type": "ListItem", position: 6, name: "Gaming", url: `${SITE_URL}/who-we-serve/gaming` },
      { "@type": "ListItem", position: 7, name: "eSIM Services", url: `${SITE_URL}/who-we-serve/esim-services` },
      { "@type": "ListItem", position: 8, name: "Relocation Providers", url: `${SITE_URL}/who-we-serve/banking` },
    ],
  },
};

export default function WhoWeServePage() {
  return (
    <>
      <JsonLd data={schema} />
      <WhoWeServeClient />
    </>
  );
}
