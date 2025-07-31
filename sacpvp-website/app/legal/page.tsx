import type { Metadata } from "next";
import LegalClient from "./LegalClient";

export const metadata: Metadata = {
  title: "Legal Documents | SACPVP",
  description:
    "Access important legal documents, legislation, and professional standards for property valuers in South Africa.",
};

export default function LegalPage() {
  return <LegalClient />;
}
