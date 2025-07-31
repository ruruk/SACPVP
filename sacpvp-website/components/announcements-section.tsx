"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Bell,
  ArrowRight,
  Info,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  Eye,
} from "lucide-react";
import announcements from "@/data/announcements.json";
import styles from "./announcements-section.module.css";

export default function AnnouncementsSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Sort announcements by date (newest first)
  const sortedAnnouncements = [...announcements].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get important announcements
  const importantAnnouncements = sortedAnnouncements.filter(
    (announcement) => announcement.important === "true"
  );

  // Get the latest announcement (that's not already in important)
  const latestAnnouncement = sortedAnnouncements.find(
    (announcement) => announcement.important !== "true"
  );

  // Combine important announcements with latest announcement, limit to 3
  const displayAnnouncements = [
    ...importantAnnouncements,
    ...(latestAnnouncement ? [latestAnnouncement] : []),
  ].slice(0, 3);

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

        {displayAnnouncements.length > 0 ? (
          <div className={styles.announcementsList}>
            {displayAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className={`${styles.accordionItem} ${announcement.important === "true" ? styles.importantItem : ""}`}
              >
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(announcement.id)}
                  aria-expanded={openAccordion === announcement.id}
                >
                  <div className={styles.accordionHeaderContent}>
                    <div className={styles.iconWrapper}>
                      {announcement.icon === "calendar" ? (
                        <Calendar size={24} />
                      ) : (
                        <Bell size={24} />
                      )}
                    </div>
                    <div className={styles.headerText}>
                      <h3 className={styles.accordionTitle}>
                        {announcement.title}
                      </h3>
                      <p className={styles.accordionDescription}>
                        {announcement.shortDescription}
                      </p>
                    </div>
                  </div>
                  {openAccordion === announcement.id ? (
                    <ChevronUp className={styles.accordionIcon} />
                  ) : (
                    <ChevronDown className={styles.accordionIcon} />
                  )}
                </button>

                <div
                  className={`${styles.accordionContent} ${openAccordion === announcement.id ? styles.accordionOpen : ""}`}
                >
                  <div className={styles.accordionBody}>
                    {/* Banner image for announcements that have bannerImage */}
                    {announcement.bannerImage && (
                      <div className={styles.bannerImageContainer}>
                        <img
                          src={announcement.bannerImage || "/placeholder.svg"}
                          alt={`Banner for ${announcement.title}`}
                          className={styles.bannerImage}
                        />
                      </div>
                    )}

                    <div className={styles.accordionMeta}>
                      <span className={styles.accordionDate}>
                        {new Date(announcement.date).toLocaleDateString()}
                      </span>
                      <div className={styles.actionButtons}>
                        {announcement.pdfUrl && (
                          <a
                            href={announcement.pdfUrl}
                            download
                            className={styles.downloadLink}
                          >
                            <Download size={16} />
                            <span>Download PDF</span>
                          </a>
                        )}
                        {announcement.webUrl && (
                          <a
                            href={announcement.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.visitLink}
                          >
                            <ExternalLink size={16} />
                            <span>Visit Link</span>
                          </a>
                        )}
                        {announcement.goToPage && (
                          <Link
                            href={announcement.goToPage.url}
                            className={styles.goToPageLink}
                          >
                            <Eye size={16} />
                            <span>{announcement.goToPage.label}</span>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className={styles.accordionText}>
                      {announcement.content
                        .split("\n\n")
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
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
