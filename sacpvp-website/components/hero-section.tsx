import Image from "next/image";
import styles from "./hero-section.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Image
              src="/placeholder-logo.png"
              alt="SACPVP Logo"
              width={100}
              height={100}
              className={styles.logo}
            />
          </div>

          <h1 className={styles.title}>Our Website is Under Construction</h1>

          <p className={styles.description}>
            We're working on a brand new website to better serve the Property
            Valuers Profession in South Africa.
          </p>

          <div className={styles.cta}>
            <a href="#links" className="btn btn-secondary">
              Explore Resources
            </a>
            <a href="#about" className={`btn ${styles.learnMoreBtn}`}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

