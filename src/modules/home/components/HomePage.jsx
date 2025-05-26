import React from "react";
import HeroSection from "./HeroSection";
import PromotionSection from "./PromotionSection";
import ServiceSection from "./ServiceSection";
import MenuSection from "./MenuSection";

export default function HomePage() {
  return (
    <>
      <section className="h-[90dvh]">
        <HeroSection />
      </section>
      <PromotionSection />
      <MenuSection />
      <ServiceSection />
    </>
  );
}
