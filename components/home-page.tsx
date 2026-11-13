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
            sizes="100vw"
            src="/images/home-hero.jpg"
          />
        </div>
        <div className="hero-grain" aria-hidden="true" />
        <HeroWaterTrail />
        <div className="home-hero-container container-shell relative z-10 flex min-h-[674px] flex-col justify-center pb-16 pt-20 sm:min-h-[734px] lg:min-h-[calc(100svh-82px)] lg:pb-20 lg:pt-24">
          <div className="home-hero-main grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(250px,300px)] lg:items-center">
            <div className="home-hero-heading-group">
              <p className="section-label text-white/65">
                Independent digital studio · India & beyond
              </p>
              <h1 className="home-hero-title display-heading mt-7 font-semibold uppercase leading-[0.86]">
                <span>Digital</span>
                <span>that moves</span>
                <span>you forward<span className="text-[#e4b7ff]">.</span></span>
              </h1>
            </div>
            <div className="hero-copy">
              <div className="hero-aside-top">
                <span className="hero-aside-index">01 / 06</span>
              </div>
              <p className="hero-copy-description">
                Strategy, design, and technology for businesses ready to make
                their next move.
              </p>
              <Link
                href="/contact"
                className="hero-cta mt-7"
              >
                Tell us what you&apos;re building
                <span className="arrow-circle"><ArrowIcon /></span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section className="home-studio-image container-shell" aria-label="A look inside the studio">
        <Image
          alt="A bright, welcoming studio space"
          className="home-studio-image-photo"
          height={920}
          sizes="(max-width: 900px) 100vw, 94vw"
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
            <h2 className="display-heading mt-5 text-4xl font-medium leading-tight sm:text-6xl">
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
              <h2 className="display-heading mt-5 text-4xl font-medium leading-tight sm:text-6xl">
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
            <h2 className="display-heading mt-5 max-w-3xl text-4xl font-medium leading-tight sm:text-6xl">
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
            <h2 className="display-heading mt-5 text-4xl font-medium leading-tight sm:text-5xl">
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
            <h2 className="display-heading mt-5 max-w-3xl text-4xl font-medium leading-tight sm:text-6xl">
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
