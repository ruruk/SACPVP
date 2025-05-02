"use client";

import { useState } from "react";
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
} from "lucide-react";
import styles from "./examinations.module.css";
import examinationsData from "@/data/examinations.json";
import type { JSX } from "react";

export default function ExaminationsClient() {
  const { upcomingExaminations, pastExaminations } = examinationsData;
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

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
        return <FileText />;
      default:
        return <Calendar />;
    }
  };

  return (
    <div className={styles.examinationsPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Examinations</h1>

        {/* Upcoming Examinations Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Calendar className={styles.sectionIcon} />
            Upcoming Examinations
          </h2>

          {upcomingExaminations.length > 0 ? (
            upcomingExaminations.map((exam) => (
              <div key={exam.id} className={styles.examinationCard}>
                <h3 className={styles.examTitle}>{exam.title}</h3>
                <div className={styles.eventInfo}>
                  <div className={styles.eventInfoItem}>
                    <MapPin className={styles.icon} />
                    <span>{exam.venue}</span>
                  </div>
                </div>

                {exam.pdfUrl && (
                  <a
                    href={exam.pdfUrl}
                    download
                    className={styles.downloadButton}
                  >
                    <Download size={20} />
                    Download Schedule PDF
                  </a>
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
                    {exam.events.map((event, index) => (
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
                Please check back later for updates or contact the SACPVP office
                for more information.
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
