import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //this  will give me out file 
  output: "export",

  async redirects() {
    return [
      // Main pages
      {
        source: "/",
        destination: "/my-en/background-screening",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/my-en/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/my-en/contact-us",
        permanent: true,
      },
      {
        source: "/Career",
        destination: "/my-en/Career",
        permanent: true,
      },
      {
        source: "/our-services",
        destination: "/my-en/our-services",
        permanent: true,
      },

      // Background Screening subpages
      {
        source: "/background-screening/risk-intelligence",
        destination: "/my-en/background-screening/risk-intelligence",
        permanent: true,
      },
      {
        source: "/background-screening/due-diligence",
        destination: "/my-en/background-screening/due-diligence",
        permanent: true,
      },
      {
        source: "/background-screening/risk-audit",
        destination: "/my-en/background-screening/risk-audit",
        permanent: true,
      },
      {
        source: "/background-screening/compliance",
        destination: "/my-en/background-screening/compliance",
        permanent: true,
      },
      {
        source: "/background-screening/intellectual-property",
        destination: "/my-en/background-screening/intellectual-property",
        permanent: true,
      },
      {
        source: "/background-screening/counter-measures",
        destination: "/my-en/background-screening/counter-measures",
        permanent: true,
      },
      {
        source: "/background-screening/financial-crime",
        destination: "/my-en/background-screening/financial-crime",
        permanent: true,
      },
      {
        source: "/background-screening/hr-services",
        destination: "/my-en/background-screening/hr-services",
        permanent: true,
      },
      {
        source: "/background-screening/cyber-security",
        destination: "/my-en/background-screening/cyber-security",
        permanent: true,
      },
      //privacy pages

      {
        source: "/terms-and-conditions",
        destination: "/privacy/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy/privacy-policy",
        permanent: true,
      },
      {
        source: "/security-policy",
        destination: "/privacy/security-policy",
        permanent: true,
      },
      {
        source: "/whistleblowing-policy",
        destination: "/privacy/whistleblowing-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
