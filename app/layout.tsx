import type { Metadata } from "next";
import { Lustria, DM_Sans, Merriweather, Inter } from "next/font/google";
import "./globals.css";

const lustria = Lustria({
  weight: "400",
  variable: "--font-lustria",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});


export const metadata: Metadata = {
  title: "Plastx Labs | Innovation in Plastic Manufacturing",
  description: "Global leaders in precision plastic manufacturing, OEM solutions, and contamination-controlled environments.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${inter.variable} ${lustria.variable} ${dmSans.variable} antialiased bg-warm text-foreground flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
