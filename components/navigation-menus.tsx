"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our work", href: "/work" },
  { label: "Partners", href: "/partners" },
  { label: "Think tank", href: "/think-tank" },
];

function isCurrentRoute(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="desktop-navigation">
      {primaryNavigation.map((item) => (
        <Link
          aria-current={isCurrentRoute(pathname, item.href) ? "page" : undefined}
          href={item.href}
          key={item.label}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

const mobileNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our work", href: "/work" },
  { label: "Partners", href: "/partners" },
  { label: "Think tank", href: "/think-tank" },
];

export function MobileMenu() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false;
        setIsOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        setIsOpen(false);
        menu.querySelector("summary")?.focus();
      }
    };

    menu.open = false;
    setIsOpen(false);
    window.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [pathname]);

  return (
    <details
      className="mobile-menu"
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
      ref={menuRef}
    >
      <summary aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}>
        <span>{isOpen ? "Close" : "Menu"}</span>
        <span className={`mobile-menu-icon${isOpen ? " mobile-menu-icon-open" : ""}`} aria-hidden="true">
          <span />
          <span />
        </span>
      </summary>
      <nav aria-label="Mobile navigation" id="mobile-navigation">
        {mobileNavigation.map((item) => {
          const isCurrent = isCurrentRoute(pathname, item.href);

          return (
            <Link
              aria-current={isCurrent ? "page" : undefined}
              href={item.href}
              key={item.label}
              onClick={() => {
                if (menuRef.current) menuRef.current.open = false;
                setIsOpen(false);
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </details>
  );
}
