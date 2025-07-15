import type { Metadata } from "next";
import IVSCClient from "./IVSCClient";

export const metadata: Metadata = {
  title: "IVSC - International Valuation Standards Council | SACPVP",
  description:
    "International Valuation Standards Council resources, updates, and announcements for South African property valuers.",
};

export default function IVSCPage() {
  return <IVSCClient />;
}
