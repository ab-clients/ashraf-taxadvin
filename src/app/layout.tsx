import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import AOSProvider from "@/components/AOSProvider";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaxAdvin - Tax & Financial Services",
  description:
    "Professional tax and financial solutions for individuals and businesses.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "manifest",
      url: "/site.webmanifest",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!max-w-full">
      <head>
        <GoogleAnalytics />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="!overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AOSProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1 bg-gray-200 dark:bg-gray-800">
                {children}
              </main>
              <Footer />
            </div>
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
