import type { Metadata } from "next";
import AnnualReportClient from "./AnnualReportClient";

export const metadata: Metadata = {
  title: "SACPVP Annual Report 2024/2025",
  description:
    "Read the SACPVP Annual Report for 2024/2025: clean audit, improved controls, enhanced registration oversight, CPD progress, and transformation updates.",
  keywords: [
    "SACPVP annual report",
    "property valuer annual report",
    "South Africa property valuation report",
    "SACPVP 2024/2025",
    "financial report",
    "governance report",
    "transformation progress",
    "property valuation council report",
  ],
  openGraph: {
    title: "SACPVP Annual Report 2024/2025",
    description:
      "Read the SACPVP Annual Report for 2024/2025: clean audit, improved controls, enhanced registration oversight, CPD progress, and transformation updates.",
    images: [
      {
        url: "/bannerImages/houses1.jpg",
        width: 1200,
        height: 630,
        alt: "SACPVP Annual Report 2024/2025",
      },
    ],
  },
  twitter: {
    title: "SACPVP Annual Report 2024/2025",
    description:
      "Read the SACPVP Annual Report for 2024/2025: clean audit, improved controls, enhanced registration oversight, CPD progress, and transformation updates.",
    images: ["/bannerImages/houses1.jpg"],
  },
};

export default function AnnualReport() {
  return <AnnualReportClient />;
}
