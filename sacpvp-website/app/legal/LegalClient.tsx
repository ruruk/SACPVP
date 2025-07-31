"use client";

import { Download, FileText } from "lucide-react";
import legalData from "@/data/legal.json";
import Header from "@/components/global/header";
import styles from "./legal.module.css";

export default function LegalClient() {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Legislation: "#fecaca",
      "Professional Standards": "#bbf7d0",
      Registration: "#bfdbfe",
      Disciplinary: "#fed7aa",
      "Professional Development": "#e9d5ff",
      Fees: "#a7f3d0",
      Privacy: "#fce7f3",
      Insurance: "#d9f99d",
    };
    return colors[category] || "#e5e7eb";
  };

  return (
    <div className={styles.legalPage}>
      <Header
        title="Legal Documents"
        subtitle="Access important legal documents, legislation, and professional standards"
        backgroundImage="/bannerImages/legal.jpeg"
      />

      <div className={styles.content}>
        <div className="container">
          <div className={styles.documentsGrid}>
            {legalData.map((document) => (
              <div key={document.id} className={styles.documentCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <FileText className={styles.documentIcon} />
                  </div>
                  <div className={styles.headerContent}>
                    <h2 className={styles.documentTitle}>{document.title}</h2>
                    <div
                      className={styles.categoryBadge}
                      style={{
                        backgroundColor: getCategoryColor(document.category),
                        color: "#000000",
                      }}
                    >
                      {document.category}
                    </div>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.documentDescription}>
                    {document.description}
                  </p>
                </div>

                <div className={styles.cardFooter}>
                  <a
                    href={document.pdfUrl}
                    download
                    className={styles.downloadButton}
                  >
                    <Download size={18} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
