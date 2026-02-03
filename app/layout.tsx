import type { Metadata } from "next";
import { Geist, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/ui/Navbar";
import Footer from "@/src/components/ui/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movies App",
  description: "A simple movies app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${geistSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
