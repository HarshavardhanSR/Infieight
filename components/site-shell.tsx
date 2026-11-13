import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { GlitchWordmark } from "@/components/glitch-wordmark";

function BrandLink() {
  return (
    <Link href="/" className="brand-lockup" aria-label="INFIEIGHT home">
      <GlitchWordmark className="brand-wordmark" />
    </Link>
  );
}

export { SiteHeader };

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-shell site-footer-grid">
        <div>
          <BrandLink />
          <p className="footer-statement">Digital work for what comes next.</p>
          <Link href="/contact" className="footer-contact-link">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div>
          <h2 className="section-label">Studio</h2>
          <div className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/partners">Partners</Link>
            <Link href="/work">Our work</Link>
            <Link href="/think-tank">Think tank</Link>
          </div>
        </div>
        <div>
          <h2 className="section-label">Services</h2>
          <div className="footer-links">
            <Link href="/services">All services</Link>
            <Link href="/services#website-development">Web development</Link>
            <Link href="/services#search-optimization">Search</Link>
            <Link href="/pricing">Website packages</Link>
          </div>
        </div>
        <div>
          <h2 className="section-label">Say hello</h2>
          <div className="footer-links">
            <Link href="/contact">Let&apos;s talk</Link>
            <a href="mailto:harshavardhanmywork@gmail.com">Email INFIEIGHT</a>
          </div>
        </div>
      </div>
      <div className="container-shell footer-signature" aria-hidden="true">
        <GlitchWordmark className="footer-signature-wordmark" />
      </div>
      <div className="site-footer-bottom">
        <div className="container-shell">
          <p>© 2026 INFIEIGHT. All rights reserved.</p>
          <p>Thoughtful digital, made with intent.</p>
        </div>
      </div>
    </footer>
  );
}
