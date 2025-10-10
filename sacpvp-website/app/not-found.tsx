import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/global/header";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found - 404",
  description:
    "The page you're looking for doesn't exist. Return to the SACPVP homepage or browse our available sections including announcements, examinations, and member directory.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <Header
        title="Page Not Found"
        subtitle="The page you're looking for doesn't exist"
        backgroundImage="/bannerImages/houses.jpeg"
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.errorCode}>404</div>

          <h2 className={styles.title}>Oops! Page Not Found</h2>

          <p className={styles.description}>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.homeButton}>
              Return to Homepage
            </Link>

            <Link href="/announcements" className={styles.announcementsButton}>
              View Announcements
            </Link>
          </div>

          <div className={styles.helpSection}>
            <h3>What can you do?</h3>
            <ul className={styles.helpList}>
              <li>Check the URL for any typos</li>
              <li>
                Go back to the <Link href="/">homepage</Link>
              </li>
              <li>
                Browse our{" "}
                <Link href="/announcements">latest announcements</Link>
              </li>
              <li>
                Search for{" "}
                <Link href="/registered-members">registered members</Link>
              </li>
              <li>
                View available <Link href="/job-posts">job opportunities</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
