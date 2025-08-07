"use client";

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import styles from "./womens-day-section.module.css";

export default function WomensDaySection() {
  return (
    <section className={styles.womensDaySection}>
      <div className="container">
        <div className={styles.womensDayCard}>
          <div className={styles.iconWrapper}>
            <Heart className={styles.icon} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Women's Day 2025</h3>
            <p className={styles.description}>
              Embracing vulnerability for professional growth and stronger
              relationships.
            </p>
          </div>
          <Link href="/womens-day" className={styles.button}>
            <span>Learn More</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
