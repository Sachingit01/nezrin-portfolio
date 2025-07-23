"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const carouselData = new Array(6).fill({
  title: "Sachin Satheesh",
  year: 2025,
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  image:
    "https://images.ctfassets.net/rxqefefl3t5b/3dVXj4QQVBlRl4v9qSGgB5/b61438443702811d186ebb672571f0b5/shutterstock_1620414088.jpeg?fl=progressive&q=80",
});

export default function ForumCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 32 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // ✅ Safe perView check
  const getPerView = () => {
    const slides = instanceRef.current?.options?.slides;
    if (slides && typeof slides === "object" && "perView" in slides) {
      return typeof slides.perView === "number" ? slides.perView : 1;
    }
    return 1;
  };

  const maxSlide = carouselData.length - getPerView();

  return (
    <section className="bg-amber-50 py-16 px-4 md:px-20 relative">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-start flex-wrap gap-4"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#b89b55] to-[#f2d273] mb-4"
          >
            Footprints <span>Across Forums</span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
              },
            }}
            className="text-lg md:text-xl mb-8 text-[#2D2203] max-w-4xl"
          >
            From speaking at panel discussions to attending high impact
            conferences, these events represent the meaningful conversations and
            collaborations I’ve been a part of—each one contributing to my
            growth as a founder and educator.
          </motion.p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-2 z-50">
          <Button
            variant="ghost"
            size="icon"
            className="ring-1 ring-[#b89b55] rounded-full disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={() => instanceRef.current?.prev()}
            disabled={!loaded || currentSlide === 0}
          >
            <ChevronLeft className="text-[#b89b55] w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="ring-1 ring-[#b89b55] rounded-full disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={() => instanceRef.current?.next()}
            disabled={!loaded || currentSlide >= maxSlide}
          >
            <ChevronRight className="text-[#b89b55] w-6 h-6" />
          </Button>
        </div>
      </motion.div>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider mt-8">
        {carouselData.map((item, index) => (
          <div key={index} className="keen-slider__slide">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg h-full"
            >
              <div className="relative h-[400px] group">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={400}
                  className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 text-white flex flex-col justify-end transition-all duration-300 group-hover:from-black/90">
                  <h3 className="text-lg font-semibold">
                    {item.title}{" "}
                    <span className="text-sm text-[#b89b55]">{item.year}</span>
                  </h3>
                  <p className="text-sm mt-2 line-clamp-3">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
