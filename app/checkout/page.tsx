"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

const packageOptions = [
  { name: "Starter", price: 3999 },
  { name: "Professional", price: 7999 },
  { name: "Premium", price: 14999 },
  { name: "Custom scope", price: 19999 },
];

export default function CheckoutPage() {
  const [selectedPackage, setSelectedPackage] = useState(packageOptions[1]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const handleCheckout = async () => {
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: selectedPackage.price,
          currency: "INR",
          receipt: `infieight-${Date.now()}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to initiate checkout.");
      }

      if (!window.Razorpay) {
        setMessage("The Razorpay script is still loading. Please try again in a moment.");
        return;
      }

      const options = {
        key: data.key || "rzp_test_demo",
        amount: data.order?.amount || selectedPackage.price * 100,
        currency: data.order?.currency || "INR",
        name: "INFIEIGHT",
        description: `${selectedPackage.name} package`,
        image: "/favicon.ico",
        order_id: data.order?.id,
        handler: function () {
          setMessage("Payment initiated successfully. Add your live Razorpay keys to complete real checkout in production.");
        },
        theme: {
          color: "#2457c5",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error: unknown) {
      setMessage(error instanceof Error ? error.message : "Checkout failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f5f8] text-slate-900">
      <SiteHeader />

      <main className="container-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2457c5]">Checkout</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-900">Review your package and pay securely.</h1>
            </div>

            <div className="card-surface rounded-[28px] p-6">
              <div className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Choose package</div>
              <div className="space-y-3">
                {packageOptions.map((pkg) => (
                  <button
                    key={pkg.name}
                    type="button"
                    onClick={() => setSelectedPackage(pkg)}
                    className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition ${selectedPackage.name === pkg.name ? "border-[#2457c5] bg-[#eef2ff]" : "border-slate-200 bg-white"}`}
                  >
                    <div>
                      <div className="text-lg font-semibold text-slate-900">{pkg.name}</div>
                      <div className="text-sm text-slate-500">One-time service package</div>
                    </div>
                    <div className="text-lg font-semibold text-slate-900">₹{pkg.price.toLocaleString("en-IN")}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="card-surface rounded-[28px] p-6 md:p-8">
            <div className="rounded-[24px] bg-[#101c35] p-6 text-white">
              <div className="text-sm uppercase tracking-[0.2em] text-blue-200">Order summary</div>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="text-xl font-semibold">{selectedPackage.name}</div>
                  <div className="mt-1 text-sm text-slate-300">Digital service package</div>
                </div>
                <div className="text-2xl font-semibold">₹{selectedPackage.price.toLocaleString("en-IN")}</div>
              </div>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-5 text-sm text-slate-300">
                <div className="flex justify-between"><span>Delivery</span><span>1–4 weeks</span></div>
                <div className="flex justify-between"><span>Support</span><span>Included</span></div>
                <div className="flex justify-between"><span>Platform</span><span>Next.js + Tailwind</span></div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={handleCheckout}
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#2457c5] px-6 py-3 text-base font-medium text-white transition hover:bg-[#1d4bb3] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Processing..." : `Pay ₹${selectedPackage.price.toLocaleString("en-IN")}`}
              </button>

              {message ? (
                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                  {message}
                </div>
              ) : null}
            </div>

            <div className="mt-6 text-sm text-slate-500">
              Razorpay integration is prepared for production use. Add your live keys in a local environment file before deploying.
            </div>
          </div>
        </div>

        <div className="mt-12 text-sm text-slate-500">
          <Link href="/pricing" className="text-[#2457c5] hover:underline">← Back to packages</Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
