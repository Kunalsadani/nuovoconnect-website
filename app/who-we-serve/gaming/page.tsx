import type { Metadata } from "next";
import { GamingClient } from "./gaming-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/who-we-serve/gaming`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "Gaming — Player Rewards, Acquisition & Digital Incentives",
  description:
    "Acquire more players, reduce churn, and grow in-app revenue with real-time digital rewards — gaming pins, gift cards, and mobile top-ups from $0.10. Built for game studios and publishers worldwide.",
  keywords: [
    "gaming player rewards",
    "gamer digital incentives",
    "gaming user acquisition",
    "gaming gift cards wholesale",
    "gaming pins B2B",
    "esports prize digital rewards",
    "in-game rewards platform",
    "gaming publisher digital services",
    "player retention gaming",
    "gaming affiliate payouts digital",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Gaming — Player Rewards, Acquisition & Digital Incentives | NuovoConnect",
    description:
      "Acquire players from $0.10. Real-time digital rewards — gaming pins, gift cards, top-ups — for game studios and publishers worldwide.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "NuovoConnect for Gaming" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming — Player Rewards & Digital Incentives | NuovoConnect",
    description: "Acquire players from $0.10 with gaming pins, gift cards, and real-time digital rewards for game studios.",
    images: [OG_IMAGE],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  name: "Digital Rewards & Incentives for Gaming Companies",
  description: "Player acquisition, engagement, and monetisation tools for game studios via gaming pins, gift cards, and digital rewards.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Who We Serve", item: `${SITE_URL}/who-we-serve` },
      { "@type": "ListItem", position: 3, name: "Gaming", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "Service",
    name: "Digital Rewards for Gaming Companies",
    provider: { "@id": `${SITE_URL}/#organization` },
    description: "Gaming pins, gift cards, mobile top-ups, and real-time digital rewards for player acquisition and engagement.",
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "Audience", name: "Game Studios, Gaming Publishers, Esports Operators" },
    offers: {
      "@type": "Offer",
      description: "Digital rewards from $0.10 per player",
    },
  },
};

export default function GamingPage() {
  return (
    <>
      <JsonLd data={schema} />
      <GamingClient />
    </>
  );
}
