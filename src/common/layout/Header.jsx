"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { headerValue } from "../constant/headerValue";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClose = () => {
    setSheetOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh80 = window.innerHeight * 0.8;
      setIsScrolled(scrollY > vh80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 w-full h-[3.5rem] md:h-[5rem] px-5 md:px-12 flex items-center justify-between transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#442801] shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Link href="/" title="Rawat.ID">
        <Image
          src={"/images/bannerAngga.png"}
          alt="logo"
          width={50}
          height={50}
          priority={true}
          quality={90}
          decoding="sync"
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-20">
        <div className="flex gap-20 ">
          {headerValue?.map((item, index) => (
            <Link href={item.url} key={index} itemProp="button">
              <h2 className="text-sm md:text-lg text-white hover:text-greenHover transition-all duration-300 ease-in-out">
                {item.title}
              </h2>
            </Link>
          ))}
        </div>
      </nav>
      <div className="flex lg:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button aria-label="Menu">
              <Menu className="w-8 h-8 text-white" role="button" tabIndex="0" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="border-none bg-[#442801]">
            <Link
              title="Rawat.ID"
              href="/"
              onClick={handleClose}
              className={"flex items-center gap-3 px-4 mt-7"}
            >
              <SheetTitle className="text-green text-2xl"></SheetTitle>
            </Link>
            <nav className="px-4 mt-10">
              <ul className="flex flex-col gap-10">
                {headerValue?.map((item, index) => (
                  <Link
                    itemProp="button"
                    href={item.url}
                    key={index}
                    onClick={handleClose}
                  >
                    <h2 className="text-sm md:text-lg text-white hover:text-amber-600 transition-all duration-300 ease-in-out">
                      {item.title}
                    </h2>
                  </Link>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
