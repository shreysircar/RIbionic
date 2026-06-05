"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    organization: "",
    email: "",
    message: "",
  });

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSuccess(true);

      setFormData({
        firstName: "",
        lastName: "",
        designation: "",
        organization: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-3xl font-bold text-gray-900">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            required
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({
                ...formData,
                firstName: e.target.value,
              })
            }
            className="rounded-lg border border-gray-300 px-4 py-3 focus:border-[#025a6a] focus:outline-none"
          />

          <input
            required
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({
                ...formData,
                lastName: e.target.value,
              })
            }
            className="rounded-lg border border-gray-300 px-4 py-3 focus:border-[#025a6a] focus:outline-none"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            placeholder="Designation"
            value={formData.designation}
            onChange={(e) =>
              setFormData({
                ...formData,
                designation: e.target.value,
              })
            }
            className="rounded-lg border border-gray-300 px-4 py-3 focus:border-[#025a6a] focus:outline-none"
          />

          <input
            placeholder="Organization"
            value={formData.organization}
            onChange={(e) =>
              setFormData({
                ...formData,
                organization: e.target.value,
              })
            }
            className="rounded-lg border border-gray-300 px-4 py-3 focus:border-[#025a6a] focus:outline-none"
          />
        </div>

        <input
          type="email"
          required
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#025a6a] focus:outline-none"
        />

        <textarea
          required
          rows={6}
          placeholder="Tell us about your requirements..."
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#025a6a] focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#025a6a] px-6 py-4 font-semibold text-white transition hover:bg-[#014854] disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {success && (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
            ✓ Thank you for contacting Ribionic. Our team will get back to
            you shortly.
          </div>
        )}
      </form>
    </div>
  );
}