import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varsha Industry | Oil Expeller & Filter Press Machines",
  description:
    "Varsha Industry is a Ghaziabad based manufacturer and trader of oil expeller machines, filter press machines, industrial filter cloth and spare parts.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex min-h-screen flex-col bg-background text-foreground antialiased"
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
