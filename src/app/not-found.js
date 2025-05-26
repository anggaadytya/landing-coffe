import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center text-center gap-2  h-screen absolute top-0 left-0 w-screen bg-white z-99">
      <h1 className="text-8xl">404</h1>
      <h2 className="text-4xl">Page Not Found</h2>
      <Link href={"/"} passHref>
        <Button
          className={
            "mt-5 md:mt-10 cursor-pointer bg-amber-900 hover:bg-[#442801] border-none"
          }
        >
          Back Home
        </Button>
      </Link>
    </section>
  );
}
