import React from "react";
import XmasLights from "./xmas-lights";
import styles from "./closure-notice.module.css";

interface ClosureNoticeProps {
  className?: string;
}

export default function ClosureNotice({ className }: ClosureNoticeProps) {
  return (
    <section className={`${styles.closureSection} ${className || ""}`}>
      <XmasLights />
      <div className={styles.content}>
        <h3 className={styles.title}>Happy holidays!</h3>
        <p className={styles.message}>
          The SACPVP offices will be closed from{" "}
          <span className={styles.highlight}>12th December 2025</span> to{" "}
          <span className={styles.highlight}>7th January 2026</span>. We will be
          back in the office on{" "}
          <span className={styles.highlight}>7th January 2026</span>.
        </p>
      </div>
    </section>
  );
}
