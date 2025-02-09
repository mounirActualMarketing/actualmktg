import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FlipNav } from "./components/FlipNav";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Actual Marketing Agency",
  description: "Transform your business with data-driven digital marketing strategies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FlipNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}