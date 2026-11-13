import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { workItems } from "@/components/work-data";

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export default async function WorkDetailPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const item = workItems.find((project) => project.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-[#f7f5f1] text-[#201b24]">
        <PageHero
          description={item.description}
          image="/images/work-hero.jpg"
          label={`${item.category} · INFIEIGHT concept study ${item.number}`}
          marqueeMessage="Explore the thinking behind the work"
          title={item.title}
        />
        <section className="container-shell py-12 sm:py-20">
          <div className={`work-card ${item.className}`}>
            <div className="work-art work-art-featured" aria-hidden="true">
              {item.number === "02" ? (
                <div className="product-panel">
                  <div className="product-panel-top"><span>OVERVIEW</span><span>•••</span></div>
                  <div className="product-panel-title">Your next move<br />starts here.</div>
                  <div className="product-panel-chart"><span /><span /><span /><span /><span /><span /><span /><span /></div>
                  <div className="product-panel-foot"><span>Make progress visible</span><span>↗</span></div>
                </div>
              ) : (
                <div className="work-browser">
                  <div className="work-browser-bar"><i /><i /><i /></div>
                  <div className="work-browser-content">
                    <span className="work-kicker">INFIEIGHT / DESIGN STUDY {item.number}</span>
                    <span className="work-heading">{item.title}.</span>
                    <span className="work-button">Explore the direction&nbsp; ↗</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-[#514a56]">
            Original concept exploration—not a client project or performance case study.
          </p>
        </section>
        <section className="bg-[#17131d] py-16 text-white sm:py-24">
          <div className="container-shell grid gap-10 md:grid-cols-3">
            {[
              ["The question", item.challenge],
              ["The direction", item.direction],
              ["The study", item.detail],
            ].map(([label, description], index) => (
              <article className="border-t border-white/25 pt-5" key={label}>
                <p className="section-label text-[#e2c6fa]">0{index + 1} · {label}</p>
                <p className="mt-5 text-base leading-7 text-white/85">{description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="container-shell flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
          <div>
            <p className="section-label text-[#765097]">Keep exploring</p>
            <h2 className="mt-3 text-3xl font-semibold">Have a project in mind?</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/work" className="button-dark">All work <span aria-hidden="true">↗</span></Link>
            <Link href="/contact" className="button-dark">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
