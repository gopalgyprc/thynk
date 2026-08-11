import type { Metadata } from "next";
import { Inter, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Thynk Success — Education Marketing Agency",
    template: "%s | Thynk Success",
  },
  description:
    "Thynk Success helps schools, EdTech companies and international universities grow through digital marketing, admissions strategy and student recruitment.",
  keywords: [
    "education marketing",
    "school marketing agency",
    "EdTech marketing",
    "university admissions",
    "student recruitment",
  ],
  openGraph: {
    title: "Thynk Success — Education Marketing Agency",
    description:
      "Empowering schools, EdTech innovators, and global institutions with digital branding, market growth, and student recruitment.",
    url: "https://thynksuccess.com",
    siteName: "Thynk Success",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/file.svg",
    shortcut: "/file.svg",
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
      className={`${inter.variable} ${fraunces.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden font-sans">
            <Header />
        {children}
          <Footer />
      </body>
    </html>
  );
}
