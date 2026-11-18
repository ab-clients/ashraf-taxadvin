export type ConsentChoice = "accepted" | "declined";

export const CONSENT_KEY = "taxadvin-cookie-consent";
export const CONSENT_EVENT = "taxadvin-cookie-consent-change";
export const CONSENT_REOPEN_EVENT = "taxadvin-cookie-consent-reopen";

export function getConsent(): ConsentChoice | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // storage unavailable; choice applies for this page view only
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}

export function reopenConsentBanner() {
  window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT));
}
