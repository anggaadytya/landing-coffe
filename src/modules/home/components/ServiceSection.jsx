"use client";

import Image from "next/image";
import { TestimonialValue } from "@/common/constant/testimonialValue";
import { useEffect, useState } from "react";

export default function ServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimonialValue.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[45vh] md:h-[65vh] services_background relative">
      <Image
        src="/images/left_wing.svg"
        alt="Promotion"
        width={300}
        height={300}
        className="absolute -bottom-10 left-0 w-[40%] md:w-[15%] lg:w-[15%]"
        data-aos="fade-down"
      />
      <Image
        src="/images/right_wing.svg"
        alt="Promotion"
        width={300}
        height={300}
        className="absolute -bottom-10 right-0 w-[40%] md:w-[15%] lg:w-[15%]"
        data-aos="fade-down"
      />

      <div className="container mx-auto flex flex-col justify-start items-center h-full py-10 md:py-20 gap-2 md:gap-4 lg:gap-4">
        <h3 className="text-amber-900 text-xl md:text-2xl lg:text-3xl">
          Testimonials
        </h3>
        <span className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Our Client Reviews
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 pt-0 md:pt-10">
          <div
            key={currentIndex}
            data-aos="fade-up"
            data-aos-duration="1000"
            className="relative shadow-2xl block md:hidden"
          >
            <Image
              src={TestimonialValue[currentIndex].img}
              alt="testimonials"
              width={300}
              height={300}
              className="object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full ">
              <div className="relative bg-white m-4 p-4 flex flex-col justify-start items-center rounded-xl">
                <Image
                  src={TestimonialValue[currentIndex].avatar}
                  alt="avatar"
                  width={50}
                  height={50}
                  className="object-cover absolute -top-5 border-4 border-white rounded-full"
                />
                <h5 className="text-amber-900 text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-4 lg:mt-6">
                  {TestimonialValue[currentIndex].name}
                </h5>
                <span className="text-xs md:text-sm lg:text-base font-extralight">
                  {TestimonialValue[currentIndex].title}
                </span>
                <p className="text-xs md:text-sm lg:text-base font-extralight text-center pt-4">
                  "{TestimonialValue[currentIndex].paragraf}"
                </p>
              </div>
            </div>
          </div>
          {TestimonialValue?.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="relative shadow-2xl hidden md:block"
            >
              <Image
                src={item.img}
                alt="testimonials"
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 w-full ">
                <div className="relative bg-white m-4 p-4 flex flex-col justify-start items-center rounded-xl">
                  <Image
                    src={item.avatar}
                    alt="avatar"
                    width={50}
                    height={50}
                    className="object-cover absolute -top-5 border-4 border-white rounded-full"
                  />
                  <h5 className="text-amber-900 text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-4 lg:mt-6">
                    {item.name}
                  </h5>
                  <span className="text-xs md:text-sm lg:text-base font-extralight">
                    {item.title}
                  </span>
                  <p className="text-xs md:text-sm lg:text-base font-extralight text-center pt-4">
                    "{item.paragraf}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
