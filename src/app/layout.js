import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "../../components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Decor - Find Your Dream Property",
  description: "Discover your dream home from hundreds of properties. One platform. Browse today.",
  openGraph: {
    title: "Decor - Find Your Dream Property",
    description: "Discover your dream home from hundreds of properties. One platform. Browse today.",
    type: "website",
    locale: "en_US",
    siteName: "Decor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decor - Find Your Dream Property",
    description: "Discover your dream home from hundreds of properties",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
