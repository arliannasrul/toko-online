import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Toko Laptop",
  description: "Temukan Laptop Impianmu disini!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
