"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.topNav}>
          <div className="container">
            <h1 className={styles.companyName}>
              South African Council for the Property Valuers Profession
            </h1>
          </div>
        </div>

        <div className={styles.bottomNav}>
          <div className={`container ${styles.navContainer}`}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}></div>

              <nav className={styles.desktopNav}>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/announcements">Announcements</NavLink>
                <NavLink href="/legal">Legal</NavLink>
                <NavLink href="/standards">Standards</NavLink>
                <NavLink href="/registration">Registration</NavLink>
                <NavLink href="/examinations">Examinations</NavLink>
                <NavLink href="/job-posts">Job Posts</NavLink>
                <NavLink href="/registered-members">Registered Persons</NavLink>
                {/* <NavLink href="/womens-day" className={styles.womensMonth}>
                  Women's Month
                </NavLink> */}
              </nav>
            </div>

            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.mobileMenuLogo}></div>
            <h2 className={styles.mobileMenuTitle}>SACPVP</h2>
            <button
              className={styles.mobileMenuClose}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X size={28} />
            </button>
          </div>

          <nav className={styles.mobileMenuNav}>
            <NavLink href="/" onClick={() => setIsMenuOpen(false)} mobile>
              Home
            </NavLink>
            <NavLink
              href="/announcements"
              onClick={() => setIsMenuOpen(false)}
              mobile
            >
              Announcements
            </NavLink>
            <NavLink href="/legal" onClick={() => setIsMenuOpen(false)} mobile>
              Legal
            </NavLink>
            <NavLink
              href="/standards"
              onClick={() => setIsMenuOpen(false)}
              mobile
            >
              Standards
            </NavLink>
            <NavLink
              href="/registration"
              onClick={() => setIsMenuOpen(false)}
              mobile
            >
              Registration
            </NavLink>
            <NavLink
              href="/examinations"
              onClick={() => setIsMenuOpen(false)}
              mobile
            >
              Examinations
            </NavLink>
            <NavLink
              href="/job-posts"
              onClick={() => setIsMenuOpen(false)}
              mobile
            >
              Job Posts
            </NavLink>
            <NavLink
              href="/registered-members"
              onClick={() => setIsMenuOpen(false)}
              mobile
            >
              Registered Persons
            </NavLink>
            {/* <NavLink
              href="/womens-day"
              onClick={() => setIsMenuOpen(false)}
              mobile
              className={styles.womensMonth}
            >
              Women's Month
            </NavLink> */}
          </nav>

          <div className={styles.mobileMenuFooter}>
            <p>South African Council for the Property Valuers Profession</p>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({
  href,
  children,
  onClick,
  mobile = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
  className?: string;
}) {
  const linkClass = mobile
    ? `${styles.mobileNavLink} ${className}`
    : `${styles.navLink} ${className}`;

  return (
    <Link href={href} className={linkClass} onClick={onClick}>
      {children}
    </Link>
  );
}
