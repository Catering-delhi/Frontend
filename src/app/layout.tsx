// src/app/layout.tsx
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

import AppProviders from "@/components/providers/AppProviders";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollTop from "@/components/layout/ScrollTop";
import Preloader from "@/components/layout/Preloader";

export const metadata: Metadata = {
  title: "Restaurantly",
  description: "Restaurantly landing website built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-bs-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Template CSS from your copied assets */}
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        <AppProviders>
          <Header />
          <main className="main">{children}</main>
          <Footer />
          <ScrollTop />
          <Preloader />
        </AppProviders>
      </body>
    </html>
  );
}
