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
import styles from "./job-posts.module.css";

export default function JobPostsClient() {
  return (
    <div className={styles.jobPostsPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Available Jobs</h1>
        <p className={styles.pageDescription}>
          View available job opportunities in the property valuation profession
        </p>

        {jobPostsData.length > 0 ? (
          <div className={styles.jobList}>
            {jobPostsData.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className={styles.noJobs}>
            <Briefcase size={48} className={styles.noJobsIcon} />
            <p>There are currently no job postings available.</p>
            <p>Please check back later for new opportunities.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function JobCard({ job }: { job: any }) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={styles.jobCard}>
      <div className={styles.jobCardMain}>
        <div className={styles.jobCardHeader}>
          <div className={styles.iconWrapper}>
            <Briefcase className={styles.jobIcon} />
          </div>
          <div className={styles.headerContent}>
            <h2 className={styles.jobTitle}>{job.title}</h2>
            <div className={styles.organization}>
              <Building size={16} />
              <span>{job.organization}</span>
            </div>
          </div>
        </div>

        <div className={styles.jobCardBody}>
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
              <span>Closing: {formatDate(job.closingDate)}</span>
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
      </div>

      <div className={styles.jobCardFooter}>
        {job.pdfUrl ? (
          <a href={job.pdfUrl} download className={styles.downloadButton}>
            <Download size={18} />
            <span>Download Job Description</span>
          </a>
        ) : job.applicationEmail ? (
          <div className={styles.applicationButtons}>
            <a
              href={`mailto:${
                job.applicationEmail
              }?subject=${encodeURIComponent(
                job.applicationSubject || job.title
              )}`}
              className={styles.applyButton}
            >
              <Mail size={18} />
              <span>Apply via Email</span>
            </a>
            {job.linkedinUrl && (
              <a
                href={job.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinButton}
              >
                <ExternalLink size={18} />
                <span>View on LinkedIn</span>
              </a>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
