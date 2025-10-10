import type { Metadata } from "next";
import { Coffee, Users, BookOpen, MessageCircle } from "lucide-react";
import styles from "./workshop.module.css";

export const metadata: Metadata = {
  title: "Workshop Program",
  description:
    "View the schedule of workshops and professional development events for property valuers in South Africa. Stay updated on upcoming training opportunities and pre-exam workshops.",
  keywords: [
    "SACPVP workshops",
    "property valuer training",
    "South Africa valuation events",
    "professional development",
    "pre-exam workshop",
    "valuation training",
    "property assessment training",
    "professional development courses",
  ],
  openGraph: {
    title: "Workshop Program | SACPVP",
    description:
      "View the schedule of workshops and professional development events for property valuers in South Africa. Stay updated on upcoming training opportunities.",
    images: [
      {
        url: "/bannerImages/houses1.jpg",
        width: 1200,
        height: 630,
        alt: "Professional development workshops for property valuers",
      },
    ],
  },
  twitter: {
    title: "Workshop Program | SACPVP",
    description:
      "View the schedule of workshops and professional development events for property valuers in South Africa. Stay updated on upcoming training opportunities.",
    images: ["/bannerImages/houses1.jpg"],
  },
};

export default function WorkshopProgram() {
  const workshopData = [
    {
      date: "06 March 2025",
      schedule: [
        {
          time: "9:00am to 9:30am",
          topic: "Arrival (Registration)",
          icon: <Users />,
        },
        {
          time: "9:30am to 10:00am",
          topic: "Introduction (SACPVP) Registrar & Registration Team",
          icon: <Users />,
        },
        { time: "10:00am to 10:30am", topic: "Tea Break", icon: <Coffee /> },
        {
          time: "10:30am to 1:00pm",
          topic: "Time Value of Money: Mr Maarten van Doesburgh",
          icon: <BookOpen />,
        },
        { time: "1:00pm to 1:45pm", topic: "Lunch Break", icon: <Coffee /> },
        {
          time: "1:45pm to 4:30pm",
          topic:
            "Time Value of Money: Mr Maarten van Doesburgh Question & Answer session",
          icon: <MessageCircle />,
        },
      ],
    },
    {
      date: "07 March 2025",
      schedule: [
        {
          time: "9:00am to 9:30am",
          topic: "Arrival (Registration)",
          icon: <Users />,
        },
        {
          time: "9:30am to 10:30am",
          topic: "Time Value of Money: Mr Maarten van Doesburgh",
          icon: <BookOpen />,
        },
        { time: "10:30am to 11:00am", topic: "Tea Break", icon: <Coffee /> },
        {
          time: "11:00am to 12:00pm",
          topic: "General Board Examination Scope: Mr Maarten van Doesburgh",
          icon: <BookOpen />,
        },
        {
          time: "12:00pm to 1:30pm",
          topic: "Municipal Property Rates Act (as amended) & General Topics",
          icon: <BookOpen />,
        },
        { time: "1:30pm", topic: "Lunch and Departure", icon: <Coffee /> },
      ],
    },
  ];

  return (
    <div className={`container ${styles.workshopPage}`}>
      <h1 className={styles.title}>Pre-Exam Workshop Programme</h1>
      <p className={styles.subtitle}>6 & 7 March 2025</p>
      <p className={styles.venue}>
        Venue: Camblish Training Institute, 51 Harrison Street, Johannesburg,
        2001
      </p>

      {workshopData.map((day, index) => (
        <div key={index} className={styles.daySection}>
          <h2 className={styles.dayTitle}>
            Day {index + 1}: {day.date}
          </h2>
          <div className={styles.scheduleGrid}>
            {day.schedule.map((item, itemIndex) => (
              <div key={itemIndex} className={styles.scheduleCard}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.cardContent}>
                  <p className={styles.time}>{item.time}</p>
                  <p className={styles.topic}>{item.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className={styles.footer}>
        <p>Yours faithfully,</p>
        <p>ND Naidoo</p>
        <p>Registrar</p>
      </div>
    </div>
  );
}
