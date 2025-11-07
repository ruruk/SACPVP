import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import styles from "./annual-report-section.module.css";

export default function AnnualReportSection() {
  return (
    <div className={styles.annualReportSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Annual Report 2024/2025</h2>

        <div className={styles.description}>
          <p>
            SACPVP achieved a second consecutive clean audit, restored financial
            stability, and made major progress in rebuilding governance and
            administrative systems. Key highlights include the successful
            migration of registration databases, updated CPD and HR policies,
            strengthened oversight of professional registrations, and continued
            development of national valuation standards aligned with IVS.
            Transformation within the profession shows positive growth in youth,
            women, and Black participation. The Council enters the new financial
            year focused on digital modernisation, expanded pathways into the
            profession, and strengthening partnerships across the valuation
            sector.
          </p>
        </div>

        <div className={styles.actionLink}>
          <Link href="/annual-report" className={styles.viewFullLink}>
            <FileText size={18} />
            <span>View Full Annual Report</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
