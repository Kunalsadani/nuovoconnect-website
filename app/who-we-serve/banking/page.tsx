import type { Metadata } from "next";
import { BankingClient } from "./banking-client";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/who-we-serve/banking`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  title: "Banking as a Service — Payments, Virtual IBANs & More",
  description:
    "Banking-as-a-Service (BaaS) for relocation providers and fintechs. Accept and dispatch payments, issue virtual IBANs, manage multi-currency accounts, and offer pooled accounts via a single API.",
  keywords: [
    "banking as a service",
    "BaaS API",
    "virtual IBAN",
    "multi-currency accounts",
    "fintech banking API",
    "payment processing BaaS",
    "embedded banking",
    "relocation financial services",
    "cross-border payments API",
    "payment dispatch API",
    "pooled accounts fintech",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Banking as a Service — Payments, Virtual IBANs & More | NuovoConnect",
    description:
      "Accept & dispatch payments, issue virtual IBANs, and manage multi-currency accounts via a single BaaS API.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "NuovoConnect Banking as a Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking as a Service — Virtual IBANs & Multi-Currency | NuovoConnect",
    description: "BaaS API: accept payments, issue virtual IBANs, dispatch funds, and manage multi-currency accounts.",
    images: [OG_IMAGE],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly is BaaS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BaaS (Banking-as-a-Service) is designed to give businesses access to the precise financial services they require, without needing to build them from scratch. Unlike conventional banking products, BaaS services are accessed via API and are integrated directly into a company's customer-facing portal or back-office systems.",
      },
    },
    {
      "@type": "Question",
      name: "How does Banking-as-a-Service operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every BaaS service relies on API calls to exchange messages between a company's internal systems and the BaaS platform. This bidirectional infrastructure enables businesses to construct more sophisticated digital products, services, and data flows by embedding financial services.",
      },
    },
    {
      "@type": "Question",
      name: "What advantages does Banking-as-a-Service offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BaaS enables businesses to tackle some of the most challenging operational hurdles they face, particularly around payment reconciliation. Streamlining these processes results in a smoother, more intuitive user experience and allows businesses to cultivate deeper, more enduring relationships with their customers.",
      },
    },
    {
      "@type": "Question",
      name: "How does Embedded Finance differ from BaaS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Embedded Finance refers to the customer-facing service a business delivers — the account issued in an end user's name, or the unique pay-in details assigned to them. BaaS is the underlying business model that makes this possible, encompassing the technology, licensing, and product development delivered through an API.",
      },
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  name: "Banking as a Service — NuovoConnect",
  description: "BaaS platform offering virtual IBANs, payment processing, multi-currency accounts, and pooled accounts via API.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Who We Serve", item: `${SITE_URL}/who-we-serve` },
      { "@type": "ListItem", position: 3, name: "Banking as a Service", item: PAGE_URL },
    ],
  },
};

export default function BankingPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <BankingClient />
    </>
  );
}
