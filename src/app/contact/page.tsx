import { ContactUsForm } from "./ContactUsForm";

export default function Contact() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Contact Us
        </h2>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          We are here to help you with all your tax, bookkeeping, and financial
          planning needs. Whether you have questions, need advice, or want to
          schedule an appointment, please do not hesitate to reach out. Complete
          the form below to send us a message, request a call, or book a time to
          meet with us. Our team is committed to providing timely, personalized
          support to help you achieve your financial goals.
        </p>
        <ContactUsForm />

        <hr className="my-8 border border-sky-400/20" />

        <div className="mb-2">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
            Business Hours:
          </h4>
          <div className="text-gray-700 dark:text-gray-300 text-sm italic space-y-1">
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: By appointment only</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
