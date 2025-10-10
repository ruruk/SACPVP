import type { Metadata } from "next";
import StandardsClient from "./StandardsClient";

export const metadata: Metadata = {
  title: "SAVS – South African Valuation Standards",
  description:
    "Download the latest South African Valuation Standards (SAVS), including International Valuation Standards (IVS) and Municipal Valuations for Property Rating (MVPR), as adopted by the South African Council for the Property Valuers Profession.",
  keywords: [
    "SAVS",
    "South African Valuation Standards",
    "IVS",
    "International Valuation Standards",
    "MVPR",
    "Municipal Valuations",
    "property valuation standards",
    "SACPVP standards",
    "valuation guidelines",
    "professional standards",
    "property rating standards",
  ],
  openGraph: {
    title: "SAVS – South African Valuation Standards | SACPVP",
    description:
      "Download the latest South African Valuation Standards (SAVS), including International Valuation Standards (IVS) and Municipal Valuations for Property Rating (MVPR).",
    images: [
      {
        url: "/bannerImages/houses1.jpg",
        width: 1200,
        height: 630,
        alt: "South African Valuation Standards documents",
      },
    ],
  },
  twitter: {
    title: "SAVS – South African Valuation Standards | SACPVP",
    description:
      "Download the latest South African Valuation Standards (SAVS), including International Valuation Standards (IVS) and Municipal Valuations for Property Rating (MVPR).",
    images: ["/bannerImages/houses1.jpg"],
  },
};

export default function StandardsPage() {
  return <StandardsClient />;
}
