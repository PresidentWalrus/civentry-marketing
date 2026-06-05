import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Features } from "@/components/Features";
import { Origin } from "@/components/Origin";
import { Pricing } from "@/components/Pricing";
import { ClosingCta } from "@/components/ClosingCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Features />
        <Origin />
        <Pricing />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
