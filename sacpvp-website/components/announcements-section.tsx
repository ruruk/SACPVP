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
} from "lucide-react";
import announcements from "@/data/announcements.json";
import styles from "./announcements-section.module.css";

export default function AnnouncementsSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className={styles.announcementsSectionWithDivider}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Latest Announcements</h2>
          <Link href="/announcements.html" className={styles.viewAllLink}>
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {announcements.length > 0 ? (
          <div className={styles.announcementsList}>
            {announcements.slice(0, 1).map((announcement) => (
              <div key={announcement.id} className={styles.accordionItem}>
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
                  className={`${styles.accordionContent} ${
                    openAccordion === announcement.id
                      ? styles.accordionOpen
                      : ""
                  }`}
                >
                  <div className={styles.accordionBody}>
                    <div className={styles.accordionMeta}>
                      <span className={styles.accordionDate}>
                        {new Date(announcement.date).toLocaleDateString()}
                      </span>
                      <a
                        href={announcement.pdfUrl}
                        download
                        className={styles.downloadLink}
                      >
                        <Download size={16} />
                        <span>Download PDF</span>
                      </a>
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
