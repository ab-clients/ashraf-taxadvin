"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import {
  CONSENT_REOPEN_EVENT,
  getConsent,
  setConsent,
} from "@/lib/cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
    const reopen = () => setVisible(true);
    window.addEventListener(CONSENT_REOPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, reopen);
  }, []);

  if (!visible) return null;

  const choose = (choice: "accepted" | "declined") => {
    setConsent(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[100] p-2 sm:p-3"
    >
      <div className="mx-auto max-w-5xl rounded-xl border border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-slate-900 shadow-2xl px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="flex-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-snug">
          We use cookies, including <strong>Google Analytics</strong> and{" "}
          <strong>Google Ads</strong>, to understand site usage and measure ads.
          They&apos;re only turned on if you accept.{" "}
          <Link
            href="/privacy-policy#cookies"
            className="text-sky-600 dark:text-sky-400 underline whitespace-nowrap"
          >
            Learn more
          </Link>
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="rounded-md border border-gray-300 dark:border-gray-600 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-slate-800"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-md bg-sky-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-sky-700"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose("declined")}
            aria-label="Dismiss cookie notice (decline optional cookies)"
            className="ml-1 p-1 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
