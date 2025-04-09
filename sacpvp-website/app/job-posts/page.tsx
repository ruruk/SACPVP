import type { Metadata } from "next";
import JobPostsClient from "./JobPostsClient";

export const metadata: Metadata = {
  title: "Job Posts - SACPVP",
  description:
    "View available job opportunities in the property valuation profession. Find positions at municipalities, government departments, and private firms.",
  keywords:
    "SACPVP jobs, property valuer jobs, valuation career, South Africa property valuation jobs",
};

export default function JobPosts() {
  return <JobPostsClient />;
}
