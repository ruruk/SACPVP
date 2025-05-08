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
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-7VZBNP875Y`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7VZBNP875Y', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import Script from "next/script";
