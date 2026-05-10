import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pg", "nodemailer"],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/who-we-serve/retail-networks", destination: "/who-we-serve/retail-merchants", permanent: true },
      { source: "/who-we-serve/mobile-operators", destination: "/who-we-serve/telecommunications", permanent: true },
      { source: "/who-we-serve/money-transfer-operators", destination: "/who-we-serve/forex", permanent: true },
      { source: "/who-we-serve/creator-economy", destination: "/who-we-serve/gaming", permanent: true },
    ];
  },
};

export default nextConfig;
