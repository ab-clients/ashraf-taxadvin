import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import AOSProvider from "@/components/AOSProvider";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import TaxAdvinSchema from "@/components/TaxAdvinSchema";
import { Seal } from "@/components/pages/home/Seal";

export const metadata: Metadata = {
  metadataBase: new URL('https://taxadvin.com'),
  title: "TaxAdvin - Fractional CFO & Tax Services",
  description:
    "TaxAdvin offers Fractional CFO oversight, financial department supervision, and tax services that maximize tax savings while streamlining your operations. Personalized, strategic, and unlike big firms, we partner with you.",
  keywords: [
    "Tax Advin",
    "TaxAdvin",
    "Tax Services Orlando",
    "Bookkeeping Orlando",
    "Financial Consulting Orlando",
    "CPA Orlando",
    "Nonprofit Accounting Orlando",
    "Tax Services Near Me",
    "Orlando Tax Services",
    "Tax Preparation Orlando",
    "Bookkeeping Services Orlando",
    "Financial Consultation Orlando",
    "Orlando CPA",
    "Nonprofit Accounting Orlando",
    "Fractional CFO",
    "Virtual CFO Services",
    "خدمات الضرائب أورلاندو",
    "خدمات المحاسبة أورلاندو",
    "استشارات مالية أورلاندو",
    "محاسب معتمد أورلاندو",
    "محاسبة الجمعيات غير الربحية أورلاندو",
    "AAA PLUS Financial Services",
    "AAA Plus Tax",
    "AAA Plus Bookkeeping",
    "AAA Plus Financial Consulting",
    "AAA Plus CPA",
    "AAA Plus Nonprofit Accounting",
    "Tax Preparation Orlando",
  ],
  authors: [{ name: "TaxAdvin" }],
  creator: "TaxAdvin",
  publisher: "TaxAdvin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://taxadvin.com',
    title: 'TaxAdvin - Fractional CFO & Tax Services',
    description: 'Professional Fractional CFO and tax services nationwide. Licensed CPA expertise with bilingual support.',
    siteName: 'TaxAdvin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaxAdvin - Fractional CFO & Tax Services',
    description: 'Professional Fractional CFO and tax services nationwide. Licensed CPA expertise with bilingual support.',
  },
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
        <TaxAdvinSchema />
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
              <Seal />
              <Footer />
            </div>
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
