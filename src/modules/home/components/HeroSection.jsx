import React from "react";

export default function HeroSection() {
  return (
    <section className="absolute w-full top-0 hero_background h-[85vh] md:h-[95vh] py-20">
      <div
        data-aos="fade-up"
        className="text-center w-full mt-40 flex flex-col justify-start items-center gap-2 md:gap-4 lg:gap-6 px-5"
      >
        <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold">
          We've got your morning covered with
        </h2>
        <h1 className="text-white"></h1>
        <h2 className="text-white text-sm md:text-base lg:text-lg font-extralight">
          it is best to strat your day with a cup of coffe. discover the best
          flavours coffee you will everhave. We provide the best for our
          customers.
        </h2>
      </div>
    </section>
  );
}
