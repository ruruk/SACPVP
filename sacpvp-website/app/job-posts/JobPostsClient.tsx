"use client";

import {
  Briefcase,
  MapPin,
  Calendar,
  Building,
  Download,
  Clock,
  Mail,
  ExternalLink,
} from "lucide-react";
import jobPostsData from "@/data/job-posts.json";
import Header from "@/components/global/header";
import styles from "./job-posts.module.css";

export default function JobPostsClient() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison

  // Filter jobs based on closing date
  const currentJobs = jobPostsData.filter((job) => {
    const closingDate = new Date(job.closingDate);
    closingDate.setHours(23, 59, 59, 999); // Set to end of day
    return closingDate >= today;
  });

  const pastJobs = jobPostsData.filter((job) => {
    const closingDate = new Date(job.closingDate);
    closingDate.setHours(23, 59, 59, 999); // Set to end of day
    return closingDate < today;
  });

  return (
    <div className={styles.jobPostsPage}>
      <Header
        title="Available Jobs"
        subtitle="View available job opportunities in the property valuation profession"
        backgroundImage="/bannerImages/typing.jpeg"
      />

      <div className={styles.content}>
        <div className="container">
          {currentJobs.length > 0 ? (
            <div className={styles.jobsGrid}>
              {currentJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className={styles.noJobs}>
              <Briefcase size={48} className={styles.noJobsIcon} />
              <p>There are currently no available job positions.</p>
              <p>Please check back later for new opportunities.</p>
            </div>
          )}

          {pastJobs.length > 0 && (
            <>
              <h2 className={styles.sectionTitle}>Past Job Posts</h2>
              <div className={styles.jobsGrid}>
                {pastJobs.map((job) => (
                  <JobCard key={job.id} job={job} isPast={true} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function JobCard({ job, isPast = false }: { job: any; isPast?: boolean }) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const isHighlighted = job.featured === "true";

  return (
    <div
      className={`${styles.jobCard} ${isHighlighted ? styles.highlightedCard : ""}`}
      style={isPast ? { opacity: 0.7 } : {}}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          {job.companyLogo ? (
            <img
              src={job.companyLogo || "/placeholder.svg"}
              alt={`${job.organization} logo`}
              className={styles.companyLogo}
            />
          ) : (
            <Briefcase className={styles.jobIcon} />
          )}
        </div>
        <div className={styles.headerContent}>
          <h2 className={styles.jobTitle}>
            {job.title}
            {isPast && <span className={styles.expiredBadge}>(Expired)</span>}
          </h2>
          <div className={styles.organization}>
            <Building size={16} />
            <span>{job.organization}</span>
          </div>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.jobMeta}>
          <div className={styles.jobDetail}>
            <MapPin size={16} className={styles.detailIcon} />
            <span>{job.location}</span>
          </div>
          <div className={styles.jobDetail}>
            <Clock size={16} className={styles.detailIcon} />
            <span>{job.department}</span>
          </div>
          <div className={styles.jobDetail}>
            <Calendar size={16} className={styles.detailIcon} />
            <span>
              {isPast ? "Closed:" : "Closing:"} {formatDate(job.closingDate)}
            </span>
          </div>
        </div>

        <div className={styles.jobDescriptionContainer}>
          <p className={styles.jobDescription}>{job.description}</p>
          <div className={styles.requirements}>
            <strong>Requirements/Application:</strong>
            <p>{job.requirements}</p>
          </div>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.actionButtons}>
          {!isPast && (
            <>
              {job.pdfUrl && (
                <a href={job.pdfUrl} download className={styles.actionButton}>
                  <Download size={18} />
                  <span>Download Job Description</span>
                </a>
              )}
              {job.applicationEmail && (
                <a
                  href={`mailto:${job.applicationEmail}?subject=${encodeURIComponent(
                    job.applicationSubject || job.title
                  )}`}
                  className={styles.actionButton}
                >
                  <Mail size={18} />
                  <span>Apply via Email</span>
                </a>
              )}
              {job.linkedinUrl && (
                <a
                  href={job.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionButton}
                >
                  <ExternalLink size={18} />
                  <span>View on LinkedIn</span>
                </a>
              )}
              {job.additionalDocuments &&
                job.additionalDocuments.map((doc: any, index: number) => (
                  <a
                    key={index}
                    href={doc.url}
                    download
                    className={styles.actionButton}
                  >
                    <Download size={18} />
                    <span>{doc.label}</span>
                  </a>
                ))}
            </>
          )}
          {isPast && job.pdfUrl && (
            <a
              href={job.pdfUrl}
              download
              className={styles.actionButton}
              style={{ opacity: 0.6 }}
            >
              <Download size={18} />
              <span>View Job Description</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
