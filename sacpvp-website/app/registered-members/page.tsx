import type { Metadata } from "next";
import { Suspense } from "react";
import RegisteredMembersClient from "./RegisteredMembersClient";

export const metadata: Metadata = {
  title: "Registered Members - SACPVP",
  description:
    "Search for registered property valuers in South Africa. Verify registration status of property valuers and assessors.",
  keywords:
    "SACPVP members, registered property valuers, South Africa property valuation professionals, member search",
};

export default function RegisteredMembers() {
  return (
    <Suspense
      fallback={
        <div className="container py-10">Loading members search...</div>
      }
    >
      <RegisteredMembersClient />
    </Suspense>
  );
}
