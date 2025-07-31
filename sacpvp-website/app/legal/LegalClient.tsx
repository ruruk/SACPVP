"use client";

import { Download } from "lucide-react";
import styles from "./legal.module.css";
import legalData from "@/data/legal.json";

interface LegalDocument {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  category: string;
  lastUpdated: string;
}

export default function LegalClient() {
  const documents = legalData as LegalDocument[];

  return (
    <div className={styles.legal}>
      <h1 className={styles.title}>Legal Documents</h1>

      <div className={styles.documentsList}>
        {documents.length > 0 ? (
          documents.map((document) => (
            <div key={document.id} className={styles.documentCard}>
              <div className={styles.cardContent}>
                <div className={styles.documentInfo}>
                  <h3 className={styles.documentTitle}>{document.title}</h3>
                  <p className={styles.documentDescription}>
                    {document.description}
                  </p>
                  <div className={styles.documentMeta}>
                    <span className={styles.category}>{document.category}</span>
                  </div>
                </div>
                <div className={styles.actionButton}>
                  <a
                    href={document.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadLink}
                  >
                    <Download size={16} />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noDocuments}>
            <p>No legal documents available at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
}
