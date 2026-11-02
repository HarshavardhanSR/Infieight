import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f3f5f8] text-slate-900">
      <SiteHeader />

      <main className="container-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2457c5]">Start a project</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-900">Tell us what you need.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Share your goals, timeline, and expectations. We will help you shape the right package and next steps.
            </p>
            <div className="mt-8 space-y-3 text-slate-700">
              <p>• Discovery call available</p>
              <p>• Clear project scoping and timeline</p>
              <p>• Transparent pricing and delivery model</p>
            </div>
          </div>

          <div className="card-surface rounded-[28px] p-6 md:p-8">
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#2457c5]" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#2457c5]" placeholder="you@example.com" type="email" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Project type</label>
                <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#2457c5]">
                  <option>Personal portfolio website</option>
                  <option>Business website</option>
                  <option>Custom digital product</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Project details</label>
                <textarea rows={6} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#2457c5]" placeholder="Tell us about your goals and timeline..." />
              </div>
              <button className="inline-flex w-full items-center justify-center rounded-full bg-[#2457c5] px-5 py-3 text-base font-medium text-white transition hover:bg-[#1d4bb3]">
                Send inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-sm text-slate-500">
          <Link href="/" className="text-[#2457c5] hover:underline">← Back to home</Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
