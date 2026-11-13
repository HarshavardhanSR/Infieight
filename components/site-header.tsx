"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowIcon } from "@/components/arrow-icons";
import { GlitchWordmark } from "@/components/glitch-wordmark";
import { DesktopNavigation, MobileMenu } from "@/components/navigation-menus";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isContactPage = pathname === "/contact";

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`site-header${isScrolled ? " site-header-scrolled" : ""}${isContactPage ? " site-header-solid" : ""}`}
    >
      <div className="site-header-inner container-shell">
        <Link href="/" className="brand-lockup" aria-label="INFIEIGHT home">
          <GlitchWordmark className="brand-wordmark" />
        </Link>
        <DesktopNavigation />
        <Link href="/contact" className="header-cta header-cta-desktop">
          <span className="header-cta-label">Let&apos;s talk</span>
          <span className="header-cta-arrow"><ArrowIcon /></span>
        </Link>
        <div className="header-mobile-controls">
          <MobileMenu />
          <Link href="/contact" className="header-cta header-cta-mobile">
            <span className="header-cta-label">Let&apos;s talk</span>
            <span className="header-cta-arrow"><ArrowIcon /></span>
          </Link>
        </div>
      </div>
    </header>
  );
}
