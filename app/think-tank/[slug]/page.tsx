import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/components/think-tank-data";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ThinkTankArticlePage({
  params,
}: PageProps<"/think-tank/[slug]">) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-[#f7f5f1] text-[#201b24]">
        <section className="bg-[#17131d] py-20 text-white sm:py-28">
          <div className="container-shell">
            <Link className="text-sm text-white/60 transition hover:text-white" href="/think-tank">
              ← Think tank
            </Link>
            <p className="section-label mt-10 text-[#d3a6ff]">{article.category} · INFIEIGHT field notes</p>
            <h1 className="display-heading mt-5 max-w-4xl text-5xl font-medium leading-[0.95] sm:text-7xl">{article.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">{article.summary}</p>
          </div>
        </section>
        <article className="container-shell max-w-4xl py-14 sm:py-20">
          <p className="text-xl leading-9 text-[#4f4854] sm:text-2xl sm:leading-10">{article.intro}</p>
          <div className="mt-12 space-y-10">
            {article.sections.map((section, index) => (
              <section className="grid gap-3 sm:grid-cols-[72px_1fr]" key={section.heading}>
                <p className="section-label pt-1 text-[#765097]">0{index + 1}</p>
                <div>
                  <h2 className="text-2xl font-semibold">{section.heading}</h2>
                  <p className="mt-3 text-base leading-8 text-[#6b6570]">{section.body}</p>
                </div>
              </section>
            ))}
          </div>
          <div className="mt-14 border-t border-black/10 pt-8">
            <Link className="inline-flex items-center gap-2 text-sm font-semibold text-[#302338] underline decoration-[#b995cf] underline-offset-4" href="/think-tank">
              More field notes <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
        <section className="bg-[#ece7ef] py-14">
          <div className="container-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="display-heading max-w-2xl text-3xl font-medium sm:text-4xl">Have a thought to add?</h2>
            <Link href="/contact" className="button-dark">Continue the conversation <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
