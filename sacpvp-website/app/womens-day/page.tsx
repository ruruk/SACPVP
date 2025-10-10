import { Metadata } from "next";
import WomensDayClient from "./WomensDayClient";

export const metadata: Metadata = {
  title: "Women's Day 2025",
  description: "Celebrating Women's Day 2025 and embracing vulnerability in the property valuation profession. Join SACPVP in recognizing the contributions of women in property valuation.",
  keywords: [
    "Women's Day 2025",
    "SACPVP women's day",
    "women in property valuation",
    "property valuation diversity",
    "women professionals",
    "embracing vulnerability",
    "professional women",
    "property industry women"
  ],
  openGraph: {
    title: "Women's Day 2025 | SACPVP",
    description: "Celebrating Women's Day 2025 and embracing vulnerability in the property valuation profession.",
    images: [
      {
        url: '/bannerImages/women.jpeg',
        width: 1200,
        height: 630,
        alt: 'Women's Day celebration in property valuation profession',
      },
    ],
  },
  twitter: {
    title: "Women's Day 2025 | SACPVP",
    description: "Celebrating Women's Day 2025 and embracing vulnerability in the property valuation profession.",
    images: ['/bannerImages/women.jpeg'],
  },
};

export default function WomensDayPage() {
  return <WomensDayClient />;
}
