import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services } from "@/components/service-data";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f7f5f1] text-[#201b24]">
        <PageHero
          description="One focused team for the strategy, creative, and technology your next move needs."
          image="/images/services-hero.jpg"
          label="What we bring together"
          marqueeMessage="From first question to final detail"
          title="One team. Every digital move."
        />
        <section aria-label="All services" className="container-shell services-overview">
          <div className="services-overview-intro">
            <p className="section-label text-[#765097]">One connected practice</p>
            <h2 className="display-heading">
              Everything you need to move the work forward.
            </h2>
            <p>
              Explore the full range of INFIEIGHT services in one place. Each
              service can stand on its own or work together as one considered
              solution.
            </p>
          </div>
          <div className="services-overview-list">
            {services.map((service) => (
              <article
                className="service-overview-card"
                id={service.slug}
                key={service.slug}
              >
                <div className={`service-art ${service.visual}`} aria-hidden="true">
                  <span className="service-art-number">{service.number}</span>
                  <span className="service-art-shape" />
                  <span className="service-art-chip">INFIEIGHT · {service.number}</span>
                </div>
                <div className="service-overview-content">
                  <div className="service-overview-heading">
                    <p className="section-label text-[#765097]">
                      Service {service.number}
                    </p>
                    <h2>{service.title}</h2>
                  </div>
                  <p className="service-overview-description">
                    {service.description}
                  </p>
                  <p className="service-overview-detail">{service.detail}</p>
                  <div className="service-overview-tags" aria-label="Service focus">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="service-overview-capabilities">
                    <h3>What it can include</h3>
                    <ul>
                      {service.capabilities.map((capability) => (
                        <li key={capability}>{capability}</li>
                      ))}
                    </ul>
                  </div>
                  <Link className="service-overview-cta" href="/contact">
                    Talk to us about this service <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-[#ece7ef] py-16 sm:py-20">
          <div className="container-shell grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="section-label text-[#765097]">Your next step</p>
              <h2 className="display-heading mt-4 max-w-2xl text-4xl font-medium leading-tight sm:text-5xl">
                Not sure which service fits? Let&apos;s figure it out together.
              </h2>
            </div>
            <Link href="/contact" className="button-dark">
              Tell us what you need <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
