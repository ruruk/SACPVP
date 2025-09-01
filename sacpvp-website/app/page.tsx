import LinksSection from "@/components/links-section";
import AnnouncementsSection from "@/components/announcements-section";
import AboutSection from "@/components/about-section";
import ConstructionNotice from "@/components/construction-notice";
import MemberSearchWidget from "@/components/member-search-widget";
import Header from "@/components/global/header";
import WomensDaySection from "@/components/womens-day-section";

export default function Home() {
  return (
    <main>
      <Header
        title="Welcome to SACPVP"
        subtitle="Regulating and advancing the property valuation profession in South Africa"
        backgroundImage="/bannerImages/houses1.jpg"
      />
      <LinksSection />
      <AnnouncementsSection />
      {/* <WomensDaySection /> */}
      <MemberSearchWidget />
      <AboutSection />
      <ConstructionNotice />
    </main>
  );
}
