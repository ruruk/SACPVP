import type { Metadata } from "next";
import LegalClient from "./LegalClient";

export const metadata: Metadata = {
  title: "Legal Documents",
  description:
    "Access important legal documents, legislation, and professional standards for property valuers in South Africa. Download Property Valuers Profession Act, Code of Conduct, disciplinary procedures, and complaint forms.",
  keywords: [
    "SACPVP legal documents",
    "Property Valuers Profession Act",
    "property valuer legislation",
    "South Africa property law",
    "professional standards",
    "code of conduct",
    "disciplinary procedures",
    "complaint forms",
  ],
  openGraph: {
    title: "Legal Documents | SACPVP",
    description:
      "Access important legal documents, legislation, and professional standards for property valuers in South Africa.",
    images: [
      {
        url: "/bannerImages/legal.jpeg",
        width: 1200,
        height: 630,
        alt: "Legal documents and legislation for property valuers",
      },
    ],
  },
  twitter: {
    title: "Legal Documents | SACPVP",
    description:
      "Access important legal documents, legislation, and professional standards for property valuers in South Africa.",
    images: ["/bannerImages/legal.jpeg"],
  },
};

export default function LegalPage() {
  return <LegalClient />;
}
