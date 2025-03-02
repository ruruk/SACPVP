import Link from "next/link";
import { Calendar, Bell } from "lucide-react";
import announcements from "@/data/announcements.json";
import styles from "./announcements-section.module.css";

export default function AnnouncementsSection() {
  return (
    <section className={styles.announcementsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Latest Announcements</h2>
        {announcements.length > 0 ? (
          <>
            <div className={styles.announcementsList}>
              {announcements.slice(0, 3).map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                />
              ))}
            </div>
            <div className={styles.viewAllLink}>
              <Link href="/announcements">View All Announcements</Link>
            </div>
          </>
        ) : (
          <p className={styles.noAnnouncements}>
            There are currently no announcements.
          </p>
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
          <Calendar size={24} className={styles.icon} />
        ) : (
          <Bell size={24} className={styles.icon} />
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{announcement.title}</h3>
        <p className={styles.cardDate}>
          {new Date(announcement.date).toLocaleDateString()}
        </p>
        <p className={styles.cardExcerpt}>
          {announcement.content.slice(0, 100)}...
        </p>
      </div>
    </div>
  );
}
