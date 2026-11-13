import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const waysToPartner = [
  {
    number: "01",
    title: "Bring us into the brief",
    description:
      "Add strategy, design, or engineering support when a client challenge needs a specialist team.",
  },
  {
    number: "02",
    title: "Build a joined-up solution",
    description:
      "Combine complementary skills to deliver a considered experience from the first idea through launch.",
  },
  {
    number: "03",
    title: "Make room for the right expertise",
    description:
      "Work alongside independent practitioners and teams whose experience fits the work at hand.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f7f5f1] text-[#201b24]">
        <PageHero
          description="Strong digital work is rarely a solo effort. We collaborate with people and teams who bring thoughtful expertise to the table."
          image="/images/partners-hero.jpg"
          label="Working together"
          marqueeMessage="Good people make good work"
          title="Better together."
        />
        <section className="container-shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="section-label text-[#765097]">The right people, together</p>
            <h2 className="display-heading responsive-section-heading mt-5 text-4xl font-medium leading-tight sm:text-5xl">
              Collaboration should make the work stronger.
            </h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-[#5e5662]">
              We partner with studios, independent specialists, and
              organizations when shared expertise can create a better result.
              Clear communication and mutual respect come first.
            </p>
            <p className="mt-5 text-base leading-7 text-[#6b6570]">
              We agree on roles, scope, ownership, and how we work together
              before the project begins. No hidden handoffs and no surprises.
            </p>
          </div>
        </section>
        <section className="bg-[#ece7ef] py-16 sm:py-24">
          <div className="container-shell">
            <p className="section-label text-[#765097]">Ways to work together</p>
            <div className="mt-8 grid gap-3 lg:grid-cols-3">
              {waysToPartner.map((item) => (
                <article className="rounded-2xl border border-black/10 bg-white/70 p-6 sm:p-8" key={item.number}>
                  <p className="section-label text-[#765097]">{item.number}</p>
                  <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6b6570]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="container-shell flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
          <div>
            <p className="section-label text-[#765097]">Let&apos;s collaborate</p>
            <h2 className="display-heading mt-3 max-w-2xl text-4xl font-medium sm:text-5xl">Have a good fit in mind?</h2>
          </div>
          <Link href="/contact" className="button-dark">Introduce yourself <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
