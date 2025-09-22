import type { Metadata } from "next";
import StandardsClient from "./StandardsClient";

export const metadata: Metadata = {
  title: "SAVS – South African Valuation Standards | SACPVP",
  description:
    "Download the latest South African Valuation Standards (SAVS), including International Valuation Standards (IVS) and Municipal Valuations for Property Rating (MVPR), as adopted by the South African Council for the Property Valuers Profession.",
  keywords:
    "SAVS, South African Valuation Standards, IVS, International Valuation Standards, MVPR, Municipal Valuations, property valuation standards, SACPVP",
};

export default function StandardsPage() {
  return <StandardsClient />;
}
