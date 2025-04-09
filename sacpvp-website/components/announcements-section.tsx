import Link from "next/link";
import { Calendar, Bell, ArrowRight, Info } from "lucide-react";
import announcements from "@/data/announcements.json";
import styles from "./announcements-section.module.css";

export default function AnnouncementsSection() {
  return (
    <section className={styles.announcementsSectionWithDivider}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Latest Announcements</h2>
          <Link href="/announcements" className={styles.viewAllLink}>
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {announcements.length > 0 ? (
          <div className={styles.announcementsList}>
            {announcements.slice(0, 1).map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
              />
            ))}
          </div>
        ) : (
          <div className={styles.noAnnouncements}>
            <Info size={16} className={styles.noAnnouncementsIcon} />
            <span>No announcements available</span>
          </div>
        )}
      </div>
    </section>
  );
}

function AnnouncementCard({ announcement }: { announcement: any }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {announcement.icon === "calendar" ? (
          <Calendar size={24} />
        ) : (
          <Bell size={24} />
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{announcement.title}</h3>
        <p className={styles.cardDate}>
          {new Date(announcement.date).toLocaleDateString()}
        </p>
        <p className={styles.cardExcerpt}>
          {announcement.content.length > 150
            ? `${announcement.content.slice(0, 150)}...`
            : announcement.content}
        </p>
        <Link href="/announcements" className={styles.readMoreLink}>
          Read more
        </Link>
      </div>
    </div>
  );
}
