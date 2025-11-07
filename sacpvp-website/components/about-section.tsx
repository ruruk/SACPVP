import styles from "./about-section.module.css"

export default function AboutSection() {
  return (
    <div id="about" className={styles.aboutSection}>
      <div className={styles.content}>
          <h2 className={styles.title}>About SACPVP</h2>

          <div className={styles.description}>
            <p>
              The South African Council for the Property Valuers Profession (SACPVP) is the regulatory body for the
              property valuation profession in South Africa.
            </p>

            <p>
              Our mission is to regulate, promote and protect the property valuers profession in the public interest.
            </p>

            <p>
              We are committed to maintaining the highest standards of professionalism, integrity, and competence within
              the property valuation industry.
            </p>

            <div className={styles.comingSoon}>
              <p>
                More detailed information about our organization, history, and services will be available on our new
                website.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

