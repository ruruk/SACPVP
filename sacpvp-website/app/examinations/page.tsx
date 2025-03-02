import type { Metadata } from "next"
import { Calendar, MapPin, Coffee, Users, BookOpen, MessageCircle, FileText } from "lucide-react"
import styles from "./examinations.module.css"

export const metadata: Metadata = {
  title: "Examinations - SACPVP",
  description:
    "Information about upcoming examinations and pre-exam workshops for property valuers in South Africa. View schedules and topics covered.",
  keywords: "SACPVP examinations, property valuer exams, South Africa valuation workshops, pre-exam preparation",
}

export default function Examinations() {
  const workshopData = [
    {
      date: "06 March 2025",
      schedule: [
        { time: "9:00am to 9:30am", topic: "Arrival (Registration)", icon: <Users /> },
        { time: "9:30am to 10:00am", topic: "Introduction (SACPVP) Registrar & Registration Team", icon: <Users /> },
        { time: "10:00am to 10:30am", topic: "Tea Break", icon: <Coffee /> },
        { time: "10:30am to 1:00pm", topic: "Time Value of Money: Mr Maarten van Doesburgh", icon: <BookOpen /> },
        { time: "1:00pm to 1:45pm", topic: "Lunch Break", icon: <Coffee /> },
        {
          time: "1:45pm to 4:30pm",
          topic: "Time Value of Money: Mr Maarten van Doesburgh Question & Answer session",
          icon: <MessageCircle />,
        },
      ],
    },
    {
      date: "07 March 2025",
      schedule: [
        { time: "9:00am to 9:30am", topic: "Arrival (Registration)", icon: <Users /> },
        { time: "9:30am to 10:30am", topic: "Time Value of Money: Mr Maarten van Doesburgh", icon: <BookOpen /> },
        { time: "10:30am to 11:00am", topic: "Tea Break", icon: <Coffee /> },
        {
          time: "11:00am to 12:00pm",
          topic: "General Board Examination Scope: Mr Maarten van Doesburgh",
          icon: <BookOpen />,
        },
        {
          time: "12:00pm to 1:30pm",
          topic: "Municipal Property Rates Act (as amended) & General Topics",
          icon: <FileText />,
        },
        { time: "1:30pm", topic: "Lunch and Departure", icon: <Coffee /> },
      ],
    },
  ]

  return (
    <div className={styles.examinationsPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Pre-Exam Workshop Programme</h1>
        <div className={styles.eventInfo}>
          <div className={styles.eventInfoItem}>
            <Calendar className={styles.icon} />
            <span>6 & 7 March 2025</span>
          </div>
          <div className={styles.eventInfoItem}>
            <MapPin className={styles.icon} />
            <span>NG Kerk Stellastraat, 154 Stella Street, Waterkloof, Pretoria</span>
          </div>
        </div>

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
    </div>
  )
}

