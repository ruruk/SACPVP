import type { Metadata } from "next";
import type React from "react";
import { GraduationCap, Award, FileText, Download } from "lucide-react";
import Link from "next/link";
import styles from "./registration.module.css";
import Header from "@/components/global/header";

export const metadata: Metadata = {
  title: "Registration",
  description:
    "Information about registering as a property valuer with the South African Council for the Property Valuers Profession. Learn about different registration types, requirements, and download application forms.",
  keywords: [
    "SACPVP registration",
    "property valuer registration",
    "South Africa property valuation certification",
    "professional valuer registration",
    "candidate valuer",
    "property assessor registration",
    "valuation profession certification",
    "registration application form",
  ],
  openGraph: {
    title: "Registration | SACPVP",
    description:
      "Information about registering as a property valuer with the South African Council for the Property Valuers Profession. Learn about different registration types and requirements.",
    images: [
      {
        url: "/bannerImages/typing.jpeg",
        width: 1200,
        height: 630,
        alt: "Property valuer registration process",
      },
    ],
  },
  twitter: {
    title: "Registration | SACPVP",
    description:
      "Information about registering as a property valuer with the South African Council for the Property Valuers Profession. Learn about different registration types and requirements.",
    images: ["/bannerImages/typing.jpeg"],
  },
};

export default function Registration() {
  return (
    <div className={styles.registrationPage}>
      <Header
        title="Registration"
        subtitle="Professional Valuer Registration Information"
        backgroundImage="/bannerImages/typing.jpeg"
      />

      <div
        className={`container ${styles.registration}`}
        style={{ padding: "10px", paddingBottom: "80px" }}
      >
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Select Your Registration Type</h2>
          <p className={styles.sectionDescription}>
            This is to clarify the type of registration certificates issued by
            SACPVP for various registration categories.
          </p>

          <div className={styles.cardGrid}>
            <RegistrationCard
              title="Candidate Valuers"
              icon={<GraduationCap size={24} />}
              items={[
                "A Candidate Valuer on his/her final years of valuation education will receive a 5 year certificate, both the electronic and paper (original) certificates",
                "A Candidate Valuer with a valuation qualification will receive a 5 year certificate, both electronic and paper (original)",
                "A Candidate Valuer registered with the SACPVP for more than 5 years will receive only a 1 year electronic certificate",
                "A Candidate Single Residential Property Assessor without a valuation qualification will receive only a 1 year electronic certificate",
                "A Candidate Single Residential Property Assessor who completed a valuation qualification will receive 5 year electronic and original certificate.",
              ]}
            />

            <RegistrationCard
              title="Professional Associated (Pr Aval) and Professional Valuers (Pr Val)"
              icon={<Award size={24} />}
              items={[
                "A CPD Compliant Pr AVal and Pr Val will receive a 5 year certificate, both electronic and paper (original) certificates with Gold crest",
                "A none-CPD compliant Pr AVal and Pr Val will receive only a 1 year electronic certificate.",
                "Professionals are required to have 50 CPD hours in a 5 year cycle.",
              ]}
            />
          </div>

          <div className={styles.note}>
            <strong>NB:</strong> Candidate valuers are required to submit their
            academic progress report each year. Those who have completed their
            studies and still receiving 1 year certificate should submit
            certificate copies of their academic transcripts and certificates to{" "}
            <a href="mailto:lerato@sacpvp.co.za">lerato@sacpvp.co.za</a>.
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Application Form for Registration
          </h2>
          <p className={styles.sectionDescription}>
            For registration as Professional Valuer, Professional Associated
            Valuer and Single Residential Property Assessor
          </p>

          <div className={styles.applicationNote}>
            <FileText size={24} className={styles.icon} />
            <p>
              You will be required further on to UPLOAD "EXPERIENCE MATRIX –
              SUMMARY OF THE VARIETY AND NATURE OF ALL EXPERIENCE IN PROPERTY
              VALUATION" Please download the template, complete it, save as PDF
              or Word and then keep it ready to UPLOAD further on.
            </p>
          </div>
        </section>

        <Link
          href="/Application_form_for_registr.pdf"
          className={styles.downloadButton}
        >
          <Download size={16} />
          Application form registration
        </Link>
        <Link href="/rules.pdf" className={styles.downloadButton}>
          <Download size={16} />
          Rules for the Property Valuers Profession, 2020
        </Link>
      </div>
    </div>
  );
}

function RegistrationCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {icon}
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <ul className={styles.cardList}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
