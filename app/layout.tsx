import type { Metadata } from "next";
import { SUSE } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
// import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next"

const suseMono = SUSE({
  variable: "--font-suse-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Zulfahmidev - Software Engineer",
  description: "Hi, I'm Zulfahmi, A Software Engineer with over 5 years of experience in creating high-quality and impactful digital experiences. I have a strong focus on transforming complex problems into elegant and user-friendly interfaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${suseMono.variable} antialiased font-suse relative
        `}
      >
        <Navbar />
        <Header />
        <main>
          <Suspense fallback={<>Loading...</>}>
            {children}
          </Suspense>
        </main>
        {/* <ProgressiveBlur height="4rem" position="bottom" /> */}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
