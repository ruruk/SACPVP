import { Metadata } from "next";
import WomensDayClient from "./WomensDayClient";

export const metadata: Metadata = {
  title: "Women's Day 2025 - SACPVP",
  description:
    "Celebrating Women's Day 2025 and embracing vulnerability in the property valuation profession",
};

export default function WomensDayPage() {
  return <WomensDayClient />;
}
