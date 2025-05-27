"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import HeroSectionImage from "./HeroSection";
import TestimonialSection from "./TestimonialSection";

const images = [
  "/images/test1.svg",
  "/images/test2.svg",
  "/images/test3.svg",
  "/images/gambar1.svg",
  "/images/gambar2.svg",
  "/images/gambar3.svg",
  "/images/menu-1.jpg",
  "/images/menu-2.jpg",
  "/images/services.svg",
];

export default function GallerySection() {
  const [activeImg, setActiveImg] = useState(null);
  const [imgRect, setImgRect] = useState(null);
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });

  const imgRefs = useRef([]);

  const handleClick = (index) => {
    const rect = imgRefs.current[index].getBoundingClientRect();
    setImgRect(rect);
    setActiveImg(images[index]);
  };

  const closeModal = () => {
    setActiveImg(null);
    setImgRect(null);
    setNaturalSize({ width: 0, height: 0 });
  };

  useEffect(() => {
    if (activeImg && imgRect) {
      const interval = setInterval(() => {
        const modalWrapper = document.querySelector(".zoomed-wrapper");
        const modalImage = document.querySelector(".zoomed-wrapper img");

        if (modalWrapper && modalImage && modalImage.naturalWidth) {
          const natW = modalImage.naturalWidth;
          const natH = modalImage.naturalHeight;

          modalWrapper.style.top = "50%";
          modalWrapper.style.left = "50%";
          modalWrapper.style.transform = "translate(-50%, -50%) scale(1)";
          modalWrapper.style.width = `${natW}px`;
          modalWrapper.style.height = `${natH}px`;
          modalWrapper.style.maxWidth = "100vw";
          modalWrapper.style.maxHeight = "100vh";

          setNaturalSize({ width: natW, height: natH });
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [activeImg, imgRect]);

  return (
    <>
      <section className="h-[70vh] md:h-[90vh]">
        <HeroSectionImage />
      </section>
      <div className="container mx-auto px-4 py-10 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6 place-items-center">
          {images.map((img, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="w-full rounded-md shadow aspect-square"
            >
              <Image
                src={img}
                alt={`img-${index}`}
                width={500}
                height={500}
                className="w-full h-full rounded-md object-cover cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                onClick={() => handleClick(index)}
                ref={(el) => (imgRefs.current[index] = el)}
              />
            </div>
          ))}
        </div>
      </div>

      {activeImg && imgRect && (
        <div className="fixed inset-0 z-50 bg-black/70" onClick={closeModal}>
          <div
            style={{
              position: "fixed",
              top: imgRect.top,
              left: imgRect.left,
              width: imgRect.width,
              height: imgRect.height,
              transition: "all 0.4s ease-in-out",
              transform: "translate(0, 0) scale(1)",
              zIndex: 60,
            }}
            className="rounded-md overflow-hidden zoomed-wrapper"
          >
            <Image
              src={activeImg}
              alt="Zoomed"
              fill
              style={{
                objectFit: "contain",
                transition: "all 0.4s ease-in-out",
              }}
              className="rounded-md"
            />
          </div>
        </div>
      )}
      <TestimonialSection />
    </>
  );
}
