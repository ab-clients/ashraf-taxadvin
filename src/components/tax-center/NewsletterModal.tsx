import { useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";

export function NewsletterModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lastName }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setFirstName("");
        setLastName("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    setEmail("");
    setFirstName("");
    setLastName("");
    setStatus("idle");
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-sky-900/80 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-6 text-gray-500 hover:text-gray-700 dark:hover:text-white text-2xl"
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex flex-col items-center mb-4">
          <HiOutlineMailOpen className="w-12 h-12 text-sky-600 mb-2" />
          <h3 className="font-semibold mb-2">Subscribe to Newsletter</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            Monthly tax tips, IRS updates, and money-saving advice.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            required
            className="border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={status === "loading"}
          />
          <input
            type="text"
            required
            className="border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={status === "loading"}
          />
          <input
            type="email"
            required
            className="border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
          />
          <button
            type="submit"
            className="bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition disabled:opacity-60"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
          {status === "success" && (
            <p className="text-green-600 text-sm">Thank you for subscribing!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm">
              There was an error. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
