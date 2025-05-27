import Image from "next/image";
import React from "react";

export default function HeroSectionAbout() {
  return (
    <section className="absolute w-full top-0 hero_background h-[85vh] md:h-[95vh] py-20 flex items-center justify-center">
      <div data-aos="fade-up" className="relative">
        <Image
          src="/icons/beans_white.svg"
          alt="Promotion"
          width={500}
          height={500}
          className="absolute -top-18 lg:-top-30 -left-10 w-[50%] md:w-[30%] lg:w-[35%] opacity-40"
        />
        <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold text-shadow-2xs">
          About Us
        </h2>
      </div>
    </section>
  );
}
