import type { Metadata } from "next";
import AnnouncementsClient from "./AnnouncementsClient";

export const metadata: Metadata = {
  title: "Announcements - SACPVP",
  description:
    "Stay updated with the latest news and announcements from the South African Council for the Property Valuers Profession.",
  keywords:
    "SACPVP announcements, property valuer news, South Africa property valuation updates",
};

export default function Announcements() {
  return <AnnouncementsClient />;
}
