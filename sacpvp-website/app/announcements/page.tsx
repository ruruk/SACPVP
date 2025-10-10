import type { Metadata } from "next";
import AnnouncementsClient from "./AnnouncementsClient";

export const metadata: Metadata = {
  title: "Announcements",
  description:
    "Stay updated with the latest news and announcements from the South African Council for the Property Valuers Profession. Get important updates, regulatory changes, and professional news.",
  keywords: [
    "SACPVP announcements",
    "property valuer news",
    "South Africa property valuation updates",
    "professional announcements",
    "regulatory updates",
    "property valuation news",
    "professional council updates",
    "industry announcements",
  ],
  openGraph: {
    title: "Announcements | SACPVP",
    description:
      "Stay updated with the latest news and announcements from the South African Council for the Property Valuers Profession.",
    images: [
      {
        url: "/bannerImages/houses1.jpg",
        width: 1200,
        height: 630,
        alt: "Latest announcements from SACPVP",
      },
    ],
  },
  twitter: {
    title: "Announcements | SACPVP",
    description:
      "Stay updated with the latest news and announcements from the South African Council for the Property Valuers Profession.",
    images: ["/bannerImages/houses1.jpg"],
  },
};

export default function Announcements() {
  return <AnnouncementsClient />;
}
