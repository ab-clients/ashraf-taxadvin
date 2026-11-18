"use client";

import { reopenConsentBanner } from "@/lib/cookieConsent";

export default function CookieSettingsButton({
  className,
}: {
  className?: string;
}) {
  return (
    <button type="button" onClick={reopenConsentBanner} className={className}>
      Cookie Settings
    </button>
  );
}
