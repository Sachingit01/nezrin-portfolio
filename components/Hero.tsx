"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Laurel from "@/components/Laurel";

const images = ["/image.png", "/image.png", "/image.png"]; // Add your image paths here

const labels = [
  {
    text: "Empowering minds",
    top: "top-[20%]",
    left: "left-[15%]",
  },
  {
    text: "Building futures",
    top: "top-[80%]",
    left: "left-[8%]",
  },
  {
    text: "Creating impact",
    top: "top-[45%]",
    left: "left-[75%]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per image
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden py-25"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: current === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
        ))}
        {/* Optional: dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl font-normal leading-snug text-white"
          >
            <motion.span variants={textVariants} className="block">
              I&apos;m <span className="text-white">Dr. Nezrin Midhlaj</span> —
              a
            </motion.span>
            <motion.span variants={textVariants} className="block">
              <span className="font-normal bg-gradient-to-r from-yellow-100 to-yellow-400 bg-clip-text text-transparent">
                serial entrepreneur
              </span>{" "}
              <span className="text-white">and</span>{" "}
              <span className="font-normal bg-gradient-to-r from-yellow-100 to-yellow-100 bg-clip-text text-transparent">
                educator
              </span>
              , driven to build,
            </motion.span>
            <motion.span variants={textVariants} className="block">
              lead, and inspire.
            </motion.span>
          </motion.h1>

          <div className="flex items-center gap-3 mt-4">
            <Laurel />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center md:justify-end"
        >
          <div className="w-screen h-100">
            {labels.map((label, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -8, 0] }}
                transition={{ delay: 0.7 + index * 0.2, duration: 2 }}
                className={`absolute ${label.top} ${label.left} text-white backdrop-blur-md bg-white/50 border border-white text-sm md:text-base px-4 md:px-6 py-2 rounded-full shadow-lg text-nowrap`}
              >
                {label.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
