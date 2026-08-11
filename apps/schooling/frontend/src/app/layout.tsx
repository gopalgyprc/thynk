import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Thynk Schooling — Find the Perfect School for Your Child",
    template: "%s | Thynk Schooling",
  },
  description:
    "Search, compare & apply to 12,000+ verified schools across 350+ Indian cities. CBSE, ICSE, IB and more.",
  keywords: [
    "school management",
    "education",
    "student management",
    "attendance",
    "exam management",
    "SaaS",
  ],
  openGraph: {
    title: "Thynk Schooling — Education Management Platform",
    description:
      "A powerful school management platform designed for modern educational institutions.",
    url: "https://schooling.thynksuccess.com",
    siteName: "Thynk Schooling",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} ${dancingScript.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
