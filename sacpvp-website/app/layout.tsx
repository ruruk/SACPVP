import type React from "react";
import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "SACPVP - Coming Soon",
  description:
    "South African Council for the Property Valuers Profession - New Website Coming Soon",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/placeholder-logo.png" />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: "120px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
