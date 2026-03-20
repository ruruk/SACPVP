"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  MapPin,
  Coffee,
  Users,
  BookOpen,
  MessageCircle,
  FileText,
  Download,
  AlertCircle,
  History,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  CalendarDays,
  CheckCircle,
  User,
  Laptop,
} from "lucide-react";
import styles from "./examinations.module.css";
import examinationsData from "@/data/examinations.json";
import type { JSX } from "react";
import Header from "@/components/global/header";
import { useSearchParams } from "next/navigation";

export default function ExaminationsClient() {
  const { upcomingExaminations, pastExaminations } = examinationsData;
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [showExamNotice, setShowExamNotice] = useState(false);
  const searchParams = useSearchParams();

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  useEffect(() => {
    if (searchParams.get("examInfo") === "open") {
      setShowExamNotice(true);
    }
  }, [searchParams]);

  const officialExamRules = [
    "It is your responsibility to ensure that you receive the CORRECT EXAMINATION PAPER.",
    "Fill in the Examination centre and your Registration number only.",
    "The duration of the Examination is three (3) hours.",
    "Devices allowed: In line with technology advancements and international Best Practice, blank spreadsheets on a laptop are allowed and a financial calculator may be used.",
    "NB: All personal items, pens and pencils must be placed in a designated location of the examination venue. If you have used a Spreadsheet, please ensure that you state that clearly on the 1st page of Section C.",
    "Ensure that you email your spreadsheet to registrar@sacpvp.co.za and vandoesburghm@cput.ac.za before leaving the venue.",
    "Examinees using Laptops: Complete Section A & B and hand in hard-copy script answers for A & B BEFORE requesting to open spreadsheet on Laptop. Examinees cannot return to Section A & B after opening Laptop.",
    "The PASS MARK is 60%; and a sub-minimum of 40% is required for the section on Time Value of Money (TVM).",
    "Do not add or remove any page from the examination paper.",
    "No eating or drinking will be allowed during the examination.",
    "Candidates must not speak to each other, cheat, exchange books, notes or equipment while the examination is in session. Any books or notes found in use during the examination will be confiscated. An investigation by the Council will be conducted and the candidate's results may be disqualified.",
    "Answers MUST be completed only on the supplied question paper. Answers on any other paper/s will not be marked.",
    "Rough work or further calculations are allowed on the blank pages within the examination paper.",
    "It is an offence to use any other paper except the paper supplied. Rough work or writing not done on these papers will be confiscated.",
    "No examination papers/scripts may be removed from the examination room.",
    "Read questions carefully and answer all or as many questions as possible (during the allotted time). Where applicable, please number all answers clearly.",
    "Please write legibly. Illegible answers will not be marked.",
    "Use of cell phones is not permissible. Laptop with no access to internet or device with spreadsheet application is permissible, but no access to internet or any other applications is allowed.",
    "Firearms and any dangerous weapons are not allowed in the examination rooms. The invigilator's ruling on what constitutes a dangerous weapon is final.",
    "Disciplinary action will be taken against all those found in transgression of any of these rules and may lead to disqualification from the examination and suspension from future examinations.",
    "Viewing of examination scripts: A fee must be paid within five working days of issuance of examination results, and the script should be viewed within seven working days of issuance of examination results. No viewing of scripts of Supplementary examinations is allowed.",
    "Spreadsheets must be emailed to: vandoesburghm@cput.ac.za and a copy to registrar@sacpvp.co.za before leaving the examination venue.",
    "Scripts received late will not be marked, as academic integrity of the assessment cannot be compromised.",
    "Ensure your correct registration number appears in your spreadsheet, save the spreadsheet with your registration number in the content/title of your email.",
    "If you experience any difficulty emailing your spreadsheet, speak to the Invigilator and ensure that a copy of your spreadsheet is saved on a device by the Invigilator before leaving the Exam venue.",
    "Council reserves the right to CANCEL the examination should it be established that irregularities occurred.",
  ];

  const officialExamDownloads = [
    {
      title: "Cape Town Examination Venue",
      url: "/announcements/20-03-26/Announcement - Cape Town_March 2026.pdf",
    },
    {
      title: "Durban Examination Venue",
      url: "/announcements/20-03-26/Announcement - Durban_March 2026.pdf",
    },
    {
      title: "East London Examination Venue",
      url: "/announcements/20-03-26/Announcement East London_March 2026.pdf",
    },
    {
      title: "Port Elizabeth Examination Venue",
      url: "/announcements/20-03-26/Announcement Port Elizabeth_March 2026.pdf",
    },
    {
      title: "Pretoria Examination Venue",
      url: "/announcements/20-03-26/Announcement Pretoria_March 2026.pdf",
    },
    {
      title: "Examination Rules - March 2026",
      url: "/examinations/20-03-26/BOARD EXAMINATION RULES_MARCH 2026[46].pdf",
    },
    {
      title: "Examination Venues - Various",
      url: "/examinations/20-03-26/BOARD EXAMINATION VENUES_VARIOUS.pdf",
    },
  ];

  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users />;
      case "coffee":
        return <Coffee />;
      case "book":
        return <BookOpen />;
      case "message":
        return <MessageCircle />;
      case "file":
      case "file-text":
        return <FileText />;
      case "alert-circle":
        return <AlertCircle />;
      case "check-circle":
        return <CheckCircle />;
      case "dollar-sign":
        return <DollarSign />;
      case "user":
        return <User />;
      default:
        return <Calendar />;
    }
  };

  return (
    <>
      <Header
        title="Examinations"
        subtitle="View all past or upcomming events"
        backgroundImage="/bannerImages/typing.jpeg"
      />
      <div className={styles.examinationsPage}>
        <div className="container">
          {/* Board Examination Notice Accordion */}
          <section className={styles.examNoticeAccordion}>
            <div className={styles.examNoticeHeader}>
              <h2 className={styles.examNoticeTitle}>
                Board Examination - 25 March 2026
              </h2>
              <button
                className={styles.examNoticeToggle}
                onClick={() => setShowExamNotice(!showExamNotice)}
                aria-expanded={showExamNotice}
                aria-label="Toggle board examination information"
              >
                <span>{showExamNotice ? "Hide info" : "View all info"}</span>
                {showExamNotice ? (
                  <ChevronUp className={styles.toggleIcon} />
                ) : (
                  <ChevronDown className={styles.toggleIcon} />
                )}
              </button>
            </div>

            <div className={styles.compactDownloadButtons}>
              {officialExamDownloads.map((pdf) => (
                <a
                  key={pdf.url}
                  href={pdf.url}
                  download
                  className={styles.compactDownloadButton}
                >
                  <Download size={16} />
                  {pdf.title}
                </a>
              ))}
            </div>

            {showExamNotice && (
              <div className={styles.expandedNoticeContent}>
                <div className={styles.globalExamCards}>
                  <div className={styles.globalCard}>
                    <h3 className={styles.globalCardTitle}>
                      <Calendar className={styles.globalCardIcon} />
                      Examination Details
                    </h3>
                    <ul className={styles.globalList}>
                      <li>Date: 25 March 2026</li>
                      <li>Time: 10:00 - 13:00</li>
                      <li>Duration: 3 hours</li>
                      <li>Format: In-person (physical pen and paper)</li>
                      <li>Type: Closed book</li>
                      <li>Arrival Time: 09:45 (15 minutes before start)</li>
                      <li>Late Entry Cut-off: 11:00</li>
                    </ul>
                  </div>

                  <div className={styles.globalCard}>
                    <h3 className={styles.globalCardTitle}>
                      <AlertCircle className={styles.globalCardIcon} />
                      Important Rules
                    </h3>
                    <ul className={styles.globalList}>
                      <li>The examination is not virtual</li>
                      <li>Candidates must be seated by 09:45</li>
                      <li>No entry allowed after 11:00</li>
                      <li>
                        No leaving before 11:00 (unless approved by invigilator)
                      </li>
                      <li>
                        You must bring a valid ID document or driver's licence
                      </li>
                      <li>Only allowed items: pen, ruler, calculator</li>
                    </ul>
                  </div>

                  <div className={styles.globalCard}>
                    <h3 className={styles.globalCardTitle}>
                      <Laptop className={styles.globalCardIcon} />
                      Laptop Policy
                    </h3>
                    <ul className={styles.globalList}>
                      <li>Complete Sections A & B first</li>
                      <li>
                        Submit hard-copy answers before opening spreadsheet
                      </li>
                      <li>
                        You may not return to Sections A & B after opening your
                        laptop
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.venuesSection}>
                  <h3 className={styles.venuesTitle}>
                    <MapPin className={styles.globalCardIcon} />
                    Venue Sections
                  </h3>
                  <div className={styles.venuesGrid}>
                    <div className={styles.venueCard}>
                      <h4>Cape Town</h4>
                      <p>Cape Peninsula University of Technology (CPUT)</p>
                      <p>Real Estate Department (Unit of Applied Economics)</p>
                      <p>Room E3.39, Engineering Building</p>
                      <p>c/o Keizergracht & Tennant Street</p>
                      <p>Zonnebloem</p>
                      <p>Cape Town</p>
                      <p>8001</p>
                    </div>

                    <div className={styles.venueCard}>
                      <h4>Durban</h4>
                      <p>Embassy Building</p>
                      <p>15th Floor</p>
                      <p>199 Anton Lembede Street (Smith)</p>
                      <p>Durban</p>
                      <p>4001</p>
                    </div>

                    <div className={styles.venueCard}>
                      <h4>East London</h4>
                      <p>1 Cavendish Road</p>
                      <p>Vincent (Second Office)</p>
                      <p>East London</p>
                      <p>5247</p>
                    </div>

                    <div className={styles.venueCard}>
                      <h4>Port Elizabeth (Gqeberha)</h4>
                      <p>Beach Hotel</p>
                      <p>Marine Drive, Summerstrand</p>
                      <p>Port Elizabeth</p>
                      <p>6000</p>
                    </div>

                    <div className={styles.venueCard}>
                      <h4>Pretoria</h4>
                      <p>NG Kerk</p>
                      <p>158 Stella Street</p>
                      <p>Waterkloof</p>
                      <p>Pretoria</p>
                      <p>0181</p>
                    </div>
                  </div>
                </div>

                <div className={styles.officialRulesSection}>
                  <h3 className={styles.officialRulesTitle}>
                    SA Council for the Property Valuers Profession - Official
                    Notice
                  </h3>

                  <div className={styles.authorityBlock}>
                    <p>
                      77 Kariba Street, Lynnwood Glen, PRETORIA 0081 | Tel: +27
                      12 348 8643 | PO Box 114, MENLYN 0063
                    </p>
                    <p>info@sacpvp.co.za • www.sacpvp.co.za</p>
                    <p>
                      The SACPVP, a juristic person established by section 2 of
                      the Property Valuers Profession Act, 2000 (Act No. 47 of
                      2000)
                    </p>
                    <p>
                      <strong>Council Members:</strong> Cloete J F (President),
                      Dlamini T M (Vice President), Chidi M, Cowden G M,
                      Ramlugaan R, Matseba M H, Letsaba S R, Viljoen H M, Du
                      Toit JF, Mthuli MPL
                    </p>
                    <p>
                      <strong>Registrar:</strong> Naidoo ND
                    </p>
                  </div>

                  <h4 className={styles.rulesHeading}>EXAMINATION RULES</h4>
                  <p className={styles.rulesIntro}>
                    The examination is written under strict examination
                    conditions. You are required to sign your name as acceptance
                    and agreement of the rules and confirmation that no access
                    to internet or any information other than the use of the
                    spreadsheet for the TVM / DCF calculations with your device.
                  </p>

                  <ol className={styles.officialRulesList}>
                    {officialExamRules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ol>

                  <p className={styles.rulesClosing}>
                    Good luck in the Examination.
                  </p>
                  <p className={styles.rulesClosing}>Your Faithfully</p>
                  <p className={styles.rulesClosing}>ND Naidoo</p>
                  <p className={styles.rulesClosing}>Registrar</p>
                </div>
              </div>
            )}
          </section>

          {/* Upcoming Examinations Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Calendar className={styles.sectionIcon} />
              Upcoming Examinations
            </h2>

            {upcomingExaminations.length > 0 ? (
              upcomingExaminations.map((exam: any) => (
                <div key={exam.id} className={styles.examinationCard}>
                  <h3 className={styles.examTitle}>{exam.title}</h3>
                  <div className={styles.eventInfo}>
                    <div className={styles.eventInfoItem}>
                      <MapPin className={styles.icon} />
                      <span>{exam.venue}</span>
                    </div>
                    {exam.date && (
                      <div className={styles.eventInfoItem}>
                        <Calendar className={styles.icon} />
                        <span>{exam.date}</span>
                      </div>
                    )}
                  </div>

                  {exam.pdfUrl && (
                    <a
                      href={exam.pdfUrl}
                      download
                      className={styles.downloadButton}
                    >
                      <Download size={20} />
                      Download PDF
                    </a>
                  )}

                  {exam.pdfUrls && exam.pdfUrls.length > 0 && (
                    <div className={styles.pdfLinks}>
                      {exam.pdfUrls.map((pdf: any, index: number) => (
                        <a
                          key={index}
                          href={pdf.url}
                          download
                          className={styles.downloadButton}
                          style={{ marginLeft: "10px" }}
                        >
                          <Download size={20} />
                          {pdf.title}
                        </a>
                      ))}
                    </div>
                  )}

                  {exam.days && (
                    <ExaminationDetails
                      examination={exam}
                      renderIcon={renderIcon}
                    />
                  )}

                  {exam.events && (
                    <div className={styles.eventsTable}>
                      <div className={styles.tableHeader}>
                        <div className={styles.tableHeaderCell}>
                          <CalendarDays className={styles.tableIcon} />
                          Event
                        </div>
                        <div className={styles.tableHeaderCell}>
                          <Clock className={styles.tableIcon} />
                          Registration Period
                        </div>
                        <div className={styles.tableHeaderCell}>
                          <Calendar className={styles.tableIcon} />
                          Event Date
                        </div>
                        <div className={styles.tableHeaderCell}>
                          <DollarSign className={styles.tableIcon} />
                          Payment Due Date
                        </div>
                      </div>
                      {exam.events.map((event: any, index: number) => (
                        <div key={index} className={styles.tableRow}>
                          <div className={styles.tableCell}>
                            {event.eventType}
                          </div>
                          <div className={styles.tableCell}>
                            {event.registrationPeriod}
                          </div>
                          <div className={styles.tableCell}>
                            {event.eventDate}
                          </div>
                          <div className={styles.tableCell}>
                            {event.paymentDueDate}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {exam.noticeType === "important" && exam.sections && (
                    <div className={styles.noticeContainer}>
                      {exam.sections.map((section: any, index: number) => (
                        <div key={index} className={styles.noticeSection}>
                          <h4 className={styles.noticeSectionTitle}>
                            {renderIcon(section.icon)}
                            <span>{section.title}</span>
                          </h4>
                          <ul className={styles.noticeList}>
                            {section.items.map((item: any, itemIndex: number) => (
                              <li key={itemIndex} className={styles.noticeItem}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {exam.contacts && (
                        <div className={styles.contactsSection}>
                          {exam.contacts.map((contact: any, index: number) => (
                            <div key={index} className={styles.contactItem}>
                              <strong>{contact.title}:</strong> {contact.name}
                            </div>
                          ))}
                          <div className={styles.noticeDate}>
                            <strong>Date:</strong> {exam.noticeDate}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className={styles.footer}>
                    <p>Yours faithfully,</p>
                    <p>ND Naidoo</p>
                    <p>Registrar</p>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noExaminations}>
                <div className={styles.iconContainer}>
                  <AlertCircle className={styles.alertIcon} />
                </div>
                <p>There are currently no upcoming examinations scheduled.</p>
                <p className={styles.checkBack}>
                  Please check back later for updates or contact the SACPVP
                  office for more information.
                </p>
              </div>
            )}
          </section>

          {/* Past Examinations Section */}
          {pastExaminations.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <History className={styles.sectionIcon} />
                Past Examinations
              </h2>

              <div className={styles.accordionContainer}>
                {pastExaminations.map((exam, index) => (
                  <div key={exam.id} className={styles.accordionItem}>
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={openAccordion === index}
                    >
                      <div className={styles.accordionTitle}>
                        <h3>{exam.title}</h3>
                        <p className={styles.accordionDate}>{exam.date}</p>
                      </div>
                      {openAccordion === index ? (
                        <ChevronUp className={styles.accordionIcon} />
                      ) : (
                        <ChevronDown className={styles.accordionIcon} />
                      )}
                    </button>

                    <div
                      className={`${styles.accordionContent} ${
                        openAccordion === index ? styles.accordionOpen : ""
                      }`}
                    >
                      <ExaminationDetails
                        examination={exam}
                        renderIcon={renderIcon}
                        isPast={true}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );

  function ExaminationDetails({
    examination,
    renderIcon,
    isPast = false,
  }: {
    examination: any;
    renderIcon: (iconName: string) => JSX.Element;
    isPast?: boolean;
  }) {
    return (
      <div
        className={`${styles.examinationDetails} ${
          isPast ? styles.pastExam : ""
        }`}
      >
        <div className={styles.eventInfo}>
          <div className={styles.eventInfoItem}>
            <MapPin className={styles.icon} />
            <span>{examination.venue}</span>
          </div>
        </div>

        {examination.pdfUrl && isPast && (
          <a
            href={examination.pdfUrl}
            download
            className={styles.downloadButton}
          >
            <Download size={20} />
            Download Schedule PDF
          </a>
        )}

        {examination.days &&
          examination.days.map((day: any, index: number) => (
            <div key={index} className={styles.daySection}>
              <h4 className={styles.dayTitle}>
                Day {index + 1}: {day.date}
              </h4>
              <div className={styles.scheduleGrid}>
                {day.schedule.map((item: any, itemIndex: number) => (
                  <div key={itemIndex} className={styles.scheduleCard}>
                    <div className={styles.iconWrapper}>
                      {renderIcon(item.icon)}
                    </div>
                    <div className={styles.cardContent}>
                      <p className={styles.time}>{item.time}</p>
                      <p className={styles.topic}>{item.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    );
  }
}
