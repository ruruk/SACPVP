import type React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* About */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>SACPVP</h3>
            <p className={styles.sectionDescription}>
              South African Council for the Property Valuers Profession
            </p>
            <div className={styles.socialIcons}>
              <SocialIcon icon={<Facebook size={20} />} href="#" />
              <SocialIcon icon={<Twitter size={20} />} href="#" />
              <SocialIcon icon={<Linkedin size={20} />} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/announcements.html">Announcements</FooterLink>
              <FooterLink href="/registration.html">Registration</FooterLink>
              <FooterLink href="/examinations.html">Examinations</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Resources</h3>
            <ul className={styles.linkList}>
              <FooterLink href="#">Annual Reports</FooterLink>
              <FooterLink href="#">Legislation</FooterLink>
              <FooterLink href="#">Forms & Documents</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone size={20} className={styles.contactIcon} />
                <span>012 348 8643</span>
              </li>
              <li className={styles.contactItem}>
                <Mail size={20} className={styles.contactIcon} />
                <span>info@sacpvp.co.za</span>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={20} className={styles.contactIcon} />
                <span>Pretoria, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} SACPVP. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="#" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="#" className={styles.legalLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className={styles.footerLink}>
        <ArrowRight size={16} className={styles.linkIcon} />
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className={styles.socialIcon}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
