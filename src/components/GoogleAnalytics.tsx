"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_EVENT, getConsent } from "@/lib/cookieConsent";

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS;

// Loads Google Analytics / Google Ads only after the visitor accepts cookies.
export default function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(getConsent() === "accepted");
    const onChange = () => {
      const accepted = getConsent() === "accepted";
      setAllowed(accepted);
      if (!accepted && GA_ID) {
        // Stop any further measurement in this page view if consent is withdrawn.
        (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] =
          true;
      }
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!allowed || !GA_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script strategy="afterInteractive" id="googleAnalytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          ${
            ADS_ID
              ? `gtag('config', '${ADS_ID}', { page_path: window.location.pathname });`
              : ""
          }
        `}
      </Script>
    </>
  );
}
