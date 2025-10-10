import type { Metadata } from "next";
import JobPostsClient from "./JobPostsClient";

export const metadata: Metadata = {
  title: "Job Posts",
  description:
    "View available job opportunities in the property valuation profession. Find positions at municipalities, government departments, and private firms across South Africa.",
  keywords: [
    "SACPVP jobs",
    "property valuer jobs",
    "valuation career",
    "South Africa property valuation jobs",
    "municipal valuer positions",
    "government valuation jobs",
    "private sector valuation careers",
    "property assessment employment",
  ],
  openGraph: {
    title: "Job Posts | SACPVP",
    description:
      "View available job opportunities in the property valuation profession. Find positions at municipalities, government departments, and private firms.",
    images: [
      {
        url: "/job-posts/AlfredLogo.jpg",
        width: 1200,
        height: 630,
        alt: "Job opportunities in property valuation",
      },
    ],
  },
  twitter: {
    title: "Job Posts | SACPVP",
    description:
      "View available job opportunities in the property valuation profession. Find positions at municipalities, government departments, and private firms.",
    images: ["/job-posts/AlfredLogo.jpg"],
  },
};

export default function JobPosts() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Property Valuer Job Opportunities",
    description:
      "Various job opportunities in the property valuation profession across South Africa",
    hiringOrganization: {
      "@type": "Organization",
      name: "South African Council for the Property Valuers Profession",
      alternateName: "SACPVP",
    },
    jobLocation: {
      "@type": "Place",
      addressCountry: "ZA",
    },
    employmentType: "FULL_TIME",
    industry: "Property Valuation",
    occupationalCategory: "Property Valuer",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <JobPostsClient />
    </>
  );
}
