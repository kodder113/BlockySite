import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { WhatIsBlocky } from "@/components/sections/what-is-blocky";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Community } from "@/components/sections/community";
import { Roadmap } from "@/components/sections/roadmap";
import { Token } from "@/components/sections/token";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <WhatIsBlocky />
        <Ecosystem />
        <Community />
        <Roadmap />
        <Token />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
