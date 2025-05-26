"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../constant/footerValue";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-2 footer_background">
      <nav className="flex max-md:flex-col flex-wrap justify-between gap-5 px-5 md:px-12 py-20">
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
          <Image
            src="/images/bannerAngga.png"
            alt="logo"
            width={48}
            height={48}
            className="object-contain bg-white p-1 rounded-full"
          />
          <h2 className="text-base md:text-lg text-white">
            PT. BUMI KENAWAT ALAM LESTARI
          </h2>
          <div className="">
            <p className="text-sm md:text-lg font-normal text-white">
              Office :
            </p>
            <p className="text-sm md:text-lg font-normal text-white">
              Jl. Jend. Sudirman No. 32, Jakarta Barat, DKI Jakarta, Indonesia
            </p>
          </div>
        </div>
        <div className="footer__links">
          {footerLinks?.map((link) => (
            <div key={link?.title} className="footer__link">
              <h2 className="text-base md:text-lg font-medium text-white">
                {link?.title}
              </h2>
              {link?.links.map((item) => (
                <Link
                  passHref
                  href={item?.url}
                  className="text-sm md:text-lg font-normal text-white flex items-center gap-2"
                  key={item?.title}
                  itemProp="button"
                >
                  {item?.icon}
                  <span>{item?.title}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </nav>
      <div className="flex justify-end items-center border-t border-gray-100 sm:mx-12 mx-5 py-5">
        <h5 className="text-xs md:text-sm font-normal text-white capitalize">
          &copy; {date} PT. Bumi Kenawat Alam Lestari
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
