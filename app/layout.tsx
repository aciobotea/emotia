import type { Metadata } from "next";
import { Manrope, Prata } from "next/font/google";
import "./globals.css";

const displayFont = Prata({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Emotia Magazines | Personalized Event Magazines",
  description:
    "Luxury custom magazines for weddings, anniversaries, birthdays, and bachelorette parties, designed to feel like real editorial keepsakes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
