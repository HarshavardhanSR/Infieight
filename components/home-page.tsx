import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/arrow-icons";
import { HeroWaterTrail } from "@/components/hero-water-trail";
import { services } from "@/components/service-data";
import { StudioMarquee } from "@/components/studio-marquee";
import { workItems } from "@/components/work-data";

export default function HomePage() {
  return (
    <main>
      <section className="hero-stage home-hero-stage relative overflow-hidden text-white">
        <div className="hero-visual" aria-hidden="true">
          <Image
            alt=""
            className="hero-image"
            fill
            preload
            quality={75}
            sizes="90vw"
            src="/images/home-hero.jpg"
          />
        </div>
        <div className="hero-grain" aria-hidden="true" />
        <HeroWaterTrail />
        <div className="home-hero-container container-shell relative z-10 flex min-h-[100svh] flex-col justify-between py-12 sm:py-16 lg:py-20">
          <div className="home-hero-main grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:items-end">
            <div className="home-hero-heading-group">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md shadow-sm transition hover:border-white/30 hover:bg-white/15">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </span>
                <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/90 sm:text-xs">
                  DIGITAL STUDIO · CRAFTING NEXT-GEN EXPERIENCES &amp; SYSTEMS
                </span>
              </div>

              <h1 className="home-hero-title display-heading mt-6 font-bold uppercase tracking-[-0.04em] text-white">
                <span className="hero-title-line">DIGITAL THAT</span>
                <span className="hero-title-line bg-gradient-to-r from-white via-purple-100 to-[#d8b4fe] bg-clip-text text-transparent">
                  MOVES YOU
                </span>
                <span className="hero-title-line">
                  FORWARD<span className="text-[#c084fc]">.</span>
                </span>
              </h1>
            </div>

            <div className="hero-copy flex flex-col justify-end gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:gap-7 sm:p-8 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#e4b7ff]">
                  01 / 06 · Studio Focus
                </span>
                <span className="text-xs font-medium tracking-widest uppercase text-white/50">
                  Design &amp; Technology
                </span>
              </div>

              <p className="hero-copy-description text-base sm:text-lg lg:text-[1.125rem] font-normal leading-relaxed text-white/85">
                We engineer high-performance digital platforms, category-defining brand identities,
                and connected technologies for ambitious businesses ready to make their next move.
              </p>

              <div className="hero-cta-group flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-[#100b18] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#f5eaff] hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Start a Conversation</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#100b18] text-white transition-all duration-300 group-hover:bg-[#34164b] group-hover:scale-105">
                    <span className="block h-3.5 w-3.5 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowIcon />
                    </span>
                  </span>
                </Link>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm sm:text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Our Work</span>
                  <span
                    aria-hidden="true"
                    className="text-white/60 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mr-1">
                  Disciplines:
                </span>
                {["Digital Platforms", "Design Systems", "Connected Tech", "Brand Strategy"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="home-hero-metrics mt-12 w-full pt-6 sm:mt-16 sm:pt-8 lg:mt-20">
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-md sm:grid-cols-4 sm:gap-6 sm:p-6 lg:rounded-3xl lg:p-7">
              <div className="flex flex-col border-white/10 pl-2 sm:border-l sm:pl-6 sm:first:border-l-0 sm:first:pl-2">
                <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  99.4%
                </span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                  Delivery Precision
                </span>
                <span className="mt-0.5 text-[11px] text-white/50">
                  On-time &amp; on-scope execution
                </span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-6">
                <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  3.5×
                </span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                  Average Client Growth
                </span>
                <span className="mt-0.5 text-[11px] text-white/50">
                  Proven post-launch scale
                </span>
              </div>
              <div className="flex flex-col border-white/10 pl-2 max-sm:border-t max-sm:pt-4 sm:border-l sm:pl-6">
                <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  100%
                </span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                  Bespoke Architecture
                </span>
                <span className="mt-0.5 text-[11px] text-white/50">
                  Zero generic templates
                </span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-4 max-sm:border-t max-sm:pt-4 sm:pl-6">
                <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Global
                </span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                  India, Australia &amp; Beyond
                </span>
                <span className="mt-0.5 text-[11px] text-white/50">
                  Distributed studio delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-studio-image container-shell" aria-label="A look inside the studio">
        <Image
          alt="A bright, welcoming studio space"
          className="home-studio-image-photo"
          height={700}
          sizes="(max-width: 700px) 100vw, 94vw"
          src="/images/about-hero.jpg"
          width={2000}
        />
        <p>Good work happens when the right people move together.</p>
      </section>

      <StudioMarquee
        className="studio-marquee-home"
        message="A connected digital practice"
        tone="ink"
      />

      <section id="intro" className="bg-[#f7f5f1] py-20 sm:py-28">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="section-label text-[#765097]">A little about us</p>
            <h2 className="display-heading responsive-section-heading mt-5 text-4xl font-medium leading-tight sm:text-6xl">
              Good work starts with a good question.
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="max-w-2xl text-xl leading-9 text-[#5e5662] sm:text-2xl sm:leading-10">
              We bring strategy, creative, and technology together to solve the
              problem behind the brief—not just deliver another digital asset.
            </p>
            <Link
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#302338] underline decoration-[#b995cf] underline-offset-4"
              href="/about"
            >
              Get to know INFIEIGHT <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-[#201b24] sm:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-label text-[#765097]">What we do</p>
              <h2 className="display-heading responsive-section-heading mt-5 text-4xl font-medium leading-tight sm:text-6xl">
                The right work, all in one place.
              </h2>
            </div>
            <Link
              className="text-sm font-semibold text-[#302338] underline decoration-[#b995cf] underline-offset-4"
              href="/services"
            >
              Explore all services <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Link
                className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#a754ed]/50 hover:shadow-xl"
                href={`/services#${service.slug}`}
                key={service.slug}
              >
                <span className="section-label text-[#765097]">{service.number}</span>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#655c6a]">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#302338]">
                  Discover the service <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f1] py-20 sm:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
            <p className="section-label text-[#765097]">Selected explorations</p>
            <h2 className="display-heading responsive-section-heading mt-5 max-w-3xl text-4xl font-medium leading-tight sm:text-6xl">
              Good ideas deserve to be seen.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#655c6a]">
              Take a closer look at our design explorations and the thinking
              behind them.
            </p>
            </div>
            <Link className="button-dark" href="/work">
              Explore our work <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="home-work-grid">
            {workItems.map((item) => (
              <Link className="home-work-card" href={`/work/${item.slug}`} key={item.slug}>
                <Image alt="" fill sizes="(max-width: 900px) 100vw, 33vw" src={item.image} />
                <span className="home-work-card-overlay" aria-hidden="true" />
                <span className="home-work-card-label">{item.number} · {item.category}</span>
                <span className="home-work-card-title">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-faq bg-white py-20 sm:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="section-label text-[#765097]">Frequently asked</p>
            <h2 className="display-heading responsive-section-heading mt-5 text-4xl font-medium leading-tight sm:text-5xl">
              A few things worth knowing.
            </h2>
          </div>
          <div className="home-faq-list">
            {[
              ["What does working with INFIEIGHT look like?", "We start by understanding your goals and the people you need to reach. From there, we shape the right mix of strategy, design, and technology for the project."],
              ["Can you help with one part of a project?", "Yes. We can join for a focused piece of work or bring several disciplines together when a connected solution will make a stronger result."],
              ["How do we get started?", "Tell us what you are trying to change. We will set up a conversation, ask a few useful questions, and agree on a clear next step."],
            ].map(([question, answer]) => (
              <details className="home-faq-item" key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f1] py-20 sm:py-28">
        <div className="container-shell flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label text-[#765097]">Your next chapter</p>
            <h2 className="display-heading responsive-section-heading mt-5 max-w-3xl text-4xl font-medium leading-tight sm:text-6xl">
              Have an idea? Let&apos;s make a plan.
            </h2>
          </div>
          <Link className="button-dark" href="/contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
