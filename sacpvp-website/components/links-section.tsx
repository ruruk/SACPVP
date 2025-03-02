import type React from "react";
import { BookOpen, Calendar, FileText, Bell, UserPlus } from "lucide-react";
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
            icon={<BookOpen size={32} className={styles.icon} />}
            href="/examinations"
          />

          {/* <LinkCard
            title="Workshop Program"
            description="View our schedule of workshops and professional development events."
            icon={<Calendar size={32} className={styles.icon} />}
            href="/workshop"
          /> */}

          {/* <LinkCard
            title="Annual Reports"
            description="Access our annual reports and financial statements."
            icon={<FileText size={32} className={styles.icon} />}
            href="#"
          /> */}

          <LinkCard
            title="Announcements"
            description="Stay updated with the latest news and announcements."
            icon={<Bell size={32} className={styles.icon} />}
            href="/announcements"
          />

          <LinkCard
            title="Registration"
            description="Information about registering as a property valuer."
            icon={<UserPlus size={32} className={styles.icon} />}
            href="/registration"
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
    <a href={href} className={`card ${styles.linkCard}`}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </a>
  );
}
