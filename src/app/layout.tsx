import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { EventProvider } from "@/context/eventContext";

const getInter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MbLabs Challenge",
  description:
    "Non-profit project created for a challenge as part of the MBLabs selection process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={getInter.className}>{children}</body>
    </html>
  );
}
