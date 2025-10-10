import type { Metadata } from "next";
import ExaminationsClient from "./ExaminationsClient";

export const metadata: Metadata = {
  title: "Examinations",
  description:
    "Information about upcoming examinations and pre-exam workshops for property valuers in South Africa. View schedules, topics covered, and examination requirements.",
  keywords: [
    "SACPVP examinations",
    "property valuer exams",
    "South Africa valuation workshops",
    "pre-exam preparation",
    "board examinations",
    "property valuation tests",
    "professional examinations",
    "examination schedules",
  ],
  openGraph: {
    title: "Examinations | SACPVP",
    description:
      "Information about upcoming examinations and pre-exam workshops for property valuers in South Africa. View schedules and topics covered.",
    images: [
      {
        url: "/bannerImages/houses1.jpg",
        width: 1200,
        height: 630,
        alt: "Property valuer examinations and workshops",
      },
    ],
  },
  twitter: {
    title: "Examinations | SACPVP",
    description:
      "Information about upcoming examinations and pre-exam workshops for property valuers in South Africa. View schedules and topics covered.",
    images: ["/bannerImages/houses1.jpg"],
  },
};

export default function Examinations() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "Property Valuer Examinations",
    description:
      "Professional examinations for property valuers in South Africa",
    provider: {
      "@type": "Organization",
      name: "South African Council for the Property Valuers Profession",
      alternateName: "SACPVP",
    },
    occupationCategory: "Property Valuer",
    educationalLevel: "Professional",
    programType: "Examination",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "ZAR",
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
      <ExaminationsClient />
    </>
  );
}
