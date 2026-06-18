import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bethlehem Products Inc. | South Indian Food Distributor Canada",
  description:
    "Importer and distributor of premium South Indian products across Canada. Featuring KML Coconut Oil, Coconut Milk Powder, and specialty food products.",

  keywords: [
    "South Indian products Canada",
    "Coconut oil distributor Canada",
    "KML Coconut Oil",
    "Indian grocery wholesaler",
    "South Asian food distributor",
    "Bethlehem Products Inc",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
