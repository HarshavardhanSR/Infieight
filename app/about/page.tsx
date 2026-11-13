import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const principles = [
  ["Curiosity", "Ask better questions before reaching for familiar answers."],
  ["Clarity", "Make the complex feel understandable and the next step feel possible."],
  ["Craft", "Sweat the details that make a useful experience feel considered."],
  ["Momentum", "Build, learn, and keep improving instead of standing still."],
];

const process = [
  ["01", "Listen", "Understand your people, your ambition, and the problem behind the brief."],
  ["02", "Shape", "Turn the insight into a focused direction and a plan you can believe in."],
  ["03", "Make", "Bring the right mix of design and technology together with care."],
  ["04", "Learn", "Launch with intention, measure what matters, and keep improving."],
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f7f5f1] text-[#201b24]">
        <PageHero
          description="An independent digital studio bringing strategy, creative, and technology together to help ambitious ideas move forward."
          image="/images/about-hero.jpg"
          label="About INFIEIGHT"
          marqueeMessage="Thoughtful by nature. Connected by design."
          title="Good work, made together."
        />
        <section className="container-shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <p className="section-label text-[#765097]">Who we are</p>
          <div>
            <p className="max-w-4xl text-2xl leading-10 text-[#4f4854] sm:text-3xl sm:leading-[1.55]">
              We help businesses make sense of what&apos;s next. INFIEIGHT
              connects strategy and execution so the work solves a real
              problem, makes a clear impression, and gives people a reason to
              take action.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-[#6b6570]">
              Every project is different. We keep the process collaborative,
              the scope grounded, and the focus on outcomes that matter to the
              people using what we create.
            </p>
          </div>
        </section>
        <section className="bg-[#ece7ef] py-16 sm:py-24">
          <div className="container-shell">
            <p className="section-label text-[#765097]">What guides the work</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {principles.map(([title, description], index) => (
                <details className="about-principle group rounded-2xl border border-black/10 bg-white/70 p-6" key={title}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden">
                    <span className="flex items-center gap-4">
                      <span className="section-label text-[#765097]">0{index + 1}</span>
                      <span className="text-xl font-semibold">{title}</span>
                    </span>
                    <span className="about-principle-icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-5 max-w-lg border-t border-black/10 pt-4 text-sm leading-7 text-[#514a56]">{description}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#17131d] py-16 text-white sm:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="section-label text-[#d3a6ff]">How we work</p>
              <h2 className="display-heading mt-5 text-4xl font-medium leading-tight sm:text-5xl">
                Make the next move together.
              </h2>
            </div>
            <div className="about-process-list divide-y divide-white/15 border-y border-white/15">
              {process.map(([number, title, description]) => (
                <details className="group py-5" key={number}>
                  <summary className="grid cursor-pointer list-none grid-cols-[44px_1fr_24px] items-center gap-3 marker:hidden sm:grid-cols-[50px_1fr_28px]">
                    <span className="section-label text-[#e2c6fa]">{number}</span>
                    <span className="text-xl font-medium">{title}</span>
                    <span className="about-principle-icon border-white/40 text-white group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="pb-2 pl-[56px] pt-3 text-sm leading-7 text-white/80 sm:pl-[62px]">{description}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="container-shell flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
          <h2 className="display-heading max-w-2xl text-4xl font-medium sm:text-5xl">Want to make something meaningful?</h2>
          <Link href="/contact" className="button-dark">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
