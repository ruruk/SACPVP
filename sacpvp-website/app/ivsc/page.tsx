import type { Metadata } from "next";
import IVSCClient from "./IVSCClient";

export const metadata: Metadata = {
  title: "IVSC - International Valuation Standards Council",
  description:
    "International Valuation Standards Council resources, updates, and announcements for South African property valuers. Stay informed about global valuation standards and best practices.",
  keywords: [
    "IVSC",
    "International Valuation Standards Council",
    "global valuation standards",
    "international property valuation",
    "valuation best practices",
    "SACPVP international standards",
    "property valuation guidelines",
  ],
  openGraph: {
    title: "IVSC - International Valuation Standards Council | SACPVP",
    description:
      "International Valuation Standards Council resources, updates, and announcements for South African property valuers.",
    images: [
      {
        url: "/ivsc/ivsc_banner_1.png",
        width: 1200,
        height: 630,
        alt: "International Valuation Standards Council",
      },
    ],
  },
  twitter: {
    title: "IVSC - International Valuation Standards Council | SACPVP",
    description:
      "International Valuation Standards Council resources, updates, and announcements for South African property valuers.",
    images: ["/ivsc/ivsc_banner_1.png"],
  },
};

export default function IVSCPage() {
  return <IVSCClient />;
}
