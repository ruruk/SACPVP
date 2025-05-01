import LinksSection from "@/components/links-section";
import AnnouncementsSection from "@/components/announcements-section";
import AboutSection from "@/components/about-section";
import ConstructionNotice from "@/components/construction-notice";
import MemberSearchWidget from "@/components/member-search-widget";

export default function Home() {
  return (
    <main>
      <div style={{ paddingTop: "120px" }}></div>
      <LinksSection />
      <AnnouncementsSection />
      <MemberSearchWidget />
      <AboutSection />
      <ConstructionNotice />
    </main>
  );
}
