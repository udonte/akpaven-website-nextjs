"use client";

import { useState, type FormEvent } from "react";
import { HiOutlineUpload } from "react-icons/hi";

const sectors = [
  "Civil & Structural Engineering",
  "Environmental & Hydraulic Engineering",
  "Mechanical & Pipeline Construction",
  "Electrical & Instrumentation",
  "Other",
];

const offices = [
  {
    city: "Lagos",
    address: "Corporate Headquarters — Lagos, Nigeria",
    email: "info@akpaven.com",
    phone: "+234 (0) 800 000 0000",
  },
  {
    city: "Port Harcourt",
    address: "Operations Hub — Port Harcourt, Niger Delta",
    email: "projects@akpaven.com",
    phone: "+234 (0) 800 000 0001",
  },
];

export function TenderForm() {
  const [fileName, setFileName] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="py-20" aria-label="Contact and tender inquiry">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber">
            Get In Touch
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
            Contract &amp; Tender Gateway
          </h2>
          <p className="mt-4 leading-relaxed text-navy/70">
            Submit your bidding inquiry or request for tender documentation.
            Our team responds within 2 business days.
          </p>

          <div className="mt-10 space-y-8">
            {offices.map(({ city, address, email, phone }) => (
              <div key={city}>
                <h3 className="font-semibold text-navy">{city}</h3>
                <p className="mt-1 text-sm text-navy/70">{address}</p>
                <p className="mt-2 text-sm">
                  <a
                    href={`mailto:${email}`}
                    className="text-amber hover:underline"
                  >
                    {email}
                  </a>
                </p>
                <p className="text-sm text-navy/70">{phone}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-navy">
            Request for Tender / Bidding Inquiry
          </h3>

          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-navy">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="mt-1 w-full rounded-md border border-navy/20 px-4 py-2.5 text-navy focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-navy">
                Organization
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                required
                className="mt-1 w-full rounded-md border border-navy/20 px-4 py-2.5 text-navy focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
              />
            </div>

            <div>
              <label htmlFor="sector" className="block text-sm font-medium text-navy">
                Project Sector
              </label>
              <select
                id="sector"
                name="sector"
                required
                className="mt-1 w-full rounded-md border border-navy/20 px-4 py-2.5 text-navy focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
              >
                <option value="">Select a sector</option>
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="documents" className="block text-sm font-medium text-navy">
                Upload Tender Documents
              </label>
              <label
                htmlFor="documents"
                className="mt-1 flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-navy/20 px-4 py-8 transition-colors hover:border-amber/50 hover:bg-amber/5"
              >
                <HiOutlineUpload className="text-2xl text-navy/40" />
                <span className="mt-2 text-sm text-navy/60">
                  {fileName ?? "Click to upload or drag and drop"}
                </span>
                <input
                  id="documents"
                  name="documents"
                  type="file"
                  className="sr-only"
                  onChange={(e) =>
                    setFileName(e.target.files?.[0]?.name ?? null)
                  }
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-md bg-amber px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-amber/90"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
