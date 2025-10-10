import type { Metadata } from "next";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = "/placeholder-logo.png",
    url,
    type = "website",
    publishedTime,
    modifiedTime,
    author = "SACPVP",
    section,
    tags = [],
  } = config;

  const fullTitle = title.includes("SACPVP") ? title : `${title} | SACPVP`;
  const fullDescription = description;
  const fullUrl = url ? `https://sacpvp.co.za${url}` : "https://sacpvp.co.za";

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      "SACPVP",
      "South African Council for Property Valuers Profession",
      "property valuers",
      "property valuation",
      "South Africa",
      ...keywords,
    ],
    authors: [{ name: author }],
    creator: author,
    publisher: "SACPVP",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://sacpvp.co.za"),
    alternates: {
      canonical: url || "/",
    },
    openGraph: {
      type,
      locale: "en_ZA",
      url: fullUrl,
      siteName: "SACPVP",
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - SACPVP`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [image],
      creator: "@sacpvp",
      site: "@sacpvp",
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

  return metadata;
}

export function generateStructuredData(type: string, data: any) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return baseStructuredData;
}

// Common structured data templates
export const structuredDataTemplates = {
  organization: {
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
  },

  website: {
    "@type": "WebSite",
    name: "SACPVP",
    url: "https://sacpvp.co.za",
    description:
      "The South African Council for the Property Valuers Profession website",
    publisher: {
      "@type": "Organization",
      name: "South African Council for the Property Valuers Profession",
    },
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://sacpvp.co.za/registered-members?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },

  breadcrumbList: (items: Array<{ name: string; url: string }>) => ({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://sacpvp.co.za${item.url}`,
    })),
  }),
};
