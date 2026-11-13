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
        <div className="home-hero-container container-shell relative z-10 flex flex-col justify-between py-12 sm:py-16 lg:py-20">
          <div className="home-hero-main grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.75fr)] lg:items-end">
            <div className="home-hero-heading-group">
              <div className="hero-status-badge inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d8b4fe] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c084fc]"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
                  Independent Digital Studio · India &amp; Beyond
                </span>
                <span className="hidden sm:inline text-white/30">/</span>
                <span className="hidden sm:inline text-xs font-medium tracking-wider text-white/70">
                  Available for Q2 Projects
                </span>
              </div>

              <h1 className="home-hero-title display-heading mt-6 font-semibold uppercase leading-[0.92]">
                <span className="hero-title-line">Digital that</span>
                <span className="hero-title-line">moves you</span>
                <span className="hero-title-line text-gradient-accent">forward<span className="text-[#c084fc]">.</span></span>
              </h1>

              <p className="hero-copy-description mt-6 max-w-xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white/80">
                We engineer high-performance digital platforms, category-defining brand identities, and transformative technologies for businesses ready to make their next move.
              </p>

              <div className="hero-actions mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="hero-primary-btn group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-[#140b22] transition-all hover:bg-[#f3e8ff] hover:shadow-[0_0_30px_rgba(192,132,252,0.35)]"
                >
                  <span>Tell us what you&apos;re building</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#140b22] text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowIcon />
                  </span>
                </Link>
                <Link
                  href="/work"
                  className="hero-secondary-btn inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
                >
                  <span>Explore selected work</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="hero-capability-card hidden lg:flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Core Disciplines</span>
                <span className="text-xs font-semibold text-[#c084fc]">01 / 04</span>
              </div>
              <ul className="my-5 space-y-3 text-sm font-medium text-white/85">
                <li className="flex items-center justify-between">
                  <span>01. Strategy &amp; Architecture</span>
                  <span className="text-white/40">↗</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>02. Design Systems &amp; UX</span>
                  <span className="text-white/40">↗</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>03. Next-Gen Engineering</span>
                  <span className="text-white/40">↗</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>04. Growth &amp; Intelligence</span>
                  <span className="text-white/40">↗</span>
                </li>
              </ul>
              <div className="border-t border-white/10 pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d8b4fe] hover:text-white transition-colors"
                >
                  <span>View all capabilities</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-metrics-bar mt-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
              <div className="hero-metric-item">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">99.4%</span>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                  Delivery Precision
                </p>
              </div>
              <div className="hero-metric-item border-l border-white/10 pl-6">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">3.5×</span>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                  Avg. Value Growth
                </p>
              </div>
              <div className="hero-metric-item border-l border-white/10 pl-6">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">100%</span>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                  Bespoke Systems
                </p>
              </div>
              <div className="hero-metric-item border-l border-white/10 pl-6">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Global</span>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                  India, Australia &amp; Beyond
                </p>
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
