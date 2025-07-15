"use client";

import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  Clock,
  Users,
} from "lucide-react";
import styles from "./ivsc.module.css";
import ivscData from "@/data/ivsc.json";

interface IVSCItem {
  id: number;
  title: string;
  shortDescription: string;
  date: string;
  time?: string;
  speakers?: string[];
  content: string;
  bannerImage?: string;
  pdfUrl?: string;
  webUrl?: string;
  isWebinar?: boolean;
  partner?: string;
}

export default function IVSCClient() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isUpcoming = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate >= today;
  };

  const ivscItems = ivscData as IVSCItem[];
  const upcomingItems = ivscItems.filter((item) => isUpcoming(item.date));
  const pastItems = ivscItems.filter((item) => !isUpcoming(item.date));

  return (
    <div className={styles.container}>
      <div className="container">
        <h1 className={styles.title}>
          IVSC (International Valuation Standards Council)
        </h1>
        <p className={styles.subtitle}>
          Stay connected with the International Valuation Standards Council's
          latest developments, webinars, and collaborative initiatives with
          SACPVP.
        </p>

        {upcomingItems.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Upcoming Events & Announcements
            </h2>
            <div className={styles.ivscList}>
              {upcomingItems.map((item) => (
                <div key={item.id} className={styles.accordionItem}>
                  <button
                    className={styles.accordionHeader}
                    onClick={() => toggleExpanded(item.id)}
                    aria-expanded={expandedItems.has(item.id)}
                  >
                    <div className={styles.accordionHeaderContent}>
                      <div className={styles.iconWrapper}>
                        <Calendar size={24} />
                      </div>
                      <div className={styles.headerText}>
                        <h3 className={styles.accordionTitle}>
                          {item.title}
                          {item.isWebinar && (
                            <span className={styles.webinarBadge}>
                              LIVE WEBINAR
                            </span>
                          )}
                          {item.partner && (
                            <span className={styles.partnerBadge}>
                              with {item.partner}
                            </span>
                          )}
                        </h3>
                        <p className={styles.accordionDescription}>
                          {item.shortDescription}
                        </p>
                      </div>
                    </div>
                    {expandedItems.has(item.id) ? (
                      <ChevronUp className={styles.accordionIcon} />
                    ) : (
                      <ChevronDown className={styles.accordionIcon} />
                    )}
                  </button>

                  <div
                    className={`${styles.accordionContent} ${
                      expandedItems.has(item.id) ? styles.accordionOpen : ""
                    }`}
                  >
                    <div className={styles.accordionBody}>
                      {item.bannerImage && (
                        <div className={styles.bannerImageContainer}>
                          <img
                            src={item.bannerImage || "/placeholder.svg"}
                            alt={`Banner for ${item.title}`}
                            className={styles.bannerImage}
                          />
                        </div>
                      )}

                      <div className={styles.accordionMeta}>
                        <span className={styles.accordionDate}>
                          {formatDate(item.date)}
                        </span>
                        {item.time && (
                          <div className={styles.metaRow}>
                            <Clock size={16} />
                            <span>{item.time}</span>
                          </div>
                        )}
                        {item.speakers && item.speakers.length > 0 && (
                          <div className={styles.metaRow}>
                            <Users size={16} />
                            <span>Speakers: {item.speakers.join(", ")}</span>
                          </div>
                        )}
                        <div className={styles.actionButtons}>
                          {item.pdfUrl && (
                            <a
                              href={item.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.downloadLink}
                            >
                              <Download size={16} />
                              <span>Download PDF</span>
                            </a>
                          )}
                          {item.webUrl && (
                            <a
                              href={item.webUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.visitLink}
                            >
                              <ExternalLink size={16} />
                              <span>
                                {item.isWebinar ? "Register Now" : "Visit Link"}
                              </span>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className={styles.accordionText}>
                        {item.content.split("\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {pastItems.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Past Events</h2>
            <div className={styles.ivscList}>
              {pastItems.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.accordionItem} ${styles.pastItem}`}
                >
                  <button
                    className={styles.accordionHeader}
                    onClick={() => toggleExpanded(item.id)}
                    aria-expanded={expandedItems.has(item.id)}
                  >
                    <div className={styles.accordionHeaderContent}>
                      <div className={styles.iconWrapper}>
                        <Calendar size={24} />
                      </div>
                      <div className={styles.headerText}>
                        <h3 className={styles.accordionTitle}>
                          {item.title}
                          <span className={styles.pastBadge}>PAST EVENT</span>
                        </h3>
                        <p className={styles.accordionDescription}>
                          {item.shortDescription}
                        </p>
                      </div>
                    </div>
                    {expandedItems.has(item.id) ? (
                      <ChevronUp className={styles.accordionIcon} />
                    ) : (
                      <ChevronDown className={styles.accordionIcon} />
                    )}
                  </button>

                  <div
                    className={`${styles.accordionContent} ${
                      expandedItems.has(item.id) ? styles.accordionOpen : ""
                    }`}
                  >
                    <div className={styles.accordionBody}>
                      {item.bannerImage && (
                        <div className={styles.bannerImageContainer}>
                          <img
                            src={item.bannerImage || "/placeholder.svg"}
                            alt={`Banner for ${item.title}`}
                            className={styles.bannerImage}
                          />
                        </div>
                      )}

                      <div className={styles.accordionMeta}>
                        <span className={styles.accordionDate}>
                          {formatDate(item.date)}
                        </span>
                        {item.speakers && item.speakers.length > 0 && (
                          <div className={styles.metaRow}>
                            <Users size={16} />
                            <span>Speakers: {item.speakers.join(", ")}</span>
                          </div>
                        )}
                        <div className={styles.actionButtons}>
                          {item.pdfUrl && (
                            <a
                              href={item.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.downloadLink}
                            >
                              <Download size={16} />
                              <span>Download PDF</span>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className={styles.accordionText}>
                        {item.content.split("\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {upcomingItems.length === 0 && pastItems.length === 0 && (
          <div className={styles.noIvsc}>
            <Calendar size={48} />
            <h3>No IVSC announcements available</h3>
            <p>
              Check back soon for upcoming events and announcements from the
              International Valuation Standards Council.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
