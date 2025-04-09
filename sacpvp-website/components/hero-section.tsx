"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import styles from "./hero-section.module.css";

export default function HeroSection() {
  const scrollToLinks = () => {
    const linksSection = document.getElementById("links");
    if (linksSection) {
      linksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.logoContainer}>
              <Image
                src="/placeholder-logo.png"
                alt="SACPVP Logo"
                width={80}
                height={80}
                className={styles.logo}
              />
            </div>
            <h1 className={styles.title}>Our Website is Under Construction</h1>
            <p className={styles.description}>
              We're working on a brand new website to better serve the Property
              Valuers Profession in South Africa.
            </p>
            <div className={styles.cta}>
              <button onClick={scrollToLinks} className={styles.quickLinksBtn}>
                <span>Go to Quick Links</span>
                <ArrowDown size={18} />
              </button>
              <a href="#about" className={styles.learnMoreBtn}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
