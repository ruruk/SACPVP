import type { Metadata } from "next"
import { Calendar, Bell } from "lucide-react"
import announcements from "@/data/announcements.json"
import styles from "./announcements.module.css"

export const metadata: Metadata = {
  title: "Announcements - SACPVP",
  description:
    "Stay updated with the latest news and announcements from the South African Council for the Property Valuers Profession.",
  keywords: "SACPVP announcements, property valuer news, South Africa property valuation updates",
}

export default function Announcements() {
  return (
    <div className={`container ${styles.announcements}`}>
      <h1 className={styles.title}>Announcements</h1>
      {announcements.length > 0 ? (
        <div className={styles.announcementsList}>
          {announcements.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </div>
      ) : (
        <p className={styles.noAnnouncements}>There are currently no announcements.</p>
      )}
    </div>
  )
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
        <h2 className={styles.cardTitle}>{announcement.title}</h2>
        <p className={styles.cardDate}>{new Date(announcement.date).toLocaleDateString()}</p>
        <div className={styles.cardBody}>
          {announcement.content.split("\n").map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

