import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { workItems } from "@/components/work-data";

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f7f5f1] text-[#201b24]">
        <PageHero
          description="A look at the questions, ideas, and design directions that shape how we think about digital work."
          image="/images/work-hero.jpg"
          label="Selected work"
          marqueeMessage="Strategy made visible"
          title="Digital ideas, in action."
        />
        <section className="container-shell py-16 sm:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-3xl text-lg leading-8 text-[#514a56]">
              Explore original INFIEIGHT concept studies across brand, product,
              and digital strategy.
            </p>
            <p className="section-label text-[#765097]">Concept studies · No client claims</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {workItems.map((item) => (
              <article className={`work-card ${item.className}`} key={item.slug}>
                <Link
                  aria-label={`Read ${item.title}`}
                  className="work-art group"
                  href={`/work/${item.slug}`}
                >
                  <Image
                    alt=""
                    className="work-art-image"
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    src={item.image}
                  />
                  <span className="work-art-overlay" aria-hidden="true" />
                  <span className="work-art-number">{item.number} / INFIEIGHT STUDY</span>
                  <span className="work-view-link">View study ↗</span>
                </Link>
                <div className="p-6 sm:p-8">
                  <p className="section-label text-[#765097]">{item.number} · {item.category}</p>
                  <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#514a56]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-[#ece7ef] py-16 sm:py-20">
          <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="section-label text-[#765097]">Have a challenge?</p>
              <h2 className="display-heading mt-3 max-w-2xl text-4xl font-medium sm:text-5xl">Let&apos;s shape what it could become.</h2>
            </div>
            <Link href="/contact" className="button-dark">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
