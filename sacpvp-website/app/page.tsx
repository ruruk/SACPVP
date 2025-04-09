import type { Metadata } from "next";
import LinksSection from "@/components/links-section";
import AboutSection from "@/components/about-section";
import AnnouncementsSection from "@/components/announcements-section";
import ConstructionNotice from "@/components/construction-notice";

export const metadata: Metadata = {
  title: "SACPVP - South African Council for the Property Valuers Profession",
  description:
    "The official website of the South African Council for the Property Valuers Profession. Find information about registration, examinations, workshops, and announcements.",
  keywords:
    "SACPVP, property valuers, South Africa, registration, examinations, workshops",
};

export default function Home() {
  return (
    <div style={{ paddingTop: "120px" }}>
      <LinksSection />
      <AnnouncementsSection />
      <AboutSection />
      <ConstructionNotice />
    </div>
  );
}
