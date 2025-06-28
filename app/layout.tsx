import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://consicio.tech"),
  title: "Consicio - AI-Powered PDF Summarizer",
  description:
    "Save hours of reading time. Transform lengthy PDFs into clear, accurate summaries in seconds with our advanced AI technology.",
  openGraph: {
    title: "Consicio - AI-Powered PDF Summarizer",
    description:
      "Save hours of reading time. Transform lengthy PDFs into clear, accurate summaries in seconds with our advanced AI technology.",
    url: "https://consicio.tech",
    siteName: "Consicio",
    images: [
      {
        url: "https://consicio.tech/banner.png",
        width: 1200,
        height: 630,
        alt: "Consicio Logo and Tagline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Consicio - AI-Powered PDF Summarizer",
  },
  verification: {
    google: "Rh0kj2q3-QvEe2xV56Hwz3x0YcB8bTtAg4fV0wZXJ9k",
    yandex: "0ca3a41bb16e37ce",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fontSans.variable} font-sans antialiased`}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
