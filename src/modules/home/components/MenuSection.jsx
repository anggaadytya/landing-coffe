"use client";

import { useIsMobile } from "@/common/hooks/isMobile";
import Image from "next/image";

export default function MenuSection() {
  const isMobile = useIsMobile();

  return (
    <section className="container mx-auto py-10 md:py-16 lg:py-20 flex flex-col gap-2 md:gap-4 lg:gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mx-6 md:mx-0 py-6 md:py-12 lg:py-24">
        <div
          data-aos={isMobile ? "fade-up" : "fade-right"}
          className="relative w-fit"
        >
          <div className="hidden md:block absolute -top-6 lg:-top-12 left-10 w-60 lg:w-100 h-7 lg:h-14 bg-secondary rounded-t-md -z-10" />
          <div className="hidden md:block absolute top-4 -right-14 w-40 h-40 lg:h-50 bg-secondary rounded-r-md -z-10" />
          <Image
            src="/images/services.svg"
            alt="Promotion"
            width={600}
            height={600}
            className="shadow-2xl rounded-md"
          />
        </div>
        <div
          data-aos={isMobile ? "fade-up" : "fade-left"}
          className="flex flex-col gap-2 md:gap-2 lg:gap-4"
        >
          <p className="text-amber-900 text-xl md:text-2xl lg:text-3xl">
            Experiences
          </p>
          <h4 className="font-semibold text-2xl md:text-4xl lg:text-6xl">
            we provide you the best experience
          </h4>
          <p className="font-extralight text-sm md:text-base lg:text-lg text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium cupiditate inventore eligendi expedita provident
            consequatur, fugit iure nisi sunt possimus ea quibusdam veniam
            blanditiis natus commodi reiciendis maxime facilis! Inventore.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mx-6 md:mx-0 py-6 md:py-12 lg:py-24">
        <div className="flex justify-center items-center">
          <div
            data-aos={isMobile ? "fade-up" : "fade-right"}
            className="flex flex-col items-start gap-2 md:gap-2 lg:gap-4 p-4"
          >
            <p className="text-amber-900 text-xl md:text-2xl lg:text-3xl">
              Experiences
            </p>
            <h4 className="font-semibold text-2xl md:text-4xl lg:text-6xl">
              Very serious materials for making furniture
            </h4>
            <p className="font-extralight text-sm md:text-base lg:text-lg text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium cupiditate inventore eligendi expedita provident
              consequatur, fugit iure nisi sunt possimus ea quibusdam veniam
              blanditiis natus commodi reiciendis maxime facilis! Inventore.
            </p>
          </div>
        </div>
        <div
          data-aos={isMobile ? "fade-up" : "fade-left"}
          className=" w-full flex justify-end items-center gap-2 md:gap-4 lg:gap-6"
        >
          <div className="grid grid-cols-1 gap-2 md:gap-4 lg:gap-6">
            <Image
              src="/images/gambar2.svg"
              alt="Promotion"
              width={600}
              height={600}
              className="shadow-2xl rounded-md"
            />
            <Image
              src="/images/gambar3.svg"
              alt="Promotion"
              width={600}
              height={600}
              className="shadow-2xl rounded-md"
            />
          </div>
          <div className="relative">
            <div className="hidden md:block absolute -top-5 lg:-top-10 right-0 w-40 lg:w-70 h-9 lg:h-18 bg-secondary rounded-tl-md -z-10" />
            <Image
              src="/images/gambar1.svg"
              alt="Promotion"
              width={600}
              height={600}
              className="shadow-2xl rounded-md lg:rounded-l-md"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mx-6 md:mx-0 py-6 md:py-12 lg:py-24">
        <div
          data-aos={isMobile ? "fade-up" : "fade-right"}
          className="relative w-fit"
        >
          <div className="flex gap-2 md:gap-4 lg:gap-6">
            <Image
              src="/images/menu-1.jpg"
              alt="Promotion"
              width={320}
              height={100}
              className="shadow-2xl rounded-md mt-20 w-[50%] md:w-[45%] lg:w-[40%]"
            />
            <Image
              src="/images/menu-2.jpg"
              alt="Promotion"
              width={320}
              height={100}
              className="shadow-2xl rounded-md mb-20 w-[50%] md:w-[45%] lg:w-[40%]"
            />
          </div>
        </div>
        <div
          className="flex justify-center items-center"
          data-aos={isMobile ? "fade-up" : "fade-left"}
        >
          <div className="flex flex-col gap-2 md:gap-2 lg:gap-4">
            <p className="text-amber-900 text-xl md:text-2xl lg:text-3xl">
              Experiences
            </p>
            <h4 className="font-semibold text-2xl md:text-4xl lg:text-6xl">
              we provide you the best experience
            </h4>
            <p className="font-extralight text-sm md:text-base lg:text-lg text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium cupiditate inventore eligendi expedita provident
              consequatur, fugit iure nisi sunt possimus ea quibusdam veniam
              blanditiis natus commodi reiciendis maxime facilis! Inventore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
