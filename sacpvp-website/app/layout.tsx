import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default:
      "SACPVP - South African Council for the Property Valuers Profession",
    template: "%s | SACPVP",
  },
  description:
    "The South African Council for the Property Valuers Profession (SACPVP) regulates and advances the property valuation profession in South Africa. Find registered valuers, examination information, standards, and professional resources.",
  keywords: [
    "SACPVP",
    "South African Council for Property Valuers Profession",
    "property valuers",
    "property valuation",
    "South Africa",
    "registered valuers",
    "property assessment",
    "real estate valuation",
    "professional valuers",
    "valuation standards",
    "property surveyors",
    "real estate professionals",
  ],
  authors: [{ name: "SACPVP" }],
  creator: "SACPVP",
  publisher: "SACPVP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sacpvp.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://sacpvp.co.za",
    siteName: "SACPVP",
    title: "SACPVP - South African Council for the Property Valuers Profession",
    description:
      "The South African Council for the Property Valuers Profession regulates and advances the property valuation profession in South Africa.",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "SACPVP Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SACPVP - South African Council for the Property Valuers Profession",
    description:
      "The South African Council for the Property Valuers Profession regulates and advances the property valuation profession in South Africa.",
    images: ["/placeholder-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google0448e776d7673e65",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "South African Council for the Property Valuers Profession",
    alternateName: "SACPVP",
    url: "https://sacpvp.co.za",
    logo: "https://sacpvp.co.za/placeholder-logo.png",
    description:
      "The South African Council for the Property Valuers Profession regulates and advances the property valuation profession in South Africa.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: ["https://sacpvp.co.za"],
  };

  return (
    <html lang="en-ZA">
      <head>
        <link rel="icon" href="/placeholder-logo.png" />
        <link rel="apple-touch-icon" href="/placeholder-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SACPVP" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-7VZBNP875Y`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7VZBNP875Y', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Navbar />
        <Breadcrumb />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
