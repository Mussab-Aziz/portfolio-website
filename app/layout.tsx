import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mussab Bin Aziz — Cinematic Video Portfolio",
  description:
    "Award-winning video editing & cinematography. Sports documentaries, event highlights, real estate, travel reels, and sports highlight videos.",
  keywords: [
    "video editor",
    "cinematographer",
    "sports documentary",
    "event highlights",
    "real estate video",
    "travel reels",
    "portfolio",
  ],
  openGraph: {
    title: "Mussab Bin Aziz",
    description:
      "Award-winning video editing & cinematography. Sports documentaries, event highlights, real estate, travel reels, and sports highlight videos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${inter.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
