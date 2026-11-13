import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icons";
import { StudioMarquee } from "@/components/studio-marquee";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  image: string;
  marqueeMessage: string;
};

export function PageHero({
  label,
  title,
  description,
  image,
  marqueeMessage,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-visual">
        <Image
          alt=""
          className="page-hero-image"
          fill
          preload
          quality={75}
          sizes="100vw"
          src={image}
        />
        <div className="page-hero-shade" aria-hidden="true" />
        <div className="container-shell page-hero-overlay">
          <div className="page-hero-title-lockup">
            <p className="section-label page-hero-label">{label}</p>
            <h1 className="display-heading page-hero-title">{title}</h1>
          </div>
        </div>
      </div>
      <StudioMarquee
        className="studio-marquee-page"
        message={marqueeMessage}
        tone="ink"
      />
      <div className="container-shell page-hero-intro">
        <p className="page-hero-copy">{description}</p>
        <Link className="page-hero-cta" href="/contact">
          Let&apos;s talk <span className="arrow-circle"><ArrowIcon /></span>
        </Link>
      </div>
    </section>
  );
}
