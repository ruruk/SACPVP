import type { Metadata } from "next";
import { FileText, Download, BookOpen, Building2, GraduationCap } from "lucide-react";
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

const CATEGORIES = [
  "Professional Valuer",
  "Professional Associated Valuer",
  "Candidate Valuer",
  "Candidate Single Residential Property Assessor",
  "Single Residential Property Assessor",
];

const PR_VAL_REQUIREMENTS = [
  "Completed application form with the stamp of the Commissioner of Oaths on item 9 & 10",
  "Certified copy of qualification (strictly 4 years degree of accredited Real Estate) together with transcript",
  "Supervisory letter confirming that all valuations submitted were performed under his/her mentorship",
  "Registration and annual fee should be paid once passed the Pr Val board exam",
  "Certified copy of the ID",
  "Practical Workschool Certificate",
  "Submission of Valuation report with completed item 11.1 experience matrix",
  "Candidate Valuers with 4 years accredited qualification registered with the Council for 2 years or more could qualify to write the Pr Val Exam if their score is sufficient",
  "Curriculum Vitae must be submitted",
];

const PR_AVAL_REQUIREMENTS = [
  "Completed application form with the stamp of the Commissioner of Oaths on item 9 & 10",
  "Certified copy of accredited Real Estate qualification / transcript",
  "Supervisory letter confirming that all valuations submitted were performed under his/her mentorship",
  "Registration and annual fee should be paid once passed the Pr AVal board exam",
  "Certified copy of the ID",
  "Certified copy of matric certificate",
  "Practical Workschool Certificate",
  "Submission of Valuation report that corresponds item 11.1 experience matrix",
  "Curriculum vitae (CV) must be submitted",
];

const CANDIDATE_VAL_REQUIREMENTS = [
  "Completed application form with the stamp of the Commissioner of Oaths on item 9 & 10",
  "Certified copy of proof of enrolment for Real Estate Qualification",
  "Certified copy of qualification/ transcript",
  "Supervisory letter",
  "Proof of payment for application (non-refundable) and registration fee",
  "Certified copy of the ID",
  "Curriculum Vitae (CV)",
  "Certified copy of matric certificate",
];

const CPUT_FIRST_YEAR = [
  "Business Computer Applications (Formerly known as Principles of Information Systems)",
  "Communication",
  "Construction Technology (Formerly known as Property Practice 1)",
  "Property Economics & Finance 1",
  "Property Valuation 1",
];

const CPUT_SECOND_YEAR = [
  "Property Law",
  "Property Economics & Finance 2",
  "Property Marketing",
  "Property Valuation 2",
];

const UNIVERSITIES = [
  {
    name: "University of Pretoria",
    programmes: ["MSc Real Estate, or", "BSc (Hons) Property Studies together with BSc Real Estate"],
    badge: "Full Accreditation by SACPVP",
  },
  {
    name: "University of Free State",
    programmes: ["Master of Land and Property Development Management M.L.P.M. (M Prop)"],
    badge: "Conditional Accreditation by SACPVP",
  },
  {
    name: "University of Johannesburg",
    programmes: [
      "B Com Hons (Property Valuation & Management)",
      "B Com Finance",
      "Advanced Diploma in Property Valuation & Management; or",
      "Bridging Course in Property Valuation & Management (Refer to the University)",
    ],
    badge: "Full Accreditation",
  },
  {
    name: "University of Cape Town",
    programmes: [
      "BSc together with BSc (Hons) Property Studies (4 year degree),",
      "Post Graduate Diploma Property Studies, or",
      "MSc Property Studies",
    ],
    badge: "Full Accreditation by SACPVP",
  },
  {
    name: "Cape Peninsula University of Technology",
    programmes: [
      "National Diploma Real Estate (Property Valuation) – enrolment until 2017 – Full Accreditation",
      "Diploma Real Estate from 2018 Academic year offered as both contact and distance learning (SACPVP Accreditation visit pending until 2021)",
    ],
    badge: null,
  },
  {
    name: "University of the Witwatersrand (Wits University)",
    programmes: [
      "BSc Property Studies (4 year degree)",
      "Post Graduate Diploma in Property Development and Management",
      "MSc in Property Development and Management",
    ],
    badge: "Full Accreditation by SACPVP",
  },
];

export default function Registration() {
  return (
    <div className={styles.registrationPage}>
      <Header
        title="Registration"
        subtitle="Professional Valuer Registration Information"
        backgroundImage="/bannerImages/typing.jpeg"
      />

      <div className={`container ${styles.registration}`}>
        {/* Categories - Section 19 PVP Act */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>Section 19 of the PVP Act</span>
            <h2 className={styles.heroTitle}>
              Different Categories of Registration
            </h2>
            <p className={styles.heroDescription}>
              Choose the category that matches your qualification and career
              stage.
            </p>
            <ul className={styles.categoryPills}>
              {CATEGORIES.map((cat) => (
                <li key={cat} className={styles.categoryPill}>
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Registration requirements - cards */}
        <section className={styles.requirementsSection}>
          <h2 className={styles.sectionTitle}>Registration requirements</h2>
          <p className={styles.sectionLead}>
            Requirements by category. Ensure you have all documents and fees
            ready before applying.
          </p>

          <div className={styles.requirementCards}>
            {/* Professional Valuer */}
            <div className={styles.reqCard}>
              <div className={styles.reqCardHeader}>
                <div className={styles.reqCardIcon}>
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className={styles.reqCardTitle}>Professional Valuer</h3>
                  <span className={styles.reqCardBadge}>Pr Val</span>
                </div>
              </div>
              <ul className={styles.reqList}>
                {PR_VAL_REQUIREMENTS.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Professional Associated Valuer */}
            <div className={styles.reqCard}>
              <div className={styles.reqCardHeader}>
                <div className={styles.reqCardIcon}>
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className={styles.reqCardTitle}>
                    Professional Associated Valuer
                  </h3>
                  <span className={styles.reqCardBadge}>Pr AVal</span>
                </div>
              </div>
              <ul className={styles.reqList}>
                {PR_AVAL_REQUIREMENTS.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className={styles.reqCardNote}>
                Registration of a Pr AVal with restrictions
              </p>
            </div>

            {/* Candidate Valuer */}
            <div className={styles.reqCard}>
              <div className={styles.reqCardHeader}>
                <div className={styles.reqCardIcon}>
                  <BookOpen size={28} />
                </div>
                <div>
                  <h3 className={styles.reqCardTitle}>Candidate Valuer</h3>
                </div>
              </div>
              <ul className={styles.reqList}>
                {CANDIDATE_VAL_REQUIREMENTS.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Single Residential / CPUT Diploma */}
        <section className={styles.csrpaSection}>
          <div className={styles.csrpaCard}>
            <h2 className={styles.csrpaTitle}>
              Single Residential Property Valuer
            </h2>
            <p className={styles.csrpaSubtitle}>
              Candidate Single Residential Property Assessor —{" "}
              <strong>CSRPA</strong> / <strong>SRPA</strong>
            </p>
            <div className={styles.cputBlock}>
              <h4 className={styles.cputTitle}>
                Diploma in Real Estate – CPUT
              </h4>
              <div className={styles.cputColumns}>
                <div className={styles.cputColumn}>
                  <p className={styles.cputYearLabel}>First year</p>
                  <ul className={styles.cputList}>
                    {CPUT_FIRST_YEAR.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.cputColumn}>
                  <p className={styles.cputYearLabel}>Second year</p>
                  <ul className={styles.cputList}>
                    {CPUT_SECOND_YEAR.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Universities */}
        <section className={styles.universitiesSection}>
          <h2 className={styles.sectionTitle}>
            Accredited qualifications – Universities
          </h2>
          <p className={styles.sectionLead}>
            SACPVP-accredited programmes at South African institutions.
          </p>
          <div className={styles.universityGrid}>
            {UNIVERSITIES.map((uni) => (
              <div key={uni.name} className={styles.universityCard}>
                <div className={styles.universityCardHeader}>
                  <Building2 size={22} className={styles.universityIcon} />
                  <h4 className={styles.universityName}>{uni.name}</h4>
                </div>
                <ul className={styles.universityList}>
                  {uni.programmes.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                {uni.badge && (
                  <span className={styles.accreditationBadge}>{uni.badge}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Application form & downloads */}
        <section className={styles.applySection}>
          <div className={styles.applyCard}>
            <h2 className={styles.applyTitle}>
              Application form for registration
            </h2>
            <p className={styles.applyDescription}>
              For registration as Professional Valuer, Professional Associated
              Valuer and Single Residential Property Assessor.
            </p>
            <div className={styles.applicationNote}>
              <FileText size={24} className={styles.noteIcon} />
              <p>
                You will be required to UPLOAD &quot;EXPERIENCE MATRIX – SUMMARY
                OF THE VARIETY AND NATURE OF ALL EXPERIENCE IN PROPERTY
                VALUATION&quot;. Please download the template, complete it, save
                as PDF or Word and keep it ready to upload.
              </p>
            </div>
            <div className={styles.downloadButtons}>
              <Link
                href="/Application_form_for_registr.pdf"
                className={styles.downloadButton}
              >
                <Download size={18} />
                Application form registration
              </Link>
              <Link href="/rules.pdf" className={styles.downloadButtonSecondary}>
                <Download size={18} />
                Rules for the Property Valuers Profession, 2020
              </Link>
            </div>
          </div>
        </section>

        <div className={styles.note}>
          <strong>NB:</strong> Candidate valuers must submit their academic
          progress report each year. If you have completed your studies and still
          receive a 1-year certificate, submit certified copies of your
          transcripts and certificates to{" "}
          <a href="mailto:lerato@sacpvp.co.za">lerato@sacpvp.co.za</a>.
        </div>
      </div>
    </div>
  );
}
