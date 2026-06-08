import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import CalendlyScript from "@/components/CalendlyScript";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "dental clinic", 
    "smilecare", 
    "dentist near me", 
    "teeth cleaning", 
    "dental implants", 
    "root canal", 
    "teeth whitening", 
    "braces", 
    "Invisalign", 
    "cosmetic dentistry",
    "pediatric dentist"
  ],
  authors: [{ name: "SmileCare Dental Clinic" }],
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "https://smilecaredental.com",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col transition-colors duration-350 bg-background text-foreground">
        <ThemeProvider>
          {children}
          <CalendlyScript />
        </ThemeProvider>
      </body>
    </html>
  );
}
