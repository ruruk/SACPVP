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

type AnnouncementPdf = {
  city?: string;
  title?: string;
  pdfUrl: string;
};

type Announcement = {
  id: number;
  title: string;
  shortDescription: string;
  date: string;
  icon: string;
  important?: string;
  superImportant?: string;
  content: string;
  pdfUrl?: string;
  pdfs?: AnnouncementPdf[];
  webUrl?: string;
  goToPage?: { url: string; label: string };
  bannerImage?: string;
};

const announcementsData = announcements as Announcement[];

export default function AnnouncementsSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const getPriority = (announcement: Announcement) => {
    if (announcement.superImportant === "true") return 2;
    if (announcement.important === "true") return 1;
    return 0;
  };

  // Sort announcements by priority first, then date (newest first)
  const sortedAnnouncements = [...announcementsData].sort((a, b) => {
    const priorityDiff = getPriority(b) - getPriority(a);
    if (priorityDiff !== 0) return priorityDiff;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Show top 3 by priority/date on home page
  const displayAnnouncements = sortedAnnouncements.slice(0, 3);

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
                className={`${styles.accordionItem} ${
                  announcement.superImportant === "true"
                    ? styles.superImportantItem
                    : announcement.important === "true"
                      ? styles.importantItem
                      : ""
                }`}
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
                      {announcement.superImportant === "true" && (
                        <span className={styles.superImportantBadge}>
                          SUPER IMPORTANT
                        </span>
                      )}
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
                        {announcement.pdfs?.map((pdf, index) => (
                          <a
                            key={`${announcement.id}-pdf-${index}`}
                            href={pdf.pdfUrl}
                            download
                            className={styles.downloadLink}
                          >
                            <Download size={16} />
                            <span>{pdf.title || pdf.city || "Download PDF"}</span>
                          </a>
                        ))}
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
