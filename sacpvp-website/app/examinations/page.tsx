import type { Metadata } from "next";
import ExaminationsClient from "./ExaminationsClient";

export const metadata: Metadata = {
  title: "Examinations - SACPVP",
  description:
    "Information about upcoming examinations and pre-exam workshops for property valuers in South Africa. View schedules and topics covered.",
  keywords:
    "SACPVP examinations, property valuer exams, South Africa valuation workshops, pre-exam preparation",
};

export default function Examinations() {
  return <ExaminationsClient />;
}
