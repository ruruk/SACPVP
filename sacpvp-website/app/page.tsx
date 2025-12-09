import type { Metadata } from "next";
import LinksSection from "@/components/links-section";
import AnnouncementsSection from "@/components/announcements-section";
import AnnualReportSection from "@/components/annual-report-section";
import AboutSection from "@/components/about-section";
import ConstructionNotice from "@/components/construction-notice";
import ClosureNotice from "@/components/closure-notice";
import MemberSearchWidget from "@/components/member-search-widget";
import Header from "@/components/global/header";
import WomensDaySection from "@/components/womens-day-section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to SACPVP - The South African Council for the Property Valuers Profession. Find registered valuers, examination information, professional standards, and regulatory updates for the property valuation industry in South Africa.",
  keywords: [
    "SACPVP home",
    "property valuers South Africa",
    "registered valuers",
    "property valuation council",
    "real estate professionals",
    "property assessment",
    "valuation standards",
    "professional regulation",
  ],
  openGraph: {
    title: "SACPVP - South African Council for the Property Valuers Profession",
    description:
      "Welcome to SACPVP - The South African Council for the Property Valuers Profession. Find registered valuers, examination information, professional standards, and regulatory updates.",
    images: [
      {
        url: "/bannerImages/houses1.jpg",
        width: 1200,
        height: 630,
        alt: "Property valuation professionals in South Africa",
      },
    ],
  },
  twitter: {
    title: "SACPVP - South African Council for the Property Valuers Profession",
    description:
      "Welcome to SACPVP - The South African Council for the Property Valuers Profession. Find registered valuers, examination information, professional standards, and regulatory updates.",
    images: ["/bannerImages/houses1.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      <Header
        title="Welcome to SACPVP"
        subtitle="Regulating and advancing the property valuation profession in South Africa"
        backgroundImage="/bannerImages/houses1.jpg"
      />
      <ClosureNotice />
      <LinksSection />
      <AnnouncementsSection />
      {/* <WomensDaySection /> */}
      <MemberSearchWidget />
      <section className="two-column-section">
        <div className="container">
          <div className="two-column-grid">
            <AboutSection />
            <AnnualReportSection />
          </div>
        </div>
      </section>
      <ConstructionNotice />
    </main>
  );
}
