import React from "react";
import HeroSection from "./HeroSection";
import PromotionSection from "./PromotionSection";
import ServiceSection from "./ServiceSection";
import MenuSection from "./MenuSection";

export default function HomePage() {
  return (
    <>
      <section className="h-[80vh] md:h-[90vh]">
        <HeroSection />
      </section>
      <PromotionSection />
      <MenuSection />
      <ServiceSection />
    </>
  );
}
