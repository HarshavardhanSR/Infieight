import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const contactEmail = "harshavardhanmywork@gmail.com";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f7f5f1] text-[#201b24]">
        <section className="bg-[#17131d] py-20 text-white sm:py-28">
          <div className="container-shell">
            <p className="section-label text-[#d3a6ff]">Start a conversation</p>
            <h1 className="display-heading mt-7 max-w-4xl text-5xl font-medium leading-[0.94] sm:text-7xl">
              Tell us what&apos;s on your mind.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
              Share what you&apos;re working on, what feels stuck, or where you
              want to go. We&apos;ll help you find a thoughtful next step.
            </p>
          </div>
        </section>

        <section className="container-shell grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="section-label text-[#765097]">A good place to begin</p>
            <h2 className="display-heading mt-5 text-4xl font-medium leading-tight sm:text-5xl">
              A little context goes a long way.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#6b6570]">
              Tell us about your goals, audience, and timeline. We&apos;ll get
              back to you with the right questions and a clear way forward.
            </p>
            <div className="mt-8 space-y-4 border-t border-black/10 pt-6 text-sm text-[#4f4854]">
              <p className="flex items-start gap-3">
                <span className="text-[#8e6eaa]" aria-hidden="true">01</span>
                Share a few details about your project.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#8e6eaa]" aria-hidden="true">02</span>
                We&apos;ll review what you have in mind.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#8e6eaa]" aria-hidden="true">03</span>
                We&apos;ll talk through a practical next step.
              </p>
            </div>
            <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#302338] underline decoration-[#b995cf] underline-offset-4">
              Explore our services <span aria-hidden="true">↗</span>
            </Link>
            <p className="mt-8 border-t border-black/10 pt-5 text-sm text-[#6b6570]">
              Prefer email?{" "}
              <a className="font-medium text-[#765097] underline decoration-[#b995cf] underline-offset-4" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
          </div>

          <ContactForm recipient={contactEmail} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
