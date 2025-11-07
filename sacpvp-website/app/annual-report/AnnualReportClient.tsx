"use client";

import {
  Download,
  FileText,
  CheckCircle,
  TrendingUp,
  Shield,
  Database,
  BookOpen,
  Users,
  Calendar,
  Award,
  BarChart3,
  FileCheck,
} from "lucide-react";
import Header from "@/components/global/header";
import styles from "./annual-report.module.css";

export default function AnnualReportClient() {
  const highlights = [
    {
      icon: <Award className={styles.highlightIcon} />,
      title: "Clean audit (second year running)",
      description: "Confirms sound financial management and improved controls.",
      color: "#10b981",
    },
    {
      icon: <TrendingUp className={styles.highlightIcon} />,
      title: "Return to surplus",
      description:
        "Cost containment and policy work (HR, finance, Delegation of Authority) stabilized finances.",
      color: "#3b82f6",
    },
    {
      icon: <Shield className={styles.highlightIcon} />,
      title: "Registration & oversight",
      description:
        "Stricter, more consistent exam/registration screening; standing records in place; public education against unregistered practice.",
      color: "#8b5cf6",
    },
    {
      icon: <Database className={styles.highlightIcon} />,
      title: "Digital foundations",
      description:
        "Phase 1 migration/integration of registration databases completed; website overhaul and online services (incl. e-registration/logbook) planned for 2025/26.",
      color: "#f59e0b",
    },
    {
      icon: <FileCheck className={styles.highlightIcon} />,
      title: "Standards & ethics",
      description:
        "IVS adopted and accessible to Registered Persons; Code of Ethics finalized; SA-specific standards development (e.g., municipal rating) progressing.",
      color: "#ef4444",
    },
    {
      icon: <BookOpen className={styles.highlightIcon} />,
      title: "Education/CPD",
      description:
        "Revised CPD policy approved; Practical Work School model strengthened; accreditation cycle maintained with 5 institutions.",
      color: "#06b6d4",
    },
    {
      icon: <Users className={styles.highlightIcon} />,
      title: "Transformation",
      description:
        "Positive trend lines for female and black participation; ongoing work with PSCC and VA partners to deepen impact.",
      color: "#ec4899",
    },
  ];

  const quickStats = [
    {
      title: "Letters of Good Standing issued (FY 2024/25)",
      items: [
        { label: "Candidate Valuers", value: "8" },
        { label: "Professional Associated Valuers", value: "12" },
        { label: "Professional Valuers", value: "61" },
      ],
    },
    {
      title: "Confirmation of Registration letters (FY 2024/25)",
      items: [
        { label: "Candidate Valuers", value: "5" },
        { label: "Professional Associated Valuers", value: "6" },
        { label: "Professional Valuers", value: "4" },
      ],
    },
  ];

  return (
    <div className={styles.annualReportPage}>
      <Header
        title="SACPVP Annual Report 2024/2025"
        subtitle="Download the official Annual Report and view a concise summary of the year's performance, governance, and transformation progress."
        backgroundImage="/bannerImages/houses1.jpg"
      />

      <div className={styles.content}>
        <div className="container">
          {/* Executive Summary Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FileText className={styles.sectionIcon} />
              Executive Summary
            </h2>
            <div className={styles.summaryCard}>
              <div className={styles.summaryContent}>
                <p>
                  SACPVP delivered a second consecutive clean (unqualified)
                  audit and shifted from prior losses to a modest surplus
                  through tight cost containment and stronger internal controls.
                  The Council advanced its seven-goal strategy—protecting the
                  public, strengthening governance and finances, deepening
                  reciprocal partnerships, tightening registration oversight,
                  progressing rules and standards, expanding education/CPD and
                  accreditation, and accelerating transformation. Notable
                  operational moves included database migration (enabling better
                  stats and future e-services), a revised CPD policy, and
                  groundwork for a national "Gold Book" of SA valuation
                  standards aligned to IVS.
                </p>
              </div>
            </div>
          </section>

          {/* Key Highlights Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <BarChart3 className={styles.sectionIcon} />
              Key Highlights
            </h2>
            <div className={styles.highlightsGrid}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlightCard}>
                  <div className={styles.highlightCardHeader}>
                    <div
                      className={styles.highlightIconWrapper}
                      style={{ backgroundColor: `${highlight.color}15` }}
                    >
                      <span style={{ color: highlight.color }}>
                        {highlight.icon}
                      </span>
                    </div>
                    <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                  </div>
                  <div className={styles.highlightCardContent}>
                    <p className={styles.highlightDescription}>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Stats Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <BarChart3 className={styles.sectionIcon} />
              Quick Stats
            </h2>
            <div className={styles.statsGrid}>
              {quickStats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statCardHeader}>
                    <h3 className={styles.statTitle}>{stat.title}</h3>
                  </div>
                  <div className={styles.statCardContent}>
                    <div className={styles.statItems}>
                      {stat.items.map((item, itemIndex) => (
                        <div key={itemIndex} className={styles.statItem}>
                          <span className={styles.statBadge}>{item.value}</span>
                          <span className={styles.statLabel}>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Download Section */}
          <section className={styles.section}>
            <div className={styles.downloadCard}>
              <div className={styles.downloadContent}>
                <div className={styles.downloadInfo}>
                  <FileText className={styles.downloadIcon} />
                  <div>
                    <h3 className={styles.downloadTitle}>
                      Download Annual Report
                    </h3>
                    <p className={styles.downloadDescription}>
                      Get the complete Annual Report and Audited Financial
                      Statements for the 2024/2025 financial year.
                    </p>
                  </div>
                </div>
                <a
                  href="/misc/Annual Report and AFS 2024_25_Final.pdf"
                  download
                  className={styles.secondaryButton}
                >
                  <Download size={18} />
                  <span>Download Annual Report (PDF)</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
