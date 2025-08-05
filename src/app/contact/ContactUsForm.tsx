"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, FormEvent, useState } from "react";

export const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "",
    reason: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendContactUsMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          contactMethod: "",
          reason: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={sendContactUsMessage}
      className="mt-4 flex flex-col gap-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
    >
      {/* Name */}
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <Input
        id="name"
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleInputChange}
        className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 placeholder-gray-600 dark:placeholder-gray-400 focus:border-sky-400 focus:ring-sky-400/40 transition-colors"
        required
      />

      {/* Email */}
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleInputChange}
        className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 placeholder-gray-600 dark:placeholder-gray-400 focus:border-sky-400 focus:ring-sky-400/40 transition-colors"
        required
      />

      {/* Phone */}
      <label htmlFor="phone" className="sr-only">
        Phone
      </label>
      <Input
        id="phone"
        type="tel"
        name="phone"
        placeholder="Phone number"
        value={formData.phone}
        onChange={handleInputChange}
        className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 placeholder-gray-600 dark:placeholder-gray-400 focus:border-sky-400 focus:ring-sky-400/40 transition-colors"
      />

      {/* Preferred Contact Method */}
      <label htmlFor="contactMethod" className="sr-only">
        Preferred Contact Method
      </label>
      <Select
        required
        name="contactMethod"
        value={formData.contactMethod}
        onValueChange={(value) =>
          setFormData({ ...formData, contactMethod: value })
        }
      >
        <SelectTrigger
          id="contactMethod"
          className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 
            text-gray-900 dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-400 
            focus:border-sky-400 focus:ring-sky-400/40 transition-colors"
        >
          {/* Force placeholder color */}
          <SelectValue
            placeholder="Preferred Contact Method"
            className="text-gray-600 dark:text-gray-400"
          />
        </SelectTrigger>
        <SelectContent
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
            shadow-lg rounded-md mt-1 p-0"
        >
          <SelectItem
            value="email"
            className="text-gray-900 dark:text-gray-100 hover:bg-sky-50 dark:hover:bg-sky-800/40 px-4 py-2 rounded"
          >
            Email
          </SelectItem>
          <SelectItem
            value="phone"
            className="text-gray-900 dark:text-gray-100 hover:bg-sky-50 dark:hover:bg-sky-800/40 px-4 py-2 rounded"
          >
            Phone
          </SelectItem>
          <SelectItem
            value="text Message"
            className="text-gray-900 dark:text-gray-100 hover:bg-sky-50 dark:hover:bg-sky-800/40 px-4 py-2 rounded"
          >
            Text Message
          </SelectItem>
        </SelectContent>
      </Select>

      {/* Reason */}
      <label htmlFor="reason" className="sr-only">
        Reason
      </label>
      <Select
        required
        name="reason"
        value={formData.reason}
        onValueChange={(value) => setFormData({ ...formData, reason: value })}
      >
        <SelectTrigger
          id="reason"
          className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 
            text-gray-900 dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-400 
            focus:border-sky-400 focus:ring-sky-400/40 transition-colors"
        >
          <SelectValue
            placeholder="Reason"
            className="text-gray-600 dark:text-gray-400"
          />
        </SelectTrigger>
        <SelectContent
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
            shadow-lg rounded-md mt-1 p-0"
        >
          <SelectItem
            value="general inquiry"
            className="text-gray-900 dark:text-gray-100 hover:bg-sky-50 dark:hover:bg-sky-800/40 px-4 py-2 rounded"
          >
            General Inquiry
          </SelectItem>
          <SelectItem
            value="Request a Call"
            className="text-gray-900 dark:text-gray-100 hover:bg-sky-50 dark:hover:bg-sky-800/40 px-4 py-2 rounded"
          >
            Request a Call
          </SelectItem>
          <SelectItem
            value="Schedule an Appointment"
            className="text-gray-900 dark:text-gray-100 hover:bg-sky-50 dark:hover:bg-sky-800/40 px-4 py-2 rounded"
          >
            Schedule an Appointment
          </SelectItem>
        </SelectContent>
      </Select>

      {/* Message */}
      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <Textarea
        id="message"
        name="message"
        placeholder="Type your message here."
        rows={7}
        value={formData.message}
        onChange={handleInputChange}
        className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 placeholder-gray-600 dark:placeholder-gray-400 focus:border-sky-400 focus:ring-sky-400/40 transition-colors"
        required
      />

      {/* Submit */}
      <Button
        className="self-end px-6 py-2 rounded-md shadow bg-sky-700 hover:bg-sky-800 text-white dark:bg-sky-400 dark:hover:bg-sky-500 dark:text-gray-900 transition-colors font-semibold"
        variant="secondary"
        type="submit"
      >
        Send Message
      </Button>
    </form>
  );
};
