import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Thynk Pulse — World's Largest Education Community",
    template: "%s | Thynk Pulse",
  },
  description:
    "Thynk Pulse is the free, open community for educators, EdTech professionals, innovators and school leaders to share experiences and shape the future of learning.",
  keywords: [
    "education community",
    "EdTech",
    "educators",
    "school leaders",
    "teaching",
    "learning",
    "Thynk Pulse",
  ],
  openGraph: {
    title: "Thynk Pulse — World's Largest Education Community",
    description:
      "The free, open community for educators and EdTech professionals.",
    url: "https://pulse.thynksuccess.com",
    siteName: "Thynk Pulse",
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
      className={`${inter.variable} ${jakarta.variable} scroll-smooth`}
    >
        <Header />
      <body className="min-h-screen flex flex-col overflow-x-hidden">
      
        {children}
      </body>
          <Footer />
    </html>
  );
}
