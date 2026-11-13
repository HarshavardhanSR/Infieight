"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { GlitchWordmark } from "@/components/glitch-wordmark";

type SiteMotionProps = {
  children: ReactNode;
};

export function SiteMotion({ children }: SiteMotionProps) {
  const pathname = usePathname();
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intro = introRef.current;
    if (
      !intro ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const introAnimation = intro.animate(
      [
        { opacity: 0, visibility: "visible" },
        { opacity: 1, visibility: "visible", offset: 0.72 },
        { opacity: 0, visibility: "hidden" },
      ],
      { duration: 560, easing: "ease", fill: "both" },
    );
    const progressAnimation = intro
      .querySelector<HTMLElement>(".site-intro-track span")
      ?.animate(
        [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
        { duration: 500, delay: 50, easing: "cubic-bezier(0.55, 0, 0.35, 1)" },
      );

    return () => {
      introAnimation.cancel();
      progressAnimation?.cancel();
    };
  }, [pathname]);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section:not(.hero-stage):not(.page-hero), main article",
      ),
    );
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) return;

          const siblings = Array.from(entry.target.parentElement?.children ?? []).filter(
            (element) => element.matches("article"),
          );
          const delay = entry.target.matches("article")
            ? Math.min(Math.max(siblings.indexOf(entry.target), 0), 4) * 90
            : 0;
          const animation = entry.target.animate(
            [
              { opacity: 0, transform: "translateY(26px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 650,
              delay,
              easing: "cubic-bezier(0.2, 0.75, 0.25, 1)",
              fill: "both",
            },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [pathname]);

  return (
    <>
      {children}
      <div aria-hidden="true" className="site-intro" ref={introRef}>
        <GlitchWordmark className="site-intro-name" />
        <div className="site-intro-track" aria-hidden="true">
          <span />
        </div>
        <p>Digital that moves you forward.</p>
      </div>
    </>
  );
}
