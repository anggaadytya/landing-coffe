import { CardValue } from "@/common/constant/cardValue";
import Image from "next/image";
import React from "react";

export default function PromotionSection() {
  return (
    <section className="relative pt-10 md:pt-16 lg:pt-20">
      <Image
        src="/images/blash_left.svg"
        alt="Promotion"
        width={500}
        height={500}
        className="absolute top-9 lg:-top-25 right-0 w-[50%] md:w-[30%] lg:w-[25%]"
        data-aos="fade-up"
      />
      <Image
        src="/images/blash_right.svg"
        alt="Promotion"
        width={500}
        height={500}
        className="absolute -bottom-10 lg:-top-25 left-0 w-[50%] md:w-[30%] lg:w-[25%]"
        data-aos="fade-up"
      />
      <div className="flex justify-center flex-col items-center gap-2 md:gap-4 lg:gap-6">
        <div
          data-aos="fade-up"
          className="flex flex-col gap-2 md:gap-4 lg:gap-6 items-center"
        >
          <h3 className="text-amber-900 font-bold text-2xl md:text-4xl lg:text-6xl text-shadow-md">
            Why are we different?
          </h3>
          <p className="font-extralight text-sm md:text-base lg:text-lg">
            We don't just make your coffe, we make your day!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 py-20 mx-6">
          {CardValue.map((item, index) => (
            <div
              data-aos="zoom-in"
              className={`flex flex-col gap-2 md:gap-4 lg:gap-6 items-center py-10 px-4 rounded-lg ${item.bgColor} shadow-lg hover:bg-amber-50 transition-all duration-500 ease-in-out`}
              key={index}
            >
              <Image
                src={item.img}
                alt="Promotion"
                width={80}
                height={80}
                className="object-contain"
              />
              <h3 className="text-amber-900 font-bold text-lg md:text-xl lg:text-2xl text-center">
                {item.title}
              </h3>
              <p className="font-extralight text-xs md:text-sm lg:text-base text-center">
                {item.paragraf}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
