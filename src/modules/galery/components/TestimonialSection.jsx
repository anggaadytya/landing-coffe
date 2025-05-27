import Image from "next/image";

export default function TestimonialSection() {
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
    </section>
  );
}
