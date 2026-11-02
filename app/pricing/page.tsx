import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const packages = [
  {
    name: "Starter",
    price: "₹3,999",
    features: ["Single-page portfolio", "Responsive layout", "Contact form", "Basic SEO"],
    projects: [
      { name: "Creator Launch", type: "Portfolio + personal brand", result: "Trust + clarity" },
      { name: "Profile Page", type: "Professional portfolio", result: "Clear contact path" },
    ],
  },
  {
    name: "Professional",
    price: "₹7,999",
    features: ["Multi-page experience", "Project showcase", "Brand styling", "Analytics setup"],
    featured: true,
    projects: [
      { name: "Studio Spring", type: "Service architecture", result: "+32% inquiry uplift" },
      { name: "Venture Voice", type: "Leadership narrative", result: "Stronger credibility" },
    ],
  },
  {
    name: "Premium",
    price: "₹14,999",
    features: ["Advanced pages", "Priority support", "Custom sections", "Growth-ready structure"],
    projects: [
      { name: "Consulting Brand", type: "Full company site", result: "Positioning and trust" },
      { name: "Growth Hub", type: "Marketing funnel", result: "Qualified lead flow" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f3f5f8] text-slate-900">
      <SiteHeader />

      <main className="container-shell py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2457c5]">Pricing</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-900">Simple plans for the first sale and the next stage of growth.</h1>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl border p-6 ${pkg.featured ? "border-[#2457c5] bg-[#2457c5] text-white shadow-xl shadow-blue-200/40" : "border-slate-200 bg-white text-slate-900"}`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">{pkg.name}</h2>
                {pkg.featured ? <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.14em] text-blue-100">Popular</span> : null}
              </div>
              <div className="mt-6 text-4xl font-semibold">{pkg.price}</div>

              <ul className={`mt-6 space-y-3 ${pkg.featured ? "text-blue-50" : "text-slate-700"}`}>
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${pkg.featured ? "bg-white/15" : "bg-[#eef2ff] text-[#2457c5]"}`}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3">
                {pkg.projects.map((project) => (
                  <div key={project.name} className={`rounded-2xl border p-3 ${pkg.featured ? "border-white/15 bg-white/5" : "border-slate-200 bg-slate-50"}`}>
                    <div className="text-sm font-semibold">{project.name}</div>
                    <div className={`text-xs ${pkg.featured ? "text-blue-100" : "text-slate-500"}`}>{project.type}</div>
                    <div className={`mt-2 text-xs font-medium ${pkg.featured ? "text-white" : "text-[#2457c5]"}`}>{project.result}</div>
                  </div>
                ))}
              </div>

              <Link href="/checkout" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-base font-medium ${pkg.featured ? "bg-white text-[#101c35] hover:bg-slate-100" : "bg-[#101c35] text-white hover:bg-slate-800"}`}>
                Choose package
              </Link>
            </div>
          ))}
        </div>

        <section className="mt-16 rounded-[32px] border border-dashed border-slate-300 bg-white p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2457c5]">Custom package</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Need a one-off requirement or a bigger scope?</h2>
            </div>
            <Link href="/contact" className="inline-flex rounded-full bg-[#101c35] px-6 py-3 text-base font-medium text-white hover:bg-slate-800">
              Request a custom quote
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
