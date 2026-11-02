import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const serviceList = [
  {
    name: "Personal Portfolio Website",
    blurb: "For creators, founders, and experts who need a premium digital presence without unnecessary complexity.",
    price: "From ₹3,999",
    highlights: ["Personal brand strategy", "Responsive showcase pages", "Lead capture and contact form"],
    projects: ["Founder profile", "Creator portfolio", "Consultant landing page"],
  },
  {
    name: "Business Website",
    blurb: "A clear, credible corporate presence for businesses that want stronger trust and better conversion paths.",
    price: "From ₹8,999",
    highlights: ["Brand positioning", "Service pages and CTA flow", "WordPress style CMS-ready structure"],
    projects: ["Marketing site", "Service-led business page", "Case study homepage"],
  },
  {
    name: "AI & Product Experience",
    blurb: "Experience design and product workflows that combine business logic with useful automation.",
    price: "Custom scope",
    highlights: ["AI workflow design", "Product UX prototyping", "Sales and onboarding flow design"],
    projects: ["AI assistant demo", "Workflow dashboard", "Automation-first product UX"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f3f5f8] text-slate-900">
      <SiteHeader />

      <main className="container-shell py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2457c5]">Services</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-900">Premium digital services built for trust and traction.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our service model starts with the clear, high-value offers that are easiest to understand and easiest to buy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {serviceList.map((service) => (
            <article key={service.name} className="card-surface rounded-3xl p-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-[#2457c5]">Service</div>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">{service.name}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.blurb}</p>
              <div className="mt-6 text-lg font-semibold text-[#101c35]">{service.price}</div>

              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#eef2ff] text-[#2457c5]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl bg-slate-50 p-3">
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Sample project types</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {service.projects.map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600">{item}</span>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#101c35] px-5 py-3 text-sm font-medium text-white hover:bg-slate-800">
                Request scope
              </Link>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
