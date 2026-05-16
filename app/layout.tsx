import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varsha Industry | Oil Expeller & Filter Press Machines",
  description:
    "Varsha Industry is a Ghaziabad based manufacturer and trader of oil expeller machines, filter press machines, industrial filter cloth and spare parts.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lustria&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="flex min-h-screen flex-col bg-background text-foreground antialiased"
      >
        <ScrollReveal />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
