import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { articles } from "@/components/think-tank-data";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export default function ThinkTankPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f7f5f1] text-[#201b24]">
        <PageHero
          description="Ideas and practical notes on making digital work more useful, thoughtful, and clear."
          image="/images/think-tank-hero.jpg"
          label="Think tank · Field notes"
          marqueeMessage="Ideas in motion"
          title="Ideas worth sharing."
        />
        <section className="container-shell py-16 sm:py-24">
          <div className="grid gap-4 lg:grid-cols-3">
            {articles.map((article, index) => (
              <article className="think-tank-card" key={article.slug}>
                <Link
                  aria-label={`Read ${article.title}`}
                  className="think-tank-card-image"
                  href={`/think-tank/${article.slug}`}
                >
                  <Image alt="" fill sizes="(max-width: 900px) 100vw, 33vw" src={article.image} />
                  <span>FIELD NOTE · 0{index + 1}</span>
                </Link>
                <div className="think-tank-card-content">
                  <p className="section-label text-[#765097]">{article.category}</p>
                  <h2 className="display-heading mt-4 text-3xl font-medium leading-tight">{article.title}</h2>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[#6b6570]">{article.summary}</p>
                  <Link
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#302338] underline decoration-[#b995cf] underline-offset-4"
                    href={`/think-tank/${article.slug}`}
                  >
                    Read the note <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-[#ece7ef] py-16 sm:py-20">
          <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="section-label text-[#765097]">Have a question?</p>
              <h2 className="display-heading mt-3 max-w-2xl text-4xl font-medium sm:text-5xl">Let&apos;s think it through together.</h2>
            </div>
            <Link href="/contact" className="button-dark">Get in touch <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
