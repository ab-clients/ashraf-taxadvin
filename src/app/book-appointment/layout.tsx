import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | TaxAdvin",
  description:
    "Schedule a consultation with our licensed CPA. Get expert tax and accounting advice tailored to your needs.",
  keywords:
    "book appointment, tax consultation, CPA meeting, tax advisor, accounting services",
};

export default function BookAppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
