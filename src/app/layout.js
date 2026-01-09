import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "../../components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
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
        className={`${inter.variable} antialiased font-sans`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
