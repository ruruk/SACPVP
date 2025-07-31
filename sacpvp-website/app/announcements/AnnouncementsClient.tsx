"use client";

import { useState } from "react";
import {
  Calendar,
  Bell,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  Eye,
} from "lucide-react";
import Link from "next/link";
import announcements from "@/data/announcements.json";
import Header from "@/components/global/header";
import styles from "./announcements.module.css";

export default function AnnouncementsClient() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Sort announcements to put important ones first
  const sortedAnnouncements = [...announcements].sort((a, b) => {
    if (a.important === "true" && b.important !== "true") return -1;
    if (a.important !== "true" && b.important === "true") return 1;
    return 0;
  });

  return (
    <div>
      <Header
        title="Announcements"
        subtitle="Stay updated with the latest news and announcements from SACPVP"
        backgroundImage="/bannerImages/houses.jpeg"
      />

      <div
        className={`container ${styles.announcements}`}
        style={{ padding: "10px", paddingTop: "80px", paddingBottom: "80px" }}
      >
        {sortedAnnouncements.length > 0 ? (
          <div className={styles.announcementsList}>
            {sortedAnnouncements.map((announcement) => (
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
          <p className={styles.noAnnouncements}>
            There are currently no announcements.
          </p>
        )}
      </div>
    </div>
  );
}
