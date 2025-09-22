"use client";

import { Download, FileText, CheckCircle, BookOpen } from "lucide-react";
import standardsData from "@/data/standards.json";
import Header from "@/components/global/header";
import styles from "./standards.module.css";

export default function StandardsClient() {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={styles.standardsPage}>
      <Header
        title="Standards (SAVS)"
        subtitle="Professional valuation standards ensuring credibility, transparency, and consistency across South Africa."
        backgroundImage="/bannerImages/legal.jpeg"
      />

      <div className={styles.content}>
        <div className="container">
          {/* Adopted Standards Section */}
          <section className={styles.standardsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Adopted Standards (Downloadable)
              </h2>
              <p className={styles.sectionDescription}>
                The following South African Valuation Standards (SAVS) have been
                formally adopted by Council and are available for download:
              </p>
            </div>

            <div className={styles.standardsGrid}>
              {standardsData.map((standard) => (
                <div key={standard.id} className={styles.standardCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <FileText className={styles.standardIcon} />
                    </div>
                    <div className={styles.headerContent}>
                      <h3 className={styles.standardTitle}>{standard.title}</h3>
                      <div className={styles.statusBadge}>
                        <CheckCircle size={16} />
                        <span>{standard.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <p className={styles.standardDescription}>
                      {standard.description}
                    </p>
                  </div>

                  <div className={styles.cardFooter}>
                    <a
                      href={standard.pdfUrl}
                      download
                      className={styles.downloadButton}
                    >
                      <Download size={18} />
                      <span>Download Standard (PDF)</span>
                    </a>
                    <div className={styles.lastUpdated}>
                      Last updated: {formatDate(standard.lastUpdated)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Standards Matter Section */}
          <section className={styles.whyStandardsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Why Standards Matter</h2>
            </div>

            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <BookOpen size={24} />
                </div>
                <p>
                  Ensure uniformity and transparency in property valuations.
                </p>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <CheckCircle size={24} />
                </div>
                <p>
                  Protect the public interest by upholding ethical and
                  professional guidelines.
                </p>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <FileText size={24} />
                </div>
                <p>
                  Provide a benchmark for professional valuers, municipalities,
                  and government entities.
                </p>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <BookOpen size={24} />
                </div>
                <p>Align South Africa with global valuation best practices.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
