"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const ventures = [
  {
    title: "Nez & Co.",
    subtitle: "Digital Marketing Academy",
    logo: "/nez.png",
    description:
      "A premium digital marketing academy focused on innovation and skill building.",
  },
  {
    title: "Profile Business Solutions",
    subtitle: "Business consultancy & Growth Platform",
    logo: "/pbs.png",
    description:
      "Helping companies scale with strategic business growth and consulting services.",
  },
  {
    title: "Inova Education",
    subtitle: "Social Impact Organization",
    logo: "/inova.png",
    description: "Empowering youth through education and social initiatives.",
  },
  {
    title: "Ayushman Ayurveda",
    subtitle: "Ayurvedic Healthcare",
    logo: "/ayushman.png",
    description:
      "Bringing holistic healing through traditional Ayurvedic practices.",
  },
  {
    title: "GEMSS Arabia",
    subtitle: "Educational Monitoring & Training Firm",
    logo: "/ayushman.png",
    description:
      "Providing comprehensive educational monitoring and training services.",
  },
  {
    title: "Nez & Co. Study Abroad",
    subtitle: "Study Abroad Consultants",
    logo: "/inova.png",
    description: "Providing study abroad consultancy services.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.2,
    },
  }),
  hover: { y: 0, opacity: 1 },
};

export default function EntrepreneurSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section className="px-6 md:px-16 py-20 bg-white text-[#1d1d1d]" ref={ref}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start justify-between">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#b89b55] mb-6 leading-tight">
            My Entrepreneurial <br /> Journey
          </h2>
          <p className="text-base md:text-lg text-[#1d1d1d] leading-relaxed">
            Over the years, I have had the privilege of founding and leading
            several companies across diverse sectors. Each venture represents a
            strategic effort to solve real world problems through innovation,
            collaboration, and sustainable impact. These organisations are a
            reflection of my commitment to building scalable solutions that not
            only drive business growth but also contribute meaningfully to
            society. Explore the brands that have been shaped through vision,
            dedication, and a deep-rooted belief in purposeful entrepreneurship.
          </p>
        </motion.div>

        {/* Right Grid */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {ventures.map((venture, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover="hover"
              className="relative bg-white/30 backdrop-blur-md border border-[#e8c98bb1] rounded-xl p-5 overflow-hidden group h-60 flex flex-col justify-start"
            >
              {/* Icon Top Left */}
              <div className="w-15 h-15 mb-4 rounded-full border-2 border-[#d1b57b] flex items-center justify-center overflow-hidden">
                <Image
                  src={venture.logo}
                  alt={venture.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-base font-semibold text-[#1d1d1d]">
                  {venture.title}
                </h3>
                <p className="text-gray-700 text-sm text-[14px]">
                  {venture.subtitle}
                </p>
              </div>

              {/* Arrow Bottom Left */}
              <div className="absolute bottom-4 left-4 text-[#b89b55] text-[25px] z-10">
                <ArrowRightCircle
                  className="text-[#b89b55] stroke-[1.3]"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>

              {/* Hover Description Popup */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                variants={{
                  hover: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 w-full bg-white/90 text-sm text-[#1d1d1d] px-4 py-4 rounded-b-xl z-20"
              >
                {venture.description}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
