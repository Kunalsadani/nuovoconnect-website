import type { Metadata } from "next";
import { ContactClient } from "./contact-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/contact`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "Contact Us — Partner with NuovoConnect",
  description:
    "Get in touch with NuovoConnect to discuss digital value services, mobile top-ups, gift cards, eSIMs, and B2B micropayment solutions for your business. We respond within one business day.",
  keywords: [
    "contact NuovoConnect",
    "digital value services inquiry",
    "B2B partnership inquiry",
    "mobile top-up API contact",
    "fintech partnership Dubai",
    "digital payments partner",
    "request demo NuovoConnect",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Contact Us — Partner with NuovoConnect",
    description:
      "Discuss digital value services, mobile top-ups, gift cards, and micropayment solutions. We respond within one business day.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Contact NuovoConnect" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NuovoConnect — Partner with Us",
    description: "Get in touch to discuss digital value services and B2B micropayment solutions for your business.",
    images: [OG_IMAGE],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: PAGE_URL,
  name: "Contact NuovoConnect",
  description: "Get in touch with NuovoConnect to explore B2B digital value service partnerships.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "kunal@nuovoconnect.com",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ContactClient />
    </>
  );
}
