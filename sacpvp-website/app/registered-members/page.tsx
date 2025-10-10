import type { Metadata } from "next";
import { Suspense } from "react";
import RegisteredMembersClient from "./RegisteredMembersClient";

export const metadata: Metadata = {
  title: "Registered Members",
  description:
    "Search for registered property valuers in South Africa. Verify registration status of property valuers and assessors by province and region.",
  keywords: [
    "SACPVP members",
    "registered property valuers",
    "South Africa property valuation professionals",
    "member search",
    "property valuer directory",
    "verified valuers",
    "professional registration",
    "property assessors",
  ],
  openGraph: {
    title: "Registered Members | SACPVP",
    description:
      "Search for registered property valuers in South Africa. Verify registration status of property valuers and assessors.",
    images: [
      {
        url: "/placeholder-user.jpg",
        width: 1200,
        height: 630,
        alt: "Registered property valuers directory",
      },
    ],
  },
  twitter: {
    title: "Registered Members | SACPVP",
    description:
      "Search for registered property valuers in South Africa. Verify registration status of property valuers and assessors.",
    images: ["/placeholder-user.jpg"],
  },
};

export default function RegisteredMembers() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Registered Property Valuers Directory",
    description: "Directory of registered property valuers in South Africa",
    provider: {
      "@type": "Organization",
      name: "South African Council for the Property Valuers Profession",
      alternateName: "SACPVP",
    },
    itemListElement: {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Person",
        jobTitle: "Registered Property Valuer",
        worksFor: {
          "@type": "Organization",
          name: "South African Council for the Property Valuers Profession",
        },
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Suspense
        fallback={
          <div className="container py-10">Loading members search...</div>
        }
      >
        <RegisteredMembersClient />
      </Suspense>
    </>
  );
}
