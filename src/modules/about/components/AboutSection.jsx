import React from "react";
import HeroSectionAbout from "./HeroSection";
import MenuSection from "./MenuSection";

export default function AboutSection() {
  return (
    <>
      <section className="h-[80vh] md:h-[90vh]">
        <HeroSectionAbout />
      </section>
      <MenuSection />
      <section>
        <div className="container mx-auto py-10 h-[40vh] rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d326.51459538818045!2d98.09328717696008!3d4.374746598583974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30379f005a7059c5%3A0x5f4b22637309f24c!2sKingdom%20Cafe%20%26%20playgroud!5e0!3m2!1sid!2sid!4v1748347881599!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ borderRadius: "10px", border: "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </section>
    </>
  );
}
