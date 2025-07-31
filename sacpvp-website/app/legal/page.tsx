import type { Metadata } from "next";
import LegalClient from "./LegalClient";

export const metadata: Metadata = {
  title: "Legal Documents - SACPVP",
  description:
    "Access legal documents and regulatory information from the South African Council for the Property Valuers Profession.",
};

export default function LegalPage() {
  return <LegalClient />;
}
