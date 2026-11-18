import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | TaxAdvin",
  description:
    "Terms governing your use of the TaxAdvin website, tax calculators, and online booking.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" updated="November 18, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of{" "}
        <strong>taxadvin.com</strong> (the &ldquo;Site&rdquo;), operated by
        TaxAdvin LLC, doing business as TaxAdvin (&ldquo;TaxAdvin,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;). By using the Site you agree to
        these Terms and our <Link href="/privacy-policy">Privacy Policy</Link>.
        If you do not agree, please do not use the Site.
      </p>

      <h2>1. Informational purposes only; no professional relationship</h2>
      <p>
        Content on the Site, including service descriptions, articles, due-date
        information, and calculators, is general information and is{" "}
        <strong>not tax, accounting, legal, or financial advice</strong>. Tax
        laws change often and their application depends on your specific facts.
        Using the Site, submitting a form, booking a consultation, or contacting
        us does not create a client, CPA&ndash;client, or fiduciary
        relationship. Such a relationship exists only when both parties sign a
        written engagement letter. Please do not rely on the Site as a substitute
        for advice from a qualified professional.
      </p>

      <h2>2. Calculators and estimates</h2>
      <p>
        Our calculators and tools provide <strong>estimates only</strong> based
        on the inputs you provide and simplified assumptions. Results may not
        reflect your full situation, current law, credits, deductions, or state
        and local taxes, and are not a tax return, filing, or guarantee of any
        outcome. Filing deadlines shown on the Site may change or may not apply
        to you; confirm with the IRS or your state agency or ask us.
      </p>

      <h2>3. Appointments and communications</h2>
      <ul>
        <li>
          Booking through the Site requests a consultation time and is subject
          to our confirmation and availability. We may reschedule or cancel if
          necessary.
        </li>
        <li>
          Please provide accurate contact details. By giving us your phone
          number, you consent to calls and texts about your inquiry or
          appointment as described in the Privacy Policy. Reply STOP to opt out
          of texts.
        </li>
        <li>
          Initial consultations are for discussing your needs. Fees for services
          are set out in an engagement letter or quote.
        </li>
        <li>
          Do not send Social Security numbers, bank details, tax returns, or
          other sensitive documents through the Site&rsquo;s forms or ordinary
          email. Information you send through the Site is not necessarily
          privileged or confidential until an engagement is in place.
        </li>
      </ul>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Site unlawfully or to submit false or misleading information;</li>
        <li>
          attempt to gain unauthorized access to the Site, its servers, or other
          users&rsquo; data;
        </li>
        <li>
          introduce malware, overload the Site, or interfere with its operation;
        </li>
        <li>
          scrape, copy, or harvest content or data by automated means without our
          written permission;
        </li>
        <li>
          submit spam or use the forms to send unsolicited advertising or
          harmful content.
        </li>
      </ul>

      <h2>5. Intellectual property</h2>
      <p>
        The Site&rsquo;s text, graphics, logos, design, and other content are
        owned by TaxAdvin or its licensors and are protected by copyright and
        trademark law. You may view and print content for your personal,
        non-commercial use. Any other use requires our prior written permission.
        &ldquo;TaxAdvin&rdquo; and our logo are our marks.
      </p>

      <h2>6. Third-party services and links</h2>
      <p>
        The Site relies on third-party services (such as Google and Resend), and
        tax documents and tax preparation services are processed through Drake
        Software under its own{" "}
        <a
          href="https://www.drakesoftware.com/sharedassets/notice/drakesoftwareprivacynotice.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          privacy notice
        </a>
        . The Site may also link to third-party sites. We do not control them and are not
        responsible for their content, availability, or practices. Your use of
        them is at your own risk and subject to their terms.
      </p>

      <h2>7. Testimonials and results</h2>
      <p>
        Testimonials and examples reflect individual experiences. Past results
        do not guarantee similar outcomes. Tax savings depend on each
        person&rsquo;s facts and circumstances.
      </p>

      <h2>8. Disclaimer of warranties</h2>
      <p>
        The Site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
        without warranties of any kind, express or implied, including
        merchantability, fitness for a particular purpose, accuracy,
        completeness, and non-infringement. We do not warrant that the Site will
        be uninterrupted, error-free, or free of harmful components.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, TaxAdvin and its owners,
        employees, and contractors will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or for any loss
        of profits, data, or goodwill, arising from your use of or inability to
        use the Site or your reliance on its content or calculators. Our total
        liability for any claim relating to the Site will not exceed $100. These
        limits do not apply to liability that cannot be limited by law, and they
        do not govern services provided under a separate engagement letter.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless TaxAdvin from claims, damages,
        and expenses (including reasonable attorneys&rsquo; fees) arising from
        your violation of these Terms or misuse of the Site.
      </p>

      <h2>11. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of the State of Florida, without
        regard to conflict-of-law rules. Any dispute arising from the Site will
        be brought exclusively in the state or federal courts located in Orange
        County, Florida, and you consent to their jurisdiction. Services under a
        signed engagement letter are governed by that letter.
      </p>

      <h2>12. Changes and termination</h2>
      <p>
        We may modify the Site or these Terms at any time. Updated Terms take
        effect when posted, and continued use means you accept them. We may
        suspend or restrict access to the Site at any time for any reason.
      </p>

      <h2>13. General</h2>
      <p>
        If any provision of these Terms is unenforceable, the remainder stays in
        effect. Our failure to enforce a provision is not a waiver. These Terms
        and the Privacy Policy are the entire agreement between you and us
        regarding the Site.
      </p>

      <h2>14. Contact</h2>
      <p>
        TaxAdvin LLC
        <br />
        13732 Eden Isle Blvd, Windermere, FL 34786
        <br />
        <a href="mailto:contact@taxadvin.com">contact@taxadvin.com</a> &middot;
        (888) 866-8994
      </p>
    </LegalPage>
  );
}
