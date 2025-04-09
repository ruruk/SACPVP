import { AlertCircle } from "lucide-react";
import styles from "./construction-notice.module.css";

export default function ConstructionNotice() {
  return (
    <section className={styles.noticeSection}>
      <div className="container">
        <div className={styles.content}>
          <AlertCircle size={20} className={styles.icon} />
          <p className={styles.message}>
            <span className={styles.highlight}>Note:</span> Website under
            construction
          </p>
        </div>
      </div>
    </section>
  );
}
