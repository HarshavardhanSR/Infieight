import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const services = [
  {
    title: "Personal Portfolio Websites",
    description: "Clean, premium websites that help founders, creators, and experts sell their value with clarity.",
    price: "From ₹3,999",
  },
  {
    title: "Business Websites",
    description: "Professional company websites built to communicate trust, process, and conversion-ready positioning.",
    price: "From ₹8,999",
  },
  {
    title: "AI & SaaS Experiences",
    description: "Productized experiences, workflow automation, and digital systems designed for real-world delivery.",
    price: "Custom scope",
  },
];

const steps = [
  "Discover the goals, audience, and service scope.",
  "Design a sharp, conversion-aware system and content structure.",
  "Build the experience and refine it to business needs.",
  "Launch, track, and optimize for the next phase of growth.",
];

const packages = [
  {
    name: "Starter",
    price: "₹3,999",
    description: "For founders and creators who need a polished, conversion-ready online presence.",
    features: ["Single-page portfolio", "Responsive layout", "Contact form", "Basic SEO"],
    projects: [
      { name: "Creator Launch", type: "Portfolio + brand", result: "Positioning clarity" },
      { name: "Founder Profile", type: "Personal brand", result: "Higher trust signals" },
      { name: "Expert Presence", type: "One-page portfolio", result: "Clear contact flow" },
    ],
  },
  {
    name: "Professional",
    price: "₹7,999",
    description: "A more strategic site with stronger positioning, pages, and premium presentation.",
    features: ["Multi-page experience", "Custom design system", "Project showcase", "Analytics setup"],
    featured: true,
    projects: [
      { name: "Studio Spring", type: "Service architecture", result: "+32% inquiry rate" },
      { name: "Venture Voice", type: "Thought leadership", result: "Strong brand recall" },
      { name: "Design Casebook", type: "Portfolio showcase", result: "Cleaner conversion" },
    ],
  },
  {
    name: "Premium",
    price: "₹14,999",
    description: "A comprehensive service presence built for credibility, performance, and scale.",
    features: ["Custom UI & UX", "Blog + SEO depth", "Priority support", "Growth-ready structure"],
    projects: [
      { name: "Consulting Brand", type: "Full company site", result: "Leadership positioning" },
      { name: "Product Story", type: "Marketing funnel", result: "Clear business narrative" },
      { name: "Growth Hub", type: "Content + conversion", result: "More qualified leads" },
    ],
  },
];

const faqs = [
  { question: "Do you only build portfolio websites?", answer: "No. Portfolio websites are our strongest first offer, but the platform is designed to expand into broader website, product, and AI services." },
  { question: "Can I customize the package?", answer: "Yes. Each package is intentionally structured, but add-on options and custom scope are available for tailored requirements." },
  { question: "How long does delivery usually take?", answer: "Typical delivery ranges from 1 to 4 weeks depending on scope, design depth, and content readiness." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f5f8] text-slate-900">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_top,_rgba(36,87,197,0.15),_transparent_55%)]" />
          <div className="container-shell relative grid gap-14 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#2457c5]">
                Premium digital execution
              </span>
              <h1 className="mt-6 max-w-xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                Build a sharper digital presence that earns trust and drives action.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                INFIEIGHT helps founders, creators, and businesses turn strategy into digital experiences that look premium, communicate clearly, and convert with confidence.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/pricing" className="inline-flex items-center justify-center rounded-full bg-[#101c35] px-6 py-3 text-base font-medium text-white transition hover:bg-slate-800">
                  Explore packages
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50">
                  Book a consult
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-500">
                <span>Website design</span>
                <span>Brand clarity</span>
                <span>AI & product experiences</span>
              </div>
            </div>

            <div className="card-surface rounded-[28px] p-6 sm:p-8">
              <div className="rounded-[24px] bg-[#101c35] p-6 text-white shadow-2xl shadow-slate-300/40">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Service snapshot</span>
                  <span>Now booking</span>
                </div>
                <div className="mt-8 rounded-2xl bg-white/8 p-5">
                  <div className="text-sm uppercase tracking-[0.18em] text-blue-200">Best first offer</div>
                  <div className="mt-3 text-3xl font-semibold">Personal Portfolio Website</div>
                  <div className="mt-4 text-slate-200">Premium positioning for creators, founders, and experts.</div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/6 p-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-300">Start</div>
                    <div className="mt-3 text-2xl font-semibold">₹3,999</div>
                  </div>
                  <div className="rounded-xl bg-white/6 p-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-300">Delivery</div>
                    <div className="mt-3 text-2xl font-semibold">1–2 weeks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white/70">
          <div className="container-shell grid gap-6 py-6 text-center text-sm font-medium text-slate-500 sm:grid-cols-3">
            <div>Trusted digital execution</div>
            <div>Conversion-conscious design</div>
            <div>Built for growth</div>
          </div>
        </section>

        <section className="container-shell py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2457c5]">What we do</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">Digital services designed to communicate value and convert attention.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="card-surface rounded-3xl p-6">
                <div className="inline-flex rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#2457c5]">
                  Service
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                <div className="mt-6 text-base font-semibold text-[#101c35]">{service.price}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="bg-[#101c35] py-20 text-white">
          <div className="container-shell">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Process</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight">A clear path from idea to launch.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step} className="rounded-3xl border border-white/10 bg-white/4 p-6">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#2457c5] text-sm font-semibold">0{index + 1}</div>
                  <p className="text-base leading-7 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2457c5]">Pricing</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">Straightforward packages for a strong first impression.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-3xl border p-6 ${pkg.featured ? "border-[#2457c5] bg-[#2457c5] text-white shadow-xl shadow-blue-200/50" : "border-slate-200 bg-white text-slate-900"}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                  {pkg.featured ? (
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-blue-100">
                      Most popular
                    </span>
                  ) : null}
                </div>
                <div className="mt-6 text-4xl font-semibold">{pkg.price}</div>
                <p className={`mt-4 text-base leading-7 ${pkg.featured ? "text-blue-100" : "text-slate-600"}`}>
                  {pkg.description}
                </p>
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

                <Link href="/pricing" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-base font-medium transition ${pkg.featured ? "bg-white text-[#101c35] hover:bg-slate-100" : "bg-[#101c35] text-white hover:bg-slate-800"}`}>
                  Choose package
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2457c5]">Why INFIEIGHT</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">Clear strategy. Premium execution. No hype, just traction.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="text-xl font-semibold text-slate-900">Trust-first design</div>
                <p className="mt-3 text-slate-600">The experience is designed to feel credible, organized, and real from the first scroll.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="text-xl font-semibold text-slate-900">Clear business value</div>
                <p className="mt-3 text-slate-600">Every section serves the decision-making process and reduces friction for buyers.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="text-xl font-semibold text-slate-900">Flexible delivery</div>
                <p className="mt-3 text-slate-600">The service model can grow from a single website to broader product and business solutions.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="text-xl font-semibold text-slate-900">Built for scale</div>
                <p className="mt-3 text-slate-600">The platform foundation is ready for future add-ons, dashboards, and administrative workflows.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="container-shell py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2457c5]">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">Questions people ask before they commit.</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-shell pb-20">
          <div className="rounded-[32px] bg-[#101c35] px-6 py-12 text-center text-white sm:px-10 lg:px-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Ready to build</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Create the next version of your digital presence.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Let’s shape a premium digital experience that reflects your expertise and gives your audience a reason to trust you immediately.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#2457c5] px-7 py-3 text-base font-medium text-white transition hover:bg-[#1d4bb3]">
                Start a project
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-base font-medium text-white transition hover:bg-white/10">
                View packages
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
