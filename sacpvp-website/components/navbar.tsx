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

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
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
              <NavLink href="/announcements.html">Announcements</NavLink>
              <NavLink href="/legal.html">Legal</NavLink>
              <NavLink href="/ivsc.html">IVSC</NavLink>
              <NavLink href="/registration.html">Registration</NavLink>
              <NavLink href="/examinations.html">Examinations</NavLink>
              <NavLink href="/job-posts.html">Job Posts</NavLink>
              <NavLink href="/registered-members.html">
                Registered Persons
              </NavLink>
            </nav>
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileNav}>
          <nav className="container">
            <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink
              href="/announcements.html"
              onClick={() => setIsMenuOpen(false)}
            >
              Announcements
            </NavLink>
            <NavLink href="/legal.html" onClick={() => setIsMenuOpen(false)}>
              Legal
            </NavLink>
            <NavLink href="/ivsc.html" onClick={() => setIsMenuOpen(false)}>
              IVSC
            </NavLink>
            <NavLink
              href="/registration.html"
              onClick={() => setIsMenuOpen(false)}
            >
              Registration
            </NavLink>
            <NavLink
              href="/examinations.html"
              onClick={() => setIsMenuOpen(false)}
            >
              Examinations
            </NavLink>
            <NavLink
              href="/job-posts.html"
              onClick={() => setIsMenuOpen(false)}
            >
              Job Posts
            </NavLink>
            <NavLink
              href="/registered-members.html"
              onClick={() => setIsMenuOpen(false)}
            >
              Registered Persons
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link href={href} className={styles.navLink} onClick={onClick}>
      {children}
    </Link>
  );
}
