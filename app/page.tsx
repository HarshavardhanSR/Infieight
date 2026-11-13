import { SiteFooter, SiteHeader } from "@/components/site-shell";
import HomePage from "@/components/home-page";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HomePage />
      <SiteFooter />
    </>
  );
}
