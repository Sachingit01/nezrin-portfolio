import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
// import { Switzer } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/navbar";
import CustomCursor from "@/components/CustomCursor";

// const playfairDisplay = Playfair_Display({
//   weight: ["400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   variable: "--font-playfair-display",
// });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Nezrin Midhlaj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
