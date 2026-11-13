"use client";

import { useState, type FormEvent } from "react";

type ContactFormProps = {
  recipient: string;
};

export function ContactForm({ recipient }: ContactFormProps) {
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const projectType = String(formData.get("projectType") ?? "");
    const projectMessage = String(formData.get("message") ?? "");
    const subject = `Project inquiry: ${projectType}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      "",
      projectMessage,
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMessage("Your email app should open with the inquiry ready to send.");
  }

  return (
    <div className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-9">
      <h2 className="text-2xl font-semibold">Project details</h2>
      <p className="mt-2 text-sm leading-6 text-[#6b6570]">
        A few details will help us make the first conversation useful.
      </p>
      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="name">
              Your name
            </label>
            <input
              autoComplete="name"
              className="w-full rounded-xl border border-black/15 bg-[#fbfaf8] px-4 py-3 text-sm outline-none transition placeholder:text-[#aaa3ad] focus:border-[#8e6eaa] focus:ring-2 focus:ring-[#8e6eaa]/15"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="email">
              Email address
            </label>
            <input
              autoComplete="email"
              className="w-full rounded-xl border border-black/15 bg-[#fbfaf8] px-4 py-3 text-sm outline-none transition placeholder:text-[#aaa3ad] focus:border-[#8e6eaa] focus:ring-2 focus:ring-[#8e6eaa]/15"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="project-type">
            What are you looking for?
          </label>
          <select
            className="w-full rounded-xl border border-black/15 bg-[#fbfaf8] px-4 py-3 text-sm outline-none transition focus:border-[#8e6eaa] focus:ring-2 focus:ring-[#8e6eaa]/15"
            defaultValue=""
            id="project-type"
            name="projectType"
            required
          >
            <option disabled value="">
              Choose a project type
            </option>
            <option>Website design &amp; development</option>
            <option>Search &amp; paid media</option>
            <option>Brand &amp; digital identity</option>
            <option>App or product experience</option>
            <option>AI &amp; automation</option>
            <option>Something else</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="message">
            A little about your project
          </label>
          <textarea
            className="w-full resize-y rounded-xl border border-black/15 bg-[#fbfaf8] px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-[#aaa3ad] focus:border-[#8e6eaa] focus:ring-2 focus:ring-[#8e6eaa]/15"
            id="message"
            name="message"
            placeholder="Your goals, timeline, or anything else we should know..."
            required
            rows={5}
          />
        </div>
        <button className="button-dark w-full" type="submit">
          Send project inquiry <span aria-hidden="true">↗</span>
        </button>
        {message ? (
          <p aria-live="polite" className="text-sm leading-6 text-[#6b6570]">
            {message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
