"use client";

import { useState, FormEvent } from "react";
import type { Dictionary } from "@/i18n";

type ContactDict = Dictionary["contact"];

export default function ContactForm({ dict }: { dict: ContactDict }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="text-[#c41e3a] text-lg font-semibold mb-2">{dict.submitted}</p>
        <p className="text-[#666]">{dict.submittedText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm uppercase tracking-widest mb-2">{dict.name}</label>
        <input
          type="text"
          required
          className="w-full border border-[#e0d8cf] px-4 py-3 bg-white text-sm focus:outline-none focus:border-[#c41e3a] transition-colors"
          placeholder={dict.namePlaceholder}
        />
      </div>
      <div>
        <label className="block text-sm uppercase tracking-widest mb-2">{dict.email}</label>
        <input
          type="email"
          required
          className="w-full border border-[#e0d8cf] px-4 py-3 bg-white text-sm focus:outline-none focus:border-[#c41e3a] transition-colors"
          placeholder={dict.emailPlaceholder}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm uppercase tracking-widest mb-2">{dict.date}</label>
          <input
            type="date"
            required
            className="w-full border border-[#e0d8cf] px-4 py-3 bg-white text-sm focus:outline-none focus:border-[#c41e3a] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm uppercase tracking-widest mb-2">{dict.guests}</label>
          <select
            required
            className="w-full border border-[#e0d8cf] px-4 py-3 bg-white text-sm focus:outline-none focus:border-[#c41e3a] transition-colors"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? dict.person : dict.persons}
              </option>
            ))}
            <option value="more">{dict.moreThan8}</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm uppercase tracking-widest mb-2">{dict.message}</label>
        <textarea
          rows={4}
          className="w-full border border-[#e0d8cf] px-4 py-3 bg-white text-sm focus:outline-none focus:border-[#c41e3a] transition-colors resize-none"
          placeholder={dict.messagePlaceholder}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-[#c41e3a] text-white uppercase text-sm tracking-widest hover:bg-[#a01830] transition-colors"
      >
        {dict.submit}
      </button>
    </form>
  );
}
