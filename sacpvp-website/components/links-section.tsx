import type React from "react";
import { BookOpen, Bell, UserPlus, Briefcase } from "lucide-react";
import styles from "./links-section.module.css";

export default function LinksSection() {
  return (
    <section id="links" className={styles.linksSection}>
      <div className="container">
        <h2 className={styles.title}>Quick Links</h2>

        <div className={styles.linkGrid}>
          <LinkCard
            title="Examinations"
            description="Information about upcoming examinations and past papers."
            icon={<BookOpen className={styles.icon} />}
            href="/examinations"
          />

          <LinkCard
            title="Announcements"
            description="Stay updated with the latest news and announcements."
            icon={<Bell className={styles.icon} />}
            href="/announcements"
          />

          <LinkCard
            title="Registration"
            description="Information about registering as a property valuer."
            icon={<UserPlus className={styles.icon} />}
            href="/registration"
          />

          <LinkCard
            title="Job Posts"
            description="View available job opportunities in the property valuation profession."
            icon={<Briefcase className={styles.icon} />}
            href="/job-posts"
          />
        </div>
      </div>
    </section>
  );
}

function LinkCard({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} className={styles.linkCard}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </a>
  );
}
