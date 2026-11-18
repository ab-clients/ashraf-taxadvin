import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Privacy Policy | TaxAdvin",
  description:
    "How TaxAdvin LLC collects, uses, and protects personal information, including cookies, Google Analytics, and your California privacy rights.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 18, 2026">
      <p>
        TaxAdvin LLC, doing business as TaxAdvin (&ldquo;TaxAdvin,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;), respects your privacy. This policy
        explains what personal information we collect through{" "}
        <strong>taxadvin.com</strong> (the &ldquo;Site&rdquo;), how we use and
        share it, and the choices you have. It applies to the Site only. Our
        professional engagements are governed by a separate engagement letter
        and by professional confidentiality obligations.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>
          <strong>Contact form:</strong> name, email address, phone number,
          preferred contact method, reason for contact, and your message.
        </li>
        <li>
          <strong>Appointment booking:</strong> name, email address, phone
          number, meeting type (in person or virtual), the service you are
          interested in, and your selected date and time.
        </li>
        <li>
          <strong>Newsletter signup:</strong> first name, last name, and email
          address.
        </li>
        <li>
          <strong>Calls, texts, and emails</strong> you send us, and the
          contents of those communications.
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <p>
        If you accept cookies, Google Analytics and Google Ads collect
        information such as your IP address, approximate location, device and
        browser type, operating system, pages viewed, time on page, referring
        page, and interactions with the Site. Our hosting provider also keeps
        standard server logs (IP address, request time, and pages requested) for
        security and reliability.
      </p>
      <h3>Tax calculators and tax center tools</h3>
      <p>
        The calculators on the Site run in your browser. We do not transmit or
        store the figures you enter.
      </p>
      <h3>Sensitive information</h3>
      <p>
        <strong>
          Please do not send Social Security numbers, bank account numbers,
          tax returns, or other sensitive financial documents through the
          contact form, booking form, or ordinary email.
        </strong>{" "}
        The Site does not collect them. If we need such documents for an
        engagement, we will give you a secure method to deliver them. Tax
        documents and tax preparation services are processed through{" "}
        <strong>Drake Software</strong>, a third-party provider, under its own
        privacy notice (see Section 3).
      </p>

      <h2>2. How we use information</h2>
      <ul>
        <li>To respond to inquiries and schedule and conduct consultations.</li>
        <li>
          To contact you by phone, text message, or email about your inquiry or
          appointment (see Section 5).
        </li>
        <li>To send newsletters and tax updates, if you subscribed.</li>
        <li>To operate, secure, and improve the Site and our services.</li>
        <li>
          To measure the performance of our website and advertising, if you
          accepted cookies.
        </li>
        <li>To comply with law and protect our rights.</li>
      </ul>

      <h2>3. Who we share information with</h2>
      <p>
        We do not sell your personal information for money. We share it with
        service providers that process it on our behalf:
      </p>
      <ul>
        <li>
          <strong>Resend</strong> &ndash; delivers contact form emails and
          stores our newsletter list.
        </li>
        <li>
          <strong>Google</strong> &ndash; Google Calendar, where the details you
          enter when booking an appointment (name, email, phone, meeting type,
          service, date and time) are sent and stored as a calendar event, and,
          with your consent, Google Analytics and Google Ads.
        </li>
        <li>
          <strong>Drake Software</strong> &ndash; processes tax documents and
          tax preparation services for our clients. Drake handles that
          information under its own privacy notice, available at{" "}
          <a
            href="https://www.drakesoftware.com/sharedassets/notice/drakesoftwareprivacynotice.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            drakesoftware.com
          </a>
          . Information you provide for tax preparation is not collected
          through this Site.
        </li>
        <li>
          <strong>Vercel</strong> &ndash; hosts the Site.
        </li>
      </ul>
      <p>
        We may also disclose information if required by law, subpoena, or legal
        process, to protect rights, safety, or security, or in connection with a
        merger, sale, or reorganization of our business. We never share your
        information with third parties for their own marketing.
      </p>

      <h2 id="cookies">4. Cookies, Google Analytics, and Google Ads</h2>
      <p>
        When you first visit, a banner asks whether you accept cookies. You can
        decline or close the banner; in that case no analytics or advertising
        scripts are loaded.
      </p>
      <ul>
        <li>
          <strong>Essential/functional (always on):</strong> we store your
          cookie choice and your light/dark theme preference in your
          browser&rsquo;s local storage.
        </li>
        <li>
          <strong>Analytics (only if you accept):</strong> Google Analytics sets
          cookies to tell us how people find and use the Site.
        </li>
        <li>
          <strong>Advertising (only if you accept):</strong> Google Ads
          measures conversions from our ads and may be used to show our ads to
          people who visited the Site (remarketing).
        </li>
      </ul>
      <p>
        You can change your choice at any time:{" "}
        <CookieSettingsButton className="text-sky-600 dark:text-sky-400 underline" />
        . You can also delete cookies in your browser settings, opt out of
        Google Analytics using the{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Analytics opt-out add-on
        </a>
        , or manage ad personalization at{" "}
        <a
          href="https://adssettings.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          adssettings.google.com
        </a>
        . See{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
        >
          how Google uses data from sites that use its services
        </a>
        . Because browsers handle &ldquo;Do Not Track&rdquo; inconsistently, we
        do not respond to it, but we honor your choice in our cookie banner and
        recognize Global Privacy Control signals as an opt-out of
        advertising cookies.
      </p>

      <h2>5. Calls, text messages, and email</h2>
      <p>
        By giving us your phone number, you agree that we may call or text you
        about your inquiry, appointment, or engagement. Message frequency
        varies, and message and data rates may apply. Reply <strong>STOP</strong>{" "}
        to opt out of texts at any time. Consent to texts is not a condition of
        buying any service. We will not share your phone number with third
        parties for their marketing, and text-messaging opt-in data is never
        shared with third parties or affiliates for marketing purposes.
      </p>
      <p>
        Marketing emails include an unsubscribe link, and you can also email us
        to unsubscribe. We may still send service messages related to your
        appointment or engagement.
      </p>

      <h2>6. Retention</h2>
      <p>
        We keep inquiry, booking, and newsletter information for as long as
        needed to respond to you, provide services, meet legal and professional
        record-keeping requirements, and resolve disputes. Newsletter data is
        kept until you unsubscribe. Analytics data is retained according to our
        Google Analytics settings. When information is no longer needed, we
        delete or de-identify it.
      </p>

      <h2>7. Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational
        safeguards, including encrypted (HTTPS) connections. No method of
        transmission or storage is completely secure, so we cannot guarantee
        absolute security.
      </p>

      <h2>8. Your California privacy rights</h2>
      <p>
        If you are a California resident, the CCPA/CPRA gives you the right to:
      </p>
      <ul>
        <li>know what personal information we collect, use, and disclose;</li>
        <li>request access to or a copy of your personal information;</li>
        <li>request correction of inaccurate information;</li>
        <li>request deletion of your personal information, subject to exceptions;</li>
        <li>
          opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal
          information for cross-context behavioral advertising; and
        </li>
        <li>not be discriminated against for exercising your rights.</li>
      </ul>
      <p>
        <strong>Categories collected in the past 12 months:</strong> identifiers
        (name, email, phone, IP address); internet activity (pages viewed,
        interactions); approximate geolocation; and the content of your
        communications. <strong>Sale/sharing:</strong> we do not sell personal
        information. If you accept advertising cookies, data collected by Google
        Ads may constitute &ldquo;sharing&rdquo; for cross-context behavioral
        advertising under California law. You can opt out by declining cookies
        using the banner, via{" "}
        <CookieSettingsButton className="text-sky-600 dark:text-sky-400 underline" />
        , or with a Global Privacy Control signal. We do not knowingly sell or
        share personal information of anyone under 16.
      </p>
      <p>
        To exercise a right, email{" "}
        <a href="mailto:contact@taxadvin.com">contact@taxadvin.com</a> or call
        (888) 866-8994. We will verify your identity (for example, by matching
        your email address) and respond within 45 days. You may use an
        authorized agent, and you may appeal a denial by replying to our
        response. Residents of other states with privacy laws may make the same
        requests, and we will honor them as required by applicable law.
      </p>

      <h2>9. Children</h2>
      <p>
        The Site is intended for adults and is not directed to children under
        13. We do not knowingly collect personal information from children. If
        you believe a child has given us information, contact us and we will
        delete it.
      </p>

      <h2>10. Third-party links</h2>
      <p>
        The Site may link to third-party websites (including IRS and state
        agency sites). We are not responsible for their privacy practices.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;Last
        updated&rdquo; date above shows when changes were made. Material changes
        will be posted on this page.
      </p>

      <h2>12. Contact us</h2>
      <p>
        TaxAdvin LLC
        <br />
        13732 Eden Isle Blvd, Windermere, FL 34786
        <br />
        <a href="mailto:contact@taxadvin.com">contact@taxadvin.com</a> &middot;
        (888) 866-8994
      </p>
      <p>
        See also our <Link href="/terms-of-service">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
