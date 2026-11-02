import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-sm">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#101c35] text-sm font-semibold text-white">
            I8
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight text-slate-900">INFIEIGHT</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Digital services</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/" className="transition hover:text-slate-900">Home</Link>
          <Link href="/services" className="transition hover:text-slate-900">Services</Link>
          <Link href="/pricing" className="transition hover:text-slate-900">Pricing</Link>
          <Link href="/checkout" className="transition hover:text-slate-900">Checkout</Link>
          <Link href="/#process" className="transition hover:text-slate-900">Process</Link>
          <Link href="/contact" className="transition hover:text-slate-900">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/pricing" className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:inline-flex">
            View pricing
          </Link>
          <Link href="/checkout" className="inline-flex rounded-full bg-[#2457c5] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#1d4bb3]">
            Pay now
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell flex flex-col gap-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>© 2026 INFIEIGHT</div>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <Link href="/services" className="hover:text-slate-900">Services</Link>
          <Link href="/pricing" className="hover:text-slate-900">Pricing</Link>
          <Link href="/checkout" className="hover:text-slate-900">Checkout</Link>
          <Link href="/contact" className="hover:text-slate-900">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
